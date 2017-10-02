import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes'
import { QuotePage } from '../../pages/quote/quote'

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  favoritas: Quote[];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private quotesSvr: QuotesService,
    private modalCtrl: ModalController ) {
  }

  ngOnInit(){
    this.favoritas = this.quotesSvr.getFavorites();
  }

  ionViewWillEnter() {
    this.favoritas = this.quotesSvr.getFavorites();
    console.log('ionViewWillEnter FavoritesPage');
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.quotesSvr.removeFromFavorites(quote);
        this.favoritas = this.quotesSvr.getFavorites();
      }
    });
  }

  onRemoveFromFavorites(quote:Quote){
    this.quotesSvr.removeFromFavorites(quote);
    this.favoritas = this.quotesSvr.getFavorites();
  }
}
