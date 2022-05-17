// Create a random number to select the message to display among 6 messages

const getRandomNum = () => {
    return Math.floor(Math.random()*6);
}

//return a random prediction among according to the star sign, first build only for Capricorn and Aquarius
const createPrediction = () => {
    var starSign = window.prompt("What is your star sign?")
    const predictions = ["Tu vas trouver l'amour", "Tu sens mauvais", "Tu vas manger des fraises", "Tu vas gagner beaucoup d'argent", "Tu vas faire caca", "Prout!"]
    let rand = getRandomNum()
    switch(starSign){
        case "Capricorn":
        return document.getElementById('answer').innerHTML = predictions[rand];
        break;
        case "Aquarius":
        return document.getElementById('answer').innerHTML = predictions[rand];
        break;
        default: return console.log("Not a valid star sign")
    }
}