import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerBillDashboardPage } from './customer-bill-dashboard';

@NgModule({
  declarations: [
    CustomerBillDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerBillDashboardPage),
  ],
})
export class CustomerBillDashboardPageModule {}
