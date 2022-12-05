import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  /**
   * Método para mostrar un alert
   * @param message mensaje a mostrar en el alert
   */
  alertSimple(message: string) {
    Swal.fire(message)
  }

  /**
   * 
   * @param title 
   * @param message 
   * @param type 
   */
  NotificationType(title: string, message: string, type: number) {
    let infoType!: SweetAlertIcon;
    switch (type) {
      case 1:
        infoType = 'success'
        break;
      case 2:
        infoType = 'error'
        break;
      case 3:
        infoType = 'question'
        break;
      case 4:
        infoType = 'info'
        break
      default:
        infoType = 'warning';
        break;
    }
    Swal.fire(title, message, infoType);
  }
}
