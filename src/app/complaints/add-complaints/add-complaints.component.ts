
// @Component({
//   selector: 'app-add-complaints',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-complaints.component.html',
//   styleUrl: './add-complaints.component.css'
// })
// export class AddComplaintsComponent {

// }
// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-add-complaint-modal',
//   templateUrl: './add-complaint.component.html',
//   styleUrls: ['./add-complaint.component.css']
// })
// export class AddComplaintComponent {
//   @Output() onSubmit = new EventEmitter<any>();
//   complaint = {
//     title: '',
//     description: ''
//     // additional fields if necessary
//   };

//   submitComplaint() {
//     if (this.complaint.title && this.complaint.description) {
//       this.onSubmit.emit(this.complaint);
//     }
//   }

//   closeModal() {
//     // logic to close modal
//   }
// }


import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-complaints',
  templateUrl: './add-complaints.component.html',
  styleUrls: ['./add-complaints.component.css']
})
export class AddComplaintsComponent {
  constructor(){
    console.log("sdrfguiker");
  }
  @Output() onSubmit = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();  // Ensure this is defined

  complaint = {
    title: '',
    description: ''
    // additional fields if necessary
  };

  submitComplaint() {
    if (this.complaint.title && this.complaint.description) {
      this.onSubmit.emit(this.complaint);
      this.closeModal(); // Optionally close the modal after submit
    }
  }

  closeModal() {
    this.close.emit();  // Emit close event
  }
}
