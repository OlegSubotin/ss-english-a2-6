import React from 'react';
import { Outlet } from "react-router-dom";
import LessonPageWrapper from "../components/LessonPageWrapper";
import LessonBar from "../components/LessonBar/";


const LessonPage = () => {
  return (
    <LessonPageWrapper>
      <LessonBar />
      <Outlet />
    </LessonPageWrapper>
  )
};

export default LessonPage