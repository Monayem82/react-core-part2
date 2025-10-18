import { use } from "react"
import Post from "./Post"

export default function Posts({postsData}){
    const posts=use(postsData)
    console.log(posts)
    return (
        <div className="card">
            Posts : {posts.length}

            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    )
}