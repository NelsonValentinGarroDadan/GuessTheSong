import User from "../../../types/user";

export const FetchFirtsUsers = async () : Promise<User[]> =>{
    try{
        const result = await fetch(`${import.meta.env.VITE_API_URL}/users/ranking`);
        const data = await result.json();
        return data || [];
    } catch (error) {
        console.log(error)
        console.error("Error al obtener usuarios:", error);
        return [];
    }
}