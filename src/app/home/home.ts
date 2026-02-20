import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  encapsulation: ViewEncapsulation.None
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {

    setTimeout(() => {
      $('.slides').each((index: number, element: HTMLElement) => {
        const $this = $(element);
        const items = $this.data('item') || 3;

        $this.owlCarousel({
          items: items,
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
          ],
          responsive: {
            0: { items: 1 },
            480: { items: Math.min(1, items) },
            768: { items: Math.min(2, items) },
            992: { items: Math.min(3, items) },
            1200: { items: items }
          }
        });

        // Placer les deux flèches côte à côte à droite
        const $nav = $this.find('.owl-nav');
        $nav.css({
          position: 'absolute',
          right: '3.5%',
          top: '0',
          transform: 'translateY(-50%)',
          display: 'flex',
          gap: '5px' // espace entre les flèches
        });

      });

    }, 600);
  }
}