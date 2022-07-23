import React from "react";
import styled from 'styled-components';

import SelectTeam from "./SelectTeam";
import ShiftBanner from '../../images/baseballpark.jpg';

const MainPageWrap = styled.div`
    box-sizing: border-box;
    min-width: 1280px;
    position: relative;
    height: 100%;
`;

const BannerWrapper = styled.div`
    background: url(${ShiftBanner}) 50%;
    background-size: cover;
    position: relative;
    box-sizing: border-box;
    height: 600px;
    padding-top: 132px;
`;

const MainPage = () => {
    return (
        <MainPageWrap>
            <BannerWrapper>
            </BannerWrapper>
            <SelectTeam/>
        </MainPageWrap>
    );
}

export default MainPage;