import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

import SelectLevel from "./SelectLevel";
import ShiftBanner from '../../images/SHIFT_banner.png';

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

const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Banner = styled.img`
    width: 1100px;
    height: 540px;
`;

const TeamPage = () => {
    const location = useLocation();

    return (
        <TeamPageWrap>
            <TeamPageContent>
                <Banner src={ShiftBanner}/>
                <SelectLevel teamname={location.state.teamname} img_src={location.state.img_src}></SelectLevel>
            </TeamPageContent>
        </TeamPageWrap>
    );
}

export default TeamPage;