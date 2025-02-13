import React, { useState } from "react";
const Auth = () => {
    const [choice, setChoice] = useState<boolean>(true);
    return (
        <section className="flex justify-start h-full min-h-screen items-center flex-col bg-bg-muted-dark pt-5 px-6">
            <h1 className="text-purple-600 font-extrabold text-center text-3xl xl:text-5xl mb-5">Accede a GuessTheSong</h1>
            <div className="w-full max-w-1/2 xl:max-w-2xl rounded bg-slate-700 px-9 py-3">
                <div className="w-full grid grid-cols-2 gap-2">
                    <button onClick={()=>{setChoice(true)}} className={`w-full ${choice?"text-white bg-purple-600":"text-gray-500 bg-gray-900 hover:text-gray-300 hover:bg-purple-700"} transition-all ease-in-out duration-300`}>Registrase</button>
                    <button onClick={()=>{setChoice(false)}} className={`w-full ${choice?"text-gray-500 bg-gray-900 hover:text-gray-300 hover:bg-purple-700":"text-white bg-purple-600"} transition-all ease-in-out duration-300`}>Iniciar Sesión</button>
                </div>
            </div>

        </section>
    );
}

export default Auth;