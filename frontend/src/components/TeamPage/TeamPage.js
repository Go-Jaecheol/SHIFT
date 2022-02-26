import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

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
    const location = useLocation();

    return (
        <TeamPageWrap>
            <TeamPageContent>
                <SearchBar/>
                <SearchResult img_src={location.state.img_src}/>
            </TeamPageContent>
        </TeamPageWrap>
    );
}

export default TeamPage;