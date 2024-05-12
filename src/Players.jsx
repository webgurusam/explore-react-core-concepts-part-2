import { useEffect, useState } from "react"
import Player from "./Player";

export default function Players(){
    const [player, setPlayer] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayer(data))
    }, [])

    

    return(
        <div>
            <h3>Players: {player.length}</h3>
            {
                player.map(player => <Player player={player}></Player>)
            }
        </div>
    )
}