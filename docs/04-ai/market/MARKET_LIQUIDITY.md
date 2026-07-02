# MASTER LOOP ENGINE V100
## MARKET_LIQUIDITY.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Liquidity measures the trading capacity, transaction efficiency, and capital mobility of the Thai capital market.

Liquidity determines how easily positions can be opened or closed without causing significant price impact.

Market Liquidity is a critical input for Position Sizing, Risk Management, Execution Planning, and Market Health.

---

# Objectives

Evaluate

• Market Liquidity

• Trading Capacity

• Market Depth

• Order Book Quality

• Execution Risk

• Transaction Cost

• Liquidity Stability

Generate

• Liquidity Score

• Liquidity Classification

• Liquidity Trend

• Liquidity Confidence

---

# Data Sources

SET Realtime

Order Book

Bid / Ask

Market Statistics

Trading Value

Trading Volume

Security Statistics

Program Trading

NVDR

Investor Statistics

TFEX

Historical Liquidity

Sector Statistics

Industry Statistics

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Liquidity Indicators

↓

Component Scores

↓

Weighted Aggregation

↓

Liquidity Score

↓

Classification

↓

Evidence Generation

↓

AI Committee

---

# Liquidity Components

Trading Value

Trading Volume

Market Depth

Bid Ask Spread

Turnover Ratio

Order Book Balance

Execution Capacity

Foreign Participation

Program Trading

Liquidity Stability

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Trading Value | 20% |
| Trading Volume | 15% |
| Market Depth | 15% |
| Bid Ask Spread | 15% |
| Turnover Ratio | 10% |
| Order Book Balance | 10% |
| Execution Capacity | 5% |
| Foreign Participation | 5% |
| Program Trading | 3% |
| Liquidity Stability | 2% |

Total = 100%

---

# Trading Value

Evaluate

Daily Trading Value

Average Trading Value

Relative Trading Value

Sector Trading Value

Market Turnover

---

# Trading Volume

Evaluate

Total Volume

Average Volume

Volume Ratio

Active Securities

Volume Concentration

---

# Market Depth

Evaluate

Bid Quantity

Offer Quantity

Order Book Size

Depth Ratio

Price Levels

Market Absorption

---

# Bid Ask Spread

Evaluate

Average Spread

Relative Spread

Spread Stability

Execution Cost

Lower Spread

↓

Higher Liquidity

---

# Turnover Ratio

Evaluate

Daily Turnover

Market Cap Turnover

Free Float Turnover

Liquidity Rotation

---

# Order Book Balance

Evaluate

Bid Strength

Offer Strength

Buy Pressure

Sell Pressure

Order Imbalance

---

# Execution Capacity

Evaluate

Maximum Executable Size

Average Trade Size

Slippage Risk

Impact Cost

Execution Speed

---

# Foreign Participation

Evaluate

Foreign Trading Value

Foreign Net Buy

Institution Participation

Smart Money Participation

---

# Program Trading

Evaluate

Program Buy

Program Sell

Program Net

Execution Influence

---

# Liquidity Stability

Evaluate

Intraday Stability

Historical Stability

Liquidity Recovery

Stress Liquidity

Market Resilience

---

# Liquidity Classification

| Score | Classification |
|--------|----------------|
| 90–100 | Exceptional |
| 80–89 | Very High |
| 70–79 | High |
| 60–69 | Normal |
| 50–59 | Moderate |
| 40–49 | Low |
| Below 40 | Critical |

---

# Liquidity Trend

Possible States

Improving

Stable

Weakening

Drying Up

Recovery

Expansion

Contraction

---

# Liquidity Risk

Evaluate

Execution Risk

Slippage Risk

Market Impact

Exit Risk

Entry Risk

Funding Risk

Liquidity Shock

---

# Liquidity Stress Detection

Detect

Sudden Drop in Trading Value

Spread Expansion

Order Book Collapse

Execution Delay

Abnormal Volume

Liquidity Vacuum

---

# Confidence Calculation

Confidence depends on

Data Freshness

Order Book Completeness

Historical Stability

Indicator Agreement

Market Stability

Range

0–100

---

# Decision Rules

Liquidity > 90

↓

Large Position Allowed

---

Liquidity 80–89

↓

Normal Position Size

---

Liquidity 70–79

↓

Selective Position Sizing

---

Liquidity 60–69

↓

Reduce Large Orders

---

Liquidity 50–59

↓

Split Orders

Reduce Exposure

---

Liquidity < 50

↓

Avoid Large Trades

Increase Cash

---

# Position Size Adjustment

| Liquidity Score | Max Position Size |
|-----------------|------------------:|
| 90–100 | 100% |
| 80–89 | 90% |
| 70–79 | 75% |
| 60–69 | 60% |
| 50–59 | 40% |
| Below 50 | 20% |

---

# Evidence Requirements

Every Liquidity Score must include

Trading Value

Trading Volume

Bid Ask Spread

Order Book

Turnover

Execution Capacity

Historical Comparison

---

# Output Contract

Generate

Liquidity Score

Liquidity Classification

Liquidity Trend

Trading Value Score

Trading Volume Score

Market Depth Score

Spread Score

Turnover Score

Execution Capacity Score

Liquidity Risk Score

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Realtime Market

Trading Value

Trading Volume

Bid Ask

Historical Liquidity

Optional

Program Trading

Investor Statistics

NVDR

TFEX

---

# Cross-Engine Dependencies

Consumes From

Market Engine

Market Breadth

Market Health

Produces To

Risk Engine

Portfolio Engine

Decision Engine

Execution Engine

AI Committee

---

# Scheduler

08:00

Morning Liquidity Analysis

09:30–16:30

Realtime Refresh

Every 1 Minute

16:40

Closing Liquidity Analysis

20:00

Historical Learning

---

# Error Handling

Order Book Missing

↓

Use Bid Ask Snapshot

Realtime Missing

↓

Use Delay Data

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

API Health

Order Book Freshness

Calculation Time

Memory Usage

CPU Usage

Latency

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

High Trading Value

Narrow Spread

Expected

Liquidity > 90

---

Scenario 2

Low Volume

Wide Spread

Expected

Liquidity < 50

Risk Warning

---

Scenario 3

Market Crash

Expected

Liquidity Shock Detected

---

Scenario 4

Foreign Buying

High Market Depth

Expected

Liquidity Improving

---

Scenario 5

Order Book Failure

Expected

Fallback Activated

No System Failure

---

# Acceptance Criteria

The engine shall

• Calculate Liquidity Score (0–100)

• Detect Liquidity Risk

• Detect Liquidity Shock

• Estimate Execution Capacity

• Recommend Position Size Adjustment

• Generate Explainable Evidence

• Calculate Confidence Score

• Complete within 2 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

End of Document
