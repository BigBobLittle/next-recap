import { NextRequest } from "next/server"
import comment from "../data"
export async function GET(req:NextRequest, {params}:{params:{id:string}}){

    const queryParams = req.nextUrl.searchParams 
    const query = queryParams.get('query')
    
    const {id} = params 

     const findById = {
        id: (id:string) => comment.find((x) => x.id === Number(id)),
        query: (query:string) => comment.filter(x => x.comment.includes(query as string)),
        all: () => comment

     }
   
    const results = query ? findById.query(query) : id ? findById.id(id) : findById.all()
    return results ? Response.json(results, {status: 200}): Response.json({message: "Comment not found"})

}


export async function PATCH(request:Request, {params}:{params:{id:string}}){

    const {id} = params 
    const {comment:comments} = await request.json()

    if(!id || !comments){
        return Response.json({message: "Please provide id and comment"},{status:400})
    }

    const findById = comment.findIndex((x:Record<string,any>) => x.id === parseInt(id))

   
    if(!findById) return Response.json({message: "Resource not found"},{status:404});

    comment[findById].comment = comments
    
    return Response.json({ message: "Updated successfully", data:comment[findById]}, {status:200})


}