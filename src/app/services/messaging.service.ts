import { Injectable } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private toastr: ToastrService) {}

  success(message: string, title: string) {
    this.toastr.success(message, title);
  }

  saveSuccess() {
    this.toastr.success('Record Save Successfully', 'Save');
  }

  error(error: any) {
    this.toastr.error(error, 'Error');
  }

  showValidationFail(form: NgForm) {
    let errorMessage = '';
    Object.keys(form.controls).forEach((key) => {
      const control: ValidationErrors = form.controls[key];
      if (control != null) {
        const controlErrors = control['errors'];
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            errorMessage += key + ' <b>' + keyError + '</b><br/>';
          });
        }
      }
    });
    if (errorMessage !== '') {
      this.toastr.warning(errorMessage, 'Validation Failed!', {
        enableHtml: true,
        timeOut: 0,
      });
    }
  }
}
