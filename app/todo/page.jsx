
import Link from 'next/link'
import React from 'react'
import { prisma } from '../../db';





const page = async () => {
    // const ToggleTodo= async (id, checked)=>{
    //     "use server"
    //     console.log(id+checked)
    //     }
    const todos= await prisma.todo.findMany();

  //command e zir ro yebar ke mizani baad save mikonı varede database mikone dg baadesh comment mikonım ta hey ezafe nakone(cheee goooood!!!)
//  await prisma.todo.create({data: {title: "test todo" , complete : false}})
    return (
        <section className=' bg-slate-800 flex-1 h-screen w-full overflow-hidden text-slate-100 container mx-auto p-4  '>
            <div className='flex-row justify-between flex'>

                <label className=' text-slate-100 font-bold text-[40px] '>todo</label>
                <Link href={`/NewTodo`} className=' border-white border p-2 h-11'>New</Link>
          
            </div>
            
            <ul>
                {todos.map((todo)=>{
                    return(
                        <li key={todo.id}>
                        <input id={todo.id} type='checkbox' defaultChecked={todo.complete}
                         className=' cursor-pointer peer'></input>
                        <label  htmlFor={todo.id} className=' peer-checked:line-through peer-checked:text-slate-500'>{todo.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default page