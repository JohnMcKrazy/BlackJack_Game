document.addEventListener("DOMContentLoaded", () => {
    const cardPlayerDisplay = document.querySelector("#card_player_display_id");
    const cardHouseDisplay = document.querySelector("#card_house_display_id");
    const playerCardGive = document.querySelector("#card_player_given_id");
    const houseCardGive = document.querySelector("#card_house_given_id");
    const playerCardScore = document.querySelector("#card_player_score_id");
    const houseCardScore = document.querySelector("#card_house_score_id");
    const playerCardGameName = document.querySelector("#player_card_game_name");
    const houseCardGameName = document.querySelector("#house_card_game_name");
    const playerWinScoreId = document.querySelector("#player_win_score_id");
    const playerLostScoreId = document.querySelector("#player_lost_score_id");
    const outlineContainer = document.querySelector("#outline_countainer_id");
    const playerTurnCount = document.querySelector("#player_turn_count");
    const houseTurnCount = document.querySelector("#house_turn_count");
    const giveMeBtnsContainer = document.querySelector("#alert_giveMe_done_btns_container");
    const giveMeBtn = document.querySelector("#display_giveMe_btn");
    const doneBtn = document.querySelector("#display_done_btn");
    const displayAlert = document.querySelector("#display_alert_id");
    const alertText = document.querySelector("#alert_text_id");
    const alertNewGameBtnsContainer = document.querySelector("#alert_newGame_btns_container");
    const alertNewGameBtn = document.querySelector("#display_newGame_btn");
    const alertLearnMoreBtn = document.querySelector("#display_learMore_btn");
    const alertAceBtnsContainer = document.querySelector("#alert_ace_btns_container");
    const alertAceBtnOne = document.querySelector("#display_ace_1");
    const alertaceBtnEleven = document.querySelector("#display_ace_11");
    const alertWhoStartBtnsContainer = document.querySelector("#alert_who_start_btns_container");
    const startPlayerBtn = document.querySelector("#display_start_player_btn");
    const startHouseBtn = document.querySelector("#display_start_house_btn");
    const startRandomBtn = document.querySelector("#display_start_random_btn");
    const startBtnContainer = document.querySelector("#alert_start_btn_container");
    const startBtn = document.querySelector("#display_start_btn_id");

    let playerStatus = "Waiting";
    let houseStatus = "Waiting";
    let playerStillPlay = true;
    let houseStillPlay = true;

    let sumOfPlayerCards = 0;
    let sumOfHouseCards = 0;
    let gamesWinScore = 0;
    let gamesLostScore = 0;
    let playerTurn = 0;
    let houseTurn = 0;

    function startGame() {
        //?quita el contenedor del boton de start
        startBtnContainer.classList.add("hide_btns");
        //?despliega el contenedor de los botones de who start
        alertWhoStartBtnsContainer.classList.remove("hide_btns");
        //?cambia el mensaje en el display alert
        alertText.textContent = "Who start?";
        //?regresa las acciones de los botones de who start
        whoStartBtnsIn();
    }

    function newGame() {
        playerStillPlay = true;
        houseStillPlay = true;
        playerStatus = "Waiting";
        houseStatus = "Waiting";
        playerTurn = 0;
        houseTurn = 0;
        sumOfPlayerCards = 0;
        sumOfHouseCards = 0;
        playerTurnCount.textContent = playerTurn;
        houseTurnCount.textContent = houseTurn;

        playerCardGive.textContent = 0;
        playerCardScore.textContent = sumOfPlayerCards;
        playerCardGameName.textContent = "Name of the Card";
        cardPlayerDisplay.setAttribute("src", "https://imagizer.imageshack.com/img922/7852/eT5gj3.png");

        houseCardGive.textContent = 0;
        houseCardScore.textContent = sumOfHouseCards;
        houseCardGameName.textContent = "Name of the Card";
        cardHouseDisplay.setAttribute("src", "https://imagizer.imageshack.com/img924/2739/vZg8y2.png");
    }
    function giveMeRandom() {
        alertWhoStartBtnsContainer.classList.add("hide_btns");
        alertText.textContent = "Looking for a player";
        console.log("The computer it's serching");
        const playersInTheGame = ["Player 1", "The House"];
        const playersInTheGameRandomLengthNumber = playersInTheGame.length * Math.random();
        const playersInTheGameRandomNumber = Math.floor(playersInTheGameRandomLengthNumber);
        const playersInTheGameRandomPlayer = playersInTheGame[playersInTheGameRandomNumber];
        function showMeWhoPlay() {
            console.log(playersInTheGameRandomPlayer);

            if (playersInTheGameRandomPlayer === "Player 1") {
                displayAlert.style.background = "var(--blue)";
                alertText.style.color = "var(--white)";
            } else if (playersInTheGameRandomPlayer === "The House") {
                displayAlert.style.background = "var(--purple)";
                alertText.style.color = "var(--white)";
            }
            alertText.textContent = playersInTheGameRandomPlayer + " start the game";
            function whoStartPlay() {
                if (playersInTheGameRandomPlayer === "Player 1") {
                    playerStatus = "Playing";
                    houseStatus = "Waiting";
                    setTimeout(changeToPlayer, 2000);
                } else if (playersInTheGameRandomPlayer === "The House") {
                    houseStatus = "Playing";
                    playerStatus = "Waiting";

                    setTimeout(changeToHouse, 2000);
                }
            }
            setTimeout(whoStartPlay, 2000);
        }
        setTimeout(showMeWhoPlay, 3000);
    }
    function startPlayerBtnFunction() {
        displayAlert.style.background = "var(--blue)";
        alertText.style.color = "var(--white)";
        alertText.textContent = "It's your turn, play wisely";
        whoStartBtnsOut();
        console.log("I'm starting my turn");
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        setTimeout(playerTurnStart, 4000);
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    function startHouseBtnFunction() {
        alertWhoStartBtnsContainer.classList.add("hide_btns");
        displayAlert.style.background = "var(--purple)";
        alertText.style.color = "var(--white)";
        alertText.textContent = "The house it's making his move";
        whoStartBtnsOut();
        console.log("The house it's playing");
        setTimeout(houseTurnStart, 4000);
    }
    function startRandomBtnFunction() {
        whoStartBtnsOut();
        giveMeRandom();
    }
    function playerTurnStart() {
        alertAceBtnsContainer.classList.add("hide_btns");
        alertWhoStartBtnsContainer.classList.add("hide_btns");
        giveMeBtnsContainer.classList.remove("hide_btns");

        displayAlertOut();
        playerBtnsIn();

        console.log("It's my turn bitches");
    }
    function houseTurnStart() {
        displayAlertOut();
        alertWhoStartBtnsContainer.classList.add("hide_btns");
        giveMeBtnsContainer.classList.add("hide_btns");

        playerBtnsOut();

        console.log("It's the house turn");

        setTimeout(houseTakeACard, 4000);
    }
    function playerBtnsOut() {
        giveMeBtn.removeEventListener("click", playerTakeACard);
        giveMeBtn.style.cursor = "default";
        doneBtn.removeEventListener("click", doneBtnPlayer);
        doneBtn.style.cursor = "default";
    }
    function playerBtnsIn() {
        giveMeBtn.addEventListener("click", playerTakeACard);
        doneBtn.addEventListener("click", doneBtnPlayer);
    }
    function whoStartBtnsOut() {
        startPlayerBtn.removeEventListener("click", startPlayerBtnFunction);
        startPlayerBtn.style.cursor = "default";
        startHouseBtn.removeEventListener("click", startHouseBtnFunction);
        startHouseBtn.style.cursor = "default";
        startRandomBtn.removeEventListener("click", startRandomBtnFunction);
        startRandomBtn.style.cursor = "default";
    }
    function whoStartBtnsIn() {
        startPlayerBtn.addEventListener("click", startPlayerBtnFunction);
        startHouseBtn.addEventListener("click", startHouseBtnFunction);
        startRandomBtn.addEventListener("click", startRandomBtnFunction);
    }
    function aceBtnOne() {
        alertAceBtnsContainer.classList.add("hide_btns");
        playerStatus = "Turn over";
        currentValue = 1;
        sumOfPlayerCards += currentValue;
        playerCardScore.textContent = sumOfPlayerCards;
        console.log(" Turn " + playerTurn + ", sum " + sumOfPlayerCards + "The player take a " + currentValue);
        displayAlertIn();
        displayAlert.style.background = "var(--purple)";
        alertText.style.color = "var(--white)";
        alertText.textContent = "It's the house turn";

        if (sumOfPlayerCards < 21) {
            setTimeout(changeToHouse, 4000);
        } else {
            finalPlayerCheckPoint();
        }
    }
    function aceBtnEleven() {
        alertAceBtnsContainer.classList.add("hide_btns");
        playerStatus = "Turn over";
        currentValue = 11;
        sumOfPlayerCards += currentValue;
        playerCardScore.textContent = sumOfPlayerCards;
        displayAlertIn();
        displayAlert.style.background = "var(--purple)";
        alertText.style.color = "var(--white)";
        alertText.textContent = "It's the house turn";

        if (sumOfPlayerCards < 21) {
            setTimeout(changeToHouse, 4000);
        } else {
            finalPlayerCheckPoint();
        }
    }
    function finalPlayerCheckPoint() {
        if (sumOfPlayerCards < 21) {
            playerStatus = "Turn Over";
            houseStatus = "Waiting";
            displayAlertIn();
            displayAlert.style.background = "var(--purple)";
            alertText.style.color = "var(--white)";
            alertText.textContent = "It's the house turn";
            setTimeout(changeToHouse, 4000);
        } else if (sumOfPlayerCards === 21 && playerTurn === 2) {
            playerStatus = "Winer";
            houseStatus = "Loser";
            displayAlertIn();
            alertAceBtnsContainer.classList.add("hide_btns");
            giveMeBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");
            displayAlert.style.background = "var(--turquoise)";
            alertText.style.color = "var(--white)";
            alertText.textContent = "you got blackjack, you win";
        } else if (sumOfPlayerCards === 21 && playerTurn !== 2) {
            playerStatus = "Winer";
            HouseStatus = "Loser";
            displayAlertIn();
            alertAceBtnsContainer.classList.add("hide_btns");
            giveMeBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");
            displayAlert.style.background = "var(--green)";
            alertText.style.color = "var(--white)";
            alertText.textContent = "You got 21, you win";
        } else if (sumOfPlayerCards > 21) {
            playerStatus = "Loser";
            displayAlertIn();
            alertAceBtnsContainer.classList.add("hide_btns");
            giveMeBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");
            displayAlert.style.background = "var(--red)";
            alertText.style.color = "var(--white";
            alertText.textContent = "your a loser";
        }
    }
    function playerTakeACard() {
        giveMeBtnsContainer.classList.add("hide_btns");
        playerTurn++;
        playerTurnCount.textContent = playerTurn;

        const playerDeckArray = [
            {
                player: "Player",
                name: "Ace of hearts",
                type: "hearts",
                icon: "A",
                value: 1,
                img: "./img/deck/hearts_Ace.png",
            },
            {
                player: "Player",
                name: "2 of hearts",
                type: "hearts",
                icon: 2,
                value: 2,
                img: "./img/deck/hearts_2.png",
            },
            {
                player: "Player",
                name: "3 of hearts",
                type: "hearts",
                icon: 3,
                value: 3,
                img: "./img/deck/hearts_3.png",
            },
            {
                player: "Player",
                name: "4 of hearts",
                type: "hearts",
                icon: 4,
                value: 4,
                img: "./img/deck/hearts_4.png",
            },
            {
                player: "Player",
                name: "5 of hearts",
                type: "hearts",
                icon: 5,
                value: 5,
                img: "./img/deck/hearts_5.png",
            },
            {
                player: "Player",
                name: "6 of hearts",
                type: "hearts",
                icon: 6,
                value: 6,
                img: "./img/deck/hearts_6.png",
            },
            {
                player: "Player",
                name: "7 of hearts",
                type: "hearts",
                icon: 7,
                value: 7,
                img: "./img/deck/hearts_7.png",
            },
            {
                player: "Player",
                name: "8 of hearts",
                type: "hearts",
                icon: 8,
                value: 8,
                img: "./img/deck/hearts_8.png",
            },
            {
                player: "Player",
                name: "9 of hearts",
                type: "hearts",
                icon: 9,
                value: 9,
                img: "./img/deck/hearts_9.png",
            },
            {
                name: "10 of hearts",
                type: "hearts",
                icon: 10,
                value: 10,
                img: "./img/deck/hearts_10.png",
            },
            {
                player: "Player",
                name: "Jack of hearts",
                type: "hearts",
                icon: "J",
                value: 10,
                img: "./img/deck/hearts_Jack.png",
            },
            {
                player: "Player",
                name: "Queen of hearts",
                type: "hearts",
                icon: "Q",
                value: 10,
                img: "./img/deck/hearts_Queen.png",
            },
            {
                player: "Player",
                name: "King of hearts",
                type: "hearts",
                icon: "K",
                value: 10,
                img: "./img/deck/hearts_King.png",
            },
            {
                player: "Player",
                name: "Ace of spades",
                type: "spades",
                icon: "A",
                value: 1,
                img: "./img/deck/spades_Ace.png",
            },
            {
                player: "Player",
                name: "2 of spades",
                type: "spades",
                icon: 2,
                value: 2,
                img: "./img/deck/spades_2.png",
            },
            {
                player: "Player",
                name: "3 of spades",
                type: "spades",
                icon: 3,
                value: 3,
                img: "./img/deck/spades_3.png",
            },
            {
                player: "Player",
                name: "4 of spades",
                type: "spades",
                icon: 4,
                value: 4,
                img: "./img/deck/spades_4.png",
            },
            {
                player: "Player",
                name: "5 of spades",
                type: "spades",
                icon: 5,
                value: 5,
                img: "./img/deck/spades_5.png",
            },
            {
                player: "Player",
                name: "6 of spades",
                type: "spades",
                icon: 6,
                value: 6,
                img: "./img/deck/spades_6.png",
            },
            {
                player: "Player",
                name: "7 of spades",
                type: "spades",
                icon: 7,
                value: 7,
                img: "./img/deck/spades_7.png",
            },
            {
                player: "Player",
                name: "8 of spades",
                type: "spades",
                icon: 8,
                value: 8,
                img: "./img/deck/spades_8.png",
            },
            {
                player: "Player",
                name: "9 of spades",
                type: "spades",
                icon: 9,
                value: 9,
                img: "./img/deck/spades_9.png",
            },

            {
                player: "Player",
                name: "10 of spades",
                type: "spades",
                icon: 10,
                value: 10,
                img: "./img/deck/spades_10.png",
            },
            {
                player: "Player",
                name: "Jack of spades",
                type: "spades",
                icon: "J",
                value: 10,
                img: "./img/deck/spades_Jack.png",
            },
            {
                player: "Player",
                name: "Queen of spades",
                type: "spades",
                icon: "Q",
                value: 10,
                img: "./img/deck/spades_Queen.png",
            },
            {
                player: "Player",
                name: "King of spades",
                type: "spades",
                icon: "K",
                value: 10,
                img: "./img/deck/spades_king.png",
            },
            {
                player: "Player",
                name: "Ace of diamonds",
                type: "diamonds",
                icon: "A",
                value: 1,
                img: "./img/deck/diamonds_Ace.png",
            },
            {
                player: "Player",
                name: "2 of diamonds",
                type: "diamonds",
                icon: 2,
                value: 2,
                img: "./img/deck/diamonds_2.png",
            },
            {
                player: "Player",
                name: "3 of diamonds",
                type: "diamonds",
                icon: 3,
                value: 3,
                img: "./img/deck/diamonds_3.png",
            },
            {
                player: "Player",
                name: "4 of diamonds",
                type: "diamonds",
                icon: 4,
                value: 4,
                img: "./img/deck/diamonds_4.png",
            },
            {
                player: "Player",
                name: "5 of diamonds",
                type: "diamonds",
                icon: 5,
                value: 5,
                img: "./img/deck/diamonds_5.png",
            },
            {
                player: "Player",
                name: "6 of diamonds",
                type: "diamonds",
                icon: 6,
                value: 6,
                img: "./img/deck/diamonds_6.png",
            },
            {
                player: "Player",
                name: "7 of diamonds",
                type: "diamonds",
                icon: 7,
                value: 7,
                img: "./img/deck/diamonds_7.png",
            },
            {
                player: "Player",
                name: "8 of diamonds",
                type: "diamonds",
                icon: 8,
                value: 8,
                img: "./img/deck/diamonds_8.png",
            },
            {
                player: "Player",
                name: "9 of diamonds",
                type: "diamonds",
                icon: 9,
                value: 9,
                img: "./img/deck/diamonds_9.png",
            },
            {
                player: "Player",
                name: "10 of diamonds",
                type: "diamonds",
                icon: 10,
                value: 10,
                img: "./img/deck/diamonds_10.png",
            },
            {
                player: "Player",
                name: "Jack of diamonds",
                type: "diamonds",
                icon: "J",
                value: 10,
                img: "./img/deck/diamonds_Jack.png",
            },
            {
                player: "Player",
                name: "Queen of diamonds",
                type: "diamonds",
                icon: "Q",
                value: 10,
                img: "./img/deck/diamonds_Queen.png",
            },
            {
                player: "Player",
                name: "King of diamonds",
                type: "diamonds",
                icon: "K",
                value: 10,
                img: "./img/deck/diamonds_King.png",
            },
            {
                player: "Player",
                name: "Ace of clubs",
                type: "clubs",
                icon: "A",
                value: 1,
                img: "./img/deck/clubs_Ace.png",
            },
            {
                player: "Player",
                name: "2 of clubs",
                type: "clubs",
                icon: 2,
                value: 2,
                img: "./img/deck/clubs_2.png",
            },
            {
                player: "Player",
                name: "3 of clubs",
                type: "clubs",
                icon: 3,
                value: 3,
                img: "./img/deck/clubs_3.png",
            },
            {
                player: "Player",
                name: "4 of clubs",
                type: "clubs",
                icon: 4,
                value: 4,
                img: "./img/deck/clubs_4.png",
            },
            {
                player: "Player",
                name: "5 of clubs",
                type: "clubs",
                icon: 5,
                value: 5,
                img: "./img/deck/clubs_5.png",
            },
            {
                player: "Player",
                name: "6 of clubs",
                type: "clubs",
                icon: 6,
                value: 6,
                img: "./img/deck/clubs_6.png",
            },
            {
                player: "Player",
                name: "7 of clubs",
                type: "clubs",
                icon: 7,
                value: 7,
                img: "./img/deck/clubs_7.png",
            },
            {
                player: "Player",
                name: "8 of clubs",
                type: "clubs",
                icon: 8,
                value: 8,
                img: "./img/deck/clubs_8.png",
            },
            {
                player: "Player",
                name: "9 of clubs",
                type: "clubs",
                icon: 9,
                value: 9,
                img: "./img/deck/clubs_9.png",
            },
            {
                player: "Player",
                name: "10 of clubs",
                type: "clubs",
                icon: 10,
                value: 10,
                img: "./img/deck/clubs_10.png",
            },
            {
                player: "Player",
                name: "Jack of clubs",
                type: "clubs",
                icon: "J",
                value: 10,
                img: "./img/deck/clubs_Jack.png",
            },
            {
                player: "Player",
                name: "Queen of clubs",
                type: "clubs",
                icon: "Q",
                value: 10,
                img: "./img/deck/clubs_Queen.png",
            },
            {
                player: "Player",
                name: "King of clubs",
                type: "clubs",
                icon: "K",
                value: 10,
                img: "./img/deck/clubs_King.png",
            },
        ];

        const playerDeckArrayCopy = [...playerDeckArray];
        const playerDeckLengthRandom = Math.random() * playerDeckArrayCopy.length;
        const playerDeckRandomNumber = Math.floor(playerDeckLengthRandom);
        const playerRandomCardArray = playerDeckArrayCopy[playerDeckRandomNumber];

        const playerRandomCardArrayValue = playerRandomCardArray.value;
        const playerRandomCardArrayIcon = playerRandomCardArray.icon;
        const playerRandomCardArrayName = playerRandomCardArray.name;
        const playerRandomCardArrayImg = playerRandomCardArray.img;
        const playerRandomCardArrayType = playerRandomCardArray.type;
        console.log(playerRandomCardArray);
        cardPlayerDisplay.setAttribute("src", playerRandomCardArrayImg);
        playerCardGameName.textContent = playerRandomCardArrayName;
        playerCardGive.textContent = playerRandomCardArrayIcon;

        //*formula que distingue los aces de las demas cartas
        if (playerRandomCardArrayValue === 1) {
            displayAlertIn();
            displayAlert.style.background = "var(--turquoise)";
            alertText.style.color = "var(--white)";
            alertText.textContent = "you got an " + playerRandomCardArrayName + " how many poits you want?";
            giveMeBtnsContainer.classList.add("hide_btns");
            alertWhoStartBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.add("hide_btns");
            alertAceBtnsContainer.classList.remove("hide_btns");
        } else {
            sumOfPlayerCards += playerRandomCardArrayValue;
            playerCardScore.textContent = sumOfPlayerCards;
            setTimeout(finalPlayerCheckPoint, 1500);
        }

        function finalPlayerCheckPoint() {
            if (sumOfPlayerCards < 21) {
                playerStatus = "Turn Over";
                houseStatus = "Waiting";
                console.log(playerStatus);
                console.log("Turn " + playerTurn + ",Sum " + sumOfPlayerCards + ", you take an a " + playerRandomCardArrayName);
                displayAlertIn();
                displayAlert.style.background = "var(--purple)";
                alertText.style.color = "var(--white)";
                alertText.textContent = "It's the house turn";

                setTimeout(changeToHouse, 4000);
            } else if (sumOfPlayerCards === 21 && playerTurn === 2) {
                playerStatus = "Winer";
                HouseStatus = "Loser";
                displayAlertIn();
                alertAceBtnsContainer.classList.add("hide_btns");
                giveMeBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");
                displayAlert.style.background = "var(--turquoise)";

                alertText.style.color = "var(--black)";

                alertText.textContent = "you got blackjack,you win";
            } else if (sumOfPlayerCards === 21 && playerTurn !== 2) {
                playerStatus = "Winer";
                HouseStatus = "Loser";
                displayAlertIn();

                alertAceBtnsContainer.classList.add("hide_btns");
                giveMeBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");
                displayAlert.style.background = "var(--green)";

                alertText.style.color = "var(--white)";

                alertText.textContent = "You got 21, you win";

                console.log(houseStillPlay);
                console.log(houseStatus);
                console.log(playerStillPlay);
                console.log(playerStatus);
                console.log("blackjack, your a Winer");
            } else if (sumOfPlayerCards > 21) {
                playerStatus = "Loser";
                displayAlertIn();

                alertAceBtnsContainer.classList.add("hide_btns");
                giveMeBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");

                displayAlert.style.background = "var(--red)";
                alertText.style.color = "var(--white";
                alertText.textContent = "your a loser";
                console.log(playerStatus);
                console.log("Your a loser, you take to much cards");
            }
        }
    }
    function houseTakeACard() {
        displayAlertOut();
        houseTurn++;
        houseTurnCount.textContent = houseTurn;

        const houseDeckArray = [
            {
                player: "House",
                name: "Ace of hearts",
                type: "hearts",
                icon: "A",
                value: 1,
                img: "./img/deck/hearts_Ace_House.png",
            },
            {
                player: "House",
                name: "2 of hearts",
                type: "hearts",
                icon: 2,
                value: 2,
                img: "./img/deck/hearts_2_House.png",
            },
            {
                player: "House",
                name: "3 of hearts",
                type: "hearts",
                icon: 3,
                value: 3,
                img: "./img/deck/hearts_3_House.png",
            },
            {
                player: "House",
                name: "4 of hearts",
                type: "hearts",
                icon: 4,
                value: 4,
                img: "./img/deck/hearts_4_House.png",
            },
            {
                player: "House",
                name: "5 of hearts",
                type: "hearts",
                icon: 5,
                value: 5,
                img: "./img/deck/hearts_5_House.png",
            },
            {
                player: "House",
                name: "6 of hearts",
                type: "hearts",
                icon: 6,
                value: 6,
                img: "./img/deck/hearts_6_House.png",
            },
            {
                player: "House",
                name: "7 of hearts",
                type: "hearts",
                icon: 7,
                value: 7,
                img: "./img/deck/hearts_7_House.png",
            },
            {
                player: "House",
                name: "8 of hearts",
                type: "hearts",
                icon: 8,
                value: 8,
                img: "./img/deck/hearts_8_House.png",
            },
            {
                player: "House",
                name: "9 of hearts",
                type: "hearts",
                icon: 9,
                value: 9,
                img: "./img/deck/hearts_9_House.png",
            },
            {
                player: "House",
                name: "10 of hearts",
                type: "hearts",
                icon: 10,
                value: 10,
                img: "./img/deck/hearts_10_House.png",
            },
            {
                player: "House",
                name: "Jack of hearts",
                type: "hearts",
                icon: "J",
                value: 10,
                img: "./img/deck/hearts_Jack_House.png",
            },
            {
                player: "House",
                name: "Queen of hearts",
                type: "hearts",
                icon: "Q",
                value: 10,
                img: "./img/deck/hearts_Queen_House.png",
            },
            {
                player: "House",
                name: "King of hearts",
                type: "hearts",
                icon: "K",
                value: 10,
                img: "./img/deck/hearts_King_House.png",
            },
            {
                player: "House",
                name: "Ace of spades",
                type: "spades",
                icon: "A",
                value: 1,
                img: "./img/deck/spades_Ace_House.png",
            },
            {
                player: "House",
                name: "2 of spades",
                type: "spades",
                icon: 2,
                value: 2,
                img: "./img/deck/spades_2_House.png",
            },
            {
                player: "House",
                name: "3 of spades",
                type: "spades",
                icon: 3,
                value: 3,
                img: "./img/deck/spades_3_House.png",
            },
            {
                player: "House",
                name: "4 of spades",
                type: "spades",
                icon: 4,
                value: 4,
                img: "./img/deck/spades_4_House.png",
            },
            {
                player: "House",
                name: "5 of spades",
                type: "spades",
                icon: 5,
                value: 5,
                img: "./img/deck/spades_5_House.png",
            },
            {
                player: "House",
                name: "6 of spades",
                type: "spades",
                icon: 6,
                value: 6,
                img: "./img/deck/spades_6_House.png",
            },
            {
                player: "House",
                name: "7 of spades",
                type: "spades",
                icon: 7,
                value: 7,
                img: "./img/deck/spades_7_House.png",
            },
            {
                player: "House",
                name: "8 of spades",
                type: "spades",
                icon: 8,
                value: 8,
                img: "./img/deck/spades_8_House.png",
            },
            {
                player: "House",
                name: "9 of spades",
                type: "spades",
                icon: 9,
                value: 9,
                img: "./img/deck/spades_9_House.png",
            },
            {
                player: "House",
                name: "10 of spades",
                type: "spades",
                icon: 10,
                value: 10,
                img: "./img/deck/spades_10_House.png",
            },
            {
                player: "House",
                name: "Jack of spades",
                type: "spades",
                icon: "J",
                value: 10,
                img: "./img/deck/spades_Jack_House.png",
            },
            {
                player: "House",
                name: "Queen of spades",
                type: "spades",
                icon: "Q",
                value: 10,
                img: "./img/deck/spades_Queen_House.png",
            },
            {
                player: "House",
                name: "King of spades",
                type: "spades",
                icon: "K",
                value: 10,
                img: "./img/deck/spades_King_House.png",
            },
            {
                player: "House",
                name: "Ace of diamonds",
                type: "diamonds",
                icon: "A",
                value: 1,
                img: "./img/deck/diamons_Ace_House.png",
            },
            {
                player: "House",
                name: "2 of diamonds",
                type: "diamonds",
                icon: 2,
                value: 2,
                img: "./img/deck/diamons_2_House.png",
            },
            {
                player: "House",
                name: "3 of diamonds",
                type: "diamonds",
                icon: 3,
                value: 3,
                img: "./img/deck/diamons_3_House.png",
            },
            {
                player: "House",
                name: "4 of diamonds",
                type: "diamonds",
                icon: 4,
                value: 4,
                img: "./img/deck/diamons_4_House.png",
            },
            {
                player: "House",
                name: "5 of diamonds",
                type: "diamonds",
                icon: 5,
                value: 5,
                img: "./img/deck/diamons_5_House.png",
            },
            {
                player: "House",
                name: "6 of diamonds",
                type: "diamonds",
                icon: 6,
                value: 6,
                img: "./img/deck/diamons_6_House.png",
            },
            {
                player: "House",
                name: "7 of diamonds",
                type: "diamonds",
                icon: 7,
                value: 7,
                img: "./img/deck/diamons_7_House.png",
            },
            {
                player: "House",
                name: "8 of diamonds",
                type: "diamonds",
                icon: 8,
                value: 8,
                img: "./img/deck/diamons_8_House.png",
            },
            {
                player: "House",
                name: "9 of diamonds",
                type: "diamonds",
                icon: 9,
                value: 9,
                img: "./img/deck/diamons_9_House.png",
            },
            {
                player: "House",
                name: "10 of diamonds",
                type: "diamonds",
                icon: 10,
                value: 10,
                img: "./img/deck/diamons_10_House.png",
            },
            {
                player: "House",
                name: "Jack of diamonds",
                type: "diamonds",
                icon: "J",
                value: 10,
                img: "./img/deck/diamons_Jack_House.png",
            },
            {
                player: "House",
                name: "Queen of diamonds",
                type: "diamonds",
                icon: "Q",
                value: 10,
                img: "./img/deck/diamons_Queen_House.png",
            },
            {
                player: "House",
                name: "King of diamonds",
                type: "diamonds",
                icon: "K",
                value: 10,
                img: "./img/deck/diamons_King_House.png",
            },
            {
                player: "House",
                name: "Ace of clubs",
                type: "clubs",
                icon: "A",
                value: 1,
                img: "./img/deck/clubs_Ace_House.png",
            },
            {
                player: "House",
                name: "2 of clubs",
                type: "clubs",
                icon: 2,
                value: 2,
                img: "./img/deck/clubs_2_House.png",
            },
            {
                player: "House",
                name: "3 of clubs",
                type: "clubs",
                icon: 3,
                value: 3,
                img: "./img/deck/clubs_3_House.png",
            },
            {
                player: "House",
                name: "4 of clubs",
                type: "clubs",
                icon: 4,
                value: 4,
                img: "./img/deck/clubs_4_House.png",
            },
            {
                player: "House",
                name: "5 of clubs",
                type: "clubs",
                icon: 5,
                value: 5,
                img: "./img/deck/clubs_5_House.png",
            },
            {
                player: "House",
                name: "6 of clubs",
                type: "clubs",
                icon: 6,
                value: 6,
                img: "./img/deck/clubs_6_House.png",
            },
            {
                player: "House",
                name: "7 of clubs",
                type: "clubs",
                icon: 7,
                value: 7,
                img: "./img/deck/clubs_7_House.png",
            },
            {
                player: "House",
                name: "8 of clubs",
                type: "clubs",
                icon: 8,
                value: 8,
                img: "./img/deck/clubs_8_House.png",
            },
            {
                player: "House",
                name: "9 of clubs",
                type: "clubs",
                icon: 9,
                value: 9,
                img: "./img/deck/clubs_9_House.png",
            },
            {
                player: "House",
                name: "10 of clubs",
                type: "clubs",
                icon: 10,
                value: 10,
                img: "./img/deck/clubs_10_House.png",
            },

            {
                player: "House",
                name: "Jack of clubs",
                type: "clubs",
                icon: "J",
                value: 10,
                img: "./img/deck/clubs_Jack_House.png",
            },
            {
                player: "House",
                name: "Queen of clubs",
                type: "clubs",
                icon: "Q",
                value: 10,
                img: "./img/deck/clubs_Queen_House.png",
            },

            {
                player: "House",
                name: "King of clubs",
                type: "clubs",
                icon: "K",
                value: 10,
                img: "./img/deck/clubs_King_House.png",
            },
        ];

        const houseDeckArrayCopy = [...houseDeckArray];
        //? console.log(houseDeckArrayCopy);
        const houseDeckLengthRandom = Math.random() * houseDeckArrayCopy.length;
        const houseDeckRandomNumber = Math.floor(houseDeckLengthRandom);
        //? console.log(houseDeckRandomNumber);
        const houseRandomCardArray = houseDeckArrayCopy[houseDeckRandomNumber];
        console.log(houseRandomCardArray);
        const houseRandomCardArrayValue = houseRandomCardArray.value;
        //? console.log(houseRandomCardArrayValue);
        const houseRandomCardArrayName = houseRandomCardArray.name;
        //?console.log('The house card is ' + houseRandomCardArrayName);
        const houseRandomCardArrayIcon = houseRandomCardArray.icon;
        //?console.log('The house card is ' + houseRandomCardArrayIcon);
        const houseRandomCardArrayImg = houseRandomCardArray.img;
        //? console.log(houseRandomCardArrayImg);
        const houseRandomCardArrayType = houseRandomCardArray.type;
        //? console.log(houseRandomCardArrayType);
        const aceCardValues = [
            1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
        ];
        const aceCardValuesRandomNumberLength = aceCardValues.length * Math.random();
        const aceCardValuesRandomNumber = Math.floor(aceCardValuesRandomNumberLength);
        const aceCardValuesRandomValue = aceCardValues[aceCardValuesRandomNumber];
        //?     console.log(aceCardValuesRandomValue);

        //*genera los datos generales basicos que se despliegan en el board de jugador
        //?Genera los datos de la imagen que se despliega
        cardHouseDisplay.setAttribute("src", houseRandomCardArrayImg);
        //?Genera los datos del nombre que sale debajo de la carta
        houseCardGameName.textContent = houseRandomCardArrayName;
        //?Genera los datos de el icono y numero de la carta
        houseCardGive.textContent = houseRandomCardArrayIcon;

        //*Operacion que verifica si la carta que salio a la casa es un Ace

        function pointOrPoints() {
            if (aceCardValuesRandomValue === 1) {
                return " point";
            } else {
                return " points";
            }
        }
        if (houseRandomCardArrayValue === 1) {
            //?QUITA EL CONTENEDOR DE BOTONES DE JUGADORES
            //TODO             CONTENEDORES DE BOTONES
            //?Quita el contenedor de botones giveMeDone
            giveMeBtnsContainer.classList.add("hide_btns");
            //*
            //?Quita el contenedor de botones whoStart
            alertWhoStartBtnsContainer.classList.add("hide_btns");
            //*

            //?Quita el contenedor de botones de Ace
            alertAceBtnsContainer.classList.add("hide_btns");
            //*

            //?Quita el contenedor de botones de newGame
            alertNewGameBtnsContainer.classList.add("hide_btns");
            //*
            //?Despliega la pantalla de alerta
            displayAlertIn();

            //?Le de careacteristicas de Display Ace - colores
            displayAlert.style.background = "var(--turquoise)";
            alertText.style.color = "var(--white)";

            //?escribe texto con caracteristicas de carta y mensaje de la casa sobre cuanto valdra
            alertText.textContent = "The house got an " + houseRandomCardArrayName + " and want " + aceCardValuesRandomValue + pointOrPoints();
            sumOfHouseCards += aceCardValuesRandomValue;
            houseCardGive.textContent = houseRandomCardArrayIcon;
            houseCardScore.textContent = sumOfHouseCards;
            console.log("Turn " + houseTurn + ", sum " + sumOfHouseCards + ", The house take a " + houseRandomCardArrayName + ", chose " + aceCardValuesRandomValue + pointOrPoints());
            setTimeout(displayAlertOut, 4000);
            setTimeout(finalHouseCheckPoint, 6000);
        } else {
            //? Suma el valor de la casrta a la suma de las cartas
            houseCardGive.textContent = houseRandomCardArrayIcon;
            sumOfHouseCards += houseRandomCardArrayValue;
            houseCardScore.textContent = sumOfHouseCards;
            setTimeout(finalHouseCheckPoint, 4000);
        }

        /*
         *funcion de check de puntos para la casa
         */

        function finalHouseCheckPoint() {
            //*Operacion que verifica la suma de las cartas
            if (sumOfHouseCards < 21) {
                //?Avisa que se sigue jugando
                houseStatus = "Turn Over";
                playerStatus = "Waiting";
                //?DESPLIEGA LA PANTALLA DE DISPLAY ALERT y le da color
                displayAlertIn();
                alertText.style.color = "var(--white)";
                displayAlert.style.background = "var(--blue)";
                //?pone mensaje de alerta
                alertText.textContent = "It's your turn";
                setTimeout(changeToPlayer, 4000);
                console.log("Turn " + houseTurn + ",Sum " + sumOfHouseCards + ", The house take a " + houseRandomCardArrayName);
            } else if (sumOfHouseCards === 21 && houseTurn === 2) {
                //?pone caracteristicas a los jugadores
                houseStillPlay = false;
                playerStillPlay = false;
                houseStatus = "Winer";
                PlayerStatus = "Loser";
                //? Despliega la pantalla de alerta
                displayAlertIn();

                //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore
                alertAceBtnsContainer.classList.add("hide_btns");
                giveMeBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");
                //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta ganaste
                displayAlert.style.background = "var(--red)";

                alertText.style.color = "var(--white";
                alertText.textContent = "You lose, The House got BlackJack";

                //? console.log(houseStillPlay);
                //? console.log(houseStatus);
                //? console.log(playerStillPlay);
                //? console.log(playerStatus);
                //? console.log('The house got Blackjack');
            } else if (sumOfHouseCards === 21 && houseStatus !== 2) {
                //?pone caracteristicas a los jugadores
                houseStillPlay = false;
                playerStillPlay = false;
                houseStatus = "Winer";
                PlayerStatus = "Loser";
                //? Despliega la pantalla de alerta
                displayAlertIn();

                //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore
                alertAceBtnsContainer.classList.add("hide_btns");
                giveMeBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");
                //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta ganaste
                displayAlert.style.background = "var(--red)";

                alertText.style.color = "var(--white";
                alertText.textContent = "The House got 21";

                //? console.log(houseStillPlay);
                //? console.log(houseStatus);
                //? console.log(playerStillPlay);
                //? console.log(playerStatus);
                //? console.log('The house got Blackjack');
            } else if (sumOfHouseCards > 21) {
                //?pone caracteristicas a los jugadores
                houseStatus = "Loser";
                playerStatus = "Winer";
                houseStillPlay = false;
                playerStillPlay = false;

                //? Despliega la pantalla de alerta
                displayAlertIn();

                //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore

                giveMeBtnsContainer.classList.add("hide_btns");
                alertAceBtnsContainer.classList.add("hide_btns");
                alertNewGameBtnsContainer.classList.remove("hide_btns");

                //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta perdiste
                displayAlert.style.background = "var(--lightGreen)";
                alertText.style.color = "var(--white";
                alertText.textContent = "your a Winer, the house take to much";

                //? console.log(houseStillPlay);
                //? console.log(houseStatus);
                //? console.log(playerStillPlay);
                //? console.log(playerStatus);
                //? console.log('Your a loser');
            }
        }
    }
    /*
     *      FUNCION DE BOTON DE DONE - QUITA COMPORTAMIENTO DE BOTONES TERMINA TURNO Y CAMBIA STATUS
     */

    function doneBtnPlayer() {
        //?da caracteristicas a la ventana de display alerta
        displayAlert.style.background = "var(--yellow)";
        alertText.style.color = "var(--black)";
        alertText.textContent = "You are done, no more cards for you";
        //? DA CARACTERISTICAS AL JUGADOR DE QUE NO VA A SEGUIR JUGANDO
        playerStillPlay = false;
        playerStatus = "No more cards";

        //?Quita el contenedor de botones giveMeDone
        giveMeBtnsContainer.classList.add("hide_btns");
        //? PONE DISPLAY DE ALERTA CON MENSAJE
        displayAlertIn();
        //? CAMBIA AL TURNO DE LA CASA
        setTimeout(changeToHouse, 4000);
    }
    /*
     *FUCION QUE REVISA EN CASO DE QUE LOS DOS JUGADORES TERMINEN DE TOMAR, DA RESPUESTA DE GANADOR
     */
    function checkForDobleFalse() {
        console.log("checando por doble falso activo");
        if (sumOfPlayerCards > sumOfHouseCards) {
            //?pone caracteristicas a los jugadores
            houseStatus = "Loser";
            playerStatus = "Winer";
            playerStillPlay = false;

            //? Despliega la pantalla de alerta
            displayAlertIn();

            //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore

            giveMeBtnsContainer.classList.add("hide_btns");
            alertAceBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");

            //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta perdiste
            displayAlert.style.background = "var(--lightGreen)";
            alertText.style.color = "var(--white";
            alertText.textContent = "your a Winer, the house is done and you have better hand";

            //? console.log(houseStillPlay);
            //? console.log(houseStatus);
            //? console.log(playerStillPlay);
            //? console.log(playerStatus);
            console.log("Your a Winer, keep do in it like this");
        } else if (sumOfHouseCards > sumOfPlayerCards) {
            //?pone caracteristicas a los jugadores

            playerStillPlay = false;
            houseStatus = "Winer";
            PlayerStatus = "Loser";
            //? Despliega la pantalla de alerta
            displayAlertIn();

            //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore
            alertAceBtnsContainer.classList.add("hide_btns");
            giveMeBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");
            //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta ganaste
            displayAlert.style.background = "var(--red)";

            alertText.style.color = "var(--white";
            alertText.textContent = "The House was more smart";

            //? console.log(houseStillPlay);
            //? console.log(houseStatus);
            //? console.log(playerStillPlay);
            //? console.log(playerStatus);
            console.log("The house think his game better, win for points");
        } else if (sumOfHouseCards === sumOfPlayerCards) {
            //?pone caracteristicas a los jugadores

            playerStillPlay = false;
            houseStatus = "Winer";
            PlayerStatus = "Loser";
            //? Despliega la pantalla de alerta
            displayAlertIn();

            //?Quita los botones de Ace en caso de que esten activados y pone los botones de NewGame, giveMe done y LearnMore
            alertAceBtnsContainer.classList.add("hide_btns");
            giveMeBtnsContainer.classList.add("hide_btns");
            alertNewGameBtnsContainer.classList.remove("hide_btns");
            //?si ganas se dan las caracteristicas diguientes a la pantalla de alerta - alerta ganaste
            displayAlert.style.background = "var(--red)";

            alertText.style.color = "var(--white";
            alertText.textContent = "Both have the same points, the house wins";

            //? console.log(houseStillPlay);
            //? console.log(houseStatus);
            //? console.log(playerStillPlay);
            //? console.log(playerStatus);
            console.log("Both have the same points, the house wins");
        }
    }
    function displayAlertOut() {
        //?REINICIA LA PANTALLA DE ALERT DISPLAY
        displayAlert.style.top = "100%";
        displayAlert.style.transition = "all 1s ease-in-out";
    }
    function displayAlertIn() {
        //?REINICIA LA PANTALLA DE ALERT DISPLAY
        displayAlert.style.top = "1rem";
        displayAlert.style.transition = "all 1s ease-in-out";
    }
    /*
     *FUCION QUE REVISA EN CASO DE QUE LA CASA TENGA MAS DE 12 PUNTOS TOMA LA DECICION DE SEGUIR TOMANDO CARTAS
     */
    function checkForDecition() {
        //*FUNCION PARA UNA RESPUESTA AUTOMATICA DE DECICIONES SEGUN SUMA DE PUNTOS

        function detectionPro() {
            //* array de respuesta pro de la casa a si continua su juego
            const decitionsArrayPro = [
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ];
            //? constantes de creacion de decicion random
            const decitionsArrayProLengthNumber = decitionsArrayPro.length * Math.random();
            const decitionsArrayProRandomNumber = Math.floor(decitionsArrayProLengthNumber);
            //?console.log(decitionsArrayRandomNumber);
            const decitionsArrayProRandomDecition = decitionsArrayPro[decitionsArrayProRandomNumber];
            console.log("Pro " + decitionsArrayProRandomDecition);

            if (decitionsArrayProRandomDecition === true) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--white)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's taking a card";

                setTimeout(displayAlertOut, 4000);
                setTimeout(houseTakeACard, 6000);
            } else if (houseStillPlay === false && playerStillPlay === false) {
                checkForDobleFalse();
            } else if (houseStillPlay === false && playerStillPlay !== false) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--yellow)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's already done";
                setTimeout(changeToPlayer, 4000);
            } else if (decitionsArrayProRandomDecition === false) {
                houseStillPlay = decitionsArrayProRandomDecition;
                houseStatus = "No more cards";

                console.log("The House status= " + houseStatus);
                console.log("The house is not take more cards by pro, decition the game house still play " + decitionsArrayProRandomDecition);

                //?pone el display alert con la desicion de la casa
                displayAlertIn();
                displayAlert.style.background = "var(--yellow)";
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's no longer in the game";
                setTimeout(changeToPlayer, 4000);
            }
        }

        function detectionInter() {
            //* array de respuesta intermedia de la casa a si continua su juego
            const decitionsArrayInter = [
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ];
            //? constantes de creacion de decicion random
            const decitionsArrayInterLengthNumber = decitionsArrayInter.length * Math.random();
            const decitionsArrayInterRandomNumber = Math.floor(decitionsArrayInterLengthNumber);
            //?console.log(decitionsArrayRandomNumber);
            const decitionsArrayInterRandomDecition = decitionsArrayInter[decitionsArrayInterRandomNumber];
            console.log("Inter " + decitionsArrayInterRandomDecition);

            if (decitionsArrayInterRandomDecition === true) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--white)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's taking a card";

                setTimeout(displayAlertOut, 4000);
                setTimeout(houseTakeACard, 6000);
            } else if (houseStillPlay === false && playerStillPlay === false) {
                checkForDobleFalse();
            } else if (houseStillPlay === false && playerStillPlay !== false) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--yellow)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's already done";
                setTimeout(changeToPlayer, 4000);
            } else if (decitionsArrayInterRandomDecition === false) {
                houseStillPlay = decitionsArrayInterRandomDecition;
                houseStatus = "No more cards";

                console.log("The House status= " + houseStatus);
                console.log("The house is not take more cards by inter, decition the game house still play " + decitionsArrayInterRandomDecition);
                //?pone el display alert con la desicion de la casa
                displayAlertIn();
                displayAlert.style.background = "var(--yellow)";
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's no longer in the game";
                setTimeout(changeToPlayer, 4000);
            }
        }

        function detectionBasic() {
            //? array de respuesta basicade la casa a si continua su juego
            const decitionsArrayBasic = [
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
            ];
            //? constantes de creacion de decicion random
            const decitionsArrayBasicLengthNumber = decitionsArrayBasic.length * Math.random();
            const decitionsArrayBasicRandomNumber = Math.floor(decitionsArrayBasicLengthNumber);
            //?console.log(decitionsArrayRandomNumber);
            const decitionsArrayBasicRandomDecition = decitionsArrayBasic[decitionsArrayBasicRandomNumber];
            console.log("Basic " + decitionsArrayBasicRandomDecition);

            if (decitionsArrayBasicRandomDecition === true) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--white)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's taking a card";

                setTimeout(displayAlertOut, 4000);
                setTimeout(houseTakeACard, 6000);
            } else if (houseStillPlay === false && playerStillPlay === false) {
                checkForDobleFalse();
            } else if (houseStillPlay === false && playerStillPlay !== false) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--yellow)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's already done";
                setTimeout(changeToPlayer, 4000);
            } else if (decitionsArrayBasicRandomDecition === false) {
                houseStillPlay = decitionsArrayBasicRandomDecition;
                houseStatus = "No more cards";

                console.log("The House status= " + houseStatus);
                console.log("The house is not take more cards by basic, decition the game house still play " + decitionsArrayBasicRandomDecition);

                //?pone el display alert con la desicion de la casa
                displayAlertIn();
                displayAlert.style.background = "var(--yellow)";
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's no longer in the game";
                setTimeout(changeToPlayer, 4000);
            }
        }

        function detectionSuperBasic() {
            //? array de respuesta super basica de la casa a si continua su juego
            const decitionsArraySuperBasic = [false, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, false, true, true, true, true];
            //? constantes de creacion de decicion random
            const decitionsArraySuperBasicLengthNumber = decitionsArraySuperBasic.length * Math.random();
            const decitionsArraySuperBasicRandomNumber = Math.floor(decitionsArraySuperBasicLengthNumber);
            //?console.log(decitionsArraySuperBasicRandomNumber);
            const decitionsArraySuperBasicRandomDecition = decitionsArraySuperBasic[decitionsArraySuperBasicRandomNumber];
            console.log("SuperBasic " + decitionsArraySuperBasicRandomDecition);

            if (decitionsArraySuperBasicRandomDecition === true) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--white)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's taking a card";

                setTimeout(displayAlertOut, 4000);
                setTimeout(houseTakeACard, 6000);
            } else if (houseStillPlay === false && playerStillPlay === false) {
                checkForDobleFalse();
            } else if (houseStillPlay === false && playerStillPlay !== false) {
                //?REINICIA LA PANTALLA DE ALERT DISPLAY
                displayAlert.style.background = "var(--yellow)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's already done";
                setTimeout(changeToPlayer, 4000);
            } else if (decitionsArraySuperBasicRandomDecition === false) {
                //?pone caracteristicas de jugador
                houseStillPlay = decitionsArraySuperBasicRandomDecition;
                houseStatus = "No more cards";
                //?avisa por consola la decicion de la casa
                console.log("The House status= " + houseStatus);
                console.log("The house is not take more cards by super basic, decition the game house still play " + decitionsArraySuperBasicRandomDecition);
                //?pone el display alert con la desicion de la casa
                displayAlertIn();
                displayAlert.style.background = "var(--yellow)";
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's no longer in the game";
                setTimeout(changeToPlayer, 4000);
            }
        }

        if (sumOfHouseCards >= 19) {
            detectionPro();
        } else if (sumOfHouseCards >= 17) {
            detectionInter();
        } else if (sumOfHouseCards >= 15) {
            detectionBasic();
        } else if (sumOfHouseCards >= 12) {
            detectionSuperBasic();
        } else if (sumOfHouseCards < 12) {
            //?REINICIA LA PANTALLA DE ALERT DISPLAY
            displayAlert.style.background = "var(--white)";
            displayAlertIn();
            alertText.style.color = "var(--black)";
            //?Pone textos a la pantalla de alert
            alertText.textContent = "The house it's taking a card";
            setTimeout(displayAlertOut, 4000);
            setTimeout(houseTakeACard, 6000);
        }
    }

    /*
     *FUNCION QUE REVISA SI LA CASA DEJA DE JUGAR DESPUES DE CIRTA SUMA DE PUNTOS
     */
    //!
    function changeToHouse() {
        //?Quita el contenedor de botones giveMeDone
        giveMeBtnsContainer.classList.add("hide_btns");
        //?REINICIA LA PANTALLA DE ALERT DISPLAY
        displayAlert.style.background = "var(--yellow)";
        displayAlertIn();
        alertText.style.color = "var(--black)";
        //?Pone textos a la pantalla de alert

        //?PONE MENSAJE
        alertText.textContent = "Wait for the house play";

        if (houseStillPlay === true) {
            setTimeout(checkForDecition, 3000);
        } else if (houseStillPlay === false && playerStillPlay !== false) {
            //?REINICIA LA PANTALLA DE ALERT DISPLAY
            function houseDone() {
                displayAlert.style.background = "var(--yellow)";
                displayAlertIn();
                alertText.style.color = "var(--black)";
                //?Pone textos a la pantalla de alert
                alertText.textContent = "The house it's already done";
            }
            setTimeout(houseDone, 4000);
            setTimeout(changeToPlayer, 6000);
        } else if (houseStillPlay === false && playerStillPlay === false) {
            checkForDobleFalse();
        }
    }
    /*
     *Funcion que que cambia el turno al jugador
     */
    //!
    function changeToPlayer() {
        //!!!!!!!!

        if (playerStillPlay === true) {
            giveMeBtnsContainer.classList.remove("hide_btns");

            displayAlertOut();
            playerBtnsIn();
        } else if (houseStillPlay === false && playerStillPlay === false) {
            checkForDobleFalse();
        } else if (playerStillPlay === false && houseStillPlay !== false) {
            //?REINICIA LA PANTALLA DE ALERT DISPLAY
            displayAlert.style.background = "var(--yellow)";
            displayAlertIn();
            alertText.style.color = "var(--black)";
            //?Pone textos a la pantalla de alert
            alertText.textContent = "You'r already done";
            setTimeout(changeToHouse, 4000);
        }
    }
    function reStartWhoPlay() {
        alertNewGameBtnsContainer.classList.add("hide_btns");
        alertWhoStartBtnsContainer.classList.remove("hide_btns");
        displayAlert.style.background = "var(--white)";
        alertText.style.color = "var(--black)";
        alertText.textContent = "Who starts?";
        console.log("The table it's clear, we start a new game");
        whoStartBtnsIn();
        countWinAndLostGames();
        newGame();
    }
    function learnMore() {
        window.open("https://www.casino.org/es/blackjack/como-jugar/");
    }
    function countWinAndLostGames() {
        if (playerStatus === "Winer") {
            gamesWinScore++;
            playerWinScoreId.textContent = gamesWinScore;
            playerStillPlay = false;
            houseStillPlay = false;
        } else if (playerStatus === "Loser") {
            gamesLostScore++;
            playerLostScoreId.textContent = gamesLostScore;
            playerStillPlay = false;
            houseStillPlay = false;
        }
    }

    startPlayerBtn.addEventListener("click", startPlayerBtnFunction);
    startHouseBtn.addEventListener("click", startHouseBtnFunction);
    startRandomBtn.addEventListener("click", startRandomBtnFunction);
    alertAceBtnOne.addEventListener("click", aceBtnOne);
    alertaceBtnEleven.addEventListener("click", aceBtnEleven);
    alertNewGameBtn.addEventListener("click", reStartWhoPlay);
    alertLearnMoreBtn.addEventListener("click", learnMore);
    startBtn.addEventListener("click", startGame);
});
