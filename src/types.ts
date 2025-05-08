export interface GamePreview {
import { GameEventPreview } from './types';
  id: String;
  name: String;
  cover: {
    image_id: String;
  };
}
export interface Game extends GamePreview {
  rating: number;
  release_dates: {
    human: string;
  }[];
  summary: string;
  genres: {
    id: string;
    name: string;
  }[];
  screenshots: {
    id: string;
    image_id: string;
  }[];
  platforms: {
    id: string;
    name: string;
  }[];
  involved_companies: {
    id: string;
    company: {
      id: string;
      name: string;
    };
  }[];
  similar_games: GamePreview[];
}

export interface GameEventPreview {
  id: string;
  name: string;
  event_logo: {
    image_id: string;
  };
  start_time: string;
}

export interface GameEvent extends GameEventPreview {
  description: string;
  games: GamePreview[];
}

export interface GameEventPreview {
  id: string;
  name: string;
  event_logo: {
    image_id: string;
  };
  start_time: string;
}
