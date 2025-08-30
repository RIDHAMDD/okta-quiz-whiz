import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Question, QuestionOption } from '@/data/questions';

interface QuizCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export const QuizCard = ({ 
  question, 
  currentQuestionIndex, 
  totalQuestions, 
  onAnswer, 
  onNext 
}: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (optionIndex: number, answer: boolean) => {
    if (showFeedback) return;
    
    setSelectedOption(optionIndex);
    setUserAnswer(answer);
    setShowFeedback(true);
    
    const currentOption = question.options[optionIndex];
    const isCorrect = answer === currentOption.answer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setUserAnswer(null);
    setShowFeedback(false);
    onNext();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-gradient-to-br from-white to-secondary/20">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </Badge>
          <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        
        <CardTitle className="text-xl leading-relaxed text-foreground">
          {question.title}
        </CardTitle>
        
        <CardDescription className="text-base">
          Select Yes or No for each statement below:
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedOption === index && showFeedback
                ? userAnswer === option.answer
                  ? 'border-success bg-success/10'
                  : 'border-error bg-error/10'
                : 'border-border hover:border-primary/50 bg-card'
            }`}
          >
            <div className="flex flex-col space-y-3">
              <p className="text-sm leading-relaxed text-foreground">
                {option.text}
              </p>
              
              {!showFeedback ? (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAnswer(index, true)}
                    className="text-success hover:bg-success/10 hover:border-success"
                  >
                    Yes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAnswer(index, false)}
                    className="text-error hover:bg-error/10 hover:border-error"
                  >
                    No
                  </Button>
                </div>
              ) : selectedOption === index ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {userAnswer === option.answer ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="text-success font-medium">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-error" />
                        <span className="text-error font-medium">Incorrect</span>
                      </>
                    )}
                    <Badge variant={option.answer ? "default" : "secondary"} className="ml-2">
                      Correct Answer: {option.answer ? "Yes" : "No"}
                    </Badge>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-md">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-medium">Explanation: </span>
                      {option.reasoning}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        
        {showFeedback && (
          <div className="pt-4 flex justify-end">
            <Button 
              onClick={handleNext}
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
            >
              {currentQuestionIndex + 1 === totalQuestions ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};