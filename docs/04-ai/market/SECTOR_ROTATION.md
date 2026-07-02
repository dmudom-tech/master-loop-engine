# MASTER LOOP ENGINE V100
## SECTOR_ROTATION.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Sector Rotation identifies the movement of capital between sectors and industries within the Thai capital market.

Rather than focusing on individual stocks, the engine determines where institutional money is flowing and which sectors are leading or lagging.

Sector Rotation provides an early indication of changing market leadership and investment opportunities.

The engine supports Portfolio Allocation, Watchlist Prioritization, and AI Committee decision-making.

---

# Objectives

Evaluate

• Sector Leadership

• Sector Relative Strength

• Capital Rotation

• Industry Leadership

• Smart Money Rotation

• Sector Momentum

• Sector Participation

Generate

• Sector Rotation Score

• Rotation Classification

• Leadership Ranking

• Rotation Confidence

---

# Data Sources

SET Sector Index

Industry Index

SET Realtime

Market Statistics

Trading Value

Trading Volume

Investor Statistics

Program Trading

NVDR

Short Sale

TFEX

Historical Sector Data

Corporate Actions

Market Breadth

Market Momentum

Market Health

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Sector Indicators

↓

Component Scores

↓

Sector Ranking

↓

Rotation Analysis

↓

Rotation Score

↓

Evidence Generation

↓

AI Committee

---

# Sector Universe

Default

Agribusiness

Food & Beverage

Fashion

Home Products

Personal Products

Financial

Banking

Finance

Insurance

Property

Construction

Construction Materials

Industrial Estate

Commerce

Retail

Wholesale

Energy

Utilities

Petrochemical

Packaging

Healthcare

Tourism

Transportation

Media

ICT

Electronics

Automotive

Professional Services

Future sectors shall be configurable.

---

# Sector Rotation Components

Relative Strength

Sector Momentum

Capital Flow

Trading Value

Volume Participation

Market Breadth

Leadership Stability

Industry Participation

Sector Risk

Sector Valuation

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Relative Strength | 20% |
| Sector Momentum | 20% |
| Capital Flow | 15% |
| Trading Value | 10% |
| Volume Participation | 10% |
| Market Breadth | 10% |
| Leadership Stability | 5% |
| Industry Participation | 5% |
| Sector Risk | 3% |
| Sector Valuation | 2% |

Total = 100%

---

# Relative Strength

Evaluate

Sector Return

Benchmark Return

Relative Outperformance

Relative Weakness

Rolling Relative Strength

---

# Sector Momentum

Evaluate

EMA Alignment

RSI

MACD

ADX

Trend Persistence

Acceleration

---

# Capital Flow

Evaluate

Foreign Flow

Institution Flow

Retail Flow

Program Trading

NVDR

Smart Money Index

---

# Trading Activity

Evaluate

Trading Value

Trading Volume

Turnover Ratio

Liquidity

Participation

---

# Leadership Stability

Evaluate

Consecutive Leadership Days

Trend Consistency

Rotation Speed

Leadership Persistence

---

# Industry Participation

Evaluate

Positive Industries

Negative Industries

Industry Breadth

Industry Momentum

Industry Rotation

---

# Sector Risk

Evaluate

Historical Volatility

Liquidity Risk

Drawdown

Beta

Correlation

Tail Risk

---

# Sector Valuation

Evaluate

Average PE

Average PBV

Dividend Yield

PEG Ratio

Relative Valuation

Historical Valuation

---

# Rotation Detection

Identify

Money Flow Into Sector

Money Flow Out of Sector

Emerging Leaders

Weakening Leaders

Capital Concentration

Sector Divergence

---

# Rotation Classification

Possible States

Strong Inflow

Moderate Inflow

Accumulation

Neutral

Distribution

Moderate Outflow

Strong Outflow

Rotation Complete

---

# Leadership Ranking

Generate Ranking

Top 5 Sectors

Top 10 Industries

Fastest Improving Sector

Fastest Weakening Sector

Most Attractive Sector

Highest Risk Sector

---

# Sector Divergence

Detect

Price ↑

Flow ↓

↓

Weak Leadership

---

Price ↓

Flow ↑

↓

Accumulation Opportunity

---

# Confidence Calculation

Confidence depends on

Data Freshness

Flow Consistency

Indicator Agreement

Historical Accuracy

Sector Stability

Range

0–100

---

# Decision Rules

Strong Inflow

↓

Overweight Sector

---

Moderate Inflow

↓

Accumulate Leaders

---

Neutral

↓

Market Weight

---

Distribution

↓

Reduce Exposure

---

Strong Outflow

↓

Underweight Sector

Increase Cash

---

# Portfolio Allocation Rules

Rotation Score > 90

↓

Overweight

---

80–89

↓

Increase Allocation

---

70–79

↓

Normal Allocation

---

60–69

↓

Selective Allocation

---

50–59

↓

Reduce Allocation

---

Below 50

↓

Avoid New Positions

---

# Watchlist Generation

Generate

Top Opportunity Sectors

Top Opportunity Industries

Emerging Leaders

High Momentum Sectors

Recovery Candidates

Weak Sectors

Avoid List

---

# Evidence Requirements

Every recommendation must include

Relative Strength

Capital Flow

Momentum

Trading Activity

Sector Breadth

Valuation

Historical Comparison

---

# Output Contract

Generate

Sector Rotation Score

Rotation Classification

Sector Ranking

Industry Ranking

Relative Strength Score

Momentum Score

Capital Flow Score

Leadership Score

Sector Risk Score

Valuation Score

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Sector Index

Industry Index

Realtime Prices

Trading Value

Trading Volume

Historical Sector Data

Optional

Program Trading

NVDR

Short Sale

Investor Statistics

Corporate Actions

---

# Cross-Engine Dependencies

Consumes From

Market Regime

Market Health

Market Breadth

Market Momentum

Market Liquidity

Market Volatility

Produces To

Portfolio Engine

Risk Engine

Decision Engine

Watchlist Engine

Execution Engine

Dashboard

AI Committee

---

# Scheduler

08:00

Morning Sector Analysis

09:30–16:30

Realtime Refresh

Every 5 Minutes

16:40

Closing Rotation Analysis

20:00

Historical Learning

---

# Error Handling

Missing Sector Data

↓

Use Previous Session

Missing Industry Data

↓

Estimate From Available Data

Collector Failure

↓

Retry

↓

Fallback Cache

↓

Continue Processing

---

# Monitoring

Collector Status

Sector Data Freshness

Calculation Time

Ranking Stability

API Health

Memory Usage

CPU Usage

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

Financial Sector Leading

Expected

Banking Ranked #1

Rotation Score > 85

---

Scenario 2

Technology Sector Weakening

Expected

Distribution Detected

Allocation Reduced

---

Scenario 3

Foreign Buying Energy Sector

Expected

Capital Inflow Detected

Leadership Improved

---

Scenario 4

Market Correction

Healthcare Becomes Leader

Expected

Defensive Rotation Identified

---

Scenario 5

Missing Industry Data

Expected

Fallback Activated

Reduced Confidence

No System Failure

---

# Acceptance Criteria

The engine shall

• Rank all sectors and industries

• Detect sector rotation

• Identify sector leadership changes

• Detect capital inflow and outflow

• Recommend sector allocation

• Generate watchlist candidates

• Produce explainable evidence

• Calculate confidence score

• Complete within 3 seconds

• Support historical replay

• Support backtesting

• Support continuous learning

---

End of Document
