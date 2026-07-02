# MASTER LOOP ENGINE V100
## MARKET_HEALTH.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Health measures the overall condition of the Thai capital market.

Unlike Market Regime, which classifies the market into discrete states, Market Health provides a continuous quantitative score (0–100) describing the strength, stability, and quality of the current market environment.

Market Health is one of the primary inputs for Portfolio Allocation, Risk Budgeting, and Decision Confidence.

---

# Objectives

Evaluate

• Overall Market Quality

• Liquidity

• Participation

• Market Strength

• Capital Flow

• Risk Environment

• Trading Environment

Generate

• Market Health Score

• Health Grade

• Confidence

• Supporting Evidence

---

# Data Sources

SET Realtime

SET Index

Market Statistics

Market Insight

Investor Statistics

Program Trading

NVDR

Short Sale

TFEX

Sector Index

Industry Index

Historical Market Data

Economic Calendar

Corporate Action

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Feature Engineering

↓

Component Scores

↓

Weighted Aggregation

↓

Market Health Score

↓

Health Grade

↓

Evidence

↓

AI Committee

---

# Market Health Components

Trend Strength

Liquidity

Market Breadth

Momentum

Volatility

Capital Flow

Sector Participation

Market Sentiment

Economic Environment

System Stability

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Trend | 20% |
| Liquidity | 15% |
| Breadth | 15% |
| Momentum | 10% |
| Volatility | 10% |
| Capital Flow | 10% |
| Sector Participation | 8% |
| Market Sentiment | 5% |
| Economic Environment | 5% |
| System Stability | 2% |

Total = 100%

---

# Trend Score

Evaluate

EMA20

EMA50

EMA200

ADX

Higher score

↓

Stronger trend

---

# Liquidity Score

Evaluate

Trading Value

Trading Volume

Turnover

Bid Ask Spread

Market Depth

---

# Breadth Score

Evaluate

Advance / Decline Ratio

New High

New Low

Up Volume

Down Volume

Participation Rate

---

# Momentum Score

Evaluate

RSI

MACD

ROC

Price Acceleration

---

# Volatility Score

Evaluate

ATR

Historical Volatility

Intraday Volatility

Expected Volatility

Lower volatility

↓

Higher Health Score

---

# Capital Flow Score

Evaluate

Foreign Net Buy

Institution Net Buy

Program Trading

NVDR

Short Sale

Smart Money Score

---

# Sector Participation

Evaluate

Number of Positive Sectors

Sector Rotation

Industry Leadership

Sector Breadth

---

# Market Sentiment

Evaluate

Fear

Greed

Market Participation

Buying Pressure

Selling Pressure

---

# Economic Environment

Evaluate

Interest Rate

Inflation

GDP Trend

Exchange Rate

Government Policy

Economic Calendar

---

# System Stability

Evaluate

Exchange Status

API Availability

Trading Halt

Circuit Breaker

Major Market Events

---

# Market Health Score

Range

0–100

---

# Health Grade

| Score | Grade | Interpretation |
|--------|-------|----------------|
| 90–100 | A+ | Excellent |
| 80–89 | A | Strong |
| 70–79 | B | Healthy |
| 60–69 | C | Neutral |
| 50–59 | D | Weak |
| 40–49 | E | High Risk |
| Below 40 | F | Critical |

---

# Confidence Calculation

Confidence depends on

Data Freshness

Data Completeness

Indicator Agreement

Historical Accuracy

Market Stability

Range

0–100

---

# Decision Rules

Health ≥90

Aggressive Portfolio

Health 80–89

Normal Bull Allocation

Health 70–79

Selective Buy

Health 60–69

Balanced Allocation

Health 50–59

Reduce Exposure

Health 40–49

Increase Cash

Health <40

Capital Preservation

---

# Evidence Requirements

Every score must include

Trend Evidence

Liquidity Evidence

Breadth Evidence

Flow Evidence

Volatility Evidence

Sector Evidence

Macro Evidence

Historical Comparison

---

# Outputs

Market Health Score

Health Grade

Trend Score

Liquidity Score

Breadth Score

Momentum Score

Volatility Score

Capital Flow Score

Sector Participation Score

Market Sentiment Score

Economic Score

Confidence

Evidence

Recommendation

---

# Scheduler

08:00

Morning Health Calculation

09:30–16:30

Realtime Refresh

Every 5 Minutes

16:40

Closing Health Calculation

20:00

Historical Learning

---

# Error Handling

Realtime unavailable

↓

Use Delay Data

Delay unavailable

↓

Previous Close

Feature unavailable

↓

Recalculate Remaining Components

Continue Processing

---

# Monitoring

Collector Status

API Latency

Feature Freshness

Calculation Time

Memory Usage

CPU Usage

Scheduler Status

---

# Integration

Used By

Market Engine

Market Regime

Risk Engine

Portfolio Engine

Decision Engine

Dashboard

Learning Engine

AI Committee

---

# Acceptance Criteria

The engine shall

• Calculate Market Health Score (0–100)

• Generate Health Grade

• Calculate Confidence

• Produce Explainable Evidence

• Complete within 5 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

End of Document
