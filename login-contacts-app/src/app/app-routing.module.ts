import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "contacts", component: ContactsComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
