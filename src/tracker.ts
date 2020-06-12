import mixpanel from "mixpanel-browser";
import * as pack from "../package.json";
import { CatastropheName, PopulationStatus } from "./common";
import { stats } from "./stats";

export enum EventId {
  GameOver = "gameover",
}

interface IGameOverData {
  catastropheClimate: number;
  catastropheCyclone: number;
  catastropheFamine: number;
  catastropheFlood: number;
  catastropheIce: number;
  catastropheMeteor: number;
  catastrophePlague: number;
  catastropheReligion: number;
  catastropheVolcano: number;
  catastropheWar: number;
  catastropheWildfire: number;
  populationMax: number;
  populationMin: number;
  status: PopulationStatus;
  totalBornCount: number;
  totalCatastrophes: number;
  version?: string;
  year: number;
}

class Tracker {
  public constructor() {
    mixpanel.init("b70e3845346d947336c4d57f05e75268", {
      disable_persistence: true,
      ip: false,
      track_pageview: false,
    });
  }

  public trackGameOver(status: PopulationStatus, year: number) {
    const allStats = stats.getAll();
    this.trackEvent(EventId.GameOver, {
      catastropheClimate: stats.getCatastrophePercentage(
        CatastropheName.Climate
      ),
      catastropheCyclone: stats.getCatastrophePercentage(
        CatastropheName.Cyclone
      ),
      catastropheFamine: stats.getCatastrophePercentage(CatastropheName.Famine),
      catastropheFlood: stats.getCatastrophePercentage(CatastropheName.Flood),
      catastropheIce: stats.getCatastrophePercentage(CatastropheName.Ice),
      catastropheMeteor: stats.getCatastrophePercentage(CatastropheName.Meteor),
      catastrophePlague: stats.getCatastrophePercentage(CatastropheName.Plague),
      catastropheReligion: stats.getCatastrophePercentage(
        CatastropheName.Religion
      ),
      catastropheVolcano: stats.getCatastrophePercentage(
        CatastropheName.Volcano
      ),
      catastropheWar: stats.getCatastrophePercentage(CatastropheName.War),
      catastropheWildfire: stats.getCatastrophePercentage(
        CatastropheName.Wildfire
      ),
      populationMax: allStats.highestPopulation,
      populationMin: allStats.lowestPopulation,
      status,
      totalBornCount: allStats.totalBornCount,
      totalCatastrophes: allStats.catastrophesCountSum,
      year,
    });
  }

  private trackEvent(id: string, data: IGameOverData): void {
    // always include game version
    data.version = pack.version;
    mixpanel.track(id, data);
  }
}

export const tracker = new Tracker();
