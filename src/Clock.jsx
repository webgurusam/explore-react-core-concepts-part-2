import { useState } from "react"

export default function Clock(){
    const [time, setTime] = useState(0)

    const handleUp = () => {
        const newTime = time + 1;
        setTime(newTime);
    }

    const handleDown = () => {
        setTime(time - 1);
    }

    return (
        <div>
            <h1>Time: {time}</h1>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
        </div>
    )
}