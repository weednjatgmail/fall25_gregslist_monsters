import { AppState } from "../AppState.js";
import { monstersService } from "../services/MonstersService.js";


export class MonstersController {
  constructor() {
    // console.log('👺🎮');
    this.getMonsters()
    // this.drawMonsters() can't draw monsters when the page loads
    AppState.on('monsters', this.drawMonsters)
  }


  getMonsters() {

    monstersService.getMonsters()
  }

  toggleMonsterSection() {
    document.getElementById('monster-list').classList.toggle('d-none')
  }

  drawMonsters() {
    // console.log('✏️👺');
    let monsterListElement = document.getElementById('monster-list')
    let monsterListContent = ''
    AppState.monsters.forEach((monster) => monsterListContent += monster.listCard)
    monsterListElement.innerHTML = monsterListContent
  }
}