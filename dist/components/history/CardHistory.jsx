import React, { useState, useEffect } from 'react';
import Card from "../card/Card";
import { smallCardStyles } from "../card/Card.css";
import { cardContainerScrollStyles, cardContainerStyles, historyStyles, historyTitleStyles, playerName, playerScore, playerContainerStyles, addButton, inputField,  inputContainer, inactivePlayer} from "./CardHistory.css";

const CardHistory = ({ cardHistory, score, currentTurn, currLevel, nextTurnClicked }) => {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]); 
    const currentPlayerIndex = currentTurn % names.length;

    useEffect(() => {
        if (names.length > 0 && nextTurnClicked) {
            const prevPlayerIndex = (currentTurn - 1 + names.length) % names.length;
            const updatedNames = [...names];
            updatedNames[prevPlayerIndex].score += currLevel;
            setNames(updatedNames);
        }
    }, [currentTurn, currLevel, nextTurnClicked]);
    

    const handleAddName = () => {
        setNames(prevNames => [...prevNames, { name: nameInput, score: 0 }]); // Add a new name with a score of 0
        setNameInput(''); // Clear the input field
    };

    return (
        <div className={historyStyles}>
            <div className={historyTitleStyles}>SCOREBOARD</div>
            <div className={playerContainerStyles}>
    {names.map((player, index) => (
        <div key={index} style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div className={index === currentPlayerIndex ? playerName : `${playerName} ${inactivePlayer}`}>{player.name}</div>
            <div className={index === currentPlayerIndex ? playerScore : `${playerScore} ${inactivePlayer}`}>{player.score}</div>
        </div>
    ))}
</div>


            <div className={inputContainer}>
            <input 
                className={inputField}
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyDown={e => {
                if (e.key === 'Enter' && nameInput.trim() !== '') {
                    handleAddName();
                    e.preventDefault(); // To prevent any default action associated with the 'Enter' key
                }
                }}
                placeholder="Enter a name"
            />


                <button className={addButton} onClick={handleAddName}>Add</button>
            </div>
        </div>
    );
    
};

export default CardHistory;