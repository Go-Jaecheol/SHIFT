import React from "react";
import styled from 'styled-components';

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const TeamPageWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 100%;
`;

const TeamPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
`;

const TeamPage = () => {
    return (
        <TeamPageWrap>
            <TeamPageContent>
                <SearchBar/>
                <SearchResult/>
            </TeamPageContent>
        </TeamPageWrap>
    );
}

export default TeamPage;