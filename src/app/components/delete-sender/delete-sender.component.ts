import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit {

  senderId='';

  constructor(private dbService: DatabaseService, private router: Router) { }


  ngOnInit(): void {
  }

  deleteSender(){
   
    this.dbService.deleterSender(this.senderId).subscribe((result:any) => {
    this.router.navigate(['/listsenders']);
    })

  }

}
