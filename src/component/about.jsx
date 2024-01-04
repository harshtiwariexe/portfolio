import { Link } from "react-router-dom";

const BackgroundComponent = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed inset-0 bg-cover bg-center"><img src="2.png" alt="" /></div>
      <div className="relative z-10 text-white p-8">
      <div className="mt-10 ml-52 navigate flex flex-row gap-[600px]">
        <img src="111.png" alt="" className="h-26 w-48 cursor-pointer" />
        <div className="flex flex-row gap-14 mt-4 text-xl tracking-wider">
           <Link to='/about'> <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">About</div></Link>
            <div className="cursor-pointer text-black  hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Skill</div>
            <div className="cursor-pointer text-black hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Project</div>
            <div className="cursor-pointer text-black  hover:bg-glass hover:text-white px-5 py-2 rounded-3xl hover:backdrop-blur-md">Contact Me</div>
            
        </div>
      </div>
      <h1 className="ml-52 mt-36">About</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
            <div className="w-5 border-2 mb-0 mt-2 ml-52 hover:bg-black border-black h-5 rounded-full"></div>
            <div className="w-0.5 bg-black h-52 ml-52"></div>
        </div>
        
       <div className="text-xl ml-3 text-black mr-52 flex flex-col">
        <h2 className="text-3xl mb-2">Life</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facere? Asperiores eveniet explicabo pariatur in, deleniti minus maxime facere unde laborum temporibus numquam ut ab hic corrupti architecto culpa eum.
       Quibusdam quisquam amet in saepe numquam debitis facere velit distinctio, repellendus unde quasi excepturi ducimus mollitia fuga adipisci voluptatem nihil eius? Inventore rerum iste porro laborum quis consequuntur. Non, quia!
       Praesentium eos dicta quo ut magnam tempora. Fuga pariatur inventore officiis deleniti, quo aliquam ipsam asperiores error consectetur rerum eveniet quas voluptates? Amet inventore aperiam soluta in. Dicta, sequi repellat.</p></div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
            <div className="w-5 border-2 mb-0 ml-52 hover:bg-black border-black h-5 rounded-full"></div>
            <div className="w-0.5 bg-black h-52 ml-52"></div>
        </div>
        
       <div className="text-xl ml-3 text-black mr-52 flex flex-col">
        <h2 className="text-3xl mb-2">Life</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facere? Asperiores eveniet explicabo pariatur in, deleniti minus maxime facere unde laborum temporibus numquam ut ab hic corrupti architecto culpa eum.
       Quibusdam quisquam amet in saepe numquam debitis facere velit distinctio, repellendus unde quasi excepturi ducimus mollitia fuga adipisci voluptatem nihil eius? Inventore rerum iste porro laborum quis consequuntur. Non, quia!
       Praesentium eos dicta quo ut magnam tempora. Fuga pariatur inventore officiis deleniti, quo aliquam ipsam asperiores error consectetur rerum eveniet quas voluptates? Amet inventore aperiam soluta in. Dicta, sequi repellat.</p></div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
            <div className="w-5 border-2 mb-0 ml-52 hover:bg-black border-black h-5 rounded-full"></div>
            <div className="w-0.5 bg-black h-52 mb-0 ml-52"></div>
        </div>
        
       <div className="text-xl ml-3 text-black mr-52 flex flex-col">
        <h2 className="text-3xl mb-2">Life</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facere? Asperiores eveniet explicabo pariatur in, deleniti minus maxime facere unde laborum temporibus numquam ut ab hic corrupti architecto culpa eum.
       Quibusdam quisquam amet in saepe numquam debitis facere velit distinctio, repellendus unde quasi excepturi ducimus mollitia fuga adipisci voluptatem nihil eius? Inventore rerum iste porro laborum quis consequuntur. Non, quia!
       Praesentium eos dicta quo ut magnam tempora. Fuga pariatur inventore officiis deleniti, quo aliquam ipsam asperiores error consectetur rerum eveniet quas voluptates? Amet inventore aperiam soluta in. Dicta, sequi repellat.</p></div>
      </div>
     
 
      
      </div>
    </div>
  );
};

export default BackgroundComponent;
