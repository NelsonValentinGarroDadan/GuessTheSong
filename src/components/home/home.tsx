import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <section className="relative w-full min-h-screen h-full flex justify-center items-center flex-col bg-bg-muted-dark">
            <div className="flex justify-center items-center flex-col z-10">
                <h1 className="text-purple-600 font-extrabold text-center text-4xl xl:text-5xl">Bienvenido a GuessTheSong</h1>
                <h4 className="text-text-dark p-5 text-center xl:text-xl xl:w-1/2">Pon a prueba tus conocimientos musicales de tus artista favorito, adivinando canciones a partir de breves fragmentos.</h4>
                <button className="bg-purple-600 text-white px-10 py-2 rounded-full cursor-pointer group border-purple-600 border hover:bg-transparent ">
                    <Link to="/play" className="text-text-dark group-hover:text-purple-600 ">¡Empezar a jugar!</Link>
                </button>
            </div>
            <img src="/gemotry-patron.webp" alt="patron" className="absolute h-1/2 w-screen bottom-0 left-0 opacity-35"/>
     </section>
    );
}