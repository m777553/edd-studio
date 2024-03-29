import { OwlOptions } from 'ngx-owl-carousel-o';

export const carouselOptionsMain: OwlOptions = {
  items: 1,
  stagePadding: 0,
  autoHeight: false,
  dots: false,
  nav: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 8000,
  navSpeed: 300,
  navText: [
    '<',
    '>'
  ],
  loop: true,
  responsive: {
    0: {
      items: 1
    }
  }
};
