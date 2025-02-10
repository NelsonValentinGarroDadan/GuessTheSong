import React, { useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Artist } from "../../types/artist";

const SearchBar = ({ onSelect, artists , setSearch}: { onSelect: (artist: Artist | null) => void ,setSearch: (search: string) => void , artists:Artist[]}) => {
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

    return (
        <Autocomplete
            disablePortal
            options={artists}
            value={selectedArtist}
            getOptionLabel={(option) => option.name}
            onInputChange={(_, newInputValue) => setSearch(newInputValue)}
            onChange={(_, newValue) => {
                setSelectedArtist(newValue);
                onSelect(newValue);
            }}
            sx={{
                width: '100%',
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
                key={params.id}
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

export default SearchBar;
