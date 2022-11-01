import React from 'react';
import Container from 'components/VocabularyPageContent/Container';
import Section from 'components/Section';
import Task from 'components/VocabularyPageContent/Task';
import GrammarImage from 'components/GrammarPageContent/GrammarImage';
import Board from 'components/GrammarPageContent/Board';
import Select from 'components/GrammarPageContent/Select';
// import Input from 'components/GrammarPageContent/Input';
import DBGrammarSelect from '../db/grammarSelect';
// import DBGrammarInput from '../db/grammarInput';

const GrammarPage = () => {
  return (
    <Container>
      <Section>
        <Task
          accentText="Past Perfect Tense"
          text="The past perfect refers to a time earlier than before now. It is used to make it clear that one event happened before another in the past."
        />
        <GrammarImage />
        <Board/>
      </Section>
      <Section>
        <Task
          accentText="Exercise 1"
          text="Choose correct option"
        />
        <Select tasks={DBGrammarSelect} />
      </Section>
      {/* <Section>
        <Task
          accentText="Exercise 2"
          text="Full fill the gaps with correct sentences"
        />
        <Input tasks={DBGrammarInput} />
      </Section> */}
    </Container>
  )
}

export default GrammarPage