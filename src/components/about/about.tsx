import React from "react";

const About = () => {
    return (
        <section className="flex justify-start h-full min-h-screen items-center flex-col bg-bg-muted-dark pt-5 px-6">
            <h1 className="text-purple-600 font-extrabold text-center text-4xl xl:text-5xl">
                Acerca de GuessTheSong
            </h1>

            <div className="bg-purple-600 w-full max-w-4xl p-6 my-6 rounded-lg flex flex-col">
                <h3 className="text-text-dark text-left text-2xl mb-4">
                    🎵 ¿Qué es GuessTheSong?
                </h3>
                <p className="text-text-dark text-left text-lg mb-6">
                    *GuessTheSong* es un juego en línea diseñado para desafiar tu conocimiento musical. 
                    Antes de empezar, eliges un artista y el juego te pondrá a prueba con fragmentos de sus canciones. 
                    Tendrás una sola ronda de 15 segundos para adivinar tantas canciones como puedas. 
                    Cada fragmento dura 5 segundos y se repetirá en bucle hasta que respondas o se acabe el tiempo. 
                    Si aciertas, ganas 5 puntos y se suman 2 segundos al contador. 
                    Además, si respondes rápido, obtendrás puntos extra:
                </p>
                <ul className="text-text-dark text-left text-lg list-disc pl-6 mb-6">
                    <li>En 1s → +5 puntos</li>
                    <li>En 2s → +4 puntos</li>
                    <li>En 3s → +3 puntos</li>
                    <li>En 4s → +2 puntos</li>
                    <li>En 5s → +1 punto</li>
                </ul>
                <p className="text-text-dark text-left text-lg mb-6">
                    El ranking actualmente se divide por artistas, así que podrás competir contra otros jugadores que elijan el mismo artista. 
                    En el futuro, planeamos expandirlo con un sistema más global.
                </p>

                <h3 className="text-text-dark text-left text-2xl mb-4">
                    🚀 Sobre el desarrollador
                </h3>
                <p className="text-text-dark text-left text-lg mb-6">
                    Mi nombre es <span className="font-bold">Valentín Garro</span>, desarrollador fullstack con experiencia en la creación de aplicaciones web interactivas y escalables. 
                    GuessTheSong nació como un proyecto personal que combina dos de mis grandes pasiones: la programación y la música. 
                    Desde la idea hasta la implementación, he trabajado en cada detalle para brindar una experiencia fluida y entretenida para los jugadores. 
                    Me encanta enfrentar desafíos técnicos y mejorar la experiencia de usuario en cada actualización. 
                </p>

                <h3 className="text-text-dark text-left text-2xl mb-4">
                    📩 Contáctame
                </h3>
                <p className="text-text-dark text-left text-lg mb-2">
                    Si tienes alguna duda, sugerencia o simplemente quieres saber más sobre el desarrollo de *GuessTheSong*, no dudes en escribirme. 
                    Estoy abierto a recibir feedback y nuevas ideas para seguir mejorando el juego.
                </p>
                <p className="text-text-dark text-left text-lg font-bold">
                    ✉️ Envíame un correo a <span className="underline">nelsonvgarrodadan@gmail.com</span>
                </p>
            </div>
        </section>
    );
};

export default About;
