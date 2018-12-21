import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import * as OL from 'ol';
import Map from 'ol/Map.js';
import * as proj from 'ol/proj.js';
import View from 'ol/View.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import {Fill, Stroke, Style, Text} from 'ol/style.js';
import * as OLControl from 'ol/control';
import Overlay from 'ol/Overlay';

import PluggableMap from 'ol/PluggableMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild('mapsRef') mapsRef: ElementRef;

  window: any = {};
  mapFeatureObj: any;
  mapSelectOverlaySource: any = new VectorSource();
  mapLegendStyles: any = [];

  __CURR_PROV_ID: any = {};
  __DATA_PRV: any = [];
  __DATA_RPT: any = [];
  Legends: any = [];
  Colors: any = {};
  Ranges: any = {};

  dogChecked: Boolean = true;
  tab: string;
  constructor(
    private router: Router,
  ) {
    this.tab = 'news';
  }

  ngOnInit() {
    this.configMapFunc ();
  }

  configMapParam () {
    this.__CURR_PROV_ID = {
      val: null
    };

    this.Legends = [
      [ 'rgb(99,205,169)', '0 - 5,000'],
      [ 'rgb(145,199,233)', '5,001 - 10,000' ],
      [ 'rgb(237,201,53)', '10,001 - 20,000' ],
      [ 'rgb(244,138,88)', '20,001 - 50,000' ],
      [ 'rgb(239,82,65)', 'มากกว่า 50,000' ]
    ];

    this.Colors = [
      'rgb(194, 241, 225)',
      'rgb(189, 218, 236)',
      'rgb(248, 231, 162)',
      'rgb(252, 179, 136)',
      'rgb(238, 96, 82)'
    ];

    this.Ranges = [
      [null, 5000],
      [5000, 10000],
      [10000, 20000],
      [20000, 50000],
      [50000, null]
    ];
  }

  configMapFunc () {
    this.configMapParam();
    this.mapLegendStylesFunc();
    const self = this;

    const mapVectorSource = new VectorSource({
      url :  './../../../assets/maps/thailand.json',
      format: new GeoJSON(),
    });

    mapVectorSource.once('change', (e) => {
      if (mapVectorSource.getState() === 'ready') {
        // TOGO
        mapVectorSource.forEachFeature(function (feature) {
          self.mapUpdateStyle(feature, null);
        });
      }
    });

    const mapVectorLayer = new VectorLayer({
      opacity: 1,
      source: mapVectorSource,
    });

    this.window.app = {};
    const app = this.window.app;
    app.RotateNorthControl = function(opt_options) {
      const options = opt_options || {};

      const button = document.createElement('button');
      button.innerHTML = '<i class="fa fa-home" aria-hidden="true"></i>';
      button.title = 'กลับไปตำแหน่งเริ่มต้น';
      const this_ = this;
      const handleRotateNorth = function (e) {
        this_.getMap().getView().setCenter(proj.transform([101.9, 13.5], 'EPSG:4326', 'EPSG:3857'));
        this_.getMap().getView().setZoom(5.3);
        this_.getMap().getView().setMinZoom(5.3);
      };

      button.addEventListener('click', handleRotateNorth, false);
      button.addEventListener('touchstart', handleRotateNorth, false);

      const element = document.createElement('div');
      element.className = 'return-home ol-unselectable ol-control';
      element.appendChild(button);

      OLControl.Control.call(this, {
        element: element,
        target: options.target
      });
    };

    OL.inherits(app.RotateNorthControl, OLControl.Control);

    const OLControlDefualt = OLControl.defaults({
      attributionOptions: ({
        collapsible: false
      })
    }).extend([
      new app.RotateNorthControl()
    ]);


    const mapObject = new Map({
      controls: OLControlDefualt,
      layers: [mapVectorLayer],
      target: 'mapsRef',
      view: new View({
        center: new proj.transform([101.9, 13.5], 'EPSG:4326', 'EPSG:3857'),
        zoom: 5.3,
        minZoom: 5.3
      })
    });


    const mapSelectOverlay = new VectorLayer({
      source: this.mapSelectOverlaySource,
      map: mapObject,
    });

    const mapFeatureOverlay = new VectorLayer({
      source: new VectorSource(),
      map: mapObject,
    });

    const mapOverlay = new Overlay({
      element: document.getElementById('mapsInfo'),
      positioning: 'bottom-left'
    });

    mapOverlay.setMap(mapObject);


    let mapHighlight: any = null;

    mapObject.on('pointermove', function (evt) {
      if (evt.dragging) {
        return;
      }

      let mapFeatureObj: any;
      mapFeatureObj = mapObject.forEachFeatureAtPixel(evt.pixel, (feature) => {
        return feature;
      });
      let f: any = null;
      let rpt: any = null;

      if (mapFeatureObj) {
          f = mapFeatureObj.clone();
          rpt = mapFeatureObj.get('rpt');
      }

      if (f !== mapHighlight) {
        if (mapHighlight) {
            mapFeatureOverlay.getSource().removeFeature(mapHighlight);
        }
        if (f) {
            if (f.getStyle()) {
                const style = f.getStyle().clone();
                style.getStroke().setColor('rgba(255, 255, 255, 0.9)');
                style.getStroke().setWidth('2');
                f.setStyle(style);
            }
            mapFeatureOverlay.getSource().addFeature(f);

            if (rpt) {
                mapOverlay.setPosition(evt.coordinate);
                alert(22);
                // mapOverlay.getElement().innerHTML = getHtml(rpt);
            }

        }
        mapHighlight = f;
      }
      mapOverlay.getElement().style.display = (f && rpt) ? '' : 'none';
      document.body.style.cursor = mapFeatureObj ? 'pointer' : '';

    });


    mapOverlay.on('singleclick', function (evt) {
      alert(2);
      const feature = mapOverlay.forEachFeatureAtPixel(evt.pixel, function (feat) {
          return feat;
      });
      if (feature) {
          const rpt = feature.get('rpt');
          if (rpt) {
              // $('#label-province').html(rpt.ProvinceName);
              // $('#btn-province .title').html(rpt.ProvinceName);
              // $('#btn-province').show();
              this.mapSelectOverlaySource.clear();
              // updateStyle(feature, rpt.ProvinceId);
              this.__CURR_PROV_ID.val = rpt.ProvinceId;
              alert(rpt.ProvinceId);
          }
      }
    });
  }

  mapLegendStylesFunc () {
    for (let i = 0; i < this.Colors.length; i++) {
      this.mapLegendStyles.push(new Style({
          stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.3)',
              width: 1
          }),
          fill: new Fill({
              color: this.Colors[i],
          }),
          text: new Text({
              font: '11px Calibri,sans-serif',
              fill: new Fill({
                  color: '#000'
              }),
              stroke: new Stroke({
                  color: 'rgba(255, 255, 255, 0.8)',
                  width: 3
              })
          })
      }));
    }
  }

  mapUpdateStyle (feature, provinceId) {
    const code = feature.get('code');
    const rpt = this.mapWeGetPrvRpt(code);
    feature.set('rpt', rpt);
    if (rpt) {
        const total = this.mapWeGetTotal(rpt);
        const range = this.mapWeGetLegendRangIndex(total);
        const style = this.mapLegendStyles[range];
        const newStyle = style.clone();
        newStyle.getText().setText(rpt.ProvinceName);
        feature.setStyle(newStyle);

        if (rpt.ProvinceId === provinceId) {
          const f = feature.clone();
          let newStyle1 = newStyle;
            if (style) {
                newStyle1 = newStyle.clone();
                newStyle1.getStroke().setColor('rgba(255, 255, 255, 0.9)');
                newStyle1.getStroke().setWidth('2');
            }
            f.setStyle(newStyle1);
            this.mapSelectOverlaySource.addFeature(f);
        }
    }
  }

  mapWeGetTotal(rpt) {
      return this.mapWeGetTotalValue(this.mapWeGetCurrentTotalFlag(), rpt);
  }

// var TotalFlag = 0b1111;
  mapWeGetCurrentTotalFlag() {
      return this.mapWeGetTotalFlag (true, true, true, true);
  }

  mapWeGetTotalFlag(dogSet, catSet, ownerSet, noownerSet) {
      let petFlag: any = 0b1111;
      if (dogSet || catSet) {
          if (!dogSet) { petFlag = petFlag && 0b0011; }
          if (!catSet) { petFlag = petFlag && 0b1100; }
      }
      let ownerFlag = 0b1111;
      if (ownerSet || noownerSet) {
          if (!ownerSet) { ownerFlag = ownerFlag && 0b0101; }
          if (!noownerSet) {  ownerFlag = ownerFlag && 0b1010; }
      }
      return (petFlag && ownerFlag);
  }
  mapWeGetTotalValue(totalFlag, rpt) {
      if (rpt) {
          let total = 0;
          total += rpt.OwnerDog ? rpt.OwnerDog * this.mapWeGetBit(totalFlag, 3) : 0;
          total += rpt.NoOwnerDog ? rpt.NoOwnerDog * this.mapWeGetBit(totalFlag, 2) : 0;
          total += rpt.OwnerCat ? rpt.OwnerCat * this.mapWeGetBit(totalFlag, 1) : 0;
          total += rpt.NoOwnerCat ? rpt.NoOwnerCat * this.mapWeGetBit(totalFlag, 0) : 0;
          return total;
      }
      return 0;
  }

  mapWeGetBit(number, bitPosition) {
      // tslint:disable-next-line:no-bitwise
      return (number &&  (1 << bitPosition)) === 0 ? 0 : 1;
  }

  mapWeGetPrvRpt(code) {
    const prvId = this.mapWeGetPrvId(code);
    if (!prvId) {
        return null;
    }
    for (let i = 0; i < this.__DATA_RPT.length; i++) {
        if (this.__DATA_RPT[i].ProvinceId === prvId) {
            return this.__DATA_RPT[i];
        }
    }
    return null;
  }


  mapWeGetLegendRangIndex(val) {
    for (let i = 0; i < this.Ranges.length; i++) {
        const leftResult = (!this.Ranges[i][0] || val > this.Ranges[i][0]);
        const rightResult = (!this.Ranges[i][1] || val <= this.Ranges[i][1]);
        if (leftResult && rightResult) {
          return i;
        }
    }
    return 0;
  }

  mapWeGetPrvId(code) {
    for (let i = 0; i < this.__DATA_PRV.length; i++) {
        if (this.__DATA_PRV[i].GeoName === code) {
            return this.__DATA_PRV[i].ProvinceId;
        }
    }
    return null;
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  newsDetail() {
    this.router.navigate(['news-detail']);
  }

}
