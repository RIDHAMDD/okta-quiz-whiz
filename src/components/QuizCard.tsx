import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Question, QuestionOption } from '@/data/questions';

interface QuizCardProps {
  question: Question;
  currentQuestionIndex: number;
  currentOptionIndex: number;
  totalQuestions: number;
  totalOptions: number;
  currentOptionNumber: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export const QuizCard = ({ 
  question, 
  currentQuestionIndex, 
  currentOptionIndex,
  totalQuestions, 
  totalOptions,
  currentOptionNumber,
  onAnswer, 
  onNext 
}: QuizCardProps) => {
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentOption = question.options[currentOptionIndex];

  const handleAnswer = (answer: boolean) => {
    if (showFeedback) return;
    
    setUserAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === currentOption.answer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setUserAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-secondary/20">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm font-medium">
            Statement {currentOptionNumber} of {totalOptions}
          </Badge>
          <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
              style={{ width: `${(currentOptionNumber / totalOptions) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            Question {currentQuestionIndex + 1}: {question.title}
          </Badge>
          <CardTitle className="text-xl leading-relaxed text-foreground">
            Statement {currentOptionIndex + 1} of {question.options.length}
          </CardTitle>
        </div>
        
        <CardDescription className="text-base">
          Is this statement true or false?
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div
          className={`p-6 rounded-lg border-2 transition-all duration-300 ${
            showFeedback
              ? userAnswer === currentOption.answer
                ? 'border-success bg-success/10'
                : 'border-error bg-error/10'
              : 'border-border bg-card'
          }`}
        >
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-foreground">
              {currentOption.text}
            </p>
            
            {!showFeedback ? (
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleAnswer(true)}
                  className="text-success hover:bg-success/10 hover:border-success px-8"
                >
                  Yes / True
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleAnswer(false)}
                  className="text-error hover:bg-error/10 hover:border-error px-8"
                >
                  No / False
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  {userAnswer === currentOption.answer ? (
                    <>
                      <CheckCircle className="h-6 w-6 text-success" />
                      <span className="text-success font-semibold text-lg">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-6 w-6 text-error" />
                      <span className="text-error font-semibold text-lg">Incorrect</span>
                    </>
                  )}
                  <Badge variant={currentOption.answer ? "default" : "secondary"} className="ml-2">
                    Correct Answer: {currentOption.answer ? "Yes" : "No"}
                  </Badge>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-md">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Explanation: </span>
                    {currentOption.reasoning}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {showFeedback && (
          <div className="pt-4 flex justify-center">
            <Button 
              onClick={handleNext}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity px-8"
            >
              {currentOptionNumber === totalOptions ? 'Finish Quiz' : 'Next Statement'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};