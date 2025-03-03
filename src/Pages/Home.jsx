import React from 'react';

const Home = () => {
    const catagory = [
        'All',
        'Graphics Card',
        'Monitor',
        'Power Supply',
        'Telivision'
    ]
    return (
        <div>
            <div className="hero "></div>
            <div className="catagoryContainer ">
                <div className="flex gap-3">
                    {
                        catagory.map((catagory,index)=>{
                        return (
                        <button className=' bg-gray-300 px-2 py-1 mt-2 rounded hover:bg-zinc-400 
                                transition-all  ease-in active:scale-90 cursor-pointer' key={index} > 
                                {catagory}.
                        </button>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Home;