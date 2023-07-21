import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppConfig } from './app/core/models/config.model';
import { enableProdMode } from '@angular/core';

fetch('./assets/appconfig.json', { method: 'get' }).then((response) => {
  response
    .json()
    .then((settings: AppConfig) => {
      if (settings.production) {
        enableProdMode();
      }

      platformBrowserDynamic([
        {
          provide: AppConfig,
          useValue: settings,
        },
      ]).bootstrapModule(AppModule);
    })
    .catch((err) => console.log(err));
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
