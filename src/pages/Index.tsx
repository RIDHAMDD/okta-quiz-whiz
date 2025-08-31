import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Target, Award, FileText, Users } from 'lucide-react';
import { QuizCard } from '@/components/QuizCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { QuizResults } from '@/components/QuizResults';
import { questions as originalQuestions } from '@/data/questions';
import { caseStudies } from '@/data/caseStudies';

const Index = () => {
  const [questions, setQuestions] = useState(originalQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuizType, setCurrentQuizType] = useState<'individual' | 'case-study' | null>(null);
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [currentCaseQuestionIndex, setCurrentCaseQuestionIndex] = useState(0);

  // Calculate total number of individual options across all questions
  const totalOptions = questions.reduce((total, question) => total + question.options.length, 0);
  
  // Calculate total case study questions
  const totalCaseQuestions = caseStudies.reduce((total, caseStudy) => total + caseStudy.questions.length, 0);

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
    if (currentQuizType === 'individual') {
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
    } else if (currentQuizType === 'case-study') {
      // Move to next question in current case study
      if (currentCaseQuestionIndex + 1 < caseStudies[currentCaseStudyIndex].questions.length) {
        setCurrentCaseQuestionIndex(currentCaseQuestionIndex + 1);
      } else {
        // Move to next case study or complete
        if (currentCaseStudyIndex + 1 < caseStudies.length) {
          setCurrentCaseStudyIndex(currentCaseStudyIndex + 1);
          setCurrentCaseQuestionIndex(0);
        } else {
          setQuizCompleted(true);
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCurrentOptionIndex(0);
    setCurrentCaseStudyIndex(0);
    setCurrentCaseQuestionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuizType(null);
  };

  const handleBack = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setCurrentOptionIndex(0);
    setCurrentCaseStudyIndex(0);
    setCurrentCaseQuestionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setCurrentQuizType(null);
  };

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startIndividualQuiz = () => {
    // Shuffle questions when starting the quiz
    const shuffledQuestions = shuffleArray(originalQuestions);
    setQuestions(shuffledQuestions);
    setCurrentQuizType('individual');
    setQuizStarted(true);
  };

  const startCaseStudyQuiz = () => {
    setCurrentQuizType('case-study');
    setQuizStarted(true);
  };

  if (quizCompleted) {
    const totalQuestions = currentQuizType === 'individual' ? totalOptions : totalCaseQuestions;
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-8 px-4">
        <div className="container mx-auto">
          <QuizResults
            score={score}
            totalQuestions={totalQuestions}
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
          {currentQuizType === 'individual' ? (
            <QuizCard
              question={questions[currentQuestionIndex]}
              currentQuestionIndex={currentQuestionIndex}
              currentOptionIndex={currentOptionIndex}
              totalQuestions={questions.length}
              totalOptions={totalOptions}
              currentOptionNumber={totalAnswered + 1}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onBack={handleBack}
            />
          ) : (
            <CaseStudyCard
              caseStudy={caseStudies[currentCaseStudyIndex]}
              currentQuestionIndex={currentCaseQuestionIndex}
              totalQuestions={totalCaseQuestions}
              currentQuestionNumber={totalAnswered + 1}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
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
              Master your Okta Implementation skills with individual practice statements and comprehensive case studies. 
              Answer each statement Yes/No and get instant feedback and explanations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">35+ Questions</CardTitle>
                <CardDescription>
                  Individual practice statements
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Case Studies</CardTitle>
                <CardDescription>
                  Real-world implementation scenarios
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
                  Detailed explanations for every answer
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
                  Monitor your performance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Choose Your Practice Mode</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              onClick={startIndividualQuiz}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity text-lg px-8 py-3 flex-1"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Individual Statements
            </Button>
            <Button
              onClick={startCaseStudyQuiz}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Users className="mr-2 h-5 w-5" />
              Case Study Mode
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
