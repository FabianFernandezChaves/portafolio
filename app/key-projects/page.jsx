"use client";
import {Navbar, Footer} from "@/components/layout";
import { Button, Card } from "@/components/ui";
import { Ecommerce, UCR, CINDEA, Uptask } from "@/public/images/projects";
import {
  FaJava,
  FaAndroid,
  FaLaravel,
  FaPhp,
  FaFigma,
  FaPython,
  FaGithub,
  FaReact,
  FaBrain,
  FaBootstrap,
  FaFileCsv,
} from "react-icons/fa";
import { SiTailwindcss, SiSelenium } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

export default function KeyProjects() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="relative grid gap-8 items-center w-full md:max-w-screen-2xl m-auto md:px-4">
        {/* Presentation */}
        <section className="m-auto w-full py-8 md:max-w-screen-xl relative ">
          <div className="grid items-center gap-12 w-full">
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase content-center">
                Highlighted Professional Projects
              </h1>
              <div className="border-2 border-amber-500 border-opacity-30 p-10 bg-neutral-800 rounded-lg shadow-lg">
                <div className="border-l-4 border-amber-500 pl-4 mt-4 text-lg">
                  <span className="italic text-neutral-300 content-center">
                    I have contributed to impactful projects, from e-commerce
                    platforms to academic research. These experiences have
                    sharpened my skills in development, data analysis, and
                    teamwork, while showcasing my adaptability and commitment to
                    delivering efficient solutions. Explore the projects below
                    to see my journey in turning challenges into opportunities.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="grid m-auto w-full md:max-w-screen-xl relative gap-8">
          {/* Item */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:place-items-center m-auto">
            {/* Image and tech */}
            <Card date={"11/2022 – PRESENT"} image={Ecommerce}>
              <FaReact />
              <SiTailwindcss />
              <FaFigma />
              <FaGithub />
            </Card>

            {/* Description */}
            <div className="grid content-center gap-5 md:col-span-3">
              <h3 className="text-xl font-semibold text-amber-500">
                Building a Scalable and High-Performance E-commerce Platform
              </h3>
              <span className="text-lg text-neutral-300">
                In this e-commerce project, I focused on building dynamic and
                responsive user interfaces using Next.js, React.js, and Tailwind
                CSS, delivering a seamless and engaging user experience. I
                integrated a Strapi-based API to efficiently manage product,
                user, and inventory data, while implementing dynamic queries and
                real-time features. Additionally, I optimized the platform’s
                performance, ensuring fast load times and smooth navigation,
                making the solution scalable and ready for growth.
              </span>
              <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
                <Button title="View live" link="https://www.detinmarincr.com/"></Button>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:place-items-center m-auto">
            {/* Image and tech */}
            <Card
              customClass="md:order-last"
              date={"06/2023 – 02/2024"}
              image={UCR}
            >
              <FaPython />
              <FaFileCsv />
              <FaBrain />
            </Card>

            {/* Description */}
            <div className="grid content-center gap-5 md:col-span-3">
              <h3 className="text-xl font-semibold text-amber-500">
                Uncovering Patterns in Archaeological Data with Python
              </h3>
              <span className="text-lg text-neutral-300">
                As a research assistant at the University of Costa Rica, I
                contributed to the project "Discovering the Obeid Cemetery of
                Eridu" by developing Python tools for data analysis and
                visualization. My work focused on clustering techniques,
                statistical analysis to uncover patterns in archaeological data,
                and creating clean, structured CSV databases. I also
                collaborated with Sapienza University of Rome during a research
                exchange in Italy, enhancing the project with advanced data
                analysis insights.
              </span>
              <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:place-items-center m-auto">
            {/* Image and tech */}
            <Card date={"02/2022 – 12/2022"} image={UCR}>
              <FaPython />
              <SiSelenium />
              <FaFileCsv />
              <FaBrain />
            </Card>
            {/* Description */}
            <div className="grid content-center gap-5 md:col-span-3">
              <h3 className="text-xl font-semibold text-amber-500">
                Automating Data Extraction and Analysis with Python
              </h3>
              <span className="text-lg text-neutral-300">
                As a research assistant for the “Gastrotico” project at the
                University of Costa Rica, I automated data extraction processes
                using the Selenium API in Python. I also developed Python
                modules for automated text mining and machine learning,
                leveraging Natural Language Processing (NLP) techniques to
                analyze and extract insights from large datasets efficiently.
              </span>
              <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
                <Button title="Information" link="https://srp.ucr.ac.cr/investigacion/proyectos-y-actividades-de-investigacion/gastrotico-observatorio-de-la-gastronomia-y-bebidas-de-interes-cultural-en-costa-rica/"></Button>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:place-items-center m-auto">
            {/* Image and tech */}
            <Card
              customClass="md:order-last"
              date={"08/2020 – 05/2021"}
              image={CINDEA}
            >
              <FaLaravel />
              <FaPhp />
              <FaBootstrap />
            </Card>

            {/* Description */}
            <div className="grid content-center gap-5 md:col-span-3">
              <h3 className="text-xl font-semibold text-amber-500">
                Web-Based Enrollment System for CINDEA La Paz
              </h3>
              <span className="text-lg text-neutral-300">
                For CINDEA La Paz, I developed a web-based enrollment system
                using PHP Laravel to streamline the registration process for
                students. The system was designed to handle complex workflows
                efficiently, ensuring both functionality and scalability to
                support the institution's growing needs. My work focused on
                creating a user-friendly interface, optimizing backend
                processes, and delivering a solution that met tight deadlines
                ahead of the academic year. This project highlighted my ability
                to develop robust systems tailored to specific organizational
                requirements.
              </span>
              <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
                <Button title="View live" link="https://cindealapaz.com/"></Button>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:place-items-center m-auto">
            {/* Image and tech */}
            <Card date={"06/2022 – 12/2022"} image={Uptask}>
              <FaJava />
              <FaAndroid />
              <SiFirebase />
            </Card>
            {/* Description */}
            <div className="grid content-center gap-5 md:col-span-3">
              <h3 className="text-xl font-semibold text-amber-500">
                Uptask – Task Management App
              </h3>
              <span className="text-lg text-neutral-300">
                As part of a university project, I developed Uptask, a task
                management application designed to help users organize and
                prioritize their to-dos efficiently. The app was built using
                Android Studio with Java for the frontend and Firebase as the
                backend, including a NoSQL database and Firebase Authentication
                for secure user management. Uptask offers a simple yet effective
                way to track tasks, reflecting my ability to design and
                implement full-stack solutions tailored to user needs.
              </span>
              <div className="flex flex-wrap gap-4 w-full text-right text-base font-semibold">
                <Button title="View Code" link="https://github.com/FabianFernandezChaves/UpTask"></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
