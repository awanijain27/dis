// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-complaints',
//   templateUrl: './complaints.component.html',
//   styleUrls: ['./complaints.component.css']
// })
// export class ComplaintsComponent {
 
//   isModalOpen = false;  // Flag to track whether the modal is open or not

//   openAddComplaintModal() {
//     console.log('Opening Add Complaint Modal');
//     this.isModalOpen = true;  // Open the modal
//   }

//   closeAddComplaintModal() {
//     this.isModalOpen = false; // Close the modal
//   }
// }


// complaints.component.ts
import { Component, ViewChild } from '@angular/core';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component'; // Update path as necessary

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  @ViewChild(AddComplaintsComponent) addComplaintsComponent!: AddComplaintsComponent;

  openAddComplaintModal() {
    const modal: HTMLElement = document.getElementById('addComplaintModal')!;
    modal.style.display = 'block';
  }

  onComplaintAdded(name: string) {
    // Handle the newly added complaint name
    console.log('New Complaint:', name);
    // You can add logic here to display the complaint in the complaints list
  }
}
