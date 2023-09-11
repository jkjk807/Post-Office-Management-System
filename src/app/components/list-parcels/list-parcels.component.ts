import { Component, OnInit } from '@angular/core';
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
  selector: 'app-list-parcels',
  templateUrl: './list-parcels.component.html',
  styleUrls: ['./list-parcels.component.css']
})
export class ListParcelsComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }

  parcels: IParcel[] = [];

  ngOnInit(): void {
    this.getParcels();
  }





  getParcels() {
    this.dbService.getParcels().subscribe((parcels: any) => {
      console.log('parcels:' + parcels);
      this.parcels = parcels
    })


  }



}
