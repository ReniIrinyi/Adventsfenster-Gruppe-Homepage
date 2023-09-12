import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/service/ScreenSizeService';
import { faGift, faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private screenSizeService: ScreenSizeService,
    private router: Router
  ) {}

  sponsorenUrls = [
    '../../../assets/imgs/sponsoren/ruegger-optik.jpg',
    '../../../assets/imgs/sponsoren/antica-posta.png',
    '../../../assets/imgs/sponsoren/Metzgerei-Klauser.jpg',
    '../../../assets/imgs/sponsoren/Volg.png',
  ];
  sponsorenLinks = [
    'https://www.rueegger-optik.ch/',
    'https://allantica-posta.ch/',
    'https://www.metzgerei-klauser.ch/',
    'https://www.volg.ch/standorte-oeffnungszeiten/detail/volg-bottenwil/?tx_kochvolgstores_storedetail%5Blocation%5D=Bottenwil%2C%20Schweiz&tx_kochvolgstores_storedetail%5Blongitude%5D=8.0065334999999&tx_kochvolgstores_storedetail%5Blatitude%5D=47.2857941&tx_kochvolgstores_storedetail%5Bopen%5D=',
  ];
  currentSponsorIndex = 0;
  isSmallScreen = false;
  faGift = faGift;
  faHandSparkles = faHandSparkles;

  ngOnInit(): void {
    this.screenSizeService.isSmallScreen$.subscribe((isSmall) => {
      this.isSmallScreen = isSmall;
    });
    this.animateImages();
  }

  animateImages() {
    setInterval(() => {
      this.currentSponsorIndex =
        (this.currentSponsorIndex + 1) % this.sponsorenLinks.length;
    }, 5000);
  }

  shareOnFacebook() {
    const urlToShare = encodeURIComponent('www.adventsfenster-bottenwil.com');
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
    window.open(facebookShareUrl, '_blank');
  }

  shareOnTwitter() {
    const urlToShare = encodeURIComponent('www.adventsfenster-bottenwil.com');
    const textToShare =
      'Dies ist die Website der Adventsfenster-Gruppe Bottenwil:';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${urlToShare}&text=${encodeURIComponent(
      textToShare
    )}`;
    window.open(twitterShareUrl, '_blank');
  }
  shareOnWhatsApp() {
    const message =
      'Dies ist die Website der Adventsfenster-Gruppe Bottenwil: ' +
      'www.adventsfenster-bottenwil.com';
    const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappShareUrl;
  }
  //  scrolls to the page element
  //  @param page => the id of the page element to scroll to.
  scrollTo(page: string) {
    const element = document.getElementById(page);
    if (page) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  handleLinkClick(page: string) {
    this.scrollTo(page);
    this.router.navigate(['/home'], { fragment: page }); // Navigate to the route with fragment
  }
}
