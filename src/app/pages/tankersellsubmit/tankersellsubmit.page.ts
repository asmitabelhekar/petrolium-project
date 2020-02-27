import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tankersellsubmit',
  templateUrl: './tankersellsubmit.page.html',
  styleUrls: ['./tankersellsubmit.page.scss'],
})
export class TankersellsubmitPage implements OnInit {

  tankerSellModel : any = {};
  constructor(public menu : MenuController) { 
    this.menu.enable(true);
  }

  ngOnInit() {
  }

  OnInput(event: any) {

   if(this.tankerSellModel['openingbalance'] == "" || this.tankerSellModel['openingbalance'] == null || this.tankerSellModel['openingbalance'] == undefined)
   {

   }else{
    this.tankerSellModel['noselrate'] = this.tankerSellModel['openingbalance'] - this.tankerSellModel['closingbalance'];
   }

  }

  totalAmount(){
    this.tankerSellModel['totalamount'] = this.tankerSellModel['noselrate'] - this.tankerSellModel['testing'];
  }

  finalAmount(){
    this.tankerSellModel['finalamount'] = this.tankerSellModel['totalamount'] * this.tankerSellModel['rate'];
  }

  totalSellAmount(){
    this.tankerSellModel['totalsell'] = this.tankerSellModel['finalamount'] - this.tankerSellModel['credit'];
  }
}
