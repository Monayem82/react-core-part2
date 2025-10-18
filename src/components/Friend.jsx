export default function Frined({friend}){
    // console.log(friend)
    const {name,email}=friend
    return (
        <div className="card">
            Friend :
            Name : {name} 
            Email : {email}
        </div>
    )
}