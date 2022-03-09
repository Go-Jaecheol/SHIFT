import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

import SelectLevel from "./SelectLevel";

const TeamPageWrap = styled.div`
    width: 100%;
`;

const TeamPageContent = styled.div`
    position: relative;
    margin: 0 auto;
`;

const TeamPage = () => {
    const location = useLocation();

    return (
        <TeamPageWrap>
            <TeamPageContent>
                <SelectLevel teamname={location.state.teamname} img_src={location.state.img_src}></SelectLevel>
            </TeamPageContent>
        </TeamPageWrap>
    );
}

export default TeamPage;