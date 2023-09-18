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
    '1': [47.28815057616188, 8.004611526553255],
    '2': [47.28553218420735, 8.000319155612726],
    '3': [47.285510350519125, 8.000297697717162],
    '4': [47.284994414307256, 8.004152339351942],
    '5': [47.285450928679815, 8.000668811430875],
    '6': [47.28489361862923, 8.004329549712462],
    '7': [47.28679660090081, 8.004976789915606],
    '8': [47.286884790763196, 8.00498599771714],
    '9': [47.339274820984734, 8.060409159116896],
    '10': [47.28804633147107, 8.008780174218739],
    '11': [47.28310155841432, 8.005084927128237],
    '12': [47.283069656898945, 8.004387228405491],
    '13': [47.2845087311523, 8.005133984225218],
    '14': [47.284990239744765, 8.005307914067588],
    '15': [47.28484280153026, 8.005601578903423],
    '16': [47.28673485827865, 8.004653684449144],
    '17': [47.288396243095264, 8.007577611430946],
    '18': [47.28909189592648, 8.006416497717257],
    '19': [47.28328933868621, 8.00566160057256],
    '20': [47.28799807662344, 8.008114111208993],
    '21': [47.28530423286885, 8.009507472051194],
    '22': [47.282807177723434, 8.004732517705087],
    '23': [47.28793310281976, 8.00496168554365],
    '24': [47.28896182230193, 8.00970445856028],
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

    { lat: this.markers['8'][0], lng: this.markers['8'][1] },
    { lat: this.markers['9'][0], lng: this.markers['9'][1] },
    {
      lat: this.markers['10'][0],
      lng: this.markers['10'][1],
    },
    {
      lat: this.markers['11'][0],
      lng: this.markers['11'][1],
    },
    { lat: this.markers['12'][0], lng: this.markers['12'][1] },
    { lat: this.markers['13'][0], lng: this.markers['13'][1] },
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
    { lat: this.markers['19'][0], lng: this.markers['19'][1] },
    { lat: this.markers['20'][0], lng: this.markers['20'][1] },
    { lat: this.markers['21'][0], lng: this.markers['21'][1] },
    { lat: this.markers['22'][0], lng: this.markers['22'][1] },
    { lat: this.markers['23'][0], lng: this.markers['23'][1] },
    { lat: this.markers['24'][0], lng: this.markers['24'][1] },
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
