import { Routes } from '@angular/router';
import { BuiltInPipeComponent } from './components/built-in-pipe/built-in-pipe.component';
import { ParameterizedPipeComponent } from './components/parameterized-pipe/parameterized-pipe.component';
import { ChainingPipeComponent } from './components/chaining-pipe/chaining-pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path:'built-in', component:BuiltInPipeComponent},
    {path:'parameterized', component:ParameterizedPipeComponent},
    {path:'chain', component:ChainingPipeComponent},
    {path:'custom', component:CustomPipeComponent},
    {path:'', pathMatch:'full', redirectTo:'built-in'},
    {path:'**', component:PnfComponent},
];
