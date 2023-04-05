import type {Catastrophe, PopulationStatus} from "./common";

export interface CatastropheIncidentData {
  catastrophe: Catastrophe | null;
  year: number;
}
export interface GameOverIncidentData {
  status: PopulationStatus;
  year: number;
}
export interface PopulationIncidentData {
  count: number;
}

export enum IncidentName {
  Catastrophe = "catastrophe-occurred",
  GameStart = "game-start",
  GameOver = "game-over",
  Population = "total-population-count-changed",
}

type IncidentData =
  | CatastropheIncidentData
  | null
  | GameOverIncidentData
  | PopulationIncidentData;

export function listen(name: IncidentName, callback: (evt: CustomEvent) => void): () => void {
  document.addEventListener(name, callback as EventListener);
  // return cancel function
  return () => {
    document.removeEventListener(name, callback as EventListener);
  };
}

export function publish(name: IncidentName, data: IncidentData) {
  document.dispatchEvent(new CustomEvent<IncidentData>(name, {detail: data}));
}
