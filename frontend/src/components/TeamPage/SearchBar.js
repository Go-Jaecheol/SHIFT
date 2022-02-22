import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBarWrapper = styled.div`
    height: 10%;
    width: 1100px;
    border-radius: 5px;
    background-color: rgba(230,230,230,0.5);
    display: flex;
    justify-content: center;
`;

const SearchBarContent = styled.div`
    height: 70px;
    width: 900px;
    padding-top: 15px;
    margin-top: 10px;
    border-radius: 25px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`;

const SearchBtn = styled.button`
    height: 56px;
    width: 56px;
    margin-left: 5px;
    border-radius: 5px;
    background-color: #5090d3;
    border: 0;
    cursor: pointer;
    &:hover {
        border: 2px solid white;
    }
`;

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <SearchBarContent>
                <Autocomplete
                    disablePortal
                    id="seat-section"
                    options={sectionList}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="구역" />}
                />
                <TextField id="seat-col" label="열" variant="outlined" />
                <TextField id="seat-num" label="번호" variant="outlined" />
                <SearchBtn>Search</SearchBtn>
            </SearchBarContent>
        </SearchBarWrapper>
    );
}

const sectionList = [
    { label: '블루존 3-2' },
]

export default SearchBar;