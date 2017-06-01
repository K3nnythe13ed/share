import { Component, ElementRef, OnInit, Renderer, ViewChild, NgZone } from '@angular/core';
require('slick-carousel');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private el: ElementRef, private zone: NgZone) {
  }

 
 $carousel: JQuery | any;

  initialized = false;

  initCarousel() {
    this.zone.runOutsideAngular(() => {
      this.$carousel = (<any>$('#myCarousel')).slick({});
    });
    this.initialized = true;
  }

  slides = [];

  addSlide(slide) {
    !this.initialized && this.initCarousel();
    this.slides.push(slide);
    this.$carousel.slick('slickAdd', slide.el.nativeElement);
  }

  removeSlide(slide) {
    const idx = this.slides.indexOf(slide);
    this.$carousel.slick('slickRemove', idx);
    this.slides = this.slides.filter(s => s != slide);
  }
}


  
