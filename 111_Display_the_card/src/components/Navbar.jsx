import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex  gap-3 bg-[#64748b95] h-12 justify-start items-center'>
                <div className="logo font-bold bg-black text-white rounded-full h-full flex justify-center items-center p-2 m-1">CaSh</div>
                <div className="s1 flex ">
                    <ul className="flex gap-5 font-bold">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <span class="material-symbols-outlined ml-2 ">
                            more_horiz
                        </span>
                    </ul>
                </div>
                <div className="search w-full md:w-[60%] bg-[#64748b7a] rounded-xl flex justify-center items-center text-sm h-[60%] gap-2 border-gray-400 border-2"><span class="material-symbols-outlined text-[20px]">
                    search
                </span>Showing Card</div>

            </div>
            <div className="line w-full h-[1px] bg-gray-400"></div>
        </>


    )
}

export default Navbar
