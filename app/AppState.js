import { Identity } from './Auth/Identity.js'
import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { Monster } from './models/Monster.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  // NOTE logged in user information
  /** @type {Identity} */
  identity = null

  /** @type {Monster[]} */
  monsters = []

  /** @type {Car[]}*/
  cars = []

  /** @type {House[]}*/

  houses = [] //reach out to API and get houses... 


}

export const AppState = createObservableProxy(new ObservableAppState())