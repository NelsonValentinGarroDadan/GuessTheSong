import React, { useEffect } from "react";
import ArtistSelector from "../artistSelector/artisSelector";
import { useState } from "react";
import CardRanking from "./components/card/card";
import users from "./components/usersData";
const Ranking = () => {
    const [artist, setArtist] = useState<string | null>(null);
    return(
        <section className="flex justify-start h-full min-h-screen items-center flex-col bg-bg-muted-dark pt-5 px-6">
             <h1 className="text-purple-600 font-extrabold text-center text-3xl xl:text-5xl">
             Ranking de jugadores
            </h1>
            <p className="text-secondary-text-dark text-xs lg:text-sm text-center mt-5">
                En este ranking se muestran los 50 jugadores con la puntuación más alta.<br/>
                Si seleccionas un artista, verás el ranking específico para ese artista. <br/> 
                Si no seleccionas ninguno, se mostrará el ranking global con los mejores puntajes de todos los jugadores.

            </p>
            <section className="flex justify-center items-center mt-10 relative flex-col w-full">
                <ArtistSelector onSelect={setArtist}/>
                <div className="flex flex-col items-center mt-5 overflow-y-scroll lg:overflow-visible h-96 lg:h-auto w-full px-3 xl:px-40">
                    {users.map((user, index) => <CardRanking key={index} user={user} rank={index+1}/>)}
                </div>
            </section>
        </section>
        
    );
}

export default Ranking;