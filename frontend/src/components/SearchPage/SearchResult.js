import React, { useState } from "react";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';

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
    background: #0A86B7;
    line-height: 1.5rem;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.6rem;
`;

const SearchResult = (props) => {
    const [stadiumName, setStadiumName] = useState("");
    const [seatName, setSeatName] = useState();

    return (
        <SearchResultWrapper>
            <SearchResultList>
                <SearchResultContent>
                    <SearchResultLink href="/">
                        <SearchResultGrid>
                            <SearchResultTag>
                                <SearchResultTagName>블루존</SearchResultTagName>
                            </SearchResultTag>
                            <SeatName>3-2구역 5열 21</SeatName>
                            <SeatRating>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                            </SeatRating>
                        </SearchResultGrid>
                    </SearchResultLink>
                </SearchResultContent>
            </SearchResultList>
        </SearchResultWrapper>
    );
}

export default SearchResult;