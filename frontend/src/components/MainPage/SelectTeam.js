import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import ShiftBanner from '../../images/baseballpark.jpg';

const SelectTeamWrapper = styled.div`
    background-color: #f7f8f9;
    width: 1600px;
    height: 600px;
    position: relative;
    margin: 0 auto;
    padding: 5px 20px;
`;
const SelectTeamContent = styled.div`
    &:after {
        content: "";
        display: block;
        clear: both;
    }
    position: relative;
    width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
`;

const TeamList = styled.ul`
    &:after {
        display: block;
        content: "";
        clear: both;
    }
    width: 100%;
    margin-top: 30px; 
`;

const StadiumImg = styled.div`
    &:before {
        background-color: #000;
        content: "";
        height: 100%;
        left: 0;
        opacity: .1;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        bottom: 0;
        content: "";
        height: 191px;
        left: 0;
        opacity: .3;
        position: absolute;
        width: 100%;
    }
    background: url(${ShiftBanner}) 50% 50% no-repeat;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity .4s;
    width: 100%;
    z-index: 5;
`;

const TeamLink = styled.a`
    &:hover ${StadiumImg} {
        opacity: 1;
    }
    &:before {
        border: 1px solid rgba(0,0,0,.08);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        content: "";
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 2;
    }
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    background-color: #fff;
    box-sizing: border-box;
    display: block;
    height: 200px;
    overflow: hidden;
    padding: 30px 20px;
    position: relative;
    border-radius: 14px;
`;

const TeamTitle = styled.span`
    color: ${(props) => props.teamColor};
    display: -webkit-box;
    font-family: LineSeed,system-ui,-SF Pro Text,Helvetica,Roboto,sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    height: 70px;
    line-height: 5.2rem;
    overflow: hidden;
    padding-bottom: 2px;
    position: relative;
    transition: color .3s;
    vertical-align: top;
    word-break: break-word;
    z-index: 10;
`;

const StadiumName = styled.span`
    display: -webkit-box;
    font-family: LineSeed,system-ui,-SF Pro Text,Helvetica,Roboto,sans-serif;
    font-size: 1rem;
    font-weight: 900;
    height: 70px;
    letter-spacing: -.61px;
    line-height: 5.2rem;
    overflow: hidden;
    padding-bottom: 2px;
    position: relative;
    transition: color .3s;
    vertical-align: top;
    word-break: break-word;
    z-index: 10;
`;

const TeamContent = styled.li`
    &:hover ${TeamTitle} {
        color: #ffffff;
    }
    &:hover ${StadiumName} {
        color: #ffffff;
    }
    &:hover {
        transform: scale(1.04);
        box-shadow: 3px 3px 20px rgb(0 0 0 / 50%);
        z-index: 1;
        opacity: 1;
    }
    width: calc(20% - 12px);
    float: left;
    position: relative;
    margin-top: 20px; 
    margin-left: 7px;
    margin-right: 5px;
    opacity: 0.8;
    transition: opacity 0.3s;
    transition: all 0.15s;
    border-radius: 14px;
    box-shadow: rgb(0 0 0 / 20%) 2px 2px 3px;
`;

const TeamContentDown = styled(TeamContent)`
    &:nth-last-child(2) {
        animation: down 1s ease-in-out forwards;
    }
    &:nth-last-child(4) {
        animation: down 1s ease-in-out forwards;
    }
    top: 67px;
`;

const TeamContentUp = styled(TeamContent)`
    &:nth-last-child(1) {
        animation: up 1s ease-in-out forwards;
    }
    &:nth-last-child(3) {
        animation: up 1s ease-in-out forwards;
    }
    &:nth-last-child(5) {
        animation: up 1s ease-in-out forwards;
    }
    top: 0;
`;

const SelectTeam = () => {
    const history = useHistory();

    const handleClick = (name) => {
        history.push({
            pathname: "/list/" + name,
            state: {
                teamname: name,
            }
        });
    };

    return (
        <SelectTeamWrapper>
            <SelectTeamContent>
                <TeamList>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("SSG")}>
                            <TeamTitle teamColor={"#c2172d"}>SSG</TeamTitle>
                            <StadiumName>인천 SSG 랜더스필드</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                    <TeamContentDown>
                        <TeamLink onClick={()=>handleClick("KIW")}>
                            <TeamTitle teamColor={"#830024"}>키움</TeamTitle>
                            <StadiumName>고척 스카이돔</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentDown>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("LG")}>
                            <TeamTitle teamColor={"#be0737"}>LG</TeamTitle>
                            <StadiumName>서울 잠실야구장</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                    <TeamContentDown>
                        <TeamLink onClick={()=>handleClick("KT")}>
                            <TeamTitle teamColor={"#4c4d4f"}>KT</TeamTitle>
                            <StadiumName>수원 KT 위즈파크</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentDown>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("KIA")}>
                            <TeamTitle teamColor={"#ea0029"}>KIA</TeamTitle>
                            <StadiumName>광주 기아 챔피언스필드</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("LOT")}>
                            <TeamTitle teamColor={"#c9012a"}>롯데</TeamTitle>
                            <StadiumName>부산 사직야구장</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                    <TeamContentDown>
                        <TeamLink onClick={()=>handleClick("DOO")}>
                            <TeamTitle teamColor={"#131230"}>두산</TeamTitle>
                            <StadiumName>서울 잠실야구장</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentDown>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("SL")}>
                            <TeamTitle teamColor={"#0064b2"}>삼성</TeamTitle>
                            <StadiumName>대구 삼성 라이온즈파크</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                    <TeamContentDown>
                        <TeamLink onClick={()=>handleClick("NC")}>
                            <TeamTitle teamColor={"#1f468f"}>NC</TeamTitle>
                            <StadiumName>창원 NC 파크</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentDown>
                    <TeamContentUp>
                        <TeamLink onClick={()=>handleClick("HW")}>
                            <TeamTitle teamColor={"#ff6600"}>한화</TeamTitle>
                            <StadiumName>대전 한화생명 이글스파크</StadiumName>
                            <StadiumImg></StadiumImg>
                        </TeamLink>
                    </TeamContentUp>
                </TeamList>
            </SelectTeamContent>
        </SelectTeamWrapper>
    )
}

export default SelectTeam;