"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/progressBar";
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";
import QuizzSubmission from "./QuizzSubmission";

const questions = [
  {
    questionText: "What is the primary objective of Software Engineering?",
    answers: [
      { answerText: "To produce reliable and efficient software", isCorrect: true, id: 1 },
      { answerText: "To write as much code as possible", isCorrect: false, id: 2 },
      { answerText: "To reduce project cost only", isCorrect: false, id: 3 },
      { answerText: "To increase system complexity", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which of the following is NOT a phase in SDLC?",
    answers: [
      { answerText: "Software Testing", isCorrect: false, id: 1 },
      { answerText: "Requirement Gathering", isCorrect: false, id: 2 },
      { answerText: "Coding", isCorrect: false, id: 3 },
      { answerText: "Hardware Design", isCorrect: true, id: 4 }
    ]
  },
  {
    questionText: "Which SDLC model is also known as the classic life cycle model?",
    answers: [
      { answerText: "Waterfall Model", isCorrect: true, id: 1 },
      { answerText: "Agile Model", isCorrect: false, id: 2 },
      { answerText: "Spiral Model", isCorrect: false, id: 3 },
      { answerText: "RAD Model", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "In Agile development, what is a 'sprint'?",
    answers: [
      { answerText: "A short, time-boxed period to complete tasks", isCorrect: true, id: 1 },
      { answerText: "A design pattern", isCorrect: false, id: 2 },
      { answerText: "A testing strategy", isCorrect: false, id: 3 },
      { answerText: "A deployment phase", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which diagram is used to model the system architecture?",
    answers: [
      { answerText: "Component Diagram", isCorrect: true, id: 1 },
      { answerText: "Use Case Diagram", isCorrect: false, id: 2 },
      { answerText: "Sequence Diagram", isCorrect: false, id: 3 },
      { answerText: "Activity Diagram", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which testing is performed without executing the code?",
    answers: [
      { answerText: "Static Testing", isCorrect: true, id: 1 },
      { answerText: "Dynamic Testing", isCorrect: false, id: 2 },
      { answerText: "Unit Testing", isCorrect: false, id: 3 },
      { answerText: "Integration Testing", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which one is a black-box testing technique?",
    answers: [
      { answerText: "Equivalence Partitioning", isCorrect: true, id: 1 },
      { answerText: "Code Review", isCorrect: false, id: 2 },
      { answerText: "Path Testing", isCorrect: false, id: 3 },
      { answerText: "Statement Coverage", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Who is responsible for managing the product backlog in Scrum?",
    answers: [
      { answerText: "Product Owner", isCorrect: true, id: 1 },
      { answerText: "Scrum Master", isCorrect: false, id: 2 },
      { answerText: "Development Team", isCorrect: false, id: 3 },
      { answerText: "Client", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which software metric measures the complexity of a program?",
    answers: [
      { answerText: "Cyclomatic Complexity", isCorrect: true, id: 1 },
      { answerText: "Lines of Code (LOC)", isCorrect: false, id: 2 },
      { answerText: "Number of Bugs", isCorrect: false, id: 3 },
      { answerText: "Defect Density", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which of the following is a non-functional requirement?",
    answers: [
      { answerText: "System shall respond within 2 seconds", isCorrect: true, id: 1 },
      { answerText: "System shall allow login", isCorrect: false, id: 2 },
      { answerText: "System shall record transactions", isCorrect: false, id: 3 },
      { answerText: "System shall generate reports", isCorrect: false, id: 4 }
    ]
  }
];


export default function Home() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
      return;
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  }

  const handleAnswer = (answer: any) => {
    setSelectedAnswer(answer.id);
    const isCurrentCorrect = answer.isCorrect;
    if (isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  }

  const scorePercentage: number = Math.round((score / questions.length) * 100);

  if (submitted) {
    return (
      <QuizzSubmission
        score={score}
        scorePercentage={scorePercentage}
        totalQuestions={questions.length}
      />
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
          <Button size="icon" variant="outline"><ChevronLeft /></Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />
          <Button size="icon" variant="outline">
            <X />
          </Button>
        </header>
      </div>
      <main className="flex justify-center flex-1">
        {!started ? <h1 className="text-3xl font-bold">Welcome to the quizz page👋</h1> : (
          <div>
            <h2 className="text-3xl font-bold">{questions[currentQuestion].questionText}</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {
                questions[currentQuestion].answers.map(answer => {
                  const variant = selectedAnswer === answer.id ? (answer.isCorrect ? "neoSuccess" : "neoDanger") : "neoOutline";
                  return (
                    <Button key={answer.id} variant={variant} size="xl" onClick={() => handleAnswer(answer)}><p className="whitespace-normal">{answer.answerText}</p></Button>
                  )
                })
              }
            </div>
          </div>
        )}
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <ResultCard isCorrect={isCorrect} correctAnswer={questions[currentQuestion].answers.find(answer => answer.isCorrect === true)?.answerText || ""} />
        <Button variant="neo" size="lg" onClick={handleNext}>{!started ? 'Start' : (currentQuestion === questions.length - 1) ? 'Submit' : 'Next'}</Button>
      </footer>
    </div>
  )
}
