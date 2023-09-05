import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  apiLoaded: Observable<boolean>;
  image = 'frontend/src/assets/icons8-star-48.png';
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCyiyQzvlmWxLZkMC-SrNriQ3BcUXFII_M',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
  center: google.maps.LatLngLiteral = {
    lat: 47.28310155841432,
    lng: 8.005084927128237,
  };
  zoom = 14;
  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: this.zoom,
  };
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  predefinedMarkerPositions: google.maps.LatLngLiteral[] = [
    { lat: 47.28310155841432, lng: 8.005084927128237 },
    { lat: 47.288229, lng: 8.007613 },
  ];
  markerPositions: google.maps.LatLngLiteral[] = [
    ...this.predefinedMarkerPositions,
  ];

  openGoogleMaps(markerPosition: google.maps.LatLngLiteral) {
    const lat = markerPosition.lat;
    const lng = markerPosition.lng;

    // Construct the Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

    // Show a confirmation dialog
    const openInNewTab = window.confirm('Open Google Maps in a new tab?');

    if (openInNewTab) {
      // Open the URL in a new tab
      window.open(googleMapsUrl, '_blank');
    }
  }
}
