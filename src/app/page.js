import Image from 'next/image'
import styles from '@/styles/page.module.css'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function HomePage({
  params,
  searchParams,
}) {

  console.log("params",params);
  console.log("searchParams",searchParams);

  return (
    <>
    
    <h2>wdd</h2>
    <div>params: {JSON.stringify(params)}</div>
    <div>searchParams: {JSON.stringify(searchParams)}</div>
    </>

  )
}
