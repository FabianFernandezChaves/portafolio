import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center gap-3 py-5 border-t border-amber-500 border-opacity-25 mt-10">
      <a
        href="mailto:fabian.fernandezchaves@gmail.com"
        className="p-2 bg-zinc-700 text-amber-500 rounded-full"
      >
        <FaPaperPlane />
      </a>
      <a href="https://www.linkedin.com/in/fabianfernandezchaves/" className="p-2 bg-zinc-700 text-amber-500 rounded-full">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/FabianFernandezChaves" className="p-2 bg-zinc-700 text-amber-500 rounded-full">
        <FaGithub />
      </a>
    </footer>
  );
}
