import { Component } from "@angular/core";

export interface user {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent {
  userModel: user[] = [
    {
      id: 1,
      firstName: "Dan",
      lastName: "Andrei",
      phoneNumber: "07453784663",
      email: "dan.andrei@gmail.com",
    },
    {
      id: 2,
      firstName: "Dan",
      lastName: "Andrei",
      phoneNumber: "07453784663",
      email: "dan.andrei@gmail.com",
    },
    {
      id: 3,
      firstName: "Dan",
      lastName: "Andrei",
      phoneNumber: "07453784663",
      email: "dan.andrei@gmail.com",
    },
    {
      id: 4,
      firstName: "Dan",
      lastName: "Andrei",
      phoneNumber: "07453784663",
      email: "dan.andrei@gmail.com",
    },
  ];

  isAddFormVisible: boolean = false;
  firstName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  email: string = "";
  id: any = "";

  deleteEntry(userId) {
    let userToDelete;

    this.userModel.filter((user) => {
      if (user.id === userId) {
        userToDelete = user;
      }
    });

    const position = this.userModel.indexOf(userToDelete);

    this.userModel.splice(position, 1);
  }

  editEntry(user) {
    this.changeAddContactDisplay(true);

    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
  }

  addNewEntry(event) {
    if (event.id) {
      this.userModel.forEach((user) => {
        if (user.id === event.id) {
          user.firstName = event.formData.firstName;
          user.lastName = event.formData.lastName;
          user.phoneNumber = event.formData.phoneNumber;
          user.email = event.formData.email;
        }
      });
    } else {
      const newUser = {
        ...event.formData,
        id: this.userModel.length + 1,
      };
      this.userModel.push(newUser);
    }

    this.resetData();
    this.changeAddContactDisplay(false);
  }

  changeAddContactDisplay(isVisible) {
    this.isAddFormVisible = isVisible;
  }

  resetData() {
    this.firstName = "";
    this.lastName = "";
    this.phoneNumber = "";
    this.email = "";
    this.id = "";
  }
}
