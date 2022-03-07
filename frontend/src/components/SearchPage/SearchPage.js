import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchPageWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 100%;
`;

const SearchPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
`;

const SearchPage = () => {
    const location = useLocation();

    return (
        <SearchPageWrap>
            <SearchPageContent>
                <SearchBar teamname={location.state.teamname} img_src={location.state.img_src} level={location.state.level}/>
                <SearchResult search={location.search} img_src={location.state.img_src}/>
            </SearchPageContent>
        </SearchPageWrap>
    );
}

export default SearchPage;