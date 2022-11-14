import headshot from "./assets/headshot.jpg";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Header() {
  return (
    <header className="text-center">
      <div className="h-80 w-80 ">
        {" "}
        <img
          src={headshot}
          className="object-cover h-full w-full rounded-t-xl"
        />
      </div>

      <h1 className="text-4xl text-white	font-bold">Laura Smith</h1>
      <h2 className="text-amber-300 text-sm">Frontend Developer</h2>
      <h2 className="text-xs text-slate-400	"> mywebsite.com</h2>
      <button className="text-white w-5">
        <BsLinkedin /> LinkedIn
      </button>
      <button className="bg-gray-50	w-20  place-content-center rounded-md grid grid-cols-1 place-items-center p-0.5">
        <MdEmail /> Email
      </button>
    </header>
  );
}

export default Header;
