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
import Header from "./Navbar/nav";


// import { faGit } from '@fortawesome/free-brands-svg-icons'

export default function Home() {

  return <div className="relative flex flex-col items-center justify-center h-screen ">


    <Header />
    {<div className="relative ">
      <h1 className='font-sans text-6xl md:mt-20 md:ml-52 mt-[600px] ml-10 mr-10 mb-10'>
        <span>I</span>M<span>HARSH TIWARI</span>
      </h1>
      <p className=" text-black text-xl  font-mono ml-10 mr-10 mt-5 mb-5 md:ml-52 md:mr-52">A versatile full-stack developer who loves to explore the entire spectrum of coding. By day, I m immersed in the intricacies of backend development, optimizing databases and ensuring seamless functionality. When the sun sets, my artistic side takes over m a skilled painter, finding joy in both digital and traditional canvases.</p>
      <p className=" text-black text-xl font-mono ml-10 mr-10 mt-5 mb-5 md:ml-52 md:mr-52">In the realm of code, I craft holistic digital experiences, blending creativity and functionality. As a minimalist at heart, I appreciate the elegance of simplicity and order in both my coding endeavors and artistic pursuits. Whether it s optimizing algorithms or perfecting brushstrokes, I bring a unique perspective to every<Link to='/project' className="font-bold"> PROJECT</Link>. Interested in collaborating or just want to chat about the intersection of coding and art? Feel free to reach ou m here to bring your ideas to life, both digitally and artistically!</p>
      <Link to='/about'><p className='mt-5 md:mt-5 md:ml-52 md:mr-52 mr-10 ml-10 cursor-pointer text-lg text-black tracking-wide  font-light hover:underline'>See More About Me
        <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></p></Link>

      <div className=" flex justify-between w-60 mt-5 md:mt-5 md:ml-52 md:mr-52 mr-10 ml-10 text-black text-4xl gap-10">
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

    </div>}
    <img src='1.png' alt="" className=" h-full fixed -z-20 w-full" />
  </div>

}