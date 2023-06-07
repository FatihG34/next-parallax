"use client"
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaxx from '@/components/Parallaxx'
import { Suspense } from 'react';



export default function Home() {
  return (
    <ParallaxProvider>
      <main className='flex flex-col items-center justify-center gap-12'>
        {/* <h1 className='text-center'>Here is Main Page</h1> */}
        <Parallaxx />
        <Parallaxx />
        <Parallaxx />
        <Parallaxx />

      </main>
    </ParallaxProvider>
  )
}
