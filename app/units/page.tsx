"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Lock } from "lucide-react"

export default function UnitsPage() {
  const units = [
    {
      id: 1,
      title: "Exploring One-Variable Data",
      description: "Introduction to data visualization, measures of center, and measures of spread",
      lessons: 12,
      progress: 75,
      topics: ["Dot plots", "Histograms", "Box plots", "Mean & Median", "Standard Deviation"],
    },
    {
      id: 2,
      title: "Exploring Two-Variable Data",
      description: "Scatter plots, correlation, and linear regression",
      lessons: 10,
      progress: 45,
      topics: ["Scatter plots", "Correlation", "Regression lines", "Residuals", "R-squared"],
    },
    {
      id: 3,
      title: "Collecting Data",
      description: "Sampling methods, experimental design, and data collection",
      lessons: 8,
      progress: 30,
      topics: ["Sampling methods", "Bias", "Experiments vs Observational", "Random assignment"],
    },
    {
      id: 4,
      title: "Probability, Random Variables & Probability Distributions",
      description: "Probability rules, discrete and continuous distributions",
      lessons: 14,
      progress: 0,
      topics: ["Basic probability", "Normal distribution", "Binomial distribution", "Z-scores"],
    },
    {
      id: 5,
      title: "Sampling Distributions",
      description: "Central Limit Theorem and sampling distributions of sample means and proportions",
      lessons: 9,
      progress: 0,
      topics: ["Sampling distribution", "Central Limit Theorem", "Standard error"],
    },
    {
      id: 6,
      title: "Inference for Categorical Data: Proportions",
      description: "Confidence intervals and hypothesis tests for proportions",
      lessons: 11,
      progress: 0,
      topics: ["Confidence intervals", "Hypothesis testing", "Chi-square test", "P-values"],
    },
    {
      id: 7,
      title: "Inference for Quantitative Data: Means",
      description: "T-tests and confidence intervals for means",
      lessons: 10,
      progress: 0,
      topics: ["T-distributions", "T-tests", "Confidence intervals", "Paired t-tests"],
    },
    {
      id: 8,
      title: "Inference for Categorical Data: Chi-Square",
      description: "Chi-square tests for independence and goodness of fit",
      lessons: 8,
      progress: 0,
      topics: ["Chi-square distributions", "Independence tests", "Goodness of fit"],
    },
    {
      id: 9,
      title: "Inference for Quantitative Data: Slopes",
      description: "Inference for regression slopes and predictions",
      lessons: 7,
      progress: 0,
      topics: ["Regression inference", "Slope tests", "Prediction intervals"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">AP Statistics Units</h1>
          <p className="text-muted-foreground">Master all 9 units with comprehensive lessons and practice</p>
        </div>
      </div>

      {/* Units Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-6">
          {units.map((unit) => (
            <Card key={unit.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        Unit {unit.id}
                      </span>
                      {unit.progress === 0 && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Coming soon
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                    <p className="text-muted-foreground mb-4">{unit.description}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {unit.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-secondary/10 text-secondary px-2.5 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Progress and Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex-1 mr-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{unit.progress}%</span>
                    </div>
                    <Progress value={unit.progress} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{unit.lessons} lessons</span>
                    <Button variant="ghost" size="sm" className="gap-2" disabled={unit.progress === 0}>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
