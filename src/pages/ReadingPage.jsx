import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/Section';
import Task from 'components/VocabularyPageContent/Task';
import Text from 'components/ReadingPageContent/Text';
import Select from "components/ReadingPageContent/Select";
import DBText from '../db/readingText';

const ReadingPage = () => {
  return (
    <Container>
      <Section>
        <Task
          accentText="Exercise 1"
          text="Read an email about plans for the weekend to practise and improve your reading skills."
        />
        <Text text={DBText[0].text} title={DBText[0].title} />
      </Section>
      <Section>
        <Task
          accentText="Exercise 2"
          text="Choose correct option"
        />
        <Select tasks={DBText[0].task1} />
      </Section>
    </Container>
  )
}

export default ReadingPage