import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBarWrapper = styled.div`
    height: 10%;
    width: 1100px;
    border-radius: 5px;
    background-color: rgba(246,246,246,0.5);
`;

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <Autocomplete
                disablePortal
                id="seat-section"
                options={sectionList}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="구역" />}
            />
            <TextField id="seat-col" label="열" variant="outlined" />
            <TextField id="seat-num" label="번호" variant="outlined" />
        </SearchBarWrapper>
    );
}

const sectionList = [
    { label: '블루존 3-2' },
]

export default SearchBar;