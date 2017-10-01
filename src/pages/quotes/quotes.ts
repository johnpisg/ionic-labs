import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Category } from '../../data/category.interface'
import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes'

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  category : Category;
  constructor(private navCtrl: NavController,
   private navParams: NavParams,
   private alertCtrl: AlertController,
   private quotesSvr: QuotesService) {
  }

  ngOnInit() {
    this.category = this.navParams.data;
  }

  ionViewDidLoad() {
    //this.category = this.navParams.data;
    console.log('ionViewDidLoad QuotesPage');
  }

  onAddFavorite(selectecQuote: Quote){
    const alerta = this.alertCtrl.create({
      title: "Agregar a Favorito",
      subTitle: "¿Seguro?",
      message: "¿Estás seguro de agregar a favoritos?",
      buttons:[{
        text:"Si",
        handler: () => {
          this.quotesSvr.addToFavorites(selectecQuote);
          console.log("SI seleccionado");
        }
      },
      {
        text:"No",
        role:"cancel",
        handler: () => {
          console.log("NO seleccionado");
        }
      }]
    });

    alerta.present();
  }
}
