import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';

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
    background-color: rgba(246, 246, 246, 0.5);
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

SwiperCore.use([Navigation]);

const MainSwiper = () => {
    SwiperCore.use([Navigation]);

    return (
        <SwiperWrapper>
            <h2>원하는 팀을 선택해주세요!</h2>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            initialSlide={1}
            centeredSlides={true}
            navigation={true}
          >
            <SwiperSlide>
                <SlideItem>
                    <img src={SL} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={KT} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={LG} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={DOO} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={KIA} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={KIW} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={LOT} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={NC} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={SSG} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
            <SwiperSlide>
                <SlideItem>
                    <img src={HW} height="200" width="200"/>
                </SlideItem>
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>
    )
}

export default MainSwiper;