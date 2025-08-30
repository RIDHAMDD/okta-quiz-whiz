import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, RotateCcw, Target, CheckCircle2 } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, totalQuestions, correctAnswers, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getGradeColor = () => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-yellow-500';
    return 'text-error';
  };

  const getGradeMessage = () => {
    if (percentage >= 90) return 'Excellent! You\'re well prepared for the DOMC exam!';
    if (percentage >= 80) return 'Great job! You have a strong understanding of the material.';
    if (percentage >= 70) return 'Good work! Consider reviewing the topics you missed.';
    if (percentage >= 60) return 'Not bad! Some more study time would be beneficial.';
    return 'Keep studying! Review the explanations and try again.';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-secondary/20">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold">Quiz Complete!</CardTitle>
          
          <div className="space-y-2">
            <div className={`text-4xl font-bold ${getGradeColor()}`}>
              {percentage}%
            </div>
            <p className="text-muted-foreground">
              {getGradeMessage()}
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium">Total Questions</span>
              </div>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {totalQuestions}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-success mr-2" />
                <span className="text-sm font-medium">Correct</span>
              </div>
              <Badge variant="default" className="text-lg px-3 py-1 bg-success">
                {correctAnswers}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <span className="text-sm font-medium">Score</span>
              </div>
              <Badge 
                variant="outline" 
                className={`text-lg px-3 py-1 ${getGradeColor()} border-current`}
              >
                {score}/{totalQuestions}
              </Badge>
            </div>
          </div>
          
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${
                percentage >= 80 ? 'bg-gradient-to-r from-success to-green-400' :
                percentage >= 60 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                'bg-gradient-to-r from-error to-red-400'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="pt-4 flex justify-center">
            <Button 
              onClick={onRestart}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Take Quiz Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};