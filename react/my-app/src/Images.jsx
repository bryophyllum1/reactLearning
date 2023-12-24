import {sculptureList} from '../public/data';
import {useState} from 'react'

export default function Images(){
    const [index, setIndex] = useState(0);
    function handleOnClick(){
        setIndex(index+1);
    }
    const current_sculpture = sculptureList[index];

    return (
        <div>
            <img src={current_sculpture.url} alt = {current_sculpture.alt} />
            <h2>{current_sculpture.name}</h2>
            <p>{current_sculpture.description}</p>
            <button onClick={handleOnClick}>Next</button>
        </div>
    );
}