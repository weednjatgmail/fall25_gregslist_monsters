import { AppState } from "../AppState.js";
import { Monster } from "../models/Monster.js";



class MonstersService {
  async getMonsters() {
    let response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    // console.log('👺📡', response);
    let body = await response.json()
    // console.log('👺👃', body.data);
    let monsters = body.data.map((monsterData) => new Monster(monsterData))
    // console.log('👺✨', monsters);
    AppState.monsters = monsters
  }
}

export const monstersService = new MonstersService()