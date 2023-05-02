import { PrismaClient } from "database";

const client  = new PrismaClient();


export const db = client;

export const getAllPosts = async ()=>{

    return await  db.post.findMany({
        include:{
            author: true
        }
    });
}