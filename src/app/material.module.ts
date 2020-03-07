import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [FormsModule, MatButtonModule, MatInputModule,],
    exports: [FormsModule, MatButtonModule, MatInputModule,]
})

export class MaterialModule {}