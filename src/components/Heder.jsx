import Image from "next/image";

const basePath = "/Apple-Clone-"; // اسم الريبو الخاص بك على GitHub Pages

export const Heder = () => {
  return (
    <header className="overflow-hidden border border-gray-500 flex justify-center items-center">
      <nav>
        <div className="container">
          <ul>
            <div className="flex text-xl gap-6 my-3 justify-center md:mx-24 mx-4 items-center">
              <div className="flex flex-1 md:justify-center gap-4 items-center">
                <Image src={`${basePath}/assets/images/apple-173-svgrepo-com.svg`} alt="Apple Logo" width={23} height={23} />
                <h1 className="text-2xl md:text-xl font-bold hidden md:block">Apple Books</h1>
              </div>

              <div className="gap-7 font-medium md:text-sm hidden md:block md:flex">
                <li><a href="/store">Store</a></li>
                <li><a href="/mac">Mac</a></li>
                <li><a href="/ipad">iPad</a></li>
                <li><a href="/iphone">iPhone</a></li>
                <li><a href="/watch">Watch</a></li>
                <li><a href="/vision">Vision</a></li>
                <li><a href="/airpods">AirPods</a></li>
                <li><a href="/tv-home">TV & Home</a></li>
                <li><a href="/support">Support</a></li>
              </div>

              <div className="flex gap-12 ml-24">
                <a href="/search">
                  <Image src={`${basePath}/assets/images/search-svgrepo-com.svg`} alt="Search" width={23} height={23} />
                </a>
                <a href="/cart">
                  <Image src={`${basePath}/assets/images/bag-shopping-svgrepo-com.svg`} alt="Bag" width={23} height={23} />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Heder;
