import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LicenseManager} from 'ag-grid-enterprise';
if (environment.production) {
  enableProdMode();
}



const AG_GRID_LICENSE_KEY = 'Innovexa_IDC_1Devs1_SaaS_5_October_2019__MTU3MDIzMDAwMDAwMA==430914675a557ece7a47f8106b5b14a7';
LicenseManager.setLicenseKey(AG_GRID_LICENSE_KEY);

platformBrowserDynamic().bootstrapModule(AppModule);
