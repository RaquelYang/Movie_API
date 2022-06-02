import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';

import { AdminManagerComponent } from 'src/app/module/admin-manager/admin-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BackendComponent,
    AdminManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class BackendModule {}
