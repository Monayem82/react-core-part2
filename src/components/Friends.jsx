import { use } from "react"
import Frined from "./Friend"

export default function Friends({friendsdata}){
    // console.log("Before use"+friendsdata)

    const friendData=use(friendsdata)
    // console.log(friendData)

    return (
        <div>
            Friends :{friendData.length}
            {/* name: {name} */}

            {
                friendData.map(friend=><Frined friend={friend}></Frined>)
            }
            
        </div>
    )
}