import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import React from "react";
import { levelOne, levelThree, levelTwo } from "./assets/levels";
import Card from "./components/card/Card";
import { bigCardStyles } from "./components/card/Card.css";
import Credits from "./components/credits/Credits";
import CardHistory from "./components/history/CardHistory";
import { appStyles, levelButtonStyles, levelsStyles, nextCardButtonStlyes, questionStyles, selectedLevelStyles, titleStyles, } from "./styles/app.css";
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function App() {
    const levels = {
        1: shuffle(levelOne),
        2: shuffle(levelTwo),
        3: shuffle(levelThree),
    };
    const [gameState] = React.useState(levels);
    const [currLevel, setLevel] = React.useState(1);
    const [currCard, setCurrCard] = React.useState(levels[currLevel][0]);
    const [cardHistory, setCardHistory] = React.useState([]);
    const [accumulator, setAccumulator] = React.useState(0);
    const [currentTurn, setCurrentTurn] = React.useState(0);
    const [nextTurnClicked, setNextTurnClicked] = React.useState(false);

    function handleChangeLevel(newLevel) {
        setLevel(newLevel);
        if (newLevel === currLevel) {
            return; // Return early if the level hasn't changed.
        }
        if (gameState[newLevel].length === 1) {
            const finalMessage = "You have finished this level!";
            setCurrCard(finalMessage);
        } else {
            const updatedState = { ...gameState };
            updatedState[newLevel].shift();
            setCurrCard(updatedState[newLevel][0]);
        }
        setNextTurnClicked(false);
    }

    function getLevelLabel(level) {
        const levelLabels = {
            1: "Level One",
            2: "Level Two",
            3: "Level Three"
        };
        return levelLabels[level];
    }
    
    const buttons = Object.keys(levels).map((level) => (
        _jsx("button", {
            className: clsx(levelButtonStyles, { [selectedLevelStyles]: parseInt(level) === currLevel }),
            onClick: () => handleChangeLevel(parseInt(level)), // Ensure we're passing integer values
            children: getLevelLabel(level)
        }, level)
    ));
    
    
    function handleNextCard() {
        setAccumulator(prev => prev + currLevel); // Update accumulator
        setCurrentTurn(prev => prev + 1); // Update next turn
        const finalMessage = "You have finished this level!";
        if (gameState[currLevel].length === 1) {
            if (currCard === finalMessage) {
                return;
            } else {
                setCurrCard(finalMessage);
            }
        } else {
            const updatedState = { ...gameState };
            updatedState[currLevel].shift();
            setCurrCard(updatedState[currLevel][0]);
        }
        setNextTurnClicked(true);
    }

    return (
        _jsxs("div", {
            className: appStyles,
            children: [
                _jsx(Credits, {}),
                _jsx("div", { className: levelsStyles, children: buttons }),
                _jsxs("div", {
                    className: questionStyles,
                    children: [
                        _jsx("div", {
                            className: titleStyles,
                            children: "WE'RE NOT REALLY DIFFERENT."
                        }),
                        _jsx(Card, { styleName: bigCardStyles, question: currCard }),
                        _jsx("button", {
                            className: nextCardButtonStlyes,
                            onClick: () => handleNextCard(),
                            children: "next turn"
                        })
                    ]
                }),
                _jsx(CardHistory, { cardHistory: cardHistory, score: accumulator, currentTurn: currentTurn, currLevel: currLevel, nextTurnClicked: nextTurnClicked})
            ]
        })
    );
}
export default App;