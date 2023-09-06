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

  markers = {
    '1': [],
    '2': [47.28553218420735, 8.000319155612726],
    '3': [],
    '4': [47.284994414307256, 8.004152339351942],
    '5': [47.285450928679815, 8.000668811430875],
    '6': [47.28489361862923, 8.004329549712462],
    '7': [47.28679660090081, 8.004976789915606],
    '8': [],
    '9': [],
    '10': [47.28804633147107, 8.008780174218739],
    '11': [47.28310155841432, 8.005084927128237],
    '12': [],
    '13': [],
    '14': [47.284990239744765, 8.005307914067588],
    '15': [47.28484280153026, 8.005601578903423],
    '16': [47.28673485827865, 8.004653684449144],
    '17': [47.288396243095264, 8.007577611430946],
    '18': [47.28332335384983, 8.005131830172541],
    '19': [],
    '20': [],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
  };

  predefinedMarkerPositions: google.maps.LatLngLiteral[] = [
    { lat: 0, lng: 0 },
    {
      lat: this.markers['2'][0],
      lng: this.markers['2'][1],
    },
    { lat: 0, lng: 0 },
    {
      lat: this.markers['4'][0],
      lng: this.markers['4'][1],
    },
    {
      lat: this.markers['5'][0],
      lng: this.markers['5'][1],
    },

    {
      lat: this.markers['6'][0],
      lng: this.markers['6'][1],
    },
    {
      lat: this.markers['7'][0],
      lng: this.markers['7'][1],
    },

    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    {
      lat: this.markers['10'][0],
      lng: this.markers['10'][1],
    },
    {
      lat: this.markers['11'][0],
      lng: this.markers['11'][1],
    },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    {
      lat: this.markers['14'][0],
      lng: this.markers['14'][1],
    },
    {
      lat: this.markers['15'][0],
      lng: this.markers['15'][1],
    },
    {
      lat: this.markers['16'][0],
      lng: this.markers['16'][1],
    },
    {
      lat: this.markers['17'][0],
      lng: this.markers['17'][1],
    },
    { lat: this.markers['18'][0], lng: this.markers['18'][1] },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
    { lat: 0, lng: 0 },
  ];
  markerPositions: google.maps.LatLngLiteral[] = [
    ...this.predefinedMarkerPositions,
  ];

  openGoogleMaps(markerPosition: google.maps.LatLngLiteral) {
    const lat = markerPosition.lat;
    const lng = markerPosition.lng;

    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

    const openInNewTab = window.confirm('Open Google Maps in a new tab?');

    if (openInNewTab) {
      window.open(googleMapsUrl, '_blank');
    }
  }
}
