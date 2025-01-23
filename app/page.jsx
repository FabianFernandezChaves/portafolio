import Image from "next/image";
import profilePic from "@/public/images/Foto-Perfil.jpg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hexagon from "@/components/ui/hexagon";
import {
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaReact,
  FaHtml5,
  FaBrain,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

export default function Home() {
  const techStack = {
    "Dynamic and Modern Frontend": {
      icon: <FaReact />,
      items: ["React.js", "Next.js", "Node.js"],
    },
    "Responsive Design and Styling": {
      icon: <FaHtml5 />,
      items: ["CSS3", "HTML5", "Tailwind CSS", "Bootstrap"],
    },
    "Data Analysis": {
      icon: <FaBrain />,
      items: ["Python", "Selenium", "NLP", "CSV Databases"],
    },
    Databases: {
      icon: <FaDatabase />,
      items: ["MySQL", "Firebase"],
    },
    "Tools and Collaboration": {
      icon: <FaGitAlt />,
      items: ["Git", "GitHub", "Figma", "Agile - SCRUM"],
    },
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grid gap-2 items-center w-full md:max-w-screen-2xl m-auto md:px-4">
        {/* Profile description section */}
        <section className="m-auto w-full py-8 md:max-w-screen-xl">
          <div className="grid md:grid-cols-2 items-center gap-12 w-full">
            {/* Personal Information */}
            <div className="grid gap-2 w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
                HELLO, I AM <br />
                Fabián Fernández Chaves.
              </h1>
              <span className="text-sm lg:text-lg font-thin text-neutral-300 pb-5">
                I’m a passionate creator of unique web experiences. I love
                turning ideas into impactful projects. Take a look and discover
                more!
              </span>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="mailto:fabian.fernandezchaves@gmail.com"
                  className="p-2 px-4 text-amber-500 rounded-full bg-zinc-700 font-bold text-xs flex items-center gap-2 hover:transform ease-in-out duration-300 hover:scale-110"
                >
                  <span className="material-symbols-outlined justify-center text-sm font-bold">
                    Email{" "}
                  </span>
                  <FaPaperPlane />
                </a>
                <a
                target="_blank"
                  href="https://www.linkedin.com/in/fabianfernandezchaves/"
                  className="p-2 bg-zinc-700 text-amber-500 rounded-full hover:transform ease-in-out duration-300 hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
                <a
                target="_blank"
                  href="https://github.com/FabianFernandezChaves"
                  className="p-2 bg-zinc-700 text-amber-500 rounded-full hover:transform ease-in-out duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* Proofile Image */}
            <Image
              src={profilePic}
              alt="Profile Photo"
              className="rounded-md m-auto w-full md:w-8/12"
            />
          </div>
        </section>
        {/* Tech Stack */}
        <section className="m-auto w-full md:max-w-screen-xl">
          <h2 className="text-sm md:text-lg font-medium underline decoration-4 underline-offset-4 text-left uppercase pb-5">
            Worked with
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-center content-center w-full gap-5">
            {Object.entries(techStack).map(([title, { icon, items }]) => (
              <Hexagon key={title} title={title} items={items}>
                {icon}
              </Hexagon>
            ))}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
