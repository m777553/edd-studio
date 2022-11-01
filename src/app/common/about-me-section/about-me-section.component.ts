import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {NgwWowService} from "ngx-wow";

@Component({
  selector: 'about-me-section',
  templateUrl: 'about-me-section.component.html',
  styleUrls: ['about-me-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutMeSectionComponent implements OnInit{
  constructor(public wowService: NgwWowService) {
  }

  ngOnInit() {
    this.wowService.init()
  }
}
