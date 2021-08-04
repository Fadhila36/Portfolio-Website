import React from 'react';
import { DiCode, DiZend } from 'react-icons/di';
import { AiOutlineAntDesign } from "react-icons/ai";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range a technologies in the web development world. 
    from Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React <br />
            Next.js <br />
            Bootstrap <br />
            Html5 <br />
            CSS3 <br />
            Tailwind <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js <br />
            Laravel <br />
            Codeigniter <br />
            MySQL <br />
            Firebase <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiOutlineAntDesign size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Figma <br />
            Adobe XD 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
