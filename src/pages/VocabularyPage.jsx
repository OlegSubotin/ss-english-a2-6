import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/Section';
import Input from 'components/VocabularyPageContent/Input';
import Task from 'components/VocabularyPageContent/Task';
import WordsImagesList from 'components/VocabularyPageContent/WordsImagesList';
import Select from 'components/VocabularyPageContent/Select';
import DBVocabularySelect from "../db/vocabularySelect";
import DBVocabularyInput from "../db/vocabularyInput";

const VocabularyPage = () => {
  return (
    <Container>
      <Section>
        <Task accentText="Exercise 1" text="Vocabulary exercises to help learn words for things you can see in a room." />
        <WordsImagesList/>
      </Section>      
      <Section>
        <Task accentText="Exercise 2" text="Match the words with the definitions." />
        <Select tasks={DBVocabularySelect} />
      </Section>
      <Section>
        <Task accentText="Exercise 3" text="Write the word to fill the gaps." />
        <Input tasks={DBVocabularyInput} />
      </Section>
    </Container>
  )
};

export default VocabularyPage