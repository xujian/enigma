export default class Event {
  name: string;
  payload?: unknown;

  constructor(name: string, payload?: unknown) {
    this.name = name;
    this.payload = payload;
  }
}
