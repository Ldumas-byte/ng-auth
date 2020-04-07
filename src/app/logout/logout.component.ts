import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.test().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

  ngOnInit(): void {
  }

}
