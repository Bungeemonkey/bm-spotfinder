import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

  export const privacyLangGuard: CanActivateFn = (route) => {
    const translate = inject(TranslateService);
    const langParam = route.queryParamMap.get('lang');
    const availableLangs = translate.getLangs();

    // 3. If the param exists and is valid, switch language BEFORE the route activates
    if (langParam && availableLangs.includes(langParam)) {
      return translate.use(langParam).pipe(
        map(() => true)
      );
    }

    return of(true);
  };

