import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import CardRanking from "./components/card/card";
import SearchBar from "../searchBar/searchBar";
import { Artist } from "../../types/artist";
import { fetchArtist } from "../searchBar/fetchArtist";
import User from "../../types/user";
import { FetchFirtsUsers } from "./components/fetchFirstUsers";
import { FetchUsersByArtist } from "./components/fetchUsersByArtist";
const Ranking = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState<string >("");
    const [artist, setArtist] = useState<Artist | null>(null);
    const [arrayArtist, setArrayArtist] = useState<Artist[]>([]);
    const fetchUsersByArtistCallBack = useCallback(async ()=>{
        if(artist){
            const dataUsers = await FetchUsersByArtist(artist?.id);
            setUsers(dataUsers);
        }
    },[artist])
    const fetchArtistCallBack = useCallback(async() => {
        const artistData = await fetchArtist(search);
        const uniqueArtists:Artist[] = Array.from(new Map(artistData.map(a => [a.id, a])).values());

        if (artist) {
            setArrayArtist(uniqueArtists.filter(a => a.id !== artist.id));
        } else {
            setArrayArtist(uniqueArtists);
        }
    },[search])
    const fetchFirstFiftyUsers = useCallback(async () => {
        const response = await FetchFirtsUsers();
        setUsers(response)
    },[])
    useEffect(()=>{
        if(search){
            fetchArtistCallBack();
        }else{
            setArrayArtist([])
        }
    },[search]);
    useEffect(()=>{
        if(!artist){
            fetchFirstFiftyUsers();
        }else{
            fetchUsersByArtistCallBack();
        }
    },[artist])
    return(
        <section className="flex justify-start h-full pb-5 xl:pb-0 min-h-screen items-center flex-col bg-bg-muted-dark pt-5 px-6">
             <h1 className="text-purple-600 font-extrabold text-center text-3xl xl:text-5xl">
             Ranking de jugadores
            </h1>
            <p className="text-secondary-text-dark text-xs lg:text-sm text-center mt-5">
                En este ranking se muestran los 50 jugadores con la puntuación más alta.<br/>
                Si seleccionas un artista, verás el ranking específico para ese artista. <br/> 
                Si no seleccionas ninguno, se mostrará el ranking global con los mejores puntajes de todos los jugadores.

            </p>
            <section className="flex justify-center items-center mt-10 relative flex-col w-full">
                <SearchBar onSelect={setArtist} setSearch={setSearch} artists={arrayArtist}/>
                <div className="flex flex-col items-center mt-5 overflow-y-scroll lg:overflow-visible h-96 lg:h-auto w-full px-3 xl:px-40">
                    {users.map((user, index) => <CardRanking key={index} user={user} rank={index+1}/>)}
                </div>
            </section>
        </section>
        
    );
}

export default Ranking;

