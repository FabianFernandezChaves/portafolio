import { TbWorldWww } from "react-icons/tb";
export default function ProyectButton({ title, link }) {
  return(
    <a
    href={link}
    target="_blank"
    className="flex text-background bg-amber-500 p-2 px-4 rounded-full  items-center gap-2 hover:bg-amber-600 hover:transform ease-in-out duration-300 hover:scale-110"
  >
    <span>{title}</span>
    <TbWorldWww />
  </a>
  );
}