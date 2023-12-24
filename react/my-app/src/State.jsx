/* State is just the current snapshot of a program, it's basically the component's memory.
* We need it because we might want to change somethings(components) on the page dynamically based on the user's interaction.
* For example clicking on a dropdown, etc.
* And for react to understand what happened or changed components need to remember things about itself.
*/

/* useState hook is built-in hook in React that allows to define state in a functional component. 
* It takes an initial value as a parameter and returns an array with two elements that we can destructure to get:
*  1. The current state value
*  2. A function to update the state value
* const [stateValue, setStateValue] = useState(initialValue);
*/

// here we are going to change background color of the page based on what user clicks on
import { useState } from "react";
import Images from './Images'

export default function BackGroundColor(){
    
    let initialColor = "Blue";
    let darkMode = "Black";
    const [backgroundColor, setBackgroundColor] = useState(darkMode);
    const handleButtonClick = () => {
        let value = backgroundColor===darkMode?initialColor:darkMode;
        document.bgColor=value;
        setBackgroundColor(value);
    }
        return (
        <div>
            <Images />
            <button onClick={handleButtonClick}>{backgroundColor===darkMode?initialColor:darkMode}</button>
        </div>
    )
}

/*
* React Reconciliation Algorithm/ Rerendering
* The process of rerendering generates a new virtual DOM tree. The virtual DOM is a lightweight representation of the actual DOM
* that React uses to keep track of the current state of the UI.
* React then compares the new virtual DOM with the old one and calculates the minimum changes required to be applied to update the actual DOM - called Reconciliation Algorithm.
*/

/*
* Hooks are functions that let you use react features. "use" prefix signifies a hook.
* RULES:
* Hooks can only be called from top level of a functional component.
* Hooks can't be called inside loop or conditions.
*/