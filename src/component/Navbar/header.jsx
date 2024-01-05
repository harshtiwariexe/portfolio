import { Link } from "react-router-dom";
import Logo from "./logo";
export default function Header(){
   return  <div className="absolute top-0 mt-10  navigate flex flex-row gap-[400px]">
  <Logo/>
    <div className="flex flex-row gap-14 mt-2 text-xl tracking-wider">
       <Link to='/about'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">About</div></Link>
       <Link to='/skills'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Skills</div></Link>
       <Link to='/project'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Project</div></Link>
       <Link to='/article'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Articles</div></Link>
       <Link to='/contactme'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Contact Me</div></Link>
        
    </div>
  </div>
}