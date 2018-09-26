/*
 * Create a list that holds all of your cards
 */
var myCards = ['fa-diamond','fa-diamond',
'fa-paper-plane-o', 'fa-paper-plane-o',
'fa-anchor', 'fa-anchor',
'fa-leaf','fa-leaf',
'fa-bicycle', 'fa-bicycle',
'fa-bomb', 'fa-bomb',
'fa-bolt', 'fa-bolt',
'fa-cube', 'fa-cube',

];
//function generating HTML for each card that was deleted on the html file.
function generateCard(card){
    return '<li class="card"><i class="fa ${card}"></i></li>';
};

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) { //while there still elements in the current index array
        randomIndex = Math.floor(Math.random() * currentIndex);// pick a random index
        currentIndex -= 1; //decrease current index by 1

        //swap the last element with it
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function game(){
    var deck = document.querySelector('.deck');
    var cardHTML = shuffle(myCards).map(function(card){  //looping through the myCards using map rather than forEach.
        return generateCard(card);
    });

    deck.innerHTML = cardHTML.join(''); //adding the shuffled cards to the deck.
}

game();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
const allCards = document.querySelectorAll('.card');/*select all cards*/
var openCards = []; /*to store number of open cards for follow up */

allCards.forEach(function (card){
    card.addEventListener('click', function(e){
        if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){//if card does not already have the open show match class then execute the below(blc when you double click on a card the mensioned classes are toggles in and out)
            openCards.push(card);//add the clicked card to the openCards array
            card.classList.add('open', 'show');//then add the 'open show' class to the card that was clicked to reveal the card.

            if(openCards.length == 2){ //when the number of cards clicked is equal to 2
                setTimeout(function(){
                    openCards.forEach(function(card){  //loop through the 2 cards
                        card.classList.remove('open', 'show'); //unreveal the two cards
                    })

                    openCards = []; //set bback the 'openCrds' array to empty

                }, 1000); //all this happens within 1000mili seconds
            };
        };

    });//and the process goes on


})