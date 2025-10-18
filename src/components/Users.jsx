import { use } from "react"


export default function Users({fetchUsers}){
    // console.log(fetchUsers)
    const users=use(fetchUsers)
    // console.log(users)
    return (
        <div className="card">
            Users : {users.length}
        </div>
    )
}