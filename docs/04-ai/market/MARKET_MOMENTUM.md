# MASTER LOOP ENGINE V100
## MARKET_MOMENTUM.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Momentum measures the speed, persistence, and acceleration of market price movement.

Unlike Market Trend, which describes direction, Momentum measures the strength behind the movement.

Strong momentum indicates sustained buying or selling pressure, while weakening momentum often signals trend exhaustion before price reverses.

Market Momentum is a leading indicator for Market Regime, Opportunity Detection, and Portfolio Timing.

---

# Objectives

Evaluate

• Price Momentum

• Trend Strength

• Trend Persistence

• Acceleration

• Deceleration

• Breakout Strength

• Exhaustion Risk

Generate

• Momentum Score

• Momentum Classification

• Momentum Trend

• Momentum Confidence

---

# Data Sources

SET Realtime

SET Index

Historical Prices

Market Breadth

Market Health

Market Liquidity

Market Volatility

Trading Volume

Sector Index

Industry Index

Investor Statistics

Program Trading

NVDR

TFEX

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Momentum Indicators

↓

Component Scores

↓

Weighted Aggregation

↓

Momentum Score

↓

Classification

↓

Evidence Generation

↓

AI Committee

---

# Momentum Components

Price Momentum

Volume Momentum

Trend Strength

Trend Acceleration

Breakout Strength

Relative Strength

Sector Momentum

Market Participation

Capital Flow Momentum

Persistence

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Price Momentum | 25% |
| Trend Strength | 15% |
| Volume Momentum | 15% |
| Relative Strength | 10% |
| Breakout Strength | 10% |
| Sector Momentum | 10% |
| Capital Flow Momentum | 5% |
| Market Participation | 5% |
| Trend Persistence | 5% |

Total = 100%

---

# Price Momentum

Evaluate

1 Day Return

5 Day Return

10 Day Return

20 Day Return

50 Day Return

100 Day Return

250 Day Return

---

# Trend Strength

Calculate

EMA20

EMA50

EMA200

ADX

Trend Angle

Trend Stability

---

# Volume Momentum

Evaluate

Volume Ratio

Volume Trend

Accumulation

Distribution

Buying Pressure

Selling Pressure

---

# Relative Strength

Compare

SET Index

Sector Index

Industry Index

Equal Weight Index

Benchmark Performance

---

# Breakout Strength

Detect

Resistance Break

Support Break

Volume Confirmation

Breakout Success Rate

False Breakout Probability

---

# Trend Persistence

Evaluate

Trend Duration

Consecutive Up Days

Consecutive Down Days

Moving Average Alignment

Trend Consistency

---

# Sector Momentum

Evaluate

Leading Sector

Lagging Sector

Sector Rotation

Sector Acceleration

Industry Leadership

---

# Capital Flow Momentum

Evaluate

Foreign Net Buy Trend

Institution Trend

Program Trading Trend

NVDR Trend

Smart Money Trend

---

# Momentum Divergence

Detect

Price ↑

Momentum ↓

↓

Bearish Divergence

---

Price ↓

Momentum ↑

↓

Bullish Divergence

---

# Momentum Classification

| Score | Classification |
|--------|----------------|
| 90–100 | Explosive |
| 80–89 | Very Strong |
| 70–79 | Strong |
| 60–69 | Positive |
| 50–59 | Neutral |
| 40–49 | Weak |
| 30–39 | Very Weak |
| Below 30 | Exhausted |

---

# Momentum Trend

Possible States

Accelerating

Stable

Decelerating

Reversal

Breakout

Breakdown

Exhaustion

Recovery

---

# Momentum Forecast

Estimate

Next Session

Next Week

Next Month

Trend Continuation Probability

Trend Reversal Probability

---

# Confidence Calculation

Confidence depends on

Data Freshness

Indicator Agreement

Volume Confirmation

Historical Accuracy

Market Stability

Range

0–100

---

# Decision Rules

Momentum > 90

↓

Aggressive Buy

Increase Exposure

---

Momentum 80–89

↓

Buy

Follow Trend

---

Momentum 70–79

↓

Selective Buy

---

Momentum 60–69

↓

Hold

Monitor

---

Momentum 50–59

↓

Wait

No New Position

---

Momentum < 50

↓

Reduce Exposure

Protect Profit

---

Momentum < 30

↓

Avoid New Buy

Prepare Exit

---

# Evidence Requirements

Every Momentum Score must include

Price Trend

Volume

Trend Strength

Relative Strength

Sector Momentum

Capital Flow

Historical Comparison

---

# Output Contract

Generate

Momentum Score

Momentum Classification

Momentum Trend

Trend Strength Score

Volume Momentum Score

Relative Strength Score

Breakout Score

Sector Momentum Score

Capital Flow Momentum Score

Trend Persistence Score

Momentum Divergence

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Realtime Price

Historical Price

Trading Volume

Market Statistics

Optional

Investor Statistics

Program Trading

NVDR

TFEX

Sector Data

---

# Cross-Engine Dependencies

Consumes From

Market Health

Market Breadth

Market Liquidity

Market Volatility

Produces To

Market Regime

Risk Engine

Portfolio Engine

Decision Engine

Execution Engine

AI Committee

Dashboard

---

# Scheduler

08:00

Morning Momentum Analysis

09:30–16:30

Realtime Refresh

Every 1 Minute

16:40

Closing Momentum Analysis

20:00

Historical Learning

---

# Error Handling

Realtime Missing

↓

Delay Data

Volume Missing

↓

Historical Average

Indicator Failure

↓

Skip Indicator

Continue Processing

Collector Failure

↓

Retry

↓

Fallback Cache

---

# Monitoring

Collector Status

Momentum Freshness

Calculation Time

API Latency

Memory Usage

CPU Usage

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

Strong Bull Market

High Volume

Expected

Momentum > 90

---

Scenario 2

Price Rising

Momentum Falling

Expected

Bearish Divergence

---

Scenario 3

Price Falling

Momentum Rising

Expected

Bullish Divergence

---

Scenario 4

Strong Breakout

High Volume

Expected

Momentum Acceleration

---

Scenario 5

Missing Volume Data

Expected

Fallback Activated

Reduced Confidence

---

# Acceptance Criteria

The engine shall

• Calculate Momentum Score (0–100)

• Detect Bullish/Bearish Divergence

• Evaluate Trend Strength

• Measure Trend Persistence

• Forecast Momentum Continuation

• Generate Explainable Evidence

• Calculate Confidence Score

• Complete within 2 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

End of Document
