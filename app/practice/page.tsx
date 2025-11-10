"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function PracticePage() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  const problems = [
    {
      id: 1,
      unit: "Unit 1",
      difficulty: "Easy",
      category: "Measures of Center",
      question: "A dataset has values: 10, 15, 20, 25, 30. What is the mean?",
      options: ["A) 18", "B) 20", "C) 22", "D) 25"],
      correct: 1,
      explanation: "The mean is the sum of all values divided by the count. (10+15+20+25+30)/5 = 100/5 = 20",
    },
    {
      id: 2,
      unit: "Unit 2",
      difficulty: "Medium",
      category: "Linear Regression",
      question: "In a linear regression model, what does R² represent?",
      options: ["A) Slope", "B) Proportion of variance explained", "C) Standard error", "D) Y-intercept"],
      correct: 1,
      explanation:
        "R² (coefficient of determination) measures the proportion of variance in the dependent variable that is predictable from the independent variable(s).",
    },
    {
      id: 3,
      unit: "Unit 1",
      difficulty: "Medium",
      category: "Standard Deviation",
      question: "Which of the following is affected most by outliers?",
      options: ["A) Median", "B) Mode", "C) Standard deviation", "D) Quartiles"],
      correct: 2,
      explanation:
        "Standard deviation is most affected by outliers because it measures the spread of all data points from the mean.",
    },
    {
      id: 4,
      unit: "Unit 3",
      difficulty: "Hard",
      category: "Experimental Design",
      question: "In a completely randomized design, treatments are assigned to experimental units:",
      options: ["A) Systematically", "B) By block", "C) Randomly", "D) By the experimenter"],
      correct: 2,
      explanation:
        "In a completely randomized design, each unit has an equal probability of receiving any treatment, ensuring random assignment.",
    },
    {
      id: 5,
      unit: "Unit 2",
      difficulty: "Easy",
      category: "Correlation",
      question: "What does a correlation coefficient of -0.8 indicate?",
      options: ["A) Strong positive", "B) Strong negative", "C) Weak correlation", "D) No correlation"],
      correct: 1,
      explanation:
        "A correlation of -0.8 indicates a strong negative relationship between two variables. Values close to -1 indicate strong negative correlation.",
    },
  ]

  const difficulties = ["Easy", "Medium", "Hard"]
  const units = ["All Units", "Unit 1", "Unit 2", "Unit 3"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Practice Questions</h1>
          <p className="text-muted-foreground">Sharpen your skills with targeted practice problems</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Filters */}
          <div>
            <Card className="p-6 sticky top-20">
              <h3 className="font-semibold mb-4">Filter by Unit</h3>
              <div className="space-y-2 mb-6">
                {units.map((unit) => (
                  <Button key={unit} variant="ghost" className="w-full justify-start text-left">
                    {unit}
                  </Button>
                ))}
              </div>

              <h3 className="font-semibold mb-4">Filter by Difficulty</h3>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <Button key={difficulty} variant="ghost" className="w-full justify-start text-left">
                    {difficulty}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content - Questions */}
          <div className="lg:col-span-2">
            <Tabs value={selectedQuestion?.toString() || ""} className="w-full">
              <TabsList className="hidden" />

              {selectedQuestion === null ? (
                // Questions List View
                <div className="space-y-4">
                  {problems.map((problem) => (
                    <Card
                      key={problem.id}
                      className="p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50"
                      onClick={() => setSelectedQuestion(problem.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-2">
                          <Badge variant="outline">{problem.unit}</Badge>
                          <Badge
                            variant={
                              problem.difficulty === "Easy"
                                ? "default"
                                : problem.difficulty === "Medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {problem.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <p className="font-medium text-foreground mb-2">{problem.question}</p>
                      <p className="text-sm text-muted-foreground">{problem.category}</p>
                    </Card>
                  ))}
                </div>
              ) : (
                // Question Detail View
                <div>
                  <Button variant="ghost" className="mb-6" onClick={() => setSelectedQuestion(null)}>
                    ← Back to Problems
                  </Button>

                  {problems.map((problem) => {
                    if (problem.id !== selectedQuestion) return null

                    return (
                      <Card key={problem.id} className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex gap-2">
                            <Badge>{problem.unit}</Badge>
                            <Badge variant="outline">{problem.category}</Badge>
                          </div>
                          <Badge
                            variant={
                              problem.difficulty === "Easy"
                                ? "default"
                                : problem.difficulty === "Medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {problem.difficulty}
                          </Badge>
                        </div>

                        <h2 className="text-2xl font-semibold mb-8">{problem.question}</h2>

                        {/* Options */}
                        <div className="space-y-3 mb-8">
                          {problem.options.map((option, idx) => (
                            <button
                              key={idx}
                              className={`w-full p-4 text-left border rounded-lg transition-all ${
                                idx === 0 ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/30"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>

                        {/* Explanation */}
                        <Card className="bg-primary/5 border-primary/20 p-6">
                          <div className="flex gap-3">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold mb-2">Explanation</h3>
                              <p className="text-muted-foreground">{problem.explanation}</p>
                            </div>
                          </div>
                        </Card>

                        <Button className="w-full mt-6 gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Mark as Complete
                        </Button>
                      </Card>
                    )
                  })}
                </div>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
