import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import Event from './event.class';

export type BusAction = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export default class BusService {
  private subject$: Subject<Event> = new Subject<Event>();

  constructor() {}

  emit(name: string, payload?: any) {
    const event = new Event(name, payload);
    this.subject$.next(event);
  }

  on(name: string, action: BusAction): Subscription {
    return this.subject$
      .pipe(
        filter((e: Event) => e.name === name),
        map((e: Event) => e.payload)
      )
      .subscribe(action);
  }
}
