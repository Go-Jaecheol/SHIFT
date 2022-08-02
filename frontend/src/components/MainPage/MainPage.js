import React from "react";
import styled from 'styled-components';

import SelectTeam from "./SelectTeam";
import ShiftBanner from '../../images/baseballpark.jpg';
import TestImg from '../../images/test.png';

const MainPageWrap = styled.div`
    box-sizing: border-box;
    background-color: #fafafa;
    min-width: 1280px;
    position: relative;
    height: 100%;
    padding: 88px 0 120px;
`;

const BannerWrapper = styled.div`
    // background: url(${ShiftBanner}) 50%;
    // background-size: cover;
    background-color: #252525;
    position: relative;
    box-sizing: border-box;
    height: 600px;
    padding-top: 132px;
`;

const BannerTitle = styled.div`
    background: url(${TestImg}) no-repeat;
    background-size: contain;
    position: relative;
    box-sizing: border-box;
    width: 640px;
    height: 200px;
    margin: 0 auto;
`;

const BannerHr = styled.div`
    width: 640px;
    border-top: 5px solid #eee;
    margin: 30px auto;
`;

const BannerTextArea = styled.div`
    margin: 0 auto;
    width: 640px;
`;

const BannerText = styled.p`
    color: #eee;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    line-height: 7rem;
    text-align: center;
`;

const MainPage = () => {
    return (
        <MainPageWrap>
            <BannerWrapper>
                <BannerTitle/>
                <BannerHr/>
                <BannerTextArea>
                </BannerTextArea>
            </BannerWrapper>
            <SelectTeam/>
        </MainPageWrap>
    );
}

export default MainPage;