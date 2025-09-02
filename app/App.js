import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { MonstersController } from './controllers/MonstersController.js';

class App {

  monstersController = new MonstersController()

  carsController = new CarsController()

}

window['app'] = new App()


