export interface Video {
  id: string;
  title: string;
  url: string;
  date: string;
  event: Event[];
  maker: Maker;
}

export interface Maker {
  id: string;
  name: string;
  links: string;
  country: string;
}

export interface Event {
  id: string;
  title: string;
  shortTitle: string;
  furtrackTag: string;
  date: string;
  recurringEvent: RecurringEvent;
}

export interface RecurringEvent {
  id: string;
  title: string;
  shortTitle?: string;
  furtrackTag?: string;
  country: string;
  links?: string;
  events: Event[];
}

export interface VideosGqlResponse {
  videos: Video[];
}
export interface EventsGqlResponse {
  events: Event[];
}
export interface RecurringEventsGqlResponse {
  recurringEvents: RecurringEvent[];
}
interface AddGqlResponseContent<T> {
  data: T;
  error: string;
  ok: boolean;
}
export interface AddMakerGqlResponse {
  addMaker: AddGqlResponseContent<Maker>;
}
export interface AddVideoGqlResponse {
  addVideo: AddGqlResponseContent<Video>;
}
export interface AddRecurringEventGqlResponse {
  addRecurringEvent: AddGqlResponseContent<RecurringEvent>;
}
export interface AddEventGqlResponse {
  addEvent: AddGqlResponseContent<Event>;
}
