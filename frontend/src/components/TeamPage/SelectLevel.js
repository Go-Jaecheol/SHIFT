import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router';
import axios from 'axios';

const SelectLevelWrapper = styled.div`
    position: relative;
    width: 55.5em;
    margin: 0 auto;
    @media (max-width: 1000px){
        width: 100%;
        margin: 0;
    }
    @media (max-width: 900px){
        width: 100%;
        padding: 0 20px;
    }
`;

const SelectLevelText = styled.h2`
    margin-bottom: 1em;
    font-size: 3em;
    color: #fe6651;
    text-align: center;
`;

const SelectLevelContent = styled.div`
    margin-top: 1em;
`;

const SelectLevelCategory = styled.div`
    display: flex;
    justify-content: center;
`;

const CategoryList = styled.ul`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
`;

const CategoryContent = styled.li`
    height: 3em;
    margin: 0.35em;
    padding: 0.8em 1em 0 1em;
    font-size: 16px;
    line-height: 1.25em;
    font-weight: 500;
    color: #ffffff;
    background-color: #777777;
    border-radius: 1.5em;
    cursor: pointer;
    &:active {
        background-color: #fe6651;
    }
`;

const LevelListWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.8em;
    @media (max-width: 700px){
        margin-top: 1.25em;
    }
`;

const LevelList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    width: 52.875em;
    list-style: none;
    @media (max-width: 900px){
        width: 39.188em;
    }
`;

const LevelTag = styled.span`
    display: inline-block;
    height: 1.5rem;
    margin-top: 0.625rem;
    padding: 0.4rem 1.125rem 0 1.125rem;
    font-size: 0.8rem;
    color: #ffffff;
    line-height: 0.7rem;
    border-radius: 0.7rem;
    background-color: ${(props) => props.tagColor};
    @media (max-width: 700px){
        margin-top: 0.3rem;
        height: 1.5rem;
    }
`;

const LevelContent = styled.li`
    position: relative;
    width: 189px;
    height: 180px;
    padding: 15px 12px;
    margin-bottom: 30px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 13%);
    border-radius: 7px;
    color: #777777;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.tagColor};
        color: #ffffff;
    }
    &:hover ${LevelTag} {
        background-color: #ffffff;
        color: ${(props) => props.tagColor};
    }
    &:not(:nth-of-type(4n)) {
        margin-right: 30px;
    }
    @media (max-width: 900px) {
        &:nth-of-type(4n) {
            margin-right: 30px;
        }
        &:nth-of-type(3n) {
            margin-right: 0;
        }
    }
    @media (max-width: 700px){
        height: 100px;
        padding: 8px 20px;
        margin: 0 0 10px 0 !important;
        width: 100%;
    }
`;

const LevelName = styled.div`
    position: absolute;
    top: 70px;
    left: 12px;
    padding-right: 10px;
    font-size: 20px;
    line-height: 26px;
    @media (max-width: 700px){
        top: 40px;
        left: 20px;
        padding: 0;
        font-size: 18px;
    }
`;

const StadiumName = styled.p`
    margin-top: 7px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
`;

const SelectLevel = () => {
    const history = useHistory();
    const location = useLocation();
    const [levelList, setLevelList] = useState([]);
    
    useEffect(() => {
        axios({
            url: "http://localhost:8080/api/list/" + location.state.teamname,
            method: 'GET'
        }).then((res) => {
            setLevelList(res.data);
        })
        .catch((error)=>{console.log(error)});
    }, [])

    const handleClickLevel = (level) => {
        history.push({
            pathname: "/list/" + location.state.teamname + "/" + level.levelName,
            state: {
                teamname: location.state.teamname,
                img_src: location.state.img_src,
                level_name: level.levelName,
                level_color: level.tagColor,
            }
        });
    };

    const handleClickTag = (tagName) => {
        axios({
            url: "http://localhost:8080/api/list/" + location.state.teamname,
            method: 'POST',
            data: {
                tag: tagName
            }
        }).then((res) => {
            setLevelList(res.data);
        })
        .catch((error)=>{console.log(error)});
    };

    return (
        <SelectLevelWrapper>
            <SelectLevelText>등급 선택</SelectLevelText>
            <SelectLevelContent>
                <SelectLevelCategory>
                    <CategoryList>
                        <CategoryContent onClick={()=>handleClickTag("#Home")}># Home</CategoryContent>
                        <CategoryContent onClick={()=>handleClickTag("#Away")}># Away</CategoryContent>
                        <CategoryContent onClick={()=>handleClickTag("#Outfield")}># Outfield</CategoryContent>
                        <CategoryContent onClick={()=>handleClickTag("#Backstop")}># Backstop</CategoryContent>
                        <CategoryContent onClick={()=>handleClickTag("#Upstair")}># Upstair</CategoryContent>
                    </CategoryList>
                </SelectLevelCategory>
                <LevelListWrapper>
                    <LevelList>
                    {levelList.map((level) => (
                        <LevelContent tagColor={level.tagColor} onClick={()=>handleClickLevel(level)}>
                            <LevelTag tagColor={level.tagColor}>{level.tagName}</LevelTag>
                            <LevelName>
                                {level.levelName}
                                <StadiumName>삼성라이온즈파크</StadiumName>
                            </LevelName>
                        </LevelContent>
                    ))}
                    </LevelList>
                </LevelListWrapper>
            </SelectLevelContent>
        </SelectLevelWrapper>
    );
}

export default SelectLevel;