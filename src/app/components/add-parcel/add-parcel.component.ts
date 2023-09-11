import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

interface IParcel {
  _id: string;
  sender: string;
  address: string;
  weight: number;
  // cost: number;
  fragile: boolean;
};


@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  parcel: IParcel = {
    _id: "",
    sender: "",
    address: "",
    weight: 0,
    // cost: 0.0,
    fragile: false
  };



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
      this.router.navigate(['/listparcels']);
    })
  }

}
