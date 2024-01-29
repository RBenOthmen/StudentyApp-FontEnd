import { Injectable } from '@angular/core';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public getEvents(): Event[] {
    let event = new Event();
    event.id = 1;
    event.name = "event name";
    event.firstName = "first name";
    event.lastName = "last name";
    event.place = "Tunisia";

    return [event];
  }
}
