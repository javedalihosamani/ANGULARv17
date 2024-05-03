import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../class/user';
import { EnrollmentService } from '../../service/enrollment.service';

@Component({
  selector: 'app-static-form',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe, NgIf],
  templateUrl: './static-form.component.html',
  styleUrl: './static-form.component.css'
})
export class StaticFormComponent {
  topics:any = ["Angular", "React", "Node", "PhantomJS", "Python", "Ruby", "JavaScript"];

  constructor(private enrollmentService: EnrollmentService){}

  modelForm = new User("Angularv17","angular@gmail.com","9876543210","Angular","morning","subscribed");

  userFormData(formData:any){
    console.log(`Form Data = ${JSON.stringify(formData)}`);
    this.enrollmentService.enroll(formData).subscribe(
      res=> console.log("SUCCESSFUL = ", res),
      error => console.log("ERROR = ", error)
    );
  }
}
