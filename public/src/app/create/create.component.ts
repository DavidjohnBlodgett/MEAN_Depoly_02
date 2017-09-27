import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { PollsService } from '../_services/polls.service';
import { Poll } from '../_models/poll';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    currentUser:any;
    pollForm: Poll = new Poll();

    constructor( private _redirect: Router, private _usersService: UsersService, private _pollsService: PollsService) {
        this.currentUser = this._usersService.getUserName();

    }

    ngOnInit() {
    }

    onSubmit() {
        this.pollForm['name'] = this.currentUser;
        this._pollsService.create(this.pollForm);
        this._redirect.navigate(['/dashboard']);
    }

}
