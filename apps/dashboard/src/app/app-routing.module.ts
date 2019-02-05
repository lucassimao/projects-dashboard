import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';


const routes: Routes = [
    { path: '', redirectTo:'projects' , pathMatch:'full'},
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
    { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
    { path: 'login', component: LoginComponent },
    {path:'**',redirectTo:''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
