import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { DragulaModule } from "ng2-dragula";

@NgModule({
  imports: [CommonModule, DragulaModule.forRoot(), CustomersRoutingModule],
  declarations: [CustomerListComponent]
})
export class CustomersModule {}
