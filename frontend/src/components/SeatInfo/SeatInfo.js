import React from "react";
import styled from 'styled-components';
import { useLocation } from "react-router";

const SeatInfoWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 80%;
    width: 100%;
`;

const SeatInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
`;

const SeatInfo = () => {
    const location = useLocation();

    return (
        <SeatInfoWrap>
            <SeatInfoContent>
                
            </SeatInfoContent>
        </SeatInfoWrap>
    );
}

export default SeatInfo;