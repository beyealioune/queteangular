import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
 
const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userProfile', component: UserProfileComponent }
];

export { ROUTES };