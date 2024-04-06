import { Routes } from '@angular/router';
import { ClassComponent } from './components/class/class.component';
import { StyleComponent } from './components/style/style.component';
import { EventComponent } from './components/event/event.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'class', component: ClassComponent},
    {path:'style', component: StyleComponent},
    {path:'event', component: EventComponent},
    {path:'', pathMatch:'full', redirectTo:'event'},
    {path:'**', component:PnfComponent},
];
