import React from 'react'
import Button from './Button'

export default function Hero() {
    return (<div className=' min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-10 main-container'>
        <div className='min-h-screen flex flex-col bg-gradient-to-r from-purple-800 to-purple-900 gap-10 items-center justify-center text-center max-w-3xl mx-auto p-4'>
      <p className='text-lg text-white'>UNLOCK YOUR BEAST MODE WITH</p>
      <h1 className='text-4xl md:text-6xl font-bold text-white'>
        MUSCLE<span className='text-purple-400'>MAP</span>
      </h1>
      <p className='text-base md:text-lg text-white max-w-xl'>
        "I hereby acknowledge that by using Muscle<span className='text-purple-400 '>Maps</span>, I may unintentionally become a{' '}
        <span className='font-bold'>towering titan of muscle</span>, risking the local{' '}
        <span className='font-bold'>mass-monstrosity status</span>. I accept all consequences, including severe body dysmorphia and occasional door-related challenges."
      </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
        </div>
    )
}
