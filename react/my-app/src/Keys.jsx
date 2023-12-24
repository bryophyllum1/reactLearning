/*
* Keys are special props for our components
* React has this property where if there is any change in any component rendered on the screen, it just creates a patch of difference and rerender only the changed elements.
* Now, for doing this React needs to identify elements uniquely - using keys.
* <Component key={keyValue} />
* or
* <div key={keyValue} />
* we can use uuid to generate unique ids every time(can't be installed on office network)
* A new key shouldn't be generated on the fly as it defeats the whole purpose. Whenever the page will reload it will generate a new key. - Anti-Pattern
*/

const todos = [
    { task: "complete the issue", id: 1},
    { task: "work on the spike", id: 2},
    { task: "help out juniors", id: 3},
];

export default function TodoList(){
    return (
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}> {todo.task} </li>
            })}
        </ul>
    )
}