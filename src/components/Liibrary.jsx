import Image from "next/image";
import AutoSlider from "@/components/AutoSlider";



const bestselling = [
    { src: '/booksimg/book_01.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/booksimg/book_02.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/booksimg/book_03.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/booksimg/book_04.jpg', title: 'Harry Potter', author: 'Liz Moore' },
    { src: '/booksimg/book_05.jpg', title: 'Iron Flame', author: 'Tessa Bailey' },
    { src: '/booksimg/book_06.jpg', title: 'Iron Flame', author: 'Denise Mina' },
    { src: '/booksimg/book_07.jpg', title: 'Iron Flame', author: 'Tessa Bailey' },
  
  ];
  
  
  const bestsellinggg = [
    { src: '/booksimg/book_08.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/booksimg/book_09.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/booksimg/book_10.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/booksimg/book_11.jpg', title: 'Harry Potter', author: 'Liz Moore' },
    { src: '/booksimg/book_12.jpg', title: 'Iron Flame', author: 'Tessa Bailey' },
    { src: '/booksimg/book_13.jpg', title: 'Iron Flame', author: 'Denise Mina' },
    { src: '/booksimg/book_14.jpg', title: 'Iron Flame', author: 'Tessa Bailey' },
  ];
export const Liibrary = () => {

    return (
    <section>
        <div className="container">
            <div className="flex  flex-col mx-auto text-center justify-center items-center">
                <h1 className="text-4xl md:max-w-[540px] md:text-6xl  md:tracking-tight tracking-tighter font-bold my-4">A library you’ll want
                to get lost in.</h1>
                <p className="text-sm md:max-w-[540px] max-w-[300px] md:text-xl tracking-tightmd:text-xl">Browse our global catalog featuring millions
                of bestsellers, new releases, and classics with new audiobooks and ebooks added every week.</p>
            </div>

            <div className="flex justify-center py-8">
                <ul className="flex flex-col md:flex-row justify-center align-middle gap-3 text-sm md:bg-gray-200 p-2 rounded-full">
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white">Bestselling Audiobooks</li>
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white hover:text-white">New & Trending Ebooks</li>
                    <li className="px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white">Fan-Favorite Audiobooks</li>
                </ul>
            </div>
        </div>

        <AutoSlider Imagees ={bestselling} dur={20}/>
        <AutoSlider Imagees ={bestsellinggg}r dur={25}/>
    </section>
    )
}

export default Liibrary;
