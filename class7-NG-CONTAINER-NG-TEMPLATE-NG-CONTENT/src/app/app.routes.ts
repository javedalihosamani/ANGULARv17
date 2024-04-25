import { Routes } from '@angular/router';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'container', component: NgContainerComponent},
    {path:'template', component: NgTemplateComponent},
    {path:'content', component: NgContentComponent},
    {path:'', pathMatch:'full', redirectTo:'container'},
    {path:'**', component:PnfComponent},
];
