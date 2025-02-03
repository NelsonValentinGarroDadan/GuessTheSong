import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const artists = ["Ariana Grande", "Ed Sheeran", "Taylor Swift", "The Weeknd", "Bad Bunny"]; // Esto debería venir de una API

const ArtistSelector = ({ onSelect }: { onSelect: (artist: string | null) => void }) => {
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

    return (
        <Autocomplete
            disablePortal
            options={artists}
            value={selectedArtist}
            onChange={(_, newValue) => {
                setSelectedArtist(newValue);
                onSelect(newValue);
            }}
            sx={{
                width: 300,
                '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', 
                    color: 'rgb(147 ,51, 234)', 
                    '& fieldset': {
                        borderColor: 'rgb(147 ,51, 234)', 
                    },
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Seleccionar artista..."
                    variant="outlined"
                    sx={{ 
                        backgroundColor: 'tranparent',
                        '& .MuiInputLabel-root': {
                            color: 'white', 
                        },
                        '& .MuiFormLabel-root' : {
                            color: 'rgb(147 ,51, 234)',
                        }
                        ,
                        '& .MuiFormControl-root' : {
                            borderColor: 'rgb(147 ,51, 234)',
                        }
                        ,
                        '& .MuiInputBase-root': {
                            color: 'white',
                        }, '& .MuiSvgIcon-root':{
                            color: 'rgb(147 ,51, 234)',
                        }
                        }
                    }
                />
            )}
            className="w-full max-w-md"
        />
    );
};

export default ArtistSelector;
