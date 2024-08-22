import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipe/truncate.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    TruncatePipe,
  ]
})
export class SharedModule { }
