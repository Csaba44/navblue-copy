import React from 'react'

function TakeoffPage() {
  return (
    <div className='grid grid-cols-4 gap-2 h-screen'>
      <div className='col-span-1 border-r-2 border-black'>
        GR 1
      </div>
      <div className='col-span-3 grid-start-2'>
        GR 2
      </div>
    </div>
  )
}

export default TakeoffPage