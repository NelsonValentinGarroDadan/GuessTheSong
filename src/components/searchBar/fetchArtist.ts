import { Artist } from "../../types/artist";

export const fetchArtist = async (artist: string) : Promise<Artist[]> => {
    try {
        const token_access = await fetch(`${import.meta.env.VITE_API_URL}/spotify/token`);
        const { token } = await token_access.json();

        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=10`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const data = await response.json();

        return data.artists?.items || [];
    } catch (error) {
        console.error("Error al obtener artistas:", error);
        return [];
    }
};
