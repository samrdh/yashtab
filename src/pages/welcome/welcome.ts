import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

//import{BusinessloginPage} from '../businesslogin/businesslogin'

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {


  slides = [
    {
      title: "Welcome to YASH",
      description: "A place for businesses to Grow & Clients to Multiply with no hastle.",
      image: "assets/imgs/yashgroupgoa.png",
      color:"#8dae37",
    },
    {
      title: "Step 1",
      description: "Login as a business associate to get started. <br><small>(You need to be registered through our website to login. If your not yet a member please follow the web link below to get yourself registered)</small>.",
      link:"www.yashgoa.com",
      image: "assets/img/ica-slidebox-img-2.png",
      color:"#dbae0a",
    },
    {
      title: "Step 2",
      description: "Once logged in as a business associate, keep the customer login form opened to the customers so, that they can get their bills verified",
      image: "assets/img/ica-slidebox-img-3.png",
      color:"#3fa6a0",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ss(){
      this.navCtrl.setRoot('BusinessloginPage');
    }

}
