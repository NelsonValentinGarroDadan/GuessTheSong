import User from "../../../types/user"

export const FetchUsersByArtist = async (artist_id:string):Promise<User[]>  => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/scores/ranking/${artist_id}`);
    const data = await response.json();
    return data || [];
}