// challenge 1: your age in days

function ageInDays(){
    let birthYear = prompt("what year were you born")
    let ageInDayss = (2024 - birthYear) * 365

    // let h1 = document.createElement('h1')
    // let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
    // h1.setAttribute('id','ageInDays')
    // h1.appendChild(textAnswer)
    // document.getElementById('flex-box-result').appendChild(h1)

    let h1 = document.getElementById("flex-box-result")
    h1.innerHTML = `<h1>You are ${ageInDayss} days old.</h1>`
}
function reset(){
    // document.getElementById('ageInDays').remove()

    let h1 = document.getElementById("flex-box-result")
    h1.innerHTML = null
}



// challenge 2: generate image
function generate_image(){
    let image = document.createElement('img')
    let div = document.getElementById('gen')
    image.src = "./images/icon.png"
    div.appendChild(image)
}

function reset_2(){
    document.getElementById('gen').innerHTML = null
}




// challenge 3: rock,paper,scissor
function rpsgame(yourchoice){
    // console.log(yourchoice)
    // console.log(yourchoice.src)
    let humanChoice,botChoice
    humanChoice = yourchoice.id

    botChoice = numberToChioce(randToRpsInt())
    // alert(botChoice)
    console.log('computer choice',botChoice)

    result = decideWinner(humanChoice,botChoice)
    console.log(result)

    message = finalMessage(result)
    console.log(message)
    rpsFrontEnd(yourchoice.id,botChoice,message)

}
function randToRpsInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChioce(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice,computerChoice){
    let rpsDatabase = {
        'rock' : {'scissors': 1,'rock':0.5,'paper':0},
        'paper' : {'rock':1,'paper':0.5,'scissors':0},
        'scissors' : {'paper':1,'scissors':0.5,'rock':0}
    }
    
    let yourScore = rpsDatabase[yourChoice][computerChoice]
    let computerScore = rpsDatabase[computerChoice][yourChoice]
    return [yourScore,computerScore]
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message':'You Lost!','color':'red'}
    }else if(yourScore === 0.5){
        return {'message':'You Tied!','color':'yellow'}
    }else{
        return {'message':'You Won!','color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let humanDiv = document.createElement('div')
    let botDiv = document.createElement('div')
    let messageDiv = document.createElement('div')

    humanDiv.innerHTML = `<img src="${imageDatabase[humanImageChoice]}" width="150" height="150" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);">`
    messageDiv.innerHTML = `<div><h1 style="color:${finalMessage['color']}; font-size:60px; padding:30px;">${finalMessage['message']}</h1></div>
                            <div><button class="btn btn-success" onclick="window.location.reload(true)">Play Again</button></div>`
    botDiv.innerHTML = `<img src="${imageDatabase[botImageChoice]}" width="150" height="150" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);">`

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)

}

// challenge $: change the color of all buttons

let all_buttons = document.getElementsByTagName('button')
let copyAllButton = []
for(let i=0; i < all_buttons.length; i++){
    copyAllButton.push(all_buttons[i].classList[1])
}

// console.log(copyAllButton)

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed()
    }else if(buttonThingy.value === 'green'){
        buttonGreen()
    }else if(buttonThingy.value === 'reset'){
        buttonColorReset()
    }else if(buttonThingy.value === 'random'){
        randomColors()
    }
}

function buttonRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonColorReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButton[i])
    }
}

function randomColors(){
    let colors = ['btn-primary','btn-danger','btn-warning','btn-success']
    for(let i = 0; i < all_buttons.length; i++){
        let random = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(colors[random])
    }
}

// Challenge 5: blackjack
let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A']
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const CARDS = blackjackGame['cards']
const hitSound = new Audio('sounds/swish.m4a')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)

function blackjackHit(){
    let card = randomCard()
    showCard(YOU,card)
}

function randomCard(){
    let rand = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][rand]
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')

    for(let i = 0; i < yourImages.length; i++){
        yourImages[i].remove()
    }
    for(let i = 0; i < dealerImages.length; i++){
        dealerImages[i].remove()
    }
}

function showCard(activePlayer,card){
    let cardImage = document.createElement('img')
    cardImage.src = `images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play()
}

