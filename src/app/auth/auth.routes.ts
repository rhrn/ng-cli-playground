import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes = [
  { path: '', component: AuthComponent }
];

export default RouterModule.forChild(routes);
