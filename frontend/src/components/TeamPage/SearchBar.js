import React, { useState } from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router';

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

const SearchBar = (props) => {
    const history = useHistory();
    const initialState = {
        seatSection: "",
        seatCol: 0,
        seatNum: 0,
    };
    const [searchState, setSearchState] = useState(initialState);

    const handleClick = () => {
        history.push({
            pathname: "/list/" + props.teamname + "/" + searchState.seatSection + "/" + searchState.seatCol + "/" + searchState.seatNum,
            state: {
                section: searchState.seatSection,
                col: searchState.seatCol,
                num: searchState.seatNum,
            }
        });
    };

    const handleChange = (event) => {
        const target = event.target;
        setSearchState({
            ...searchState,
            [target.name]: target.value,
        });
    };

    return (
        <SearchBarWrapper>
            <SearchBarContent>
                <Autocomplete
                    disablePortal
                    id="seat-section"
                    options={sectionList}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} name="seatSection" label="구역" onChange={handleChange}/>}
                />
                <TextField name="seatCol" label="열" variant="outlined" onChange={handleChange}/>
                <TextField name="seatNum" label="번호" variant="outlined" onChange={handleChange}/>
                <SearchBtn onClick={handleClick}>Search</SearchBtn>
            </SearchBarContent>
        </SearchBarWrapper>
    );
}

const sectionList = [
    { label: '블루존 3-2' },
]

export default SearchBar;