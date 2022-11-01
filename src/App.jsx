import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import AppBar from "components/AppBar";
import Loader from 'components/Loader';
import Container from 'components/Container';

const DescriptionPage = lazy(() => import('./pages/DescriptionPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const VocabularyPage = lazy(() => import('./pages/VocabularyPage'));
const GrammarPage = lazy(() => import('./pages/GrammarPage'));
const ReadingPage = lazy(() => import('./pages/ReadingPage'));
const SpeakingPage = lazy(() => import('./pages/SpeakingPage'));
const HomeTaskPage = lazy(() => import('./pages/HomeTaskPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


export const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson" element={<LessonPage />} >
            <Route path='' element={<DescriptionPage/>} />
            <Route path="vocabulary" element={<VocabularyPage />} />
            <Route path="grammar" element={<GrammarPage />} />
            <Route path="reading" element={<ReadingPage />} />
            <Route path="speaking" element={<SpeakingPage />} />
            <Route path="practice" element={<HomeTaskPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
