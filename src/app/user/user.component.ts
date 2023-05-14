import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
// import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  deta: any[] = [];
  selecteddata: any;

  constructor(private user: UsersService) {}

  ngOnInit() {
    this.user.getAll().subscribe((res: any) => {
      this.deta = res.results;
    });
  }

  selectCharacter(id: number) {
    this.user.getAllId(id).subscribe((res: any) => {
      this.selecteddata = res;
    });
  }


}


