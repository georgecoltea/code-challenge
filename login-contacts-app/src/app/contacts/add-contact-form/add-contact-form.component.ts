import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-contact-form",
  templateUrl: "./add-contact-form.component.html",
  styleUrls: ["./add-contact-form.component.scss"],
})
export class AddContactFormComponent implements OnInit {
  formGroup: FormGroup;

  @Input()
  id: number;

  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  phoneNumber: string;

  @Input()
  email: string;

  @Output()
  newFormData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  getError(el) {
    switch (el) {
      case "firstName":
        if (this.formGroup.get("firstName").hasError("required")) {
          return "First name required";
        }
        break;
      case "lastName":
        if (this.formGroup.get("lastName").hasError("required")) {
          return "Last name required";
        }
        break;
      case "phoneNumber":
        if (this.formGroup.get("phoneNumber").hasError("required")) {
          return "Phone number required";
        }
        break;
      case "email":
        if (this.formGroup.get("email").hasError("required")) {
          return "Email required";
        }
        break;
      default:
        return "";
    }
  }

  onSubmit(formData) {
    this.newFormData.emit({ formData, id: this.id });
  }
}
