import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toasController: ToastController) { }

  async presentToast(message: any){
    const toast  = await this.toasController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });

    toast.present();
  }
}
