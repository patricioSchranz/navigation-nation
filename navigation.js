// ------------------------------
// VARIABLES PLACE
// ------------------------------

// 'DOM ELEMENTS'

const 
    hamburgerButton = document.querySelector('.hamburger-button'),
    navigation = document.querySelector('nav'),
    navigationListpoints = document.querySelectorAll('nav li')

// 'ANIMATION VARIABLES'

let delayVar = 0 // initial delay value




// ------------------------------
// CALLBACK
// ------------------------------

const animationBringFullWidth = (element, delay) =>{

    // keyframe object, timing properties
    const 
        showTheListPoint = [{ width: '100%'}],
        showTheListPointTiming = {
            duration: 300,
            delay: delay,
            fill: 'forwards'
        } 

    element.animate(showTheListPoint, showTheListPointTiming)
}

const animationSetWidhtToZero = (element, delay) =>{

    // keyframe object, timing properties
    const 
        showTheListPoint = [{ width: '0'}],
        showTheListPointTiming = {
            duration: 300,
            delay: delay,
            fill: 'forwards'
        } 

    element.animate(showTheListPoint, showTheListPointTiming)
}



// ------------------------------
// EVENT LISTENER
// ------------------------------

let wantSeeNavigation = false // state if the navigation should be visible

// => handle the hamburger click
hamburgerButton.addEventListener('click', ()=>{

    wantSeeNavigation = !wantSeeNavigation

    // => change the hamburger button
    hamburgerButton.classList.toggle('active')

    // => show the nav / hide the nav
    //    => when the nav should be closed, wait till the last list item shrinks
    let timeout = wantSeeNavigation ? 0 : delayVar

    setTimeout( ()=>{
        navigation.classList.toggle('nav-active')
    }, `${timeout}` )

    // => if the user want see the navigation ...
    if(wantSeeNavigation){

        // => show the list points
        navigationListpoints.forEach(listPoint =>{
            // console.log(delayVar)

            delayVar += 200
            animationBringFullWidth(listPoint, delayVar)
           
        })

    } 
    // => if the user close the navigation ...
    else{

         // => shrink the list points
         //    => the last list point should be the first that shrinks
         const reversedNavigationListPoint = Array.from(navigationListpoints).reverse()

         reversedNavigationListPoint.forEach( (listPoint, idx) =>{

            // => reset the delay variable with the first list item for the shrink animations
            idx === 0 && (delayVar = 0)

            delayVar += 200
            animationSetWidhtToZero(listPoint, delayVar) 

            // => reset the delay variable with the last list item for the grow animations
            idx === reversedNavigationListPoint.length -1 && (delayVar = 0)
            
        })
    }
    
})

