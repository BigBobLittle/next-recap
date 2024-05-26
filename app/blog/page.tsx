'use client'
import {Metadata} from 'next'

 const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const getRandom = (count:number) => Math.floor(Math.random() * count)

export default function BlogPage(){
  const rand = getRandom(1)
  console.log({rand})
    if (rand == 1){
      throw new Error("Error from get random on blog page")
    }
    return <h1> This is blog page with no title</h1>
}