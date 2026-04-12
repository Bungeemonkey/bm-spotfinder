import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PrivacyComponent } from './privacy.component';
import { PrivacyRoutingModule } from './privacy-routing.module';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [CommonModule, SharedModule, PrivacyRoutingModule],
  exports: [PrivacyComponent],

})
export class PrivacyModule {}
