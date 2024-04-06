import { Routes } from '@angular/router';
import { BindComponent } from './components/bind/bind.component';
import { InterpolationBindComponent } from './components/interpolation-bind/interpolation-bind.component';
import { PropertyBindComponent } from './components/property-bind/property-bind.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'bind', component: BindComponent},
    {path:'interpolation', component: InterpolationBindComponent},
    {path:'property', component: PropertyBindComponent},
    {path:'', redirectTo:'bind', pathMatch:'full'},
    {path:'**', component:PnfComponent},
];
