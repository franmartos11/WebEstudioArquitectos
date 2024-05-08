import Image from "next/image";
import { NavbarDemo } from "./components/Nav/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavbarDemo />
      <div className="flex-1 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
          src={"/hero.jpg"}
        />
      </div>
    </div>
  );
}


