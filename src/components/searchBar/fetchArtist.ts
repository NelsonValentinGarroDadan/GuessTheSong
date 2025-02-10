export const fetchArtist = async (artist: string) => {
    try {
        const token_access = await fetch(`${import.meta.env.VITE_API_URL}/spotify/token`);
        const { token } = await token_access.json();

        const response = await fetch(
            `https://api.spotify.com/v1/search?offset=0&limit=10&query=${encodeURIComponent(artist)}&type=artist&locale=es-419,es;q=0.9`,
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
