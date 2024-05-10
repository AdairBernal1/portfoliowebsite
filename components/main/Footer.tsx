import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-40'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Contact Information</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>adairoswaldo01@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Ing. Adair Bernal 2024. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer