import Image from 'next/image'
import BookImg from "@/assets/images/OIP.jpg"


const Hero = () => {
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
                        <h1 className='text-xl font-bold tracking-tighter'>Apple Books</h1>
                    </div>

                    <div className='text-center  mx-auto mt-5'>
                        <h1 className='text-4xl md:text-6xl  font-bold tracking-tighter md:tracking-tight '> Read,listen,discover <br />All in one app.</h1>
                        <p className='mt-3 text-sm md:text-xl tracking-tight max-w-[300px] mx-auto md:max-w-[540px] md:mx-auto sm:mx-16' >Apple Books is the single destination to find, buy, 
                            and dive into audiobooks and ebooks. Browse curated 
                            collections and get personalized recommendations. Share your
                            books with up to five family members.* All with no subscription or monthly commitment.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero