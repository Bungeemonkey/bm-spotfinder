import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadGoogleMapsApi } from './app/config/GoogleMapsLoader';

if (environment.production) {
  enableProdMode();
}

// Wait for the Maps API so components can use `google.maps` right away, but
// still bootstrap if it fails — only the map features break, not the whole app.
loadGoogleMapsApi()
  .catch((err) => console.error(err))
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch((err) => console.error(err));
