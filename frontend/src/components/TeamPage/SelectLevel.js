import React, { useState } from "react";
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router';

const SelectLevelWrapper = styled.div`
    width: 1100px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: rgba(230,230,230,0.5);
    display: flex;
    flex-wrap: wrap;
`;

const SelectLevelContent = styled.button`
    height: 40px;
    width: 200px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin: 10px;
    border: 0;
    border-radius: 15px;
    background-color: #FFFFFF;
    cursor: pointer;
    &:hover {
        border: 2px solid white;
    }
`;

const SelectLevel = () => {
    const history = useHistory();
    const location = useLocation();
    
    const handleClick = (level) => {
        history.push({
            pathname: "/list/" + location.state.teamname + "/" + level,
            state: {
                teamname: location.state.teamname,
                img_src: location.state.img_src,
                level: level,
            }
        });
    };

    return (
        <SelectLevelWrapper>
            {levelList.map((dt) => (
                <SelectLevelContent onClick={()=>handleClick(dt.label)}>{dt.label}</SelectLevelContent>
            ))}
        </SelectLevelWrapper>
    );
}

const levelList = [
    { label: '블루존'},
    { label: 'VIP석' },
    { label: '중앙테이블석' },
    { label: '3루 테이블석' },
    { label: '1루 테이블석' },
    { label: '3루 익사이팅석' },
    { label: '1루 익사이팅석' },
    { label: '3루 내야지정석' },
    { label: '원정응원석' },
    { label: '1루 내야지정석' },
    { label: 'SKY(하단)지정석' },
    { label: 'SKY(상단)지정석' },
    { label: '외야지정석' },
    { label: '잔디석' },
    { label: '외야테이블석' },
    { label: '외야패밀리석' },
    { label: '외야미니테이블석' },
    { label: '땅땅치킨루프탑' },
    { label: '파티플로어석' },
]

export default SelectLevel;