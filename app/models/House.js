


export class House {

    constructor(data) {

        this.id = data.id;
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.levels = data.levels;
        this.imgUrl = data.imgUrl;
        this.year = data.year;
        this.price = data.price;
        this.description = data.description;
        this.creatorId = data.creatorId;
        this.creator = data.creator;
    }

    get HouseTemplate() {

        return `
    <div class="row my-3">
        <div class="col-md-6">
          <h3> Number of bedrooms: </h3>
          <p> ${this.bedrooms} </p>

          <h3> Number of bathrooms: </h3>
          <p> ${this.bathrooms} </p>

          <h3>Number of levels: </h3>
          <p> ${this.levels} </p>
          
          
          
          <h3>House year: </h3>
          <p> ${this.year} </p>

          <h3>House price: </h3>
          <p> ${this.price} </p> `


    }

}

