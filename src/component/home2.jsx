import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faDiscord,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
 faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 mt-10 navigate flex flex-col lg:flex-row lg:items-center lg:gap-10">
        <img src="111.png" alt="" className="h-26 w-36 cursor-pointer mb-4 lg:mb-0" />
        <div className="flex flex-col lg:flex-row lg:gap-14 mt-4 text-lg tracking-wider">
          <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">About</div>
          <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Skill</div>
          <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Project</div>
          <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Contact Me</div>
        </div>
      </div>
      <div className="lg:absolute lg:right-10 lg:left-10 lg:text-center">
        <h1 className='font-sans'>
          <span>I</span>M<span>HARSH TIWARI</span>
        </h1>
        <p className="text-black mt-5 font-mono lg:max-w-2xl">A versatile full-stack developer who loves to explore the entire spectrum of coding. By day, I'm immersed in the intricacies of backend development, optimizing databases and ensuring seamless functionality. When the sun sets, my artistic side takes over—I'm a skilled painter, finding joy in both digital and traditional canvases.</p>
        <p className="text-black mt-5 font-mono lg:max-w-2xl">In the realm of code, I craft holistic digital experiences, blending creativity and functionality. As a minimalist at heart, I appreciate the elegance of simplicity and order in both my coding endeavors and artistic pursuits. Whether it's optimizing algorithms or perfecting brushstrokes, I bring a unique perspective to every project. Interested in collaborating or just want to chat about the intersection of coding and art? Feel free to reach out—I'm here to bring your ideas to life, both digitally and artistically!</p>
        <Link to='/about'>
          <p className='mt-5 cursor-pointer text-md text-black tracking-wider font-light hover:underline'>See More About Me
            <FontAwesomeIcon className='ml-2' icon={faArrowRight} />
          </p>
        </Link>
        <div className="flex justify-center lg:justify-between w-full lg:w-60 mt-7 text-black text-2xl gap-10">
          <a href="https://www.linkedin.com/in/harshtiwariexe/">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          </a>

          <a href="https://www.instagram.com/_harsh.tiwari__">
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
          </a>

          <a href="https://discord.com/users/harshexe.">
            <FontAwesomeIcon icon={faDiscord} className="discord" />
          </a>

          <a href="https://github.com/harshtiwariexe">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </a>

          <a href="https://twitter.com/harshexee">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
      </div>
      <img src='1.png' alt="" className="min-h-screen w-full" />
    </div>
  );
}
