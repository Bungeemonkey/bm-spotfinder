import { environment } from '../../environments/environment';

/**
 * Loads the Google Maps JavaScript API with the key from the active environment
 * (`environment.mapsApiKey`) instead of a hard-coded key in `index.html`.
 * Called before the app bootstraps, because components build `google.maps`
 * objects (markers, icons, services) as soon as they are constructed.
 */
export function loadGoogleMapsApi(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (typeof google !== 'undefined' && google.maps) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsApiKey}&libraries=places,geometry`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error('Google Maps JavaScript API failed to load'));
    document.head.appendChild(script);
  });
}
