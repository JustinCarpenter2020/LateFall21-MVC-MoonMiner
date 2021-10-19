import { UpgradeController } from "./Controllers/UpgradeController.js";


class App {
  upgradeController = new UpgradeController();
}

window["app"] = new App();
