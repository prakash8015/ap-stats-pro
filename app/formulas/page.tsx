"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FormulasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copied, setCopied] = useState<string | null>(null)

  const formulas = {
    "One-Variable Data": [
      {
        id: "mean",
        name: "Mean (Average)",
        formula: "x̄ = Σx / n",
        description: "Sum of all values divided by the number of values",
      },
      {
        id: "median",
        name: "Median",
        formula: "Middle value when data is ordered",
        description: "The middle value that splits data in half",
      },
      {
        id: "stdev",
        name: "Standard Deviation",
        formula: "s = √[Σ(x - x̄)² / (n - 1)]",
        description: "Measure of spread around the mean",
      },
      {
        id: "variance",
        name: "Variance",
        formula: "s² = Σ(x - x̄)² / (n - 1)",
        description: "Square of standard deviation",
      },
      {
        id: "zscore",
        name: "Z-Score",
        formula: "z = (x - μ) / σ",
        description: "Number of standard deviations from the mean",
      },
    ],
    "Two-Variable Data": [
      {
        id: "correlation",
        name: "Correlation Coefficient",
        formula: "r = Σ[(x - x̄)(y - ȳ)] / √[Σ(x - x̄)² × Σ(y - ȳ)²]",
        description: "Measure of linear relationship (-1 to 1)",
      },
      {
        id: "regression",
        name: "Linear Regression Line",
        formula: "ŷ = a + bx, where b = r(sy/sx)",
        description: "Equation of best-fit line for data",
      },
      {
        id: "rsquared",
        name: "R-Squared",
        formula: "R² = r²",
        description: "Proportion of variance explained by model",
      },
      {
        id: "residual",
        name: "Residual",
        formula: "e = y - ŷ",
        description: "Difference between actual and predicted values",
      },
    ],
    Probability: [
      {
        id: "probability",
        name: "Probability",
        formula: "P(A) = # favorable outcomes / # total outcomes",
        description: "Likelihood of an event occurring",
      },
      {
        id: "conditional",
        name: "Conditional Probability",
        formula: "P(A|B) = P(A and B) / P(B)",
        description: "Probability of A given B has occurred",
      },
      {
        id: "binomial",
        name: "Binomial Probability",
        formula: "P(X = k) = C(n,k) × p^k × (1-p)^(n-k)",
        description: "Probability of k successes in n trials",
      },
      {
        id: "normal",
        name: "Normal Distribution",
        formula: "z = (x - μ) / σ",
        description: "Standardization for normal distribution",
      },
    ],
    Inference: [
      {
        id: "ci_mean",
        name: "Confidence Interval for Mean",
        formula: "x̄ ± t*(s/√n)",
        description: "Range of likely values for population mean",
      },
      {
        id: "se_mean",
        name: "Standard Error of Mean",
        formula: "SE = s / √n",
        description: "Standard deviation of sample means",
      },
      {
        id: "tstat",
        name: "T-Statistic",
        formula: "t = (x̄ - μ) / (s / √n)",
        description: "Test statistic for hypothesis testing",
      },
      {
        id: "chisquare",
        name: "Chi-Square Statistic",
        formula: "χ² = Σ[(Observed - Expected)² / Expected]",
        description: "Test statistic for independence and goodness of fit",
      },
      {
        id: "ci_proportion",
        name: "Confidence Interval for Proportion",
        formula: "p̂ ± z* × √[p̂(1-p̂)/n]",
        description: "Range of likely values for population proportion",
      },
    ],
  }

  const copyToClipboard = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const allFormulas = Object.values(formulas).flat()
  const filteredFormulas = allFormulas.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">AP Statistics Formulas</h1>
          <p className="text-muted-foreground">Quick reference for all essential formulas</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Formulas */}
        {searchTerm ? (
          // Search Results
          <div className="grid gap-4">
            {filteredFormulas.map((formula) => (
              <Card key={formula.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{formula.name}</h3>
                    <div className="bg-muted/50 p-4 rounded-lg mb-3 font-mono text-sm">{formula.formula}</div>
                    <p className="text-muted-foreground text-sm">{formula.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(formula.formula, formula.id)}
                    className="ml-4"
                  >
                    <Copy className="w-4 h-4" />
                    {copied === formula.id && <span className="ml-2">Copied!</span>}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          // Categorized View
          <Tabs defaultValue="One-Variable Data" className="w-full">
            <TabsList className="grid w-full md:grid-cols-5 mb-8">
              {Object.keys(formulas).map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(formulas).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {items.map((formula) => (
                  <Card key={formula.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{formula.name}</h3>
                        <div className="bg-muted/50 p-4 rounded-lg mb-3 font-mono text-sm overflow-x-auto">
                          {formula.formula}
                        </div>
                        <p className="text-muted-foreground text-sm">{formula.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(formula.formula, formula.id)}
                        className="ml-4 flex-shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                        {copied === formula.id && <span className="ml-2 text-xs">Copied!</span>}
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  )
}
