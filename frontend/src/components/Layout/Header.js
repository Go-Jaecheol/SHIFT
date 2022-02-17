import React from "react";
import styled from 'styled-components';

import logo from '../../images/SHIFT_logo.png';

const HeaderWrapper = styled.div`
    display: flex;
    background-color: #8bc0aa;
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
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <Logo src={logo} />
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default Header;