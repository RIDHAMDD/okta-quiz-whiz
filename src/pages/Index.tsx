import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Target, Award } from 'lucide-react';
import { QuizCard } from '@/components/QuizCard';
import { QuizResults } from '@/components/QuizResults';
import { questions } from '@/data/questions';

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Calculate total number of individual options across all questions
  const totalOptions = questions.reduce((total, question) => total + question.options.length, 0);

  const getCurrentOption = () => {
    return questions[currentQuestionIndex]?.options[currentOptionIndex];
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTotalAnswered(totalAnswered + 1);
  };

  const handleNext = () => {
    // Move to next option
    if (currentOptionIndex + 1 < questions[currentQuestionIndex].options.length) {
      setCurrentOptionIndex(currentOptionIndex + 1);
    } else {
      // Move to next question, reset option index
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionIndex(0);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCurrentOptionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-8 px-4">
        <div className="container mx-auto">
          <QuizResults
            score={score}
            totalQuestions={totalOptions}
            correctAnswers={score}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-8 px-4">
        <div className="container mx-auto">
          <QuizCard
            question={questions[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            currentOptionIndex={currentOptionIndex}
            totalQuestions={questions.length}
            totalOptions={totalOptions}
            currentOptionNumber={totalAnswered + 1}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              DOMC Exam Prep
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master your Okta Implementation skills with individual practice statements. 
              Answer each statement Yes/No and get instant feedback and explanations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">35 Questions</CardTitle>
                <CardDescription>
                  Comprehensive coverage of Okta Implementation topics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Instant Feedback</CardTitle>
                <CardDescription>
                  Get detailed explanations for every answer
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Track Progress</CardTitle>
                <CardDescription>
                  Monitor your performance and identify weak areas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <Button
            onClick={startQuiz}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity text-lg px-8 py-3"
          >
            <Award className="mr-2 h-5 w-5" />
            Start Practice Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
