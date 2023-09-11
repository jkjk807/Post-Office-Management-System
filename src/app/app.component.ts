import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { DatabaseService } from './services/database.service';

interface ISender {
  name: string;
  _id: string;
  parcels: string[];
}

interface IParcel {
  _id: string;
  sender: string;
  address: string;
  weight: number;
  // cost: number;
  fragile: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }
  ngOnInit(): void {
    this.getSenders();
    this.getParcels();
  }

  sectionId: number = 1;

  sender: ISender = {
    name: '',
    _id: '',
    parcels: [],

  };

  senders: ISender[] = [];
  parcels: IParcel[] = [];



  parcel: IParcel = {
    _id: "",
    sender: "",
    address: "",
    weight: 0,
    // cost: 0.0,
    fragile: false
  };

  changeSection(id: number) {
    this.sectionId = id;

  }

  saveSender() {
    let senderObj = {
      name: this.sender.name
    }
    this.dbService.createSender(senderObj).subscribe(response => {
      console.log(response);
      this.getSenders();
      this.changeSection(5);
    });

  }

  getParcels() {
    this.dbService.getParcels().subscribe((parcels: any) => {
      console.log('parcels:' + parcels);
      this.parcels = parcels
    })


  }

  getSenders() {

    this.dbService.getSenders().subscribe((senders: any) => {
      console.log(senders);
      this.senders = senders
    })
  }

  addParcel() {
    let parcel = {
      "senderId": this.parcel.sender,
      "parcel": {
        "weight": this.parcel.weight,
        "address": this.parcel.address,
        // "cost": this.parcel.cost,
        "fragile": this.parcel.fragile
      }
    }
    this.dbService.createParcel(parcel).subscribe((result: any) => {
      console.log(result);
      this.getSenders();
      this.getParcels();
      this.changeSection(4);

    })
  }


}
