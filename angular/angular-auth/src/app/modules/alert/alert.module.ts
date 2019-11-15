import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AlertComponent } from './alert.component'
import { AlertService } from './alert.service'

@NgModule({
  imports: [NgbModule, CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [AlertService]
    }
  }
}
