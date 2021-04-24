import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";
function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      {/* Left section */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="Todos" selected />
        <HeaderOption Icon={PhotographIcon} title="Imágenes" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="Noticias" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="Más" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Preferencias</p>
        <p className="link">Herramientas</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
