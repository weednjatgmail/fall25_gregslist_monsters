import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js";

class CarsService {
  async getCars() {
    console.log('getting cars 🚗🚗🚗');
    const response = await api.get('api/cars') // send request to: 'https://sandbox.codeworksacademy.com' + 'api/cars'
    console.log('GOT THOSE DANG CARS 🚗🚗🚗', response);
    const cars = response.data.map((carPojo) => new Car(carPojo))
    console.log('Cars!', cars);
    AppState.cars = cars
  }
}

export const carsService = new CarsService()