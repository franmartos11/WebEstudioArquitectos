import Image from "next/image";
import { NavbarDemo } from "./components/Nav/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen relative">
      <NavbarDemo />
      <div className="flex-1 relative  flex justify-center items-center">
        <h1 className="absolute z-10  text-white text-[8rem] font-bold  py-8 ">
          Molvento
        </h1>
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="hero"
          src={"/hero.jpg"}
        />
      </div>
    </div>
  );
}




