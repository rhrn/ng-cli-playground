import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AboutComponent } from './about.component'
import { AboutDetailComponent } from './about.detail.component'
import routes from './about.routes'

@NgModule({
  imports: [ CommonModule, routes ],
  declarations: [ AboutComponent, AboutDetailComponent ]
})
export class AboutModule{}
