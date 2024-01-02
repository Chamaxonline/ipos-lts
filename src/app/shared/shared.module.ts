import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CryptoService } from './services/crypto.service';

@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right'
    // }),
  ],
  exports: [
    //ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
  ],
  providers: [CryptoService],
})
export class SharedModule {}
