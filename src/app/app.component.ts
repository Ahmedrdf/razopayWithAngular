import { Component, NgZone } from '@angular/core';
import { ICustomWindow, WindowRefService } from './window-ref.service';
import { fn } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _window :ICustomWindow;
  public rzp : any ; 

  public options : any = {
    key : 'rzp_test_5Wy4OXG8mzLbap',
    name : 'ahmed',
    description : 'Shopping',
    amount : 100 , 
    profill: {
      name : 'ahmed',
      email:'ahmedrdf.mansour@gmail.com',

    },
    notes:{},
    theme:{
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss:(()=>{
        this.zone.run(()=>{

        })

      })
    }
  };

  constructor(
    private zone : NgZone,
    private winRef : WindowRefService
  ){
    this._window=this.winRef.nativeWidow;
  }
  initPay(): void {
    this.rzp=new this.winRef.nativeWidow['Razorpay'](this.options);
    this.rzp.open();
  }
  paymentHandler(res: any ){
    this.zone.run( ()=> {
// add API
    });
  }
  title = 'razopayWithAngular';
}
