import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 mr-5 ml-8">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6  hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search} className="">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/164453547_10218072331220543_3926951650436791711_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEAm1OiVLz3X7G_qb2fiYSnc0QOO1AU6y9zRA47UBTrL9hvzXMMyNepHShj0Ktdi-o&_nc_ohc=twHw-XrKoJUAX_Tp_qN&_nc_ht=scontent.fmex3-1.fna&oh=6c4bc42702ac7f1d4fbebf229f85958f&oe=60A7B330"
        />
      </div>

      {/* Header opctions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
