// import { Routes } from '@angular/router';
// import { ComplaintsComponent } from './complaints/complaints.component';

// export const appRoutes: Routes = [
//   { path: 'complaints', component: ComplaintsComponent },  // Route to ComplaintsComponent
//   { path: '', redirectTo: 'app', pathMatch: 'full' },  // Redirect default path to complaints
//   { path: '**', redirectTo: 'complaints', pathMatch: 'full' }  // Wildcard route to redirect to complaints
// ];

import { Routes } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AppComponent } from './app.component';  // Import AppComponent if necessary
//import { NavBarComponent } from './nav-bar/nav-bar.component';

export const appRoutes: Routes = [
  //{ path: '', component: NavBarComponent },  // Default path should load the AppComponent (Navbar)
 { path: 'complaints', component: ComplaintsComponent, pathMatch: 'full' },  // Route to ComplaintsComponent
 { path: '**', redirectTo: '' }  // Wildcard route to redirect to default
];
