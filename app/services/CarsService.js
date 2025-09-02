import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "../utils/Axios.js";

class CarsService {
  async createCar(carData) {
    // NOTE carData becomes the request body (payload)
    const response = await api.post('api/cars', carData)
    console.log('CREATED CAR ✨🚗', response.data);
    const car = new Car(response.data)
    AppState.cars.push(car)
  }
  async getCars() {
    console.log('getting cars 🚗🚗🚗');
    // NOTE api is an axios instance that we can use to send network requests
    // NOTE the get method from api sends a GET (READ) request
    const response = await api.get('api/cars') // send request to: 'https://sandbox.codeworksacademy.com' + 'api/cars'
    console.log('GOT THOSE DANG CARS 🚗🚗🚗', response);
    console.log('POJOs from API', response.data);
    const cars = response.data.map((carPojo) => new Car(carPojo))
    console.log('Cars!', cars);
    AppState.cars = cars
  }
}

export const carsService = new CarsService()