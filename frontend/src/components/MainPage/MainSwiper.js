import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import SL from '../../images/SL.svg';
import KT from '../../images/KT.svg';
import LG from '../../images/LG.svg';
import DOO from '../../images/DOO.svg';
import HW from '../../images/HW.svg';
import KIA from '../../images/KIA.svg';
import KIW from '../../images/KIW.svg';
import LOT from '../../images/LOT.svg';
import NC from '../../images/NC.svg';
import SSG from '../../images/SSG.svg';

const SwiperWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px;
    width: 1100px;
`;

const SlideItem = styled.div`
    height: 200px;
    width: 200px;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        border: 2px solid lightgray;
    }
    ${({ active }) => active && `box-shadow: 1px 1px 6px black;`};
`;


const MainSwiper = () => {
    const history = useHistory();

    const handleClick = (name, img) => {
        history.push({
            pathname: "/list/" + name,
            state: {
                teamname: name,
                img_src: img,
            }
        });
    };

    const data = [
        {
            id: 1,
            teamname: "SL",
            img_src: SL,
        },
        {
            id: 2,
            teamname: "KT",
            img_src: KT,
        },
        {
            id: 3,
            teamname: "LG",
            img_src: LG,
        },
        {
            id: 4,
            teamname: "DOO",
            img_src: DOO,
        },
        {
            id: 5,
            teamname: "KIA",
            img_src: KIA,
        },
        {
            id: 6,
            teamname: "KIW",
            img_src: KIW,
        },
        {
            id: 7,
            teamname: "LOT",
            img_src: LOT,
        },
        {
            id: 8,
            teamname: "NC",
            img_src: NC,
        },
        {
            id: 9,
            teamname: "SSG",
            img_src: SSG,
        },
        {
            id: 10,
            teamname: "HW",
            img_src: HW,
        },

    ]

    SwiperCore.use([Navigation]);

    return (
        <SwiperWrapper>
            <h2>원하는 팀을 선택해주세요!</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                initialSlide={0}
                navigation={true}
                watchOverflow={true}
                mousewheel={true}
            >
                {data.map((dt) => (
                    <SwiperSlide key={dt.id}>
                        <SlideItem key={dt.id}>
                            <img src={dt.img_src} onClick={()=>handleClick(dt.teamname, dt.img_src)} height="200" width="200"/>
                        </SlideItem>
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </SwiperWrapper>
    )
}

export default MainSwiper;