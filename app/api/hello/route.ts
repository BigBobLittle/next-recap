import comments from "./data"


export async function GET(){
    return  Response.json(comments)
}


export async function POST(request:Request){
    const comment = await request.json()
    console.log(comment)
    const newComment = {
        id: comments.length + 1,
        comment: comment.comment
    }

   comments.push(newComment)
    
    return Response.json({data: (newComment), message:"Added"}, {
        headers: {"Content-Type": "application/json"},
        status: 201
    })
}