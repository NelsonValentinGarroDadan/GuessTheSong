import React from "react";
import User from "../../../../types/user";
const CardRanking = ({user,rank}:{user:User,rank:number})=>{
    return(
        <div className="flex items-center justify-center bg-purple-600 p-4 rounded mb-5 w-full">
            <div className="flex justify-start items-start w-full flex-col">
                <h4 className="text-text-dark w-full text-lg">{`${user.name} ${user.lastname}`}</h4>
                <span className="text-secondary-text-dark w-full text-md">{`Puntaje: ${user.maxScore}`}</span>
            </div>
            <div className="flex justify-center items-center">
                <span className="text-purple-800 text-lg">{`#${rank}`}</span>
            </div>
        </div>
    );
}

export default CardRanking;