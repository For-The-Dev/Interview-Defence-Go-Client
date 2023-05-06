import { useEffect, useState } from 'react';
import * as S from './TimerContainer.stlye';
const BASETIME = 180;

interface TimerProps {
  currentQuestion: number;
  isLastQuestion: boolean;
  moveToNextQuestion: () => void;
  onSubmitAnswer: () => void;
}

const TimerContainer = ({
  currentQuestion,
  isLastQuestion,
  moveToNextQuestion,
  onSubmitAnswer,
}: TimerProps) => {
  const [time, setTime] = useState(BASETIME);

  const getSeconds = (time: number) => {
    const seconds = time % 60;
    if (seconds < 10) {
      return '0' + String(seconds);
    } else {
      return String(seconds);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (time >= 0) {
        setTime((prev) => prev - 1);
      }
    }, 1000);

    if (time < 0) {
      // 다음 단계 or 제출 후 다음 재설정
      if (isLastQuestion) {
        onSubmitAnswer();
      } else {
        moveToNextQuestion();
        setTime(BASETIME);
      }
    }

    return () => clearInterval(timer);
  }, [time]);

  //  문제가 넘어가면 time 세팅
  useEffect(() => {
    setTime(BASETIME);
  }, [currentQuestion]);

  return (
    <S.TimerContainer warningAlert={time <= 10 ? true : false}>
      {Math.floor(+(time / 60))} : {getSeconds(time)}
    </S.TimerContainer>
  );
};

export default TimerContainer;
