import headshot from "./assets/headshot.jpg";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Header() {
  return (
    <header className="text-center">
      <div className="h-80 w-70 ">
        {" "}
        <img
          src={headshot}
          className="object-cover h-full w-full rounded-t-xl"
        />
      </div>

      <h1 className="text-4xl text-white	font-bold">Laura Smith</h1>
      <h2 className="text-amber-300 text-sm">Frontend Developer</h2>
      <h2 className="text-xs text-slate-400	mb-3	"> mywebsite.com</h2>
      <div className="inline-flex p- grid-gap-4">
        <a href="https://www.linkedin.com/">
          <button className="bg-sky-600	text-white	w-28  place-content-center rounded-md  grid-cols-1 place-items-center p-0.5 text-sm inline-flex mr-2.5 h-8	">
            <BsLinkedin /> LinkedIn
          </button>
        </a>
        <a href="">
          <button className="bg-gray-50	w-28 place-content-center rounded-md  grid-cols-1 place-items-center p-0.5 text-sm inline-flex	h-8">
            <MdEmail /> Email
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
