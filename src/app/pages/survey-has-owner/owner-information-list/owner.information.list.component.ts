import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { ConfigService } from './../../../core/config.service';

import { DialogAlertComponent } from './../../../components/dialog-alert/dialog.alert.component';

import { CallApiService } from './../../../providers/request.providers';
import { Utility } from './../../../api/utility';
import { User } from './../../../api/user';
import { Survey } from './../../../api/survey';

@Component({
  selector: 'app-owner-information-list',
  templateUrl: './owner.information.list.component.html',
  styleUrls: ['./owner.information.list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class OwnerInformationListComponent implements OnInit {
  // search
  searchForm: FormGroup;
  breadcrumbParam: any = {};
  modalRef: BsModalRef;
  userProfile: any;
  roundCode: any;
  actionParams: any;
  authenticationToken: any;
  tab: any = 'owner-information-group';

  // calendar
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  // datatable
  loading: Boolean;
  totalRecords: number;
  dataTableObj: any = [];
  recordNo: any = 1;
  pages: any;
  pageRows: any;

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {
    this.route.params.subscribe( params => {
      if (params['roundcode']) {
        this.roundCode = params['roundcode'];
      }
    });
  }

  ngOnInit() {
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;

    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.CheckRoundCode();
    this.LoadData((this.pages - 1));
  }


  LoadConfigForm() {
    this.searchForm = new FormGroup({
      notifierName: new FormControl(''),
      notifierMobileNumber: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      animalCategory: new FormControl(''),
      provinceNotifier: new FormControl(''),
      districtNotifier: new FormControl(''),
      subDistrictNotifier: new FormControl(''),
    });
  }

  LoadSessionPage() {
    const cookieExists: boolean = this.cookieService.check('AuthenticationToken');
    if (cookieExists) {
        const AuthToken = this.cookieService.get('AuthenticationToken');
        this.storage.set('AuthenticationToken', AuthToken);
    }
    this.authenticationToken = this.storage.get('AuthenticationToken');
    if (this.authenticationToken === undefined) {
      this.authenticationToken = null;
    }
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }
  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  paginate(event) {
    this.pages = (event.first / event.rows);
    this.LoadData((event.first / event.rows));
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }


  /* VALIDATED PARAMS */
  CheckRoundCode() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.authenticationToken != null && this.roundCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.Round.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', this.roundCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res == null) {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          modalRef.content.action.subscribe(result => {
            this.router.navigate(['/survey/animal-has-owner']);
          });
        } else {

          if (res.roundStatus !== 'TIMEOUT') {
            this.roundCode = res.code;
          } else {
            initialState.status = 'error';
            initialState.title = 'ข้อความจากระบบ';
            initialState.description = 'รายการขึ้นทะเบียนสัตว์นี้ สิ้นสุดระยะเวลาการลงทะเบียนแล้ว';
            const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            modalRef.content.action.subscribe(result => {
              this.router.navigate(['/survey/animal-has-owner']);
            });
          }
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/survey/animal-has-owner']);
        });
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      modalRef.content.action.subscribe(result => {
        this.router.navigate(['/survey/animal-has-owner']);
      });
    }
  }

  /* PAGE ACTION */
  LoadData(pages: any) {
    const self = this;
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.Owner.Inquiry.ListByRound;
      let newEndpoint = endpoint.url.replace('{page_number}', pages);
      newEndpoint = newEndpoint.replace('{round_code}', this.roundCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.pageRows = res.pageRows;
        this.totalRecords = res.totalRecords;
        this.dataTableObj = res.contentObj;
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
  }

  ManageOwnerInformation(roundCode: any) {
    this.router.navigate(['survey/animal-has-owner/owner-information', {roundcode : roundCode}]);
  }

  ActionEditContent(contentObj: any) {
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['survey/animal-has-owner/owner-information', {roundcode: contentObj.roundCode, ownercode: contentObj.surveyCode}]);
  }
}
