import { Car } from './models/Car.js'
import { Monster } from './models/Monster.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Monster[]} */
  monsters = []

  /** @type {Car[]}*/
  cars = []
}

export const AppState = createObservableProxy(new ObservableAppState())