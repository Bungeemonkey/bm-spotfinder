import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {privacyLangGuard} from "../guards/language-param-guard.guard";

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'recommend',
    loadChildren: () =>
      import('./community-spot/community-spot.module').then(
        (m) => m.CommunitySpotModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'privacy',
    canActivate: [privacyLangGuard],
    loadChildren: () =>
      import('./privacy/privacy.module').then((m) => m.PrivacyModule),
  },
  { path: '', redirectTo: 'map', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
