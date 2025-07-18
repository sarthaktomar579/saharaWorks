import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="md:text-5xl font-bold flex items-center justify-center md:gap-5 gap-2 text-3xl">
          <span className="text-4xl font-extrabold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            सहाराWorks
          </span>
          <Image
            width={48}
            height={48}
            src="/logo.png"
            alt="Help handshake"
            className="rounded-full bg-black"
          />
        </div>

        <p className="text-center md:text-left">
          A crowdfunding platform. Get funded by your fans and followers. Start now!
        </p>
        <p className="text-center md:text-left">
          A place where your fans can help you. Unleash the power of your fans and get your projects funded.
        </p>

        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Here
            </button>
          </Link>

          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">Your Fans can support you</h2>

        <div className="flex gap-2 justify-evenly">
          {/* First Item */}
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-b-full p-2 text-black"
              width={88}
              height={88}
              src="/man.gif"
              alt="Fans wanting to help"
            />
            <p className="font-bold text-center">Your Fans Support You</p>
            <p className="text-center text-sm">They love your work and want to contribute.</p>
          </div>

          {/* Second Item */}
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-1 text-black"
              width={88}
              height={88}
              src="/coin.gif"
              alt="Coin gif representing donation"
            />
            <p className="font-bold text-center">Get Small Donations</p>
            <p className="text-center text-sm">Receive tips to fuel your creativity and projects.</p>
          </div>

          {/* Third Item */}
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-b-full p-2 text-black"
              width={88}
              height={88}
              src="/group.gif"
              alt="Group gif representing community support"
            />
            <p className="font-bold text-center">Build a Community</p>
            <p className="text-center text-sm">Connect with supporters and grow your tribe.</p>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-10 h-1"></div>

      <div className="container mx-auto text-white pb-14 pt-16 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-10">Learn more about us</h2>

        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[50vh] lg:w-[50%] lg:h-[50vh] xl:w-[50%] xl:h-[50vh]">
          <video
            className="w-full h-full rounded-lg shadow-lg"
            controls
            // Optional thumbnail
          >
            <source src="/recSW.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
