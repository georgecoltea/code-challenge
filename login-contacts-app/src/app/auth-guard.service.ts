import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  validLogin = false;

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.validLogin) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
