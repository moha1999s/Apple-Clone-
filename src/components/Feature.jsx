import Image from "next/image";
import AudioImg from "/my-project-name/assets/images/audio_books__gnptwfxaw7mi_large.jpg";
import potential from "/my-project-name/assets/images/potential__cyozlyqjit8i_large.jpg";
import rec1 from "/my-project-name/assets/images/recommendations_01__d88jya0se9me_large.jpg";
import rec2 from "/my-project-name/assets/images/recommendations_02__bjegtfnpl1le_large.jpg";
import iclod from "/my-project-name/assets/images/icloud_sync__dvdxrjzr3q82_large.jpg";

export const Feature = () => {
    return (
        <section className="bg-gray-200 my-24 py-12">
            <div className="continer">
                <div>
                    <h1 className="text-4xl md:text-6xl text-center tracking-tight font-bold pt-12 pb-6">
                        A novel reading and <br />
                        listening experience.
                    </h1>
                </div>

                <div className="bg-white rounded-xl md:mx-auto md:max-w-[824px] mx-3 mt-10 px-8 md:px-16 py-7 my-2">
                    <h1 className="mb-1 md:text-2xl text-2xl font-bold tracking-tighter">
                        Listen to audiobooks right in the app.
                    </h1>
                    <p className="text-gray-600 font-bold md:font-bold md:text-xl pt-2 tracking-tighter">
                        Audiobooks is a tab right inside the Apple Books app,
                        so you can easily find and get immersed in storytelling brought
                        to life by talented narrators and celebrities.
                    </p>

                    <Image
                        src={AudioImg}
                        alt="AudioImg"
                        width={800}
                        className="flex justify-center items-center mt-6"
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="bg-white rounded-xl px-8 md:px-8 my-1 py-7 mx-3 max-w-[400px]">
                        <h1 className="mb-1 md:text-2xl text-2xl font-bold tracking-tighter">
                            Reach your page-turning potential.
                        </h1>
                        <p className="text-gray-600 pt-2 font-bold md:text-xl text-sm tracking-tighter">
                            Track your reading progress and celebrate achievements with Reading Goals — whether that’s how much you read in a day, a new streak record, or how many books you’ve read this year. And get encouragement to reach your daily goals.
                        </p>

                        <Image
                            src={potential}
                            alt="AudioImg"
                            width={400}
                            className="flex justify-center items-center mt-6"
                        />
                    </div>

                    <div className="bg-white mx-3 rounded-xl px-8 md:px-8 py-8 max-w-[400px]">
                        <h1 className="md:text-2xl text-2xl font-bold tracking-tighter">
                            Get personalized recommendations.
                        </h1>
                        <p className="text-gray-600 md:text-xl text-sm font-bold tracking-tighter pt-2 pb-12 md:pb-32">
                            The For You collection is a curated list of audiobooks, ebooks, authors, and a Weekly Top 5 based on what’s already in your library.
                        </p>

                        <h2 className="mb-1 md:text-xl font-bold tracking-tighter">For you</h2>
                        <div className="flex gap-4">
                            <Image
                                src={rec1}
                                alt="AudioImg"
                                width={400}
                                className="flex justify-center items-center mt-6 rounded-xl"
                            />

                            <Image
                                src={rec2}
                                alt="AudioImg"
                                width={400}
                                className="flex justify-center items-center mt-6 rounded-xl"
                            />
                        </div>
                        <div className="flex flex-row gap-12 mt-2">
                            <div>
                                <h1 className="text-sm tracking-tighter">The Midnight Library</h1>
                                <p className="text-sm text-gray-600 tracking-tighter">Matt Haig</p>
                            </div>

                            <div>
                                <h1 className="text-sm tracking-tighter">A World of Curiosities</h1>
                                <p className="text-sm text-gray-600 tracking-tighter">Louise Penny</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl mt-4 md:mx-auto md:max-w-[824px] mx-2 px-4 md:px-16 py-10 ">
                    <h1 className="mb-1 md:text-2xl text-3xl font-bold tracking-tighter">
                        Pick up where you left off.
                    </h1>
                    <p className="text-gray-600 md:text-xl text-sm font-bold tracking-tighter">
                        iCloud syncs your progress. So even when you switch devices, you’ll pick up right where you left off in your audiobook or ebook. And download your Apple Books titles to your device for offline reading or listening.
                    </p>

                    <Image
                        src={iclod}
                        alt="AudioImg"
                        width={800}
                        className="flex justify-center items-center mt-6"
                    />
                </div>
            </div>
        </section>
    );
};

export default Feature;
