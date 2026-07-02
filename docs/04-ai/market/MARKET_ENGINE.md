# MASTER LOOP ENGINE V100
## MARKET_ENGINE.md

Version : V100.0.0 Enterprise LTS

---

# Purpose

Market Engine is responsible for evaluating the current condition of the Thai capital market.

It continuously measures market strength, liquidity, breadth, volatility, trend, and market regime.

The output of this engine is used by every other AI engine.

---

# Objectives

Determine

- Market Regime
- Market Health
- Market Strength
- Market Risk
- Market Opportunity
- Liquidity
- Momentum

Provide

Market Score

Market Confidence

Market Direction

Supporting Evidence

---

# Input Sources

SET Realtime

SET Index

Market Statistics

Market Insight

Investor Statistics

Program Trading

Short Sale

NVDR

TFEX

Sector Index

Industry Index

Historical Prices

Economic Calendar

---

# Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Feature Engineering

↓

Market Indicators

↓

Market Intelligence

↓

Market Score

↓

Market Regime

↓

Evidence

↓

AI Committee

---

# Market Indicators

Trend

Momentum

Breadth

Liquidity

Volatility

Turnover

Foreign Flow

Institution Flow

Program Trading

Short Selling

Market Cap

Sector Rotation

Market Sentiment

---

# Feature Engineering

Calculate

Moving Average

EMA

RSI

MACD

ADX

ATR

ROC

Volume Ratio

Advance / Decline

New High

New Low

52 Week High

52 Week Low

Market Breadth

Liquidity Score

---

# Market Health Score

Score

0–100

Components

Trend

20%

Liquidity

20%

Breadth

15%

Momentum

15%

Foreign Flow

10%

Program Trading

10%

Volatility

10%

---

# Market Regime

Bull

Strong Bull

Weak Bull

Sideway

Weak Bear

Bear

Strong Bear

Crash

---

# Liquidity Analysis

Evaluate

Trading Value

Volume

Bid / Ask Spread

Market Turnover

Average Daily Volume

---

# Breadth Analysis

Evaluate

Advancers

Decliners

Unchanged

Advance Decline Ratio

New High

New Low

Sector Participation

---

# Capital Flow Analysis

Foreign Investors

Institution

Retail

Program Trading

NVDR

Short Sale

Net Flow

Smart Money Score

---

# Volatility Analysis

Daily Volatility

Weekly Volatility

ATR

Historical Volatility

Expected Volatility

---

# Sector Rotation

Identify

Leading Sector

Lagging Sector

Improving Sector

Weakening Sector

Sector Strength Score

---

# Opportunity Analysis

Determine

High Probability Environment

Medium Probability Environment

Low Probability Environment

Avoid Environment

---

# Risk Analysis

Market Drawdown

Market Beta

Liquidity Risk

Volatility Risk

Tail Risk

Systemic Risk

---

# Output

Market Health

Market Regime

Opportunity Score

Risk Score

Liquidity Score

Breadth Score

Volatility Score

Sector Rotation

Smart Money Score

Market Confidence

---

# Recommendation

Possible Outputs

Aggressive Buy

Buy

Selective Buy

Hold

Reduce Exposure

Increase Cash

Defensive

Risk Off

---

# Evidence

Every recommendation must include

Market Indicators

Capital Flow

Liquidity

Breadth

Volatility

Sector Rotation

Historical Context

---

# Integration

Provides data to

Financial Engine

Portfolio Engine

Risk Engine

Decision Engine

Dashboard

Learning Engine

---

# Scheduler

08:00

Morning Analysis

09:30–16:30

Realtime Refresh

16:40

Closing Analysis

20:00

Historical Learning

---

# Error Handling

Realtime unavailable

↓

Use Delay Data

Delay unavailable

↓

Use Previous Close

Historical unavailable

↓

Skip Indicator

Continue Processing

---

# Monitoring

Collector Status

API Latency

Data Freshness

Feature Freshness

Calculation Time

Memory Usage

---

# Acceptance Criteria

Must determine

Market Health

Market Regime

Market Opportunity

Market Risk

Sector Rotation

Liquidity

within

5 seconds

using available market data.

---

End of Document
