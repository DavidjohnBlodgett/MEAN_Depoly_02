import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PollsService {

    constructor( private _http: Http ) { }

    create(poll) {
        return this._http.post('/polls', poll)
        .subscribe(
              (response) => {
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    update(id, poll) {
        return this._http.put(`/polls/${id}`, poll)
        .subscribe(
              (response) => {
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    getAll(callback) {
        this._http.get('/polls')
        .subscribe(
              (response) => {
                    callback(response.json());
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    delete(id, callback) {
        return this._http.delete(`/polls/${id}`)
        .subscribe(
              (response) => {
                    callback();
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
}
