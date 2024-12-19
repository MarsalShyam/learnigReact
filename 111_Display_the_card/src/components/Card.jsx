import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className='card h-[320px] w-[250px] bg-slate-600 rounded-lg flex flex-col gap-2 p-2 m-5 shadow-lg' >
                <div className="ide flex justify-between font-bold m-1">
                    <div className="userId">{props.userId}</div>
                    <div className="id">{props.id}</div>
                </div>
                <div className="title font-bold">
                    <h2>{props.title}</h2>
                </div>
                <div className="body h-[70%] ">
                    <span>{props.body}</span>
                </div>
            </div>
        </>

    )
}

export default Card
