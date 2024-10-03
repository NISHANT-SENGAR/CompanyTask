import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';




const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin/admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin/admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    HomeModule,AdminLoginModule,AdminDashboardModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: true,
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
