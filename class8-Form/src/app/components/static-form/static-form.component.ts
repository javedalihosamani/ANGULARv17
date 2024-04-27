import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../class/user';

@Component({
  selector: 'app-static-form',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe, NgIf],
  templateUrl: './static-form.component.html',
  styleUrl: './static-form.component.css'
})
export class StaticFormComponent {
  topics:any = ["Angular", "React", "Node", "PhantomJS", "Python", "Ruby", "JavaScript"];

  userFormData(formData:any){
    console.log(`Form Data = ${JSON.stringify(formData)}`);
  }

  modelForm = new User("Angularv17","angular@gmail.com","9876543210","Angular","morning","subscribed");
}
