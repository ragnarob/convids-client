export interface Video {
  id: string;
  title: string;
  url: string;
  date: string;
  event: Event[];
  maker: Maker;
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

export interface Maker {
  id: string;
  name: string;
  links: string;
  country: string;
}

export interface RecurringEvent {
  id: string;
  title: string;
  shortTitle: string;
  furtrackTag: string;
  country: string;
  links: string;
  events: Event[];
}
export interface AddRecurringEventGqlResponse {
  addRecurringEvent: {
    data: RecurringEvent;
    error: string;
    ok: boolean;
  };
}
export interface AddEventGqlResponse {
  addEvent: {
    data: Event;
    error: string;
    ok: boolean;
  };
}

export interface Event {
  id: string;
  title: string;
  shortTitle: string;
  furtrackTag: string;
  date: string;
  recurringEvent: RecurringEvent;
}
