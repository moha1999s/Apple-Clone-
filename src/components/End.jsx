import React from 'react'
import Image from 'next/image'
import BookImg from "@/assets/images/OIP.jpg"
import D from "@/assets/images/diagonal-arrow-svgrepo-com (2).svg";

export default function End() {
    return (
        <section className='my-14 overflow-x-clip'>
            <div className='continer'>
                <div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <Image
                            src={BookImg}
                            alr="Book-img"
                            width={100}
                        />
                        <h1 className='lg:text-6xl text-center text-3xl font-bold tracking-tighter'>Working with Apple Books.</h1>
                    </div>

                    <div className='text-center  mx-auto mt-5'>

                        <p className='mt-3 text-sm md:text-xl tracking-tight max-w-[300px] mx-auto md:max-w-[540px] md:mx-auto sm:mx-16' >Apple Books for Authors guides you through every step of your journey as an author, from structuring your story to packaging your digital book and selling it on our store. Even established authors will find valuable resources on how to grow sales and track performance.</p>
                    </div>
                </div>
            </div>




            <div className='flex justify-center text-center items-center gap-2 lg:gap-8 py-6'>
                
                
                <div className="flex justify-center items-center gap-1">

                    <a href="" className='text-blue-600 tracking-tighter hover:text-blue-700 hover:underline lg:text-lg text-[10px]'>Apple Books for Authors
                    </a>
                    <Image src={D}
                        alt='D'
                        width={9} />

                </div>

                <div className="flex justify-center items-center gap-1">

                    <a href="" className='text-blue-600 tracking-tighter hover:text-blue-700 hover:underline lg:text-lg text-[10px]'>Apple Performance Partners Program
                    </a>
                    <Image src={D}
                        alt='D'
                        width={9} />

                </div>
            </div>


        </section>
    )
}


