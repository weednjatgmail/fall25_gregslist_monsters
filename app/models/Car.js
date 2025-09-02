export class Car {
  constructor(data) {
    // NOTE make sure you save the id from the API, do not generate one if there is an ID present
    this.id = data.id
    this.make = data.make
    this.model = data.model
    // NOTE you can rename properties on your own model, just make sure you are pulling from the correct property
    this.img = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
    this.color = data.color
  }

  get listingTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="shadow position-relative car-border" style="border-color: ${this.color};">
        <img
          src="${this.img}"
          alt="${this.year} ${this.make} ${this.model}" class="car-img">
        <div class="p-3">

          <p class="fs-3 m-0">${this.year} ${this.make} ${this.model}</p>      
          <small title="${this.createdAtTime}">Listed on ${this.createdAtDate}</small>
          <p class="mt-3"></p>
          <p>${this.description}</p>
        </div>
        <span class="text-success car-price bg-light px-2">${this.priceAsUSD}</span>
      </div>
    </div>
    `
  }

  get priceAsUSD() {
    return '$' + this.price.toLocaleString() // $12,000
  }



  get createdAtDate() {
    return this.createdAt.toLocaleDateString() // 8/27/2025
  }

  get createdAtTime() {
    return this.createdAt.toLocaleTimeString() // 11:11:00 AM
  }
}