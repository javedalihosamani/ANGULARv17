import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  empName : any = ['A', 'AB', 'ABC', 'ABCD', 'ABCDE', 100, 200]

  animals:any = ["Tiger", "Cat", "Elephant","Loin"]

  addAnimal(animal:string){
    console.log(animal);
    this.animals.push(animal);
  }

  employee : any = [
    {
      name:"HTML",
      email:'html@gmail.com'
    },
    {
      name:"CSS",
      email:'css@gmail.com'
    },
    {
      name:"JS",
      email:'js@gmail.com'
    },
  ];

  addEmployee(name:string, email:string){
    console.log(name);
    console.log(email);
    this.employee.push({
      name: name,
      email: email
    });
  }

  removeEmployee(i:number){
    alert(i)
    this.employee.splice(i, 1);
  }
}
