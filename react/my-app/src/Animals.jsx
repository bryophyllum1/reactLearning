
export default function Animals(props){
    return (
        // called react fragment
        <>
        <ul>
            {props.animals.map(animal => { 
                return animal.startsWith("C")?<li key={animal}>{animal}</li>: null
            })}
        </ul>
            
        </>
    )
}