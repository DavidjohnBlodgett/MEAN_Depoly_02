import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userInput = {
        name: ''
    };

    constructor( private _redirect: Router, private _usersService: UsersService ) { }

    ngOnInit() {
    }

    onSubmit() {
        this._usersService.setUserName(this.userInput.name);
        this._redirect.navigate(['/dashboard']);
    }

}
