import { style } from "@vanilla-extract/css";
import { primaryAccent } from "../../styles/globals.css";

export const historyStyles = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "17rem",
    alignContent: "center",
    alignItems: "center",
    padding: 5,
});

export const historyTitleStyles = style({
    textTransform: "uppercase",
    color: primaryAccent,
    fontSize: 18,
    fontWeight: 800,
});

export const cardContainerStyles = style({
    height: "100%",
    minHeight: "30rem",
    maxHeight: "30rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    margin: 10,
    borderRadius: 15,
    border: `solid 2px ${primaryAccent}`,
});

export const cardContainerScrollStyles = style({
    width: "96%",
    height: "96%",
    overflowY: "scroll",
    overflowX: "hidden",
    margin: "auto",
});

export const playerName = style({
    textTransform: "uppercase",
    color: primaryAccent,
    fontSize: 24,
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '15px', // Add padding to give it some space from the left border
    paddingTop: '15px',
});

export const playerScore = style({
    textTransform: "uppercase",
    color: primaryAccent,
    fontSize: 24,
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '15px', // Add padding to give it some space from the right border
    paddingTop: '15px',
});

export const inactivePlayer = style({
    color: 'black',
});

export const playerContainerStyles = style({
    height: "100%",
    minHeight: "30rem",
    maxHeight: "30rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",  // Changed to column
    alignItems: "center",
    margin: 10,
    borderRadius: 15,
    border: `solid 2px ${primaryAccent}`,
    overflowY: "auto"  // Added to handle scrolling
});

export const inputContainer = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',  // Adjusted to separate it from the list
    width: '100%'
});


export const inputField = style({
    textTransform: "uppercase",
    padding: '8px 12px',
    border: `2px solid ${primaryAccent}`,
    borderRadius: '8px',
    marginRight: '10px', // Space between input and button
    width: '70%', // Take up 70% of the available width
    fontSize: '16px',
    outline: 'none',
});

export const addButton = style({
    textTransform: "uppercase",
    backgroundColor: primaryAccent,
    padding: '8px 15px',
    fontSize: '16px',
    fontWeight: 800,
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    color: 'white', // White text on a colored background
    transition: 'background-color 0.3s',

    ':hover': { // A subtle hover effect
        backgroundColor: '#d12b2b', // Slightly darker shade for the hover state
    }
});

