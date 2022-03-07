import React, { useState } from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Snackbar, Alert } from "@mui/material";
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
    const [isCorrectName, setIsCorrectName] = useState(false);
    const [snack, setSnack] = useState(false);

    const handleSubmit = () => {
        if (!isCorrectName) {
            setSnack(true);
        }
        if (searchState.seatSection !== "" && isCorrectName) {
            history.push({
                pathname: "/list/" + props.teamname + "/" + props.level,
                search: "?section=" + searchState.seatSection + "&col=" + searchState.seatCol + "&num=" + searchState.seatNum,
                state: {
                    section: searchState.seatSection,
                    col: searchState.seatCol,
                    num: searchState.seatNum,
                    level: props.level,
                    teamname: props.teamname,
                    img_src: props.img_src,
                }
            });
        }
    };

    const handleChange = (event) => {
        const target = event.target;
        setSearchState({
            ...searchState,
            [target.name]: target.value,
        });
    };

    const ClickHandler = (text) => {
        if (text !== undefined) {
            setSearchState({
                ...searchState,
                seatSection: text,
            });
            setIsCorrectName(true);
        }
        else
            setSnack(true);
    };

    const snackClose = () => {
        setSnack(false);
    };

    return (
        <SearchBarWrapper>
            <SearchBarContent>
                <Autocomplete
                    disablePortal
                    id="seat-section"
                    options={sectionList}
                    sx={{ width: 200 }}
                    onChange={(event, value) =>
                        value ? ClickHandler(value.label) : ClickHandler("")
                    }
                    renderInput={(params) => <TextField {...params} name="seatSection" label="구역" onChange={handleChange}/>}
                />
                <TextField name="seatCol" label="열" variant="outlined" onChange={handleChange}/>
                <TextField name="seatNum" label="번호" variant="outlined" onChange={handleChange}/>
                <SearchBtn onClick={handleSubmit}>Search</SearchBtn>
                <Snackbar open={snack} autoHideDuration={6000} onClose={snackClose}>
                    <Alert onClose={snackClose} severity="error" variant="filled">
                    원하는 구역을 선택해주세요!
                    </Alert>
                </Snackbar>
            </SearchBarContent>
        </SearchBarWrapper>
    );
}

const sectionList = [
    { label: '3-2' },
    { label: '3-3' },
    { label: '3-4' },
    { label: '3-5' },
]

export default SearchBar;