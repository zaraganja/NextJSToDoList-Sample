import React from "react";
import Header from "../app/Header";
//whithout this line , Tailwind.CSS doesnt work 
import '../styles/globals.css';
import fs from "fs";
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import postMetadata from '../component/postMetadata';
import ButtonLink from './ButtonLink';



const getPostMetaData = ()  => {
   const folder = "posts/";
   const files = fs.readdirSync(folder);
   const MarkdownPosts = files.filter((file) => file.endsWith(".md"));
   // const slugs = MarkdownPosts.map((file) => file.replace(".md", ""));
   const slugs =MarkdownPosts.map((filename)=>{
      const filecontents=fs.readFileSync(`posts/${filename}`);
      const matterResult =matter(filecontents);
      return{
         title:matterResult.data.title,
         date:matterResult.data.date,
         subtitle:matterResult.data.subtitle,
         slug:filename.replace(".md","")
      }
   })
   return slugs;
}


const Page = () => {

   const PostsMetaData = getPostMetaData();
   const postPreviews = PostsMetaData.map((slugs) => (
      <div>
         <Link href={`/blog/${slugs.slug}`}>
            <h2 className=" hover:cursor-pointer">{slugs.slug}</h2>
            <h2 className=" hover:cursor-pointer">{slugs.subtitle}</h2>
            <h2 className=" hover:cursor-pointer">{slugs.date}</h2>
         </Link>

      </div>
   ))

   return (
      <>
        <head>
         <title>Zahra sample Next project</title>
         </head>
         <div>
            {postPreviews}
         </div>
         <ButtonLink/>
      </>
    

   );
}
export default Page;