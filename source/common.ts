import climate from "./icons/climate.svg";
import cyclone from "./icons/cyclone.svg";
import drought from "./icons/drought.svg";
import earthquake from "./icons/earthquake.svg";
import flood from "./icons/flood.svg";
import ice from "./icons/ice.svg";
import meteor from "./icons/meteor.svg";
import plague from "./icons/plague.svg";
import religion from "./icons/religion.svg";
import volcano from "./icons/volcano.svg";
import war from "./icons/war.svg";

export const simulationYearTime = (1 / 8) * 1000;

export enum PopulationStatus {
  Extinct = "extinct",
  Safe = "safe",
  Struggling = "struggling",
}

export interface Catastrophe {
  icon: string;
  isPersistent?: boolean;
  killMax: number;
  killMin: number;
  name: CatastropheName;
}

export const CatastrophePersistence = 50;

export enum CatastropheName {
  Climate = "climate-warming",
  Cyclone = "cyclone",
  Drought = "drought",
  Earthquake = "earthquake",
  Flood = "flood",
  Ice = "ice-age",
  Meteor = "meteor",
  Plague = "plague",
  Religion = "religion",
  Volcano = "volcano-eruption",
  War = "war",
}

export const Catastrophes: Catastrophe[] = [
  {
    // http://www.impactlab.org/news-insights/valuing-climate-change-mortality/
    icon: climate,
    isPersistent: true,
    killMax: 17,
    killMin: 12,
    name: CatastropheName.Climate,
  },
  {
    icon: cyclone,
    killMax: 9,
    killMin: 9,
    name: CatastropheName.Cyclone,
  },
  {
    // https://en.wikipedia.org/wiki/List_of_natural_disasters_by_death_toll
    icon: drought,
    isPersistent: true,
    killMax: 20,
    killMin: 10,
    name: CatastropheName.Drought,
  },
  {
    // https://en.wikipedia.org/wiki/Lists_of_earthquakes
    icon: earthquake,
    killMax: 4,
    killMin: 2,
    name: CatastropheName.Earthquake,
  },
  {
    icon: flood,
    killMax: 6,
    killMin: 3,
    name: CatastropheName.Flood,
  },
  {
    // I don't have anything to base this on, so I decided this would be as bad
    // as minimum of flood (direct deaths caused by prolonged harsh weather) and
    // maximum of drought (crops dying due to low temperatures).
    icon: ice,
    isPersistent: true,
    killMax: 20,
    killMin: 3,
    name: CatastropheName.Ice,
  },
  {
    // https://en.wikipedia.org/wiki/Chicxulub_crater
    icon: meteor,
    killMax: 66,
    killMin: 4,
    name: CatastropheName.Meteor,
  },
  {
    // https://en.wikipedia.org/wiki/Black_Death
    // Black Death of bubonic plague killed around 26% of world population (50%
    // in the region)
    // https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2730237/
    // The epidemic of cocoliztli killed around 80% of the native population of
    // Mexico in the wake of European conquest. This happened immediately after
    // the smallpox epidemic that killed around 8 million people.
    // Given that, I decided to base this catastrophe on bubonic plague alone,
    // as the next catastrophe will partially address the horrors of Mexico.
    icon: plague,
    isPersistent: true,
    killMax: 26,
    killMin: 4,
    name: CatastropheName.Plague,
  },
  {
    // https://rationalwiki.org/wiki/Death_toll_of_Christianity
    // https://en.wikipedia.org/wiki/Indigenous_peoples_of_the_Americas
    // https://en.wikipedia.org/wiki/Population_history_of_indigenous_peoples_of_the_Americas
    // Colonization killed as much as 80-90% of indigenous population
    // so I estimated it as 10% of world population and blamed Christians
    icon: religion,
    isPersistent: true,
    killMax: 10,
    killMin: 2,
    name: CatastropheName.Religion,
  },
  {
    icon: volcano,
    killMax: 6,
    killMin: 4,
    name: CatastropheName.Volcano,
  },
  {
    // https://en.m.wikipedia.org/wiki/World_War_II_casualties
    // https://en.m.wikipedia.org/wiki/Atrocities_in_the_Congo_Free_State
    // WWII killed 3% of world population
    icon: war,
    isPersistent: true,
    killMax: 9,
    killMin: 3,
    name: CatastropheName.War,
  },
];

export function getCatastrophe(name: CatastropheName): Catastrophe | null {
  return Catastrophes.find((catastrophe) => catastrophe.name === name) || null;
}

export function isYearMillenium(year: number): boolean {
  if (year === 0) {
    return false;
  } else {
    return year % 1000 === 0;
  }
}
