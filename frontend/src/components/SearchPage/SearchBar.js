import React, { useState } from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Select, MenuItem } from '@mui/material';

const SearchBarWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "section"
        "col"
        "num";
    gap: 1rem;
    @media (min-width: 48em){
        grid-template-areas:
            "section section"
            "col num";
        gap: 1.25rem;
    }
    @media (min-width: 62em){
        display: flex;
    }
`;

const SearchSection = styled(Select)`
    grid-area: section;
    align-items: center;
    height: 3.5rem;
    min-width: 20rem;
    padding-left: 0.5rem;
    fieldset {
        border: 1px solid #dcdee3;
        border-radius: 0.5rem;
        color: #4D5159;
    }
    @media (min-width: 62em){
        width: auto;
        margin-left: 1rem;
    }
`;

const SearchCol = styled.div`
    grid-area: col;
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 18.25rem;
    @media (min-width: 62em){
        width: auto;
        margin-left: auto;
    }
`;

const InputCol = styled.input`
    flex: 1;
    align-items: center;
    height: 3.25rem;
    border: 1px solid #dcdee3;
    border-radius: 0.5rem;
    padding-left: 1.25rem;
    font-size: 1rem;
    color: #4D5159;
`;

const SearchNum = styled.div`
    grid-area: num;
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 18.25rem;
    @media (min-width: 62em){
        width: auto;
        margin-right: auto;
    }
`;

const InputNum = styled.input`
    flex: 1;
    align-items: center;
    height: 3.25rem;
    border: 1px solid #dcdee3;
    border-radius: 0.5rem;
    padding-left: 1.25rem;
    font-size: 1rem;
    color: #4D5159;
`;

const SearchBar = (props) => {
    const history = useHistory();
    const initialState = {
        seatSection: "",
        seatCol: 0,
        seatNum: 0,
    };
    const [searchState, setSearchState] = useState(initialState);

    const handleSubmit = () => {
        if (searchState.seatSection !== "") {
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

    return (
        <SearchBarWrapper>
            <SearchSection
                name="seatSection"
                value={searchState.seatSection}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={handleChange}
            >
                <MenuItem value="">전체 구역</MenuItem>
                {sectionList.map((data) => (
                    <MenuItem value={data.label}>{data.label}</MenuItem>
                ))}
            </SearchSection>
            <SearchCol>
                <InputCol name="seatCol" placeholder="열 검색" onChange={handleChange}></InputCol>
            </SearchCol>
            <SearchNum>
                <InputNum name="seatNum" placeholder="번호 검색" onChange={handleChange}></InputNum>
            </SearchNum>
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