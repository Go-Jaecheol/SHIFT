import React from "react";
import styled from 'styled-components';

const SearchResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 80%;
    width: 1100px;
    border-radius: 5px;
    background-color: rgba(246,246,246,0.5);
`;

const SearchResult = () => {
    return (
        <SearchResultWrapper>
        </SearchResultWrapper>
    );
}

export default SearchResult;