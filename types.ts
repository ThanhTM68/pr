export enum ViewState {
  HOME = 'HOME',
  FIREWORKS = 'FIREWORKS',
  GAME = 'GAME',
  ABOUT = 'ABOUT'
}

export interface MenuItem {
  id: ViewState;
  label: string;
  icon: string;
  description: string;
}

export interface MusicState {
  isPlaying: boolean;
  url: string;
  volume: number;
}