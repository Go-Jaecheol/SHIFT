import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Select, MenuItem } from '@mui/material';
import Rating from '@mui/material/Rating';
import axios from "axios";

const SearchBarWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "section"
        "row"
        "num";
    gap: 1rem;
    @media (min-width: 48em){
        grid-template-areas:
            "section section"
            "row num";
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

const SearchRow = styled.div`
    grid-area: row;
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 18.25rem;
    @media (min-width: 62em){
        width: auto;
        margin-left: auto;
    }
`;

const InputRow = styled.input`
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

const SearchResultWrapper = styled.div`
    display: grid;
`;

const SearchResultList = styled.ul`
    padding: 0;
`;

const SearchResultContent = styled.li`
    display: block;
    position: relative;
`;

const SearchResultLink = styled.a`
    display: block;
    text-decoration: none;
    color: inherit;
    transition: opacity .3s;
    transition: color .3s;
    &:hover {
        color: #212124;
        opacity: 0.6;
    }
`;

const SearchResultGrid = styled.div`
    display: grid;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dcdee3;
    grid-template:
        "title tags" auto
        ". ." 0.5rem
        "properties properties" auto / auto 1fr;
    @media (min-width: 62em){
        grid-template: "title tags properties " auto / max-content auto max-content;
    }
`;

const SeatRating = styled.div`
    display: flex;
    grid-area: properties;
    margin-left: 0.75rem;
    @media (min-width: 62em){
        justify-content: flex-end;
        margin-right: 3.75rem;
    }
`;

const SeatName = styled.h3`
    display: flex;
    grid-area: tags;
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin-left: 1rem;
`;

const SearchResultTag = styled.div`
    display: flex;
    grid-area: title;
    align-items: center;
    margin-left: 0.75rem;
`;

const SearchResultTagName = styled.span`
    font-size: 0.875rem;
    font-weight: bold;
    color: white;
    background-color: ${(props) => props.tagColor};
    line-height: 1.5rem;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.6rem;
`;

const SearchResult = (props) => {
    const location = useLocation();
    const initialState = {
        seatSection: "All",
        seatRow: "",
        seatNum: "",
    };
    const [searchState, setSearchState] = useState(initialState);
    const [seatList, setSeatList] = useState([]);
    const [sectionList, setSectionList] = useState([]);

    const handleChange = (event) => {
        const target = event.target;
        setSearchState({
            ...searchState,
            [target.name]: target.value,
        });
    };

    useEffect(() => {
        axios({
            url: "http://localhost:8080/api/list/" + location.state.teamname + "/" + location.state.level_name,
            method: 'GET'
        }).then((res) => {
            const temp = new Set();
            res.data.map((data) => (
                temp.add(data.seatSection)
            ));
            setSectionList(Array.from(temp));
        })
        .catch((error)=>{console.log(error)});
    }, [])

    useEffect(() => {
        axios({
            url: "http://localhost:8080/api/list/" + location.state.teamname + "/" + location.state.level_name,
            method: 'POST',
            data: {
                section: searchState.seatSection,
                row: searchState.seatRow,
                num: searchState.seatNum
            }
        }).then((res) => {
            setSeatList(res.data);
        })
        .catch((error)=>{console.log(error)});
    }, [searchState])

    return (
        <>
        <SearchBarWrapper>
            <SearchSection
                name="seatSection"
                value={searchState.seatSection}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={handleChange}
            >
                <MenuItem value="All">전체 구역</MenuItem>
                {sectionList.map((section) => (
                    <MenuItem value={section}>{section}</MenuItem>
                ))}
            </SearchSection>
            <SearchRow>
                <InputRow name="seatRow" placeholder="열 검색" onChange={handleChange}></InputRow>
            </SearchRow>
            <SearchNum>
                <InputNum name="seatNum" placeholder="번호 검색" onChange={handleChange}></InputNum>
            </SearchNum>
        </SearchBarWrapper>
        <SearchResultWrapper>
            <SearchResultList>
                {   seatList.map(data => 
                        <SearchResultContent>
                            <SearchResultLink href="/">
                                <SearchResultGrid>
                                    <SearchResultTag>
                                        <SearchResultTagName tagColor={location.state.level_color}>{location.state.level_name}</SearchResultTagName>
                                    </SearchResultTag>
                                    <SeatName>{data.seatSection + "구역 " + data.seatRow + "열 " + data.seatNum}</SeatName>
                                    <SeatRating>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                                    </SeatRating>
                                </SearchResultGrid>
                            </SearchResultLink>
                        </SearchResultContent>
                )}
            </SearchResultList>
        </SearchResultWrapper>
        </>
    );
}

export default SearchResult;