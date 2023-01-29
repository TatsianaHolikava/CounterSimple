import {useState} from "react";


const initialCounters = [
    {
        id: 1,
        value: 10
    },
    {
        id: 2,
        value: 20
    },
    {
        id: 3,
        value: 30
    }
]

function App() {

    const [counts, setCounts] = useState(initialCounters)

    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value - 1} : el)
        setCounts(updatedCounts)
    }
    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCounts(updatedCounts)
    }

    const addCounter = () => {
        const newCount = {
            id:Math.random(),
            value: 500
        };
        setCounts([...counts, newCount])
    }


    return (
        <div className="App">
            <ul>
                {counts.map(el => (
                    <li key={el.id}>
                        <button onClick={() => minus(el.id)}>munis</button>
                        {el.value}
                        <button onClick={() => plus(el.id)}>plus</button>
                    </li>

                ))}
            </ul>


            <hr/>
            <button onClick={addCounter}>Add Counter</button>
        </div>
    );
}

export default App;
