import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left section */}
        <div className="flex space-x-4">
          <p className="link">Sobre Google</p>
          <p className="link">Tienda</p>
        </div>

        {/* Right section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Imagenes</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar
            url={
              "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/164453547_10218072331220543_3926951650436791711_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEAm1OiVLz3X7G_qb2fiYSnc0QOO1AU6y9zRA47UBTrL9hvzXMMyNepHShj0Ktdi-o&_nc_ohc=twHw-XrKoJUAX_Tp_qN&_nc_ht=scontent.fmex3-1.fna&oh=6c4bc42702ac7f1d4fbebf229f85958f&oe=60A7B330"
            }
          />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-5/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 ml-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className=" flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Buscar con Google
          </button>
          <button onClick={search} className="btn">
            Me siento con suerte
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
