import Link from 'next/link'
import React from 'react'

const NavigationTest = () => {
  return (
    <div className='mt-20'>
      <Link prefetch={false} href="/" className='mt-5 bg-secondary-light text-copy'>Click </Link>
    </div>
  )
}

export default NavigationTest