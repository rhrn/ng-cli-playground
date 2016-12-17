import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { AuthComponent } from './auth/auth.component'
import { RouterModule } from '@angular/router'

const routes =  [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' }
]

export default RouterModule.forRoot(routes)
