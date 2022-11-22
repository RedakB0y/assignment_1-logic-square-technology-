import { cafes } from "./cafes.js";
import { places } from "./places.js";
var findlist = [];
let nearbycafes = document.getElementById("nearbycafes");


window.Find = function Find() {
    let input_value = document.getElementById("input").value;
    if (input_value != "") {
        findCaliforniaCafes(input_value);
    }

}

function findCaliforniaCafes(e) {
    cafes.forEach(element => {
        if (element.name.includes(e)) {
            places.filter((places_data) => {
                if (element.place_id === places_data.id) {
                    const temp = {
                        "name": element.name,
                        ...places_data,
                    }
                    let { id, ...rest } = temp;
                    findlist.push(rest);


                }
            });
        }
    });
    if (findlist.length == 0) {
        nearbycafes.innerHTML = "Sorry! No Cafe Found";
    } else {
        nearbycafes.innerHTML = JSON.stringify(findlist, null, 4);
        console.log(findlist);
        findlist = [];
    }


}