import React from "react";
import { Link } from "react-router-dom";
import Card from "./components/card/card";
import cardData from "./components/cardData";
export default function Home(){
    return(
        <section className="relative w-full min-h-screen h-full pb-5 flex justify-center items-center flex-col bg-bg-muted-dark pt-5">
            <div className="flex justify-start items-center flex-col z-10">
                <h1 className="text-purple-600 font-extrabold text-center mb-4 xl:mb-0 text-4xl xl:text-5xl">Bienvenido a GuessTheSong</h1>
                <h4 className="text-text-dark p-5 text-center xl:text-xl xl:w-1/2 mb-4 xl:mb-0">Pon a prueba tus conocimientos musicales de tus artista favorito, adivinando canciones a partir de breves fragmentos.</h4>
                <button className="mb-7 xl:mb-0 bg-purple-600 text-white px-10 py-2 rounded-full cursor-pointer group border-purple-600 border hover:bg-transparent ">
                    <Link to="/play" className="text-text-dark group-hover:text-purple-600 ">¡Empezar a jugar!</Link>
                </button>
            </div> <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 px-5">
                {cardData.map((card,index)=> <Card key={index} {...card}/>)}
            </section>
        </section>
    );  
}