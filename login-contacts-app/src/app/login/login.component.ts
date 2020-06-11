import { Component } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthGuardService } from "../auth-guard.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  acceptedUsername = { username: "user", password: "password1" };
  formGroup: FormGroup;
  isValidLoginData: boolean = true;
  wrongCredentialsError: string;

  constructor(
    private formBuilder: FormBuilder,
    private authGuard: AuthGuardService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  getError(el) {
    switch (el) {
      case "user":
        if (this.formGroup.get("username").hasError("required")) {
          return "Username required";
        }
        break;
      case "pass":
        if (this.formGroup.get("password").hasError("required")) {
          return "Password required";
        }
        break;
      default:
        return "";
    }
  }

  onSubmit(formData) {
    let validUsername = false;
    let validPassword = false;

    if (formData.username === this.acceptedUsername.username) {
      validUsername = true;
    } else {
      this.isValidLoginData = false;
      this.wrongCredentialsError = "Invalid username";
    }

    if (formData.password === this.acceptedUsername.password) {
      validPassword = true;
    } else {
      this.isValidLoginData = false;
      this.wrongCredentialsError = "Invalid password";
    }

    if (validUsername && validPassword) {
      this.authGuard.validLogin = true;
      this.router.navigate(["contacts"]);
    } else {
      this.authGuard.validLogin = false;
    }
  }
}
