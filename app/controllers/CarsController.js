import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('cars controller is ready!🚗🚗');
    AppState.on('cars', this.drawCars)

    this.getCars()
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('COULD NOT GET CARS', error);
      Pop.error(error)
    }
  }

  drawCars() {
    let carContent = ''
    AppState.cars.forEach(car => carContent += car.listingTemplate)
    const carElement = document.getElementById('car-listings')
    carElement.innerHTML = carContent
  }
}