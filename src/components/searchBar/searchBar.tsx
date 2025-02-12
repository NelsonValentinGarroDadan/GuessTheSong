import React, { useState } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";
import { Artist } from "../../types/artist";

const SearchBar = ({ onSelect, artists, setSearch }: { onSelect: (artist: Artist | null) => void, setSearch: (search: string) => void, artists: Artist[] }) => {
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (searchValue: string) => {
        setLoading(true);
        setSearch(searchValue);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setLoading(false);
    };

    return (
        <Autocomplete
            disablePortal
            options={artists}
            value={selectedArtist}
            getOptionLabel={(option) => option.name}
            getOptionKey={(option) => option.id}
            onInputChange={(_, newInputValue) => handleSearch(newInputValue)}
            onChange={(_, newValue) => {
                setSelectedArtist(newValue);
                onSelect(newValue);
            }}
            sx={{
                width: '100%',
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Seleccionar artista..."
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiFormLabel-root': {
                            color: 'rgb(147, 51, 234)',
                        },
                        '& .MuiFormControl-root': {
                            borderColor: 'rgb(147, 51, 234)',
                        },
                        '& .MuiInputBase-root': {
                            color: 'white',
                        },
                        '& .MuiSvgIcon-root': {
                            color: 'rgb(147, 51, 234)',
                        },
                    }}
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        },
                    }}
                />
            )}
            className="w-full max-w-md"
        />
    );
};

export default SearchBar;
