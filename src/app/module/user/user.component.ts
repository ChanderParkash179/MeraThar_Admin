import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ngOnInit(): void { }
  constructor(private _router: Router) { }

  toUserList() {
    this._router.navigate(['/get-user']);
  }

}
