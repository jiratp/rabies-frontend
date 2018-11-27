import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavigationStart, Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Injectable()
export class ConfigService {
    settings: any;
    defaultSettings: any;
    onSettingsChanged: BehaviorSubject<any>;

    /**
     * @param router
     * @param platform
     */
    constructor(
        private router: Router,
        public platform: Platform
    ) {
        // Set the default settings
        this.defaultSettings = {
            layout          : {
                navigation      : 'none', // 'right', 'left', 'top', 'none'
                navigationFolded: false, // true, false
                toolbar         : 'below', // 'above', 'below', 'none'
                footer          : 'none', // 'above', 'below', 'none'
                mode            : 'fullwidth' // 'boxed', 'fullwidth'
            },
            customScrollbars: true,
            routerAnimation : 'fadeIn', // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
            dialogAlertSetting : {
                animated: true,
                backdrop: true,
                ignoreBackdropClick: true,
                class: 'modal-dialog-centered',
            },
            dialogFormSetting : {
                animated: true,
                backdrop: true,
                ignoreBackdropClick: false,
                class: 'modal-lg modal-dialog-centered',
            },
            lacaleTH : {
                firstDayOfWeek: 0,
                dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
                dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                dayNamesMin: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                // tslint:disable-next-line:max-line-length
                monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                monthNamesShort: [ 'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.' ],
                today: 'วันนี้',
                clear: 'ยกเลิก'
            },
            dateTimeFormat: 'dd/mm/yy'
        };

        /**
         * Disable Custom Scrollbars if Browser is Mobile
         */
        if ( this.platform.ANDROID || this.platform.IOS ) {
            this.defaultSettings.customScrollbars = false;
        }

        // Set the settings from the default settings
        this.settings = Object.assign({}, this.defaultSettings);

        // Reload the default settings on every navigation start
        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart ) {
                    this.setSettings({layout: this.defaultSettings.layout});
                }
            }
        );




        // Create the behavior subject
        this.onSettingsChanged = new BehaviorSubject(this.settings);
    }

    /**
     * Sets settings
     * @param settings
     */
    setSettings(settings) {
        // Set the settings from the given object
        this.settings = Object.assign({}, this.settings, settings);

        // Trigger the event
        this.onSettingsChanged.next(this.settings);
    }
}
