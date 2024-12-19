import React from 'react'

const Card = () => {
    return (
        <>
            <div className='card h-[320px] w-[250px] bg-red-950 rounded-lg flex flex-col gap-2 p-2 m-5' >
                <div className="id flex justify-between font-bold m-1">
                    <div className="userId">1</div>
                    <div className="id">1</div>
                </div>
                <div className="title font-bold">
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                </div>
                <div className="body h-[70%] ">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, vel? Vitae, autem! Quidem, id veniam! Nemo, iure! Quas, repellat! Culpa, illum! Quia, vel nisi? Veritatis, molestias!Lorem ipsum </span>
                </div>
            </div>
        </>

    )
}

export default Card
