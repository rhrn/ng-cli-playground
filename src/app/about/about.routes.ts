import { RouterModule } from '@angular/router'
import { AboutComponent } from './about.component'
import { AboutDetailComponent } from './about.detail.component'

const routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: ':slug', component: AboutDetailComponent }
    ]
  },
]

export default RouterModule.forChild(routes)
