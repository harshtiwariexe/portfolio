// import { Link } from "react-router-dom";
// import './home.css

export default function Home(){
   
    return <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="absolute top-0 mt-10  navigate flex flex-row gap-[600px]">
        <img src="logo.png" alt="" className="h-16 w-12 cursor-pointer" />
        <div className="flex flex-row gap-16 mt-4 text-lg tracking-wider">
            <div className="cursor-pointer text-white hover:text-gray-200">About</div>
            <div className="cursor-pointer text-white hover:text-gray-200">Skill</div>
            <div className="cursor-pointer text-white hover:text-gray-200">Project</div>
            <div className="cursor-pointer text-white hover:text-gray-200">Contact Me</div>
            
        </div>
      </div>
    <div className="absolute mr-52 ml-52">
     <h1 className="text-5xl font-semibold text-white"> I'm Harsh Tiwari</h1>
     <p className="font-light text-gray-200 mt-5 tracking-wider">A versatile full-stack developer who loves to explore the entire spectrum of coding. By day, I'm immersed in the intricacies of backend development, optimizing databases and ensuring seamless functionality. When the sun sets, my artistic side takes over—I'm a skilled painter, finding joy in both digital and traditional canvases.</p>
     <p className="font-light text-gray-200 mt-5 tracking-wider">In the realm of code, I craft holistic digital experiences, blending creativity and functionality. As a minimalist at heart, I appreciate the elegance of simplicity and order in both my coding endeavors and artistic pursuits. Whether it's optimizing algorithms or perfecting brushstrokes, I bring a unique perspective to every project. Interested in collaborating or just want to chat about the intersection of coding and art? Feel free to reach out—I'm here to bring your ideas to life, both digitally and artistically!</p>
    </div>
    <img src="home.jpg" alt="" className="object-cover min-h-screen " />
  </div>

}