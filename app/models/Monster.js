

export class Monster {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.image
    this.commonLocations = data.common_locations
  }

  get listCard() {
    return `
    <div class="card" style="width: 10em;">
      <img class="card-img-top" src="${this.picture}">
      <div class="card-body">${this.name}</div>
    </div>
    `
  }
}