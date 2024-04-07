import { Routes } from '@angular/router';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'if', component: NgIfComponent },
    {path:'for', component: NgForComponent },
    {path:'switch', component: NgSwitchComponent },
    {path:'custom', component: CustomDirectiveComponent },
    {path:'', pathMatch:'full', redirectTo:'/if' },
    {path:'**', component:PnfComponent}
];
