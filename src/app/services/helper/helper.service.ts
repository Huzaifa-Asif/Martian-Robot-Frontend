import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastrService: ToastrService) { }

  successToast(title, message) {
    this.toastrService.success(title, message);
  }
  infoToast(title, message) {
    this.toastrService.info(title, message);
  }
  warningToast(title, message) {
    this.toastrService.warning(title, message);
  }
  failureToast(title, message) {
    this.toastrService.error(title, message);
  }

  successBigToast(title, messsage) {
    Swal({
      type: 'success',
      title: title,
      text: messsage
    });
  }
  failureBigToast(title, messsage) {
    Swal({
      type: 'error',
      title: title,
      text: messsage,
      showConfirmButton: true,
    });
  }
  infoBigToast(title, messsage) {
    Swal({
      type: 'info',
      title: title,
      text: messsage,
      showConfirmButton: true,
    });
  }

}
