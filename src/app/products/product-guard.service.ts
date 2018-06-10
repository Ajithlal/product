import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private route: Router) { }

  canActivate(router: ActivatedRouteSnapshot) {
    const id = +router.url[1].path;
    if (isNaN(id)) {
      console.log('Wrong url');
      this.route.navigate(['/products']);
      return false;
    }
    return true;
  }
}
