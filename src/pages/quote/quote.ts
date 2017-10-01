import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
  quote: Quote;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ngOnInit() {
    console.log("ngOnInit");
    console.log(this.navParams.data);
    this.quote = this.navParams.data;
    console.log("ngOnInit end");
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad QuotePage');
  }

  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }

}
