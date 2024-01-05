import Header from "./Navbar/nav";

const BackgroundComponent = () => {
    const AboutList = [
        {
            name: "Life",
            description: "-------------------------------------------------",
        },

        {
            name: "Education",
            description: "-------------------------------------------------",
        },

        {
            name: "Exktra",
            description: "---------------------------------------------------",
        },

        {
            name: "more extraa",
            description: "-------------------------------------------------",
        },
    ];
    return (
        <div className="relative  flex flex-col h-screen">
            <div className="fixed inset-0 bg-cover bg-center">
                <img src="2.png" alt="" className="h-full w-full" />
            </div>
            <div className="relative z-10 p-8">

                <Header />
                <h1 className="md:ml-52  md:mr-52 md:mt-52 mb-20 ml-6 mr-6 mt-52 mb-8 ">About</h1>
                <div className="text-xl  flex flex-col md:ml-52 md:mr-52 md:mt-10 mb-10 ml-6 mr-6 mt-1 mb-2">
                    <ul>{
                        AboutList.map((link) => (
                            <div key={link.name} className='flex flex-row'>
                                <div className="flex flex-col items-center -z-20">
                                    <div className="w-5 border-2 mb-0 py-3 px-3 border-gray-700 h-5 rounded-full"></div>
                                    <div className="w-0.5 bg-gray-700 h-52"></div>
                                </div>
                                <div className="ml-8"><h1 className="text-4xl">{link.name}</h1>
                                    <p className=" mr-20 ">{link.description}</p></div>
                            </div>
                        ))
                    }</ul>
                </div>
            </div>
        </div>

    );



};

export default BackgroundComponent;
