import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
interface ISender {
  name: string;
  _id: string;
  parcels: string[];
}



@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }


  ngOnInit(): void {
  }

  sender: ISender = {
    name: '',
    _id: '',
    parcels: [],

  };

  saveSender() {
    let senderObj = {
      name: this.sender.name
    }
    this.dbService.createSender(senderObj).subscribe(response => {
      this.router.navigate(['/listsenders']);
    });

  }

}
