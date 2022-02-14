const photo = document.querySelector('#photo')
const result = document.querySelector('#pageResult')
const ques = document.querySelector('#question')
const chooseOne = document.querySelector('#one')
const chooseTwo = document.querySelector('#two')

let pageNumber

chooseOne.addEventListener('click', directOne)
chooseTwo.addEventListener('click', directTwo)

init()
function init(){
  photo.innerHTML = `<img src="./assets/page1.gif" />`
  result.innerHTML = `As you're walking through the woods you notice that the sun is beginning to set. You come across a tavern tucked away between the trees`
  ques.innerHTML = `Do you stop for a drink or head home before dark?`
  chooseOne.textContent = `Drink`
  chooseTwo.textContent = `Go Home`
  pageNumber = 1
}


function directOne(){
  if (pageNumber === 1){
    quest()
  } else if (pageNumber === 2) {
    fightDragon()
  } else if (pageNumber === 4) {
    defeatDragon()
  } else if (pageNumber === 5) {
    fightVandal()
  }
}

function directTwo(){
  if (pageNumber === 1) {
    goHome()
  } else if (pageNumber === 2) {
    vandal()
  } else if (pageNumber === 4) {
    death()
  } else if (pageNumber === 5) {
    shame()
  }
}

function quest(){
  photo.innerHTML = `<img src="./assets/page2.gif" />`
  result.innerHTML = `You enter the bar and see a young witch sweeping the floor. She approaches you and tells you of a mischevious dragon terrorizing her village`
  ques.innerHTML = `Do you accept the noble quest to slay the dragon?`
  chooseOne.textContent = `Slay`
  chooseTwo.textContent = `Walk Away`
  pageNumber = 2
}

function goHome(){
  console.log('home')
}