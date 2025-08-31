import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { CaseStudy, CaseStudyQuestion } from '@/data/caseStudies';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  currentQuestionIndex: number;
  totalQuestions: number;
  currentQuestionNumber: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const CaseStudyCard = ({
  caseStudy,
  currentQuestionIndex,
  totalQuestions,
  currentQuestionNumber,
  onAnswer,
  onNext,
  onBack
}: CaseStudyCardProps) => {
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = caseStudy.questions[currentQuestionIndex];

  const handleAnswer = (answer: boolean) => {
    setUserAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer === currentQuestion.correctAnswer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setUserAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  if (!currentQuestion) return null;

  return (
    <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {/* Case Study Details - Left Side */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="mb-2">Case Study</Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-primary">
            {caseStudy.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Company Description</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {caseStudy.description}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Existing Technical Setup</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {caseStudy.existingSetup}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Customer Solution Goals</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {caseStudy.goals}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Technical Requirements</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line">
                  {caseStudy.technicalRequirements}
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Question Card - Right Side */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
            <Badge variant="outline">
              Question {currentQuestionNumber} of {totalQuestions}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold">
            DOMC Statement
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-secondary/20 p-4 rounded-lg">
            <p className="text-sm leading-relaxed">
              {currentQuestion.statement}
            </p>
          </div>

          {!showFeedback ? (
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                Is this statement correct?
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={() => handleAnswer(true)}
                  variant="outline"
                  className="flex-1 h-12 text-base"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  className="flex-1 h-12 text-base"
                >
                  No
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border-l-4 ${
                userAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-50 border-green-500'
                  : 'bg-red-50 border-red-500'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {userAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-medium ${
                    userAnswer === currentQuestion.correctAnswer
                      ? 'text-green-800'
                      : 'text-red-800'
                  }`}>
                    {userAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className={`text-sm ${
                  userAnswer === currentQuestion.correctAnswer
                    ? 'text-green-700'
                    : 'text-red-700'
                }`}>
                  The correct answer is: {currentQuestion.correctAnswer ? 'Yes' : 'No'}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Explanation:</h4>
                <p className="text-sm text-blue-700">
                  {currentQuestion.reasoning}
                </p>
              </div>

              <Button
                onClick={handleNext}
                className="w-full h-12 text-base"
              >
                {currentQuestionIndex + 1 < caseStudy.questions.length ? (
                  <>
                    Next Statement
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  'Finish Case Study'
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};