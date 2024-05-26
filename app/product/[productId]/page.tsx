'use client'
import {Metadata} from 'next'
// import { useRouter } from 'next/router'
import {useRouter} from "next/navigation"

type Props = {
    params:{productId: string }
}

// export const generateMetadata = async({params}:Props): Promise<Metadata> => {

//     const title = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`IPhone ${params.productId}`)
//         }, 100)
//     })
//     return {
//         title: `Title - ${title}`
//     }
// }

// export const metadata: Metadata = {
//     title: "Product Specific page"
// }
export default function  ProductReview({params}:Props){
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
        // router.replace(router.as)
    }
    return (
      <>
        <h1>Product review page {params.productId} </h1>
        <button className='font-bold rounded bg-white' onClick={handleClick}>Order this product</button>
      </>
    );
}