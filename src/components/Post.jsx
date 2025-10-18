export default function Post({post}){
    // console.log(post)
    const {body,id,userId}=post
    return (
        <div className="card">
            Post title: {}
            post id :{id} 
            User id : {userId}
            <br />
        </div>
    )
}