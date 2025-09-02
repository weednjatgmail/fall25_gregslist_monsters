import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('cars controller is ready!🚗🚗');
    AppState.on('cars', this.drawCars)
    AppState.on('identity', this.showCarForm)

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
    try {
      event.preventDefault()
      console.log('creating car!');
      const formThatSubmitted = event.target
      const dataFromForm = getFormData(formThatSubmitted)
      console.log('data', dataFromForm);
      await carsService.createCar(dataFromForm)
      Pop.success('You car has been listed!')
    } catch (error) {
      console.error('COULD NOT CREATE CAR', error);
      Pop.error(error)
    }
  }

  drawCars() {
    let carContent = ''
    AppState.cars.forEach(car => carContent += car.listingTemplate)
    const carElement = document.getElementById('car-listings')
    carElement.innerHTML = carContent
  }

  showCarForm() {
    document.getElementById('car-form').classList.remove('d-none')
    document.getElementById('car-form-placeholder').classList.add('d-none')
  }

  toggleCarsSection() {
    document.getElementById('cars-section').classList.toggle('d-none')
  }
}