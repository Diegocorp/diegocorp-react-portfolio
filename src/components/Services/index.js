import React from 'react';
import Icon1 from '../../images/staticAssets.svg';
import Icon2 from '../../images/react.svg';
import Icon3 from '../../images/cloudHosting.svg';
import {ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>First Card</ServicesH2>
                        <ServicesP>We help your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Second Card</ServicesH2>
                        <ServicesP>We help your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Third Card</ServicesH2>
                        <ServicesP>We help your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
