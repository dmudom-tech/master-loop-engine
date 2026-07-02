# MASTER LOOP ENGINE V100
## MARKET_VOLATILITY.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Volatility measures the magnitude, speed, persistence, and uncertainty of price movements within the Thai capital market.

Volatility is not inherently bullish or bearish.

It represents market uncertainty and determines appropriate portfolio risk, position sizing, leverage, stop loss distance, and confidence level.

Market Volatility is a primary input for Risk Engine, Portfolio Engine, Execution Engine, and AI Committee.

---

# Objectives

Evaluate

• Price Volatility

• Intraday Volatility

• Historical Volatility

• Realized Volatility

• Expected Volatility

• Market Stability

• Tail Risk

Generate

• Volatility Score

• Volatility Classification

• Volatility Trend

• Volatility Forecast

• Confidence Score

---

# Data Sources

SET Realtime

SET Index

Historical Prices

Intraday Prices

Trading Volume

Market Statistics

TFEX

Options (Future Support)

Market Breadth

Liquidity Engine

Market Regime

Market Health

Economic Calendar

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Volatility Indicators

↓

Component Scores

↓

Weighted Aggregation

↓

Volatility Score

↓

Classification

↓

Evidence Generation

↓

AI Committee

---

# Volatility Components

Historical Volatility

Intraday Volatility

ATR

True Range

Standard Deviation

Price Gap

Volatility Expansion

Volatility Compression

Market Stability

Tail Risk

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Historical Volatility | 20% |
| ATR | 15% |
| Intraday Volatility | 15% |
| Standard Deviation | 15% |
| Price Gap | 10% |
| Volatility Expansion | 10% |
| Market Stability | 5% |
| Tail Risk | 5% |
| TFEX Volatility | 5% |

Total = 100%

---

# Historical Volatility

Evaluate

10 Day

20 Day

50 Day

100 Day

250 Day

Annualized Volatility

Rolling Volatility

---

# ATR Analysis

Calculate

ATR(14)

ATR(20)

ATR %

ATR Trend

Normalized ATR

---

# Intraday Volatility

Evaluate

High - Low Range

Open - Close Range

5 Minute Volatility

15 Minute Volatility

60 Minute Volatility

---

# Standard Deviation

Calculate

Daily

Weekly

Monthly

Rolling Standard Deviation

---

# Price Gap

Evaluate

Gap Up

Gap Down

Gap Size

Gap Frequency

Gap Persistence

---

# Volatility Expansion

Detect

ATR Rising

Standard Deviation Rising

Wide Price Range

Expanding Trading Range

Breakout Volatility

---

# Volatility Compression

Detect

ATR Falling

Range Narrowing

Low Standard Deviation

Price Consolidation

Pre-Breakout Condition

---

# Tail Risk

Evaluate

Extreme Daily Move

Flash Crash Risk

Gap Risk

Circuit Breaker Probability

Market Shock

Black Swan Exposure

---

# Market Stability

Evaluate

Volatility Consistency

Trend Stability

Price Noise

Market Efficiency

---

# Volatility Classification

| Score | Classification |
|--------|----------------|
| 90–100 | Extremely Stable |
| 80–89 | Stable |
| 70–79 | Moderate |
| 60–69 | Elevated |
| 50–59 | High |
| 40–49 | Very High |
| Below 40 | Extreme |

Note

Higher Score

↓

Lower Volatility

↓

Better Trading Environment

---

# Volatility Trend

Possible States

Declining

Stable

Increasing

Explosive

Compression

Expansion

Recovery

Panic

---

# Forecast

Estimate

Next Day

Next Week

Next Month

Expected Trading Range

Expected Daily ATR

Expected Risk

---

# Confidence Calculation

Confidence depends on

Data Freshness

Historical Coverage

Indicator Agreement

Market Stability

Forecast Reliability

Range

0–100

---

# Decision Rules

Volatility Score > 90

↓

Increase Position Size

Reduce Cash

---

80–89

↓

Normal Position Size

---

70–79

↓

Selective Position

Normal Risk

---

60–69

↓

Reduce Leverage

Increase Monitoring

---

50–59

↓

Reduce Position Size

Increase Stop Distance

---

Below 50

↓

Capital Preservation

Increase Cash

Avoid Aggressive Trading

---

# Stop Loss Adjustment

| Volatility | Stop Loss Policy |
|------------|------------------|
| Low | Tight Stop |
| Moderate | Standard Stop |
| High | Wider Stop |
| Extreme | Defensive Exit |

---

# Position Size Adjustment

| Volatility Score | Maximum Allocation |
|-----------------|-------------------:|
| 90–100 | 100% |
| 80–89 | 90% |
| 70–79 | 75% |
| 60–69 | 60% |
| 50–59 | 40% |
| Below 50 | 20% |

---

# Volatility Alerts

Generate Alerts

ATR Spike

Gap Risk

Flash Crash

Volatility Expansion

Volatility Compression

Extreme Daily Move

Tail Risk

---

# Evidence Requirements

Every calculation must include

Historical Volatility

ATR

Standard Deviation

Price Gap

Trading Range

Tail Risk

Historical Comparison

---

# Output Contract

Generate

Volatility Score

Volatility Classification

Volatility Trend

Historical Volatility

Intraday Volatility

ATR

Standard Deviation

Gap Risk

Tail Risk

Expected Range

Forecast

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Realtime Price

Historical Price

Market Statistics

Optional

TFEX

Economic Calendar

Liquidity Engine

Market Breadth

Market Regime

---

# Cross-Engine Dependencies

Consumes From

Market Engine

Market Health

Market Regime

Market Liquidity

Produces To

Risk Engine

Portfolio Engine

Execution Engine

Decision Engine

AI Committee

Dashboard

---

# Scheduler

08:00

Morning Volatility Analysis

09:30–16:30

Realtime Refresh

Every 1 Minute

16:40

Closing Analysis

20:00

Historical Learning

---

# Error Handling

Realtime Missing

↓

Delay Data

Historical Missing

↓

Reduce Forecast Confidence

Indicator Failure

↓

Continue Remaining Indicators

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

Feature Freshness

API Latency

Calculation Time

CPU Usage

Memory Usage

Forecast Accuracy

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

Low ATR

Stable Trend

Expected

Volatility Score > 85

---

Scenario 2

ATR Spike

Large Price Gap

Expected

High Risk Alert

---

Scenario 3

Flash Crash

Expected

Extreme Volatility

Tail Risk Alert

---

Scenario 4

Volatility Compression

Expected

Breakout Watch

---

Scenario 5

Missing Historical Data

Expected

Reduced Confidence

Fallback Activated

---

# Acceptance Criteria

The engine shall

• Calculate Volatility Score (0–100)

• Measure Historical and Intraday Volatility

• Detect Volatility Expansion and Compression

• Forecast Expected Trading Range

• Detect Tail Risk

• Recommend Position Size Adjustment

• Recommend Stop Loss Adjustment

• Generate Explainable Evidence

• Calculate Confidence Score

• Complete within 2 seconds

• Support Replay

• Support Backtesting

• Support Continuous Learning

---

End of Document
