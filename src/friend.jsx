export default function Friend({friend}){
    const {id, name, userName, email, address, company, phone, website} = friend;
    
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}