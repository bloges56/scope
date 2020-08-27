//C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



//Mod Squad
const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
};

var HTMLRepresentation = `<h1>The Mod Squad</h1>`;

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

document.querySelector(".show-info").innerHTML = HTMLRepresentation;



//Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

var invalids = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k];
    var invalidLocation = false;

    if (currentLocation[0] > 2) {
        invalidLocation = true;
    }

    if (invalidLocation) {
        console.log("This location is invalid");
        invalids++;
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalids} invalid locations`);



//Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 8);

    const namer = function () {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        
        return name + suffix;
    }
    return namer;
}

const nameMaker = llamaNamer();
console.log(nameMaker());

