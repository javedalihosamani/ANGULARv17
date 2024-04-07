import { Routes } from '@angular/router';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'ref', component : TemplateReferenceComponent},
    {path:'twb', component : TwoWayBindingComponent},
    {path:'', pathMatch:'full', redirectTo:'/ref'},
    {path:'**', component:PnfComponent},
];
