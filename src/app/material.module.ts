import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatMenuModule, MatIconModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule, MatCardModule, MatDividerModule, MatExpansionModule
, MatTreeModule} from '@angular/material';
import 'hammerjs';



@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatIconModule,
    MatInputModule, MatSelectModule, MatFormFieldModule, MatToolbarModule,
    MatListModule, MatCardModule, MatDividerModule, MatExpansionModule, MatTreeModule],
  exports: [MatButtonModule, MatMenuModule, MatIconModule,
  MatInputModule, MatSelectModule, MatFormFieldModule,
    MatToolbarModule, MatListModule, MatCardModule, MatDividerModule, MatExpansionModule, MatTreeModule],
})
export class MaterialModule { }






