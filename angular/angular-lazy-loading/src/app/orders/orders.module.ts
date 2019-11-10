import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";

@NgModule({
  imports: [CommonModule, NgbCollapseModule, OrdersRoutingModule],
  declarations: [OrderListComponent]
})
export class OrdersModule {}
