import React from 'react'
import Header from '../Header'
import Link from 'next/link';
import { redirect } from 'next/navigation'

const page = () => {
    
    const createNewTodo = async (data) => {
        "use server"
        //  data = new FormData;
         const title= data.get("todotitle")?.valueOf();
        // const title= "todotitle";
        if (typeof title !== "string" || title.length === 0){
            console.error("Invalid title");
        }
        await prisma.todo.create({data: {title :title, complete : false}})
        redirect("/todo")
      
    }
    return (
        <div className=' bg-slate-800 flex-1 h-screen w-full overflow-hidden text-slate-100 container mx-auto p-4  '>
            <header>
                <h1>New Todo</h1>
            </header>
            <form action={createNewTodo} >
                <input type='text' name='todotitle' className=' text-black'></input>

                <div className=' flex justify-between w-[30%] flex-row '>
                    <Link href={`/todo`}>cancel</Link>
                    <input type='submit' value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default page