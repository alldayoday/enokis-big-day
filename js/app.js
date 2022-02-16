const photo = document.querySelector('#photo')
const result = document.querySelector('#pageResult')
const ques = document.querySelector('#question')
const chooseOne = document.querySelector('#one')
const chooseTwo = document.querySelector('#two')
const backgroundMusic = new Audio('../assets/background.mp3')
const fire = new Audio('../assets/fire.wav')
const aww = new Audio('../assets/aww.wav')
const tavern = new Audio('../assets/tavern.wav')
const sword = new Audio('../assets/sword.mp3')
const ice = new Audio('../assets/ice.wav')


let pageNumber

chooseOne.addEventListener('click', directOne)
chooseTwo.addEventListener('click', directTwo)


init()

function directOne() {
  if (pageNumber === 1) {
    quest()
  } else if (pageNumber === 2) {
    fightDragon()
  } else if (pageNumber === 4) {
    defeatDragon()
  } else if (pageNumber === 5) {
    fightVandal()
  }
}

function directTwo() {
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

function addClasses() {
  result.setAttribute('class', ' pageChoice animate__animated animate__backInLeft')
  ques.setAttribute('class', 'promptQuestion animate__animated animate__backInRight')
  setTimeout(removeClasses, 1000)
  chooseOne.setAttribute('class', 'yesBut animate__animated animate__bounce')
  chooseTwo.setAttribute('class', 'noBut animate__animated animate__bounce')
}

function removeClasses() {
  result.setAttribute('class', 'pageChoice')
  ques.setAttribute('class', 'promptQuestion')
  chooseOne.setAttribute('class', 'yesBut')
  chooseTwo.setAttribute('class', 'noBut')
}

function init() {
  photo.innerHTML = `<img src="./assets/page1.gif" />`
  result.innerHTML = `As you're walking through the woods you notice that the sun is beginning to set. You come across a tavern tucked away between the trees.`
  ques.innerHTML = `Do you stop for a drink or head home before dark?`
  chooseOne.textContent = `Drink`
  chooseTwo.textContent = `Go Home`
  pageNumber = 1
  addClasses()
}

function quest() {
  photo.innerHTML = `<img src="./assets/page2.gif" />`
  result.innerHTML = `You enter the bar and see a young witch sweeping the floor. She approaches you and tells you of a mischevious dragon terrorizing her village. She begs for your help to defeat the dragon.`
  ques.innerHTML = `Do you accept the noble quest to slay the dragon?`
  chooseOne.textContent = `Slay`
  chooseTwo.textContent = `Walk Away`
  pageNumber = 2
  addClasses()
  tavern.volume = .10
  tavern.play()
  backgroundMusic.volume = .10
  backgroundMusic.play()
}

function goHome() {
  photo.innerHTML = `<img src="./assets/page3.gif" />`
  result.innerHTML = `You head back to your home`
  ques.innerHTML = `...but you'll always wonder what adventure could have been waiting for you inside.`
  chooseOne.setAttribute('hidden', 'true')
  chooseTwo.setAttribute('hidden', 'true')
  addClasses()
  aww.volume = .1
  aww.play()
}

function fightDragon() {
  photo.innerHTML = `<img src="./assets/page4.gif" />`
  result.innerHTML = `You find the dragon in a field just outside of the village. You know you only have one chance to take him down.`
  ques.innerHTML = `Will you try to fight him with your sword or cast a spell?`
  chooseOne.innerHTML = `Spell`
  chooseTwo.innerHTML = `Sword`
  pageNumber = 4
  addClasses()
  tavern.pause()
}

function vandal() {
  photo.innerHTML = `<img src="./assets/page5.gif" />`
  result.innerHTML = `You exit the tavern ready to head back home when three warlocks jump out at you from behind a cabin and demand you give them everything in your pockets.`
  ques.innerHTML = `Do you fight the thieves or flee?`
  chooseOne.innerHTML = `Fight`
  chooseTwo.innerHTML = `Flee`
  pageNumber = 5
  addClasses()
  tavern.pause()
}

function defeatDragon() {
  photo.innerHTML = `<img src="./assets/page7.gif" />`
  result.innerHTML = `With all the magic you can muster you bring forth a cold burst, freezing the dragon in a solid block of ice.`
  ques.innerHTML = `You are victorious and glorious, the village will be praising your name for generations!`
  chooseOne.setAttribute('hidden', 'true')
  chooseTwo.setAttribute('hidden', 'true')
  addClasses()
  ice.volume = .2
  ice.play()
  confetti.start(3000)
}

function death() {
  photo.innerHTML = `<img src="./assets/page6.gif" />`
  result.innerHTML = `You approach the dragon, wielding your mighty and magical blade. You find yourself in close range before you notice the dragon's fire breath engulf you in flame.`
  ques.innerHTML = `It looks like roasted mushrooms are on the menu tonight!`
  chooseOne.setAttribute('hidden', 'true')
  chooseTwo.setAttribute('hidden', 'true')
  addClasses()
  fire.volume = .50
  fire.play()
}

function fightVandal() {
  photo.innerHTML = `<img src="./assets/page8.gif" />`
  result.innerHTML = `You pull out your magical sword of butt-whooping and knock the thieves out in one fell swoop.`
  ques.innerHTML = `You loot their bodies and find enough gold to keep you fed until the next quest!`
  chooseOne.setAttribute('hidden', 'true')
  chooseTwo.setAttribute('hidden', 'true')
  addClasses()
  sword.volume = .2
  sword.play()
}

function shame() {
  photo.innerHTML = `<img src="./assets/page9.gif" />`
  result.innerHTML = `You flee the thieves and make it home. You may not have been brave today but you are alive.`
  ques.innerHTML = `You'll forever carry with you the shame of knowing you are less brave than your ancestors`
  chooseOne.setAttribute('hidden', 'true')
  chooseTwo.setAttribute('hidden', 'true')
  addClasses()
  backgroundMusic.pause()
  aww.volume = .1
  aww.play()
}


