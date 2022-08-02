import React from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { withRouter } from "react-router-dom";

import logo from '../../images/logo.png';

const HeaderWrapper = styled.div`
    box-sizing: border-box;
    background-color: rgba(255,255,255,.95);
    height: 88px;
    left: 0;
    line-height: 1;
    min-width: 960px;
    position: fixed;
    top: 0;
    transition: .3s;
    width: 100%;
    z-index: 200;
`;

const HeaderContent = styled.div`
    display: inline-block;
    margin: 28px 0 0 32px;
    position: relative;
    vertical-align: top;
    z-index: 100;
`;

const Logo = styled.a`
    background: url(${logo}) no-repeat;
    background-size: contain;
    display: block;
    height: 32px;
    width: 135px;
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
                <Logo onClick={()=>handleClick()}/>
            </HeaderContent>
        </HeaderWrapper>
    );
}

export default withRouter(Header);