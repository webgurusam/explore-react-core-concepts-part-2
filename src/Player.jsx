export default function Player({player}){
    const {name, website} = player;
    return (
        <div className="box">
            <p>Player Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    )
}