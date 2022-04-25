export interface Game {
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  platforms: Array<Platform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  rating: number;
  short_screenshots: Array<Screenshots>;
  stores: Array<Store>;
  trailers: Array<Trailer>;
  tags: Array<Tag>;
  updated: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}

interface Platform {
  platform: {
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
  title: string;
  percent: number;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  }
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  language: string;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  domain: string;
  games_count: string;
}
