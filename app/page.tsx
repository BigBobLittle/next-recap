'use client'
import Link from "next/link";
import {usePathname} from "next/navigation"
export default function Home() {
  const pathname = usePathname()
  const links = [
    {
      name: "home",
      url: "/",
    },
    { name: "blog", url: "blog" },
  ];
  return (

    <main>
     
     {
      links.map((link, i) => {
        const isActiveLink = pathname.startsWith(link.url)
        return (
          <div key={i}>
            <Link href={link.url} className={isActiveLink ? 'font-bold mr-4' : 'text-blue-500'}>{link.name}</Link>
          </div>
        );
      })
     }
      

    </main>
  );
}
