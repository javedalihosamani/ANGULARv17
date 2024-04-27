import { Routes } from '@angular/router';
import { StaticFormComponent } from './components/static-form/static-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'static', component:StaticFormComponent},
    {path:'dynamic', component:DynamicFormComponent},
    {path:'', pathMatch:'full', redirectTo:'/static'},
    {path:'**',component:PnfComponent}
];
