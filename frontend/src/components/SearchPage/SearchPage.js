import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchPageWrap = styled.div`
    width: 100%;
`;

const SearchPageText = styled.h1`
    margin-bottom: 3.5rem;
    font-size: 3rem;
    line-height: 4.5rem;
    white-space: pre-line;
`;

const SearchPageContent = styled.div`
    display: grid;
    position: relative;
    gap: 1.25rem;
    max-width: 75rem;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

const SearchPage = () => {
    const location = useLocation();

    return (
        <SearchPageWrap>
            <SearchPageContent>
                <SearchPageText>원하는 좌석을 선택해주세요!</SearchPageText>
                <SearchBar/>
                <SearchResult/>
            </SearchPageContent>
        </SearchPageWrap>
    );
}

export default SearchPage;