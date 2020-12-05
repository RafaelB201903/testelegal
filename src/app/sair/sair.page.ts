import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  constructor(private navCtrl : NavController,
    private auth : AngularFireAuth,
    private menuCtrl : MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.presentAlert()
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login']);
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      //subHeader: 'Atenção',
      message: 'Tem certeza que deseja sair?',
      buttons: [{
        text: 'Sair',
        handler: (this.auth.signOut) 
      },
      {
        text: 'cancelar',
      
      }
    ]
    });

    await alert.present();
  }

}
