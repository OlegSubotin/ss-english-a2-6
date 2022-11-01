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
          text="Read an invitation to an office event to practise and improve your reading skills. Do the preparation task first. Then read the text and do the exercises."
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