import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
    {path:"home", component: IndexComponent},
    {path:"about", component: AboutusComponent},
    {path:"contact", component: ContactusComponent},
    {path:"product", component: ProductsComponent},
    {path:"service", component: ServiceComponent},
    {path:'', redirectTo: 'home', pathMatch:'full'}
];
