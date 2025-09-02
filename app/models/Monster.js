

export class Monster {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.image
    this.commonLocations = data.common_locations
  }

  get listCard() {
    return `
    <div class="col-md-3">
    <div class="card">
      <img class="card-img-top" src="${this.picture}">
      <div class="card-body">${this.name}</div>
    </div>
    </div>
    `
  }
}