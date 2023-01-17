// ------------------------------
// VARIABLES PLACE
// ------------------------------

// 'DOM ELEMENT'
const 
    rootElement = document.documentElement,
    fab = document.querySelector('.fabutton')

// 'CSS VARIABLES'
const cssVarSet = [
    {
        primaryColor: "#000",
        firstColor: "#CDB4DB",
        secondColor: "#FFC8DD",
        thirdColor: "#FFAFCC",
        fourthColor: "#BDE0FE",
        fifthColor: "#A2D2FF"
    },
    {
        primaryColor: "#000",
        firstColor: "#CCD5AE",
        secondColor: "#E9EDC9",
        thirdColor: "#FEFAE0",
        fourthColor: "#FAEDCD",
        fifthColor: "#D4A373"
    },
    {
        primaryColor: "#fff",
        firstColor: "#002029",
        secondColor: "#00303D",
        thirdColor: "#004052",
        fourthColor: "#005066",
        fifthColor: "#00607A"
    }
]



// ------------------------------
// EVENT LISTENER
// ------------------------------

// => change the variables of the root element
fab.addEventListener('click', ()=>{
    // => create a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3)

    alert(`random css variable set "-- ${randomNumber +1} --" is selected`)

    // => select a random css var set
    let cssRandomVarSet = cssVarSet[randomNumber]

    // => replace the css variables of the root element 
    for (const key in cssRandomVarSet){
        rootElement.style.setProperty(`--${key}`, cssRandomVarSet[key]);
    }
})