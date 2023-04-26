import {ChangeDetectionStrategy, Component} from "@angular/core";
import { carouselOptionsMain } from "../carouselOptions.constant";

@Component({
  selector: 'wedding',
  templateUrl: 'wedding.component.html',
  styleUrls: ['wedding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeddingComponent {
  carouselOptionsMain = carouselOptionsMain

}
