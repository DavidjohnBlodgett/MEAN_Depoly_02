import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollsService } from '../_services/polls.service';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    currentUser:any;
    polls:any;

    constructor(private _redirect: Router, private _usersService: UsersService, private _pollsService: PollsService ) { }

    ngOnInit() {
        this.currentUser = this._usersService.getUserName();
        this._pollsService.getAll((data)=>{
            this.polls = data;
        });
    }
    onDelete(id) {
        this._pollsService.delete(id, ()=>{
            this._pollsService.getAll((data)=>{
                this.polls = data;
            });
        });

    }

}
