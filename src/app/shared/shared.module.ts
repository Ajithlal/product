import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { ConvertToSpace } from './convert-to-space.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StarComponent, ConvertToSpace],
  exports: [CommonModule, ConvertToSpace, StarComponent]
})
export class SharedModule { }
