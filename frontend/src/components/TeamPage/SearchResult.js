import React, { useState } from "react";
import styled from 'styled-components';
import Rating from '@mui/material/Rating';

const SearchResultWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 1100px;
    border-radius: 5px;
    background-color: rgba(230,230,230,0.5);
`;

const SearchResultContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 90%;
    width: 1000px;
    margin-top: 30px;
    border-radius: 5px;
`;

const SearchResultInfo = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(240,240,240,0.5);
    height: 100px;
    width: 900px;
    margin-top: 20px;
    margin-left: 50px;
    border-radius: 5px;
`;

const TeamLogo = styled.div`
    height: 80px;
    width: 80px;
    margin-left: 50px;
    border-radius: 5px;
`;

const SeatInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 300px;
    margin-left: 40px;
`;

const StadiumName = styled.div`
    height: 30px;
    margin-left: 10px;
    padding-top: 10px;
`;

const SeatName = styled.div`
    height: 30px;
    margin-left: 10px;
    padding-top: 10px;
`;

const MoreBtn = styled.button`
    height: 80px;
    width: 50px;
    margin-left: 150px;
    border-radius: 5px;
    background-color: #5090d3;
    border: 0;
    cursor: pointer;
    &:hover {
        border: 2px solid white;
    }
`;

const SearchResult = (props) => {
    const [stadiumName, setStadiumName] = useState("");
    const [seatName, setSeatName] = useState()
    return (
        <SearchResultWrapper>
            <SearchResultContent>
                <SearchResultInfo>
                    <TeamLogo>
                    <img src={props.img_src} height="80px" width="80px"/>
                    </TeamLogo>
                    <SeatInfo>
                        <StadiumName>삼성라이온즈파크</StadiumName>
                        <SeatName>블루존 3-2구역 5열 21</SeatName>
                    </SeatInfo>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="large" />
                    <MoreBtn>More</MoreBtn>
                </SearchResultInfo>
            </SearchResultContent>
        </SearchResultWrapper>
    );
}

export default SearchResult;