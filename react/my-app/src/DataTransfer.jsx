/*
* In React, data transfer is unidirectional, meaning it can only flow from parent to child
* using props and any change made to the data won't affect parent components. Although, still
* we would want to keep variables immutable.
*/

function handleClick(){         // putting this function outside of the App component and passing it as props to Button doesn't make much sense because it's anyway accessible.
    console.log("┌∩┐");     
}

function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + "px"
    };

    return (
        <button onClick = {handleClick} style = {buttonStyle}>{props.text}</button>
    );
}

export default function App(){
    return (
        <div>
            <h1>Santa Claus is here!</h1>
            <Button color = "red" fontSize = {30} text= "Click here to get a gift."/>
            <Button color = "blue" fontSize = {30} text= "Click here to get him to put a smile on your face."/>
            <Button color = "black" fontSize = {40} text= "Click here to make his day worthwhile.(Will take some effort.)"/>
        </div>
    );
}