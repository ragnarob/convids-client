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

export interface Maker {
  id: string;
  name: string;
  links: string[];
  country: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  country: string;
  links: string[];
}
