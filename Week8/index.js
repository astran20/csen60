//this code runs synchroneously
function showData(){
    console.log("showData function running");
    //lots of code
    console.log("showData function finished");
}

//this code runs asynchroneously
async function getRandomFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    //console.log(response);
    const data = await response.json()
    console.log(data.text);
    console.log("getData finished");
}

// getData();
// showData();

async function getTodaysFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
    //console.log(response);
    const data = await response.json()
    console.log(data.text);
    console.log("getData finished");
}

getRandomFact();
getTodaysFact();