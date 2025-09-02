import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class HousesController {

    constructor() {
        console.log("Houses controller is ready! 🏡");

        AppState.on("houses", this.drawHouses);




    }

    async getHouses() {
        try {
            await housesService.getHouses()
        }
        catch (error) {

            console.error("Could not get houses.", error);
            Pop.error("error");
        }

        //next go into houses service...
    }


    drawHouses() {

        let houseContent = ""
        AppState.houses.forEach(house => houseContent += house.HouseTemplate)
        const houseElement = document.getElementById("house-listings")
        houseElement.innerHTML = houseContent
    }

}

