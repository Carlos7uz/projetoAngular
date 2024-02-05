import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // add uma toolbar para ser usada na interface html
import { MatButtonModule } from '@angular/material/button'; // add um button para ser usado na interface html
import { MatIconModule } from '@angular/material/icon'; // add um icon para ser usado na interface html
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatTooltipModule,
  MatListModule,
  MatInputModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatAutocompleteModule,
]

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
