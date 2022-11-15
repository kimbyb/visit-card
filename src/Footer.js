import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-20 bg-sky-900	text-white text-center text-2xl grid-cols-4 gap-4">
      <a href="https://twitter.com/">
        <button className="m-2.5">
          <BsTwitter />
        </button>{" "}
      </a>
      <a href="https://www.linkedin.com/">
        <button className="m-2.5">
          <BsLinkedin />
        </button>
      </a>
      <a href="https://github.com/">
        <button className="m-2.5">
          <BsGithub />
        </button>
      </a>
      <a href="https://instagram.com">
        <button className="m-2.5">
          <BsInstagram />
        </button>
      </a>
    </footer>
  );
}
