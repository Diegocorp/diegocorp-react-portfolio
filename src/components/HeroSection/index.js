import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {animateScroll as scroll} from 'react-scroll';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Diego Sandoval </HeroH1>
                <HeroP>Full Stack Developer</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="about" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        xact='true' 
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
