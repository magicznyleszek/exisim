import { Existence } from "./existence";

window.onload = (): void => {
  const humanExistence = new Existence(true);
  humanExistence.startLife();
};
