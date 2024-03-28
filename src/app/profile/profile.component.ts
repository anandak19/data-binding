import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, AppComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent  {

  pageTitle = 'My Profile'
  isPlus?: boolean
  selectedAddress: any; 
  profileReview = "Very Good"

  user = [
    {
      userName: 'Anandakrishnan H',
      profilePicUrl: '../../assets/images/pro_pic.JPG',
      emailId: 'anandak19h@gmail.com',
      phone: '9544928736',
      // make this to false to avail plus features 
      notPlusMember: true,

      firstAddress: {
        street: 'Muthukulam',
        city: 'Harippad',
        state: 'Kerala',
        postalCode: '690506',
        active: false
      },

      secondAddress: {
        street: 'Kareelakulangara',
        city: 'Kayamkulam',
        state: 'Kerala',
        postalCode: '690509',
        active: false
      }
    }
  ]; 
  
  constructor() {
    this.isPlus =  this.user[0].notPlusMember
  }
 

  handleAddressSelection(address: any) {
    this.selectedAddress = address;
    console.log('Selected Address:', this.selectedAddress);
  }
  
  updateAddressActive(address: any) {
    this.user.forEach(user => {
      if (address === user.firstAddress) {
        user.firstAddress.active = true;
        user.secondAddress.active = false;
      } else if (address === user.secondAddress) {
        user.firstAddress.active = false;
        user.secondAddress.active = true;
      } else {
        user.firstAddress.active = false;
        user.secondAddress.active = false;
      }
    });
  }

  setPreferences(){
    console.log("Your are a plus member");
    alert('hello plus member')
  }

  keyup(value: string){
    this.profileReview = value
  }
  
}
