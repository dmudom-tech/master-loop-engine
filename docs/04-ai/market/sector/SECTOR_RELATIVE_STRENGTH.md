# MASTER LOOP ENGINE V100
## SECTOR_RELATIVE_STRENGTH.md

Version : V100.0.0 Enterprise LTS

Module

Sector Intelligence Engine

Submodule

Relative Strength Engine

---

# Purpose

Sector Relative Strength (SRS) measures the performance of each sector relative to the overall market and other sectors.

Rather than evaluating absolute return, the engine identifies whether a sector is outperforming or underperforming the benchmark.

Sector Relative Strength is one of the earliest indicators of institutional capital rotation.

The output is used by

• Sector Rotation Engine

• Portfolio Engine

• Watchlist Engine

• AI Committee

• Decision Engine

---

# Objectives

Evaluate

• Relative Performance

• Relative Momentum

• Leadership

• Outperformance Persistence

• Relative Acceleration

Generate

• Relative Strength Score

• Relative Ranking

• Leadership Classification

• Rotation Probability

• Confidence Score

---

# Benchmark Universe

Primary

SET Index

Secondary

SET100

SET50

Equal Weight Index

Sector Average

Industry Average

Future

MSCI Thailand

ASEAN Benchmark

Global Sector Benchmark

---

# Data Sources

Sector Index

Industry Index

SET Index

Historical Prices

Trading Volume

Market Breadth

Market Momentum

Market Health

Sector Rotation

Capital Flow

Investor Statistics

Program Trading

NVDR

Historical Relative Strength

---

# Processing Pipeline

Sector Data

↓

Validation

↓

Normalization

↓

Relative Performance

↓

Relative Strength Indicators

↓

Score Calculation

↓

Ranking Engine

↓

Leadership Detection

↓

AI Committee

---

# Relative Strength Components

Relative Return

Relative Momentum

Relative Volume

Relative Liquidity

Relative Breadth

Relative Volatility

Capital Flow

Leadership Stability

Consistency

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Relative Return | 25% |
| Relative Momentum | 20% |
| Capital Flow | 15% |
| Relative Breadth | 10% |
| Relative Volume | 10% |
| Leadership Stability | 10% |
| Relative Liquidity | 5% |
| Relative Volatility | 3% |
| Consistency | 2% |

Total = 100%

---

# Relative Return

Compare

1 Day

5 Day

20 Day

60 Day

120 Day

250 Day

Against

SET Index

SET100

Sector Average

---

# Relative Momentum

Evaluate

RSI Difference

MACD Difference

EMA Alignment

ROC Difference

Momentum Persistence

---

# Relative Volume

Compare

Current Volume

Average Volume

Volume Ratio

Relative Participation

---

# Relative Breadth

Evaluate

Advancing Stocks

Declining Stocks

Positive Participation

Sector Breadth

---

# Relative Liquidity

Evaluate

Trading Value

Turnover

Bid Ask Spread

Execution Capacity

---

# Relative Volatility

Evaluate

Historical Volatility

ATR

Beta

Drawdown

Risk Adjusted Return

---

# Capital Flow

Evaluate

Foreign Flow

Institution Flow

Program Trading

NVDR

Smart Money

Net Capital Rotation

---

# Leadership Stability

Evaluate

Consecutive Leadership

Trend Stability

Consistency

Rotation Speed

Leadership Duration

---

# Relative Strength Classification

| Score | Classification |
|--------|----------------|
| 95–100 | Elite Leader |
| 90–94 | Strong Leader |
| 80–89 | Leader |
| 70–79 | Outperform |
| 60–69 | Neutral |
| 50–59 | Underperform |
| 40–49 | Weak |
| Below 40 | Severe Weakness |

---

# Relative Strength Trend

Possible States

Accelerating

Improving

Stable

Weakening

Losing Leadership

Recovery

Rotation

Breakdown

---

# Leadership Detection

Identify

Leading Sector

Emerging Leader

Improving Sector

Weak Sector

Lagging Sector

Recovery Candidate

---

# Rotation Probability

Estimate

Probability

Capital Rotation Into Sector

Probability

Capital Rotation Out of Sector

Range

0–100

---

# Relative Divergence

Detect

Sector Price ↑

Relative Strength ↓

↓

Weak Leadership

---

Sector Price ↓

Relative Strength ↑

↓

Hidden Strength

Accumulation Opportunity

---

# Confidence Calculation

Confidence depends on

Historical Consistency

Indicator Agreement

Data Freshness

Flow Confirmation

Ranking Stability

Range

0–100

---

# Decision Rules

Relative Strength > 90

↓

Overweight

Priority Buy

---

80–89

↓

Increase Allocation

---

70–79

↓

Market Weight

---

60–69

↓

Neutral

Monitor

---

50–59

↓

Reduce Allocation

---

Below 50

↓

Avoid

Underweight

---

# Portfolio Rules

Top 3 Ranked Sectors

↓

Maximum Allocation

---

Bottom 3 Ranked Sectors

↓

Minimum Allocation

---

Rotation Probability > 80

↓

Generate Rotation Alert

---

# Ranking Engine

Generate

Sector Ranking

Industry Ranking

Relative Performance Ranking

Leadership Ranking

Rotation Ranking

---

# Evidence Requirements

Every recommendation must include

Relative Return

Momentum

Capital Flow

Breadth

Liquidity

Leadership

Historical Comparison

---

# Output Contract

Generate

Relative Strength Score

Relative Strength Rank

Leadership Classification

Relative Momentum Score

Capital Flow Score

Breadth Score

Rotation Probability

Relative Divergence

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Sector Index

Historical Prices

SET Index

Trading Statistics

Optional

Program Trading

NVDR

Investor Statistics

Market Breadth

Sector Rotation

---

# Cross-Engine Dependencies

Consumes

Sector Profile

Sector Rotation

Market Health

Market Breadth

Market Momentum

Produces

Sector Allocation

Sector Forecast

Portfolio Engine

Risk Engine

Watchlist Engine

Decision Engine

AI Committee

Dashboard

---

# Scheduler

08:00

Morning Relative Strength

09:30–16:30

Realtime Refresh

Every 5 Minutes

16:40

Closing Ranking

20:00

Historical Learning

---

# Error Handling

Missing Sector

↓

Use Previous Ranking

Missing Benchmark

↓

Use SET Index

Collector Failure

↓

Retry

↓

Fallback Cache

↓

Continue Processing

---

# Monitoring

Ranking Stability

Score Drift

Calculation Time

API Health

Collector Status

Memory Usage

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

Technology Sector

Outperforms SET

Expected

Top Ranking

---

Scenario 2

Banking Sector

Loses Momentum

Expected

Ranking Falls

---

Scenario 3

Strong Foreign Buying

Expected

Relative Strength Improves

---

Scenario 4

Sector Rotation Begins

Expected

Rotation Probability > 80

Alert Generated

---

Scenario 5

Missing Sector Data

Expected

Fallback Activated

Reduced Confidence

---

# Acceptance Criteria

The engine shall

• Calculate Relative Strength Score (0–100)

• Rank every SET sector

• Detect sector leadership

• Detect leadership deterioration

• Detect rotation opportunities

• Recommend overweight / underweight

• Produce explainable evidence

• Calculate confidence score

• Complete calculation within 3 seconds

• Support replay

• Support backtesting

• Support continuous learning

---

# Future Enhancements (V101)

Support

Dynamic Factor Ranking

Multi-Timeframe Relative Strength

Global Sector Comparison

AI-based Rotation Prediction

Machine Learning Ranking

Institutional Capital Rotation Forecast

Relative Strength Heatmap

Adaptive Portfolio Allocation

---

End of Document
