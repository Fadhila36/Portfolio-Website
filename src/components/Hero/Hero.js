import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br/>
        Muhammad Fadhila <br/>
        Abiyyu Faris
      </SectionTitle>
      <SectionText>
      High level experience in web design and web development knowledge, producing quality work.
      </SectionText>
      <Button onClick={() => window.location = '/pdf/Fadhila-Cv.pdf'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;