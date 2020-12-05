import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(public alertController: AlertController,
    public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      //subHeader: 'Atenção',
      message: 'Tem certeza que deseja sair?',
      buttons: [{
        text: 'Sair',
        //handler: (logout())
      },
      {
        text: 'cancelar',
       
      }
    ]
    });

    await alert.present();
  }
  
    

}
