import React from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { withRouter } from "react-router-dom";

import logo from '../../images/SHIFT_logo.png';

const HeaderWrapper = styled.div`
    display: flex;
    height: 100px;
    flex-direction: row;
    justify-content: center;
`;

const HeaderContent = styled.div`
    display: flex;
    height: 100%;
    width: 1100px;
`;

const Logo = styled.img`
    width: 120px;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
`;

const Header = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: "/",
        });
    };

    return (
        <HeaderWrapper>
            <HeaderContent>
                <Logo src={logo} onClick={()=>handleClick()}/>
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default withRouter(Header);