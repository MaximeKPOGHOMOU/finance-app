import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  // encapsulation: ViewEncapsulation.None
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialisation Revolution Slider
    setTimeout(() => {
      const slider = jQuery('#banner-slide');
      if (slider.length) {
        slider.show().revolution({
          sliderType: "standard",
          sliderLayout: "auto",
          delay: 9000,
          navigation: {
            arrows: { enable: true }
          },
          responsiveLevels: [1240, 1024, 778, 480],
          gridwidth: [1170, 1024, 778, 480],
          gridheight: [600, 500, 400, 300]
        });
      }

    
    }, 500); // temps pour que le DOM soit prêt
  }
}
