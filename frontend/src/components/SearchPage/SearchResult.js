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
        color: #868B94;
        opacity: 0.6;
    }
`;

const SearchResultGrid = styled.div`
    display: grid;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dcdee3;
    grid-template: "title tags properties " auto / max-content auto max-content;
`;

const SeatRating = styled.div`
    display: flex;
    grid-area: tags;
    align-items: center;
    margin-left: 0.75rem;
`;

const SeatName = styled.h3`
    grid-area: title;
    font-size: 1.625rem;
    line-height: 2.4375rem;
`;

const SearchResult = (props) => {
    const [stadiumName, setStadiumName] = useState("");
    const [seatName, setSeatName] = useState();

    return (
        <SearchResultWrapper>
            <SearchResultList>
                { props.search === "" ? (
                    <p>원하는 좌석의 구역/열/번호를 선택해주세요!</p>
                ) : (
                    <div>
                        <SearchResultContent>
                            <SearchResultLink href="/">
                                <SearchResultGrid>
                                    <SeatName>블루존 3-2구역 5열 21</SeatName>
                                    <SeatRating>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                                    </SeatRating>
                                </SearchResultGrid>
                            </SearchResultLink>
                        </SearchResultContent>
                    </div>
                )}
            </SearchResultList>
        </SearchResultWrapper>
    );
}

export default SearchResult;