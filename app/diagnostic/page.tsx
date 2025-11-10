"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, BookOpen } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DiagnosticPage() {
  const [testStarted, setTestStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const diagnosticQuestions = [
    {
      id: 1,
      question:
        "A sample of 100 students has a mean test score of 75 with a standard deviation of 8. What is the 95% confidence interval for the population mean?",
      options: ["A) (73.4, 76.6)", "B) (72.5, 77.5)", "C) (71.2, 78.8)", "D) (70.0, 80.0)"],
      category: "Inference - Means",
    },
    {
      id: 2,
      question: "Which of the following is NOT an assumption for linear regression?",
      options: ["A) Linearity", "B) Independence of errors", "C) Normality of residuals", "D) Homogeneity of X"],
      category: "Regression",
    },
    {
      id: 3,
      question:
        "A researcher wants to determine if there is a relationship between study hours and test scores. What type of test should be used?",
      options: ["A) Chi-square test", "B) Correlation/Regression", "C) T-test", "D) ANOVA"],
      category: "Two-variable Data",
    },
  ]

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">Diagnostic Test</h1>
            <p className="text-muted-foreground">Assess your current AP Statistics knowledge</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Test Overview</h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Comprehensive Assessment</h3>
                  <p className="text-muted-foreground">
                    This diagnostic test covers all 9 units of AP Statistics. It's designed to identify your strengths
                    and areas for improvement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Timed Assessment</h3>
                  <p className="text-muted-foreground">
                    This test takes approximately 30 minutes to complete. You'll see questions from each unit to gauge
                    your understanding.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Feedback</h3>
                  <p className="text-muted-foreground">
                    After completing the test, you'll receive a detailed report showing your performance by unit and
                    topic.
                  </p>
                </div>
              </div>
            </div>

            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This is a diagnostic assessment, not your actual AP exam score. Use it to guide your study plan.
              </AlertDescription>
            </Alert>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">Test Details:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Number of Questions:</span> <span className="font-semibold">30</span>
                </li>
                <li className="flex justify-between">
                  <span>Time Limit:</span> <span className="font-semibold">30 minutes</span>
                </li>
                <li className="flex justify-between">
                  <span>Question Types:</span> <span className="font-semibold">Multiple Choice</span>
                </li>
                <li className="flex justify-between">
                  <span>Passing Score:</span> <span className="font-semibold">70%</span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
              onClick={() => setTestStarted(true)}
            >
              Start Diagnostic Test
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">
              Question {currentQuestion + 1} of {diagnosticQuestions.length}
            </h1>
            <Button variant="ghost" onClick={() => setTestStarted(false)}>
              Exit Test
            </Button>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / diagnosticQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="p-8">
          <div className="mb-2">
            <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {diagnosticQuestions[currentQuestion].category}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-8">{diagnosticQuestions[currentQuestion].question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {diagnosticQuestions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                className="w-full p-4 text-left border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              onClick={() => {
                if (currentQuestion < diagnosticQuestions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1)
                }
              }}
            >
              {currentQuestion === diagnosticQuestions.length - 1 ? "Finish Test" : "Next"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
