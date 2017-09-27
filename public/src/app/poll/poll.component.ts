import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { PollsService } from '../_services/polls.service';
import { Toolbox } from '../_services/-toolbox';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

    toolbox = new Toolbox();
    pollID: string;
    polls:any;
    poll:any;

    constructor(route: ActivatedRoute, private _redirect: Router, private _pollsService: PollsService) {
        this.pollID = route.snapshot.params['id'];
        this._pollsService.getAll((data)=>{
            this.polls = data;
            this.poll = this.toolbox.search(this.polls, '_id', this.pollID);
        });
    }

    ngOnInit() {

    }

    // onSubmit() {
    //     console.log('I got a vote command');
    // }

    // TODO: make these changes perm...

    onVote1() {
        this.poll.option1.votes++;
    }
    onVote2() {
        this.poll.option2.votes++;
    }
    onVote3() {
        this.poll.option3.votes++;
    }
    onVote4() {
        this.poll.option4.votes++;
    }

}
