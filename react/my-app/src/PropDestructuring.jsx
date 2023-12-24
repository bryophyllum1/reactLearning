// import axios from './React'


function ButtonSecond({color, fontSize, text, func}){
    const buttonStyle = {
        color,                                              // don't need to write color : color because both sides of : are same
        fontSize: fontSize + "px"
    };

    return <button onClick={func} style = {buttonStyle}>{text}</button>;
}

ButtonSecond.defaultProps = {
    text: "Why don't you try me?",
    color: "red",
    fontSize: 30,
    // func: handleClick we can't put this here as the handleClick function is not in the global scope
}
// default props can be combined with props destructuring using directly function ButtonSecond({color = "red", fontSize = 30, text = "Why don't you try me?"}){

export default function AppSecond(){
    // we can also pass functions as props as components
    const handleClick = ()=> {
        console.log("what's up?");
    }

    // const getDadJoke = () => {
    //     const URL = "https://icanhazdadjoke.com/";
    //     axios.get(URL)
    //     .then(response => {
    //         console.log(response);
    //     })
    // }
    // }

    // we can't write it like func = {handleClick()} - because this is a function call and not a function reference, but we can use curry functions.
    // just provide a wrapper in the form that
    // function curry(func){
    //  return function(a){
    //      return function(b){
    //          return func(a, b);
    //              }
    //          }
    //      }
    //  }
    //  we would call it this way let curriedFunc = curry(func);
    //  alert(curriedSum(1)(2)); => This is basically a transformation form func(a, b, c) to func2(a)(b)(c) => just to provide a way to provide 
    //  a functional reference with arguments

    return (
    <div>
        <ButtonSecond color = "red" fontSize={20} text="What's up?" func = {handleClick} />
        <ButtonSecond /> 
        {/* this is getting called with defaultProps of ButtonSecond */}

        {/* <ButtonSecond text = "Get a dad joke!" func = {getDadJoke} /> I will introduce this later because we need axios installed*/}
    </div>
    );
}