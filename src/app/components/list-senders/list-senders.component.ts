import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

interface ISender {
  name: string;
  _id: string;
  parcels: string[];
}


@Component({
  selector: 'app-list-senders',
  templateUrl: './list-senders.component.html',
  styleUrls: ['./list-senders.component.css']
})
export class ListSendersComponent implements OnInit {

  senders: ISender[] = [];

  sender: ISender = {
    name: '',
    _id: '',
    parcels: [],

  };

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getSenders();
  }

  getSenders() {

    this.dbService.getSenders().subscribe((senders: any) => {
      this.senders = senders
    })
  }


}
