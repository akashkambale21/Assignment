import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectdata;

  constructor(private route:ActivatedRoute,private router: Router ,private UsersService:UsersService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.UsersService.getAllId(id).subscribe((res: any) => {
      this.selectdata = res;
    });
  }
  goBackToParent() {
    this.router.navigate(['/CharacterList']);
  }


}
