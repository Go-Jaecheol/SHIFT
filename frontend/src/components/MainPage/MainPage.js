import React from "react";
import styled from 'styled-components';

import MainSwiper from "./MainSwiper";
import ShiftBanner from '../../images/SHIFT_banner.png';

const MainPageWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
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

const MainContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const MainPage = () => {
    return (
        <MainPageWrap>
            <BannerWrapper>
                <Banner src={ShiftBanner}/>
            </BannerWrapper>
            <MainContent>
                <MainSwiper/>
            </MainContent>
        </MainPageWrap>
    );
}

export default MainPage;