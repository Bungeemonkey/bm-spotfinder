import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private translate: TranslateService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    }

  ngOnInit(): void {
    const lang = this.route.snapshot.queryParams['lang'];
    const available = this.translate.getLangs();

    if (lang && available.includes(lang)) {
      // 2. Set the language before the template is even touched
      this.translate.use(lang);
    }
  }
}
