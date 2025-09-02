import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('cars controller is ready!🚗🚗');
    AppState.on('cars', this.drawCars)

    this.getCars()
  }

  async getCars() {
    // NOTE attempt to run the code in the try block
    // NOTE if an error is thrown in the try block, catch it and run the code in the catch block
    // NOTE always a good idea to let users know if something went wrong
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('COULD NOT GET CARS', error);
      Pop.error(error)
    }
  }

  async submitCar() {
    event.preventDefault()
    console.log('creating car!');
    const formThatSubmitted = event.target
    const dataFromForm = getFormData(formThatSubmitted)
    console.log('data', dataFromForm);
    carsService.createCar(dataFromForm)
  }

  drawCars() {
    let carContent = ''
    AppState.cars.forEach(car => carContent += car.listingTemplate)
    const carElement = document.getElementById('car-listings')
    carElement.innerHTML = carContent
  }
}