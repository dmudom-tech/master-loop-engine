# MASTER LOOP ENGINE V100
## MARKET_REGIME.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Regime determines the current condition of the overall market.

It classifies market behavior into predefined regimes which are used by every downstream AI engine.

Market Regime is the highest priority input for portfolio allocation and risk management.

---

# Objectives

Identify

• Overall Market Trend

• Market Strength

• Market Risk

• Market Opportunity

• Market Participation

• Liquidity Environment

• Volatility Environment

---

# Data Sources

SET Realtime

SET Index

Sector Index

Industry Index

Market Statistics

Market Insight

Investor Statistics

Program Trading

NVDR

Short Sale

TFEX

Historical Market Data

Economic Calendar

---

# Processing Pipeline

Realtime Market

↓

Validation

↓

Normalization

↓

Feature Engineering

↓

Market Indicators

↓

Regime Classification

↓

Confidence Calculation

↓

Evidence Generation

↓

AI Committee

---

# Classification

The engine supports eight market regimes.

## Strong Bull

Characteristics

• Strong Uptrend

• High Liquidity

• Broad Participation

• Positive Capital Flow

• Low Volatility

Portfolio Bias

Aggressive

Recommended Exposure

90–100%

---

## Bull

Characteristics

• Uptrend

• Positive Momentum

• Healthy Liquidity

Recommended Exposure

70–90%

---

## Weak Bull

Characteristics

• Mild Uptrend

• Mixed Breadth

Recommended Exposure

60–70%

---

## Sideway

Characteristics

• Range Bound

• Neutral Momentum

Recommended Exposure

40–60%

---

## Weak Bear

Characteristics

• Weak Downtrend

• Increasing Risk

Recommended Exposure

30–50%

---

## Bear

Characteristics

• Downtrend

• Weak Breadth

• Negative Capital Flow

Recommended Exposure

20–40%

---

## Strong Bear

Characteristics

• Strong Selling

• High Volatility

• Poor Liquidity

Recommended Exposure

10–30%

---

## Crash

Characteristics

• Panic Selling

• Extreme Volatility

• Liquidity Breakdown

Recommended Exposure

0–10%

---

# Indicators

Trend

Momentum

Breadth

Liquidity

Volatility

Foreign Flow

Program Trading

Short Selling

Sector Rotation

Market Breadth

Market Strength

Market Sentiment

---

# Feature Engineering

Calculate

EMA20

EMA50

EMA200

RSI14

MACD

ADX

ATR

ROC

Advance Decline Ratio

New High

New Low

Turnover

Market Breadth

---

# Scoring

Trend

20%

Momentum

15%

Liquidity

15%

Breadth

15%

Volatility

10%

Foreign Flow

10%

Program Trading

5%

Short Sale

5%

Sector Rotation

5%

Market Sentiment

5%

Total

100%

---

# Confidence Score

Confidence depends on

Evidence Quality

Data Freshness

Indicator Agreement

Historical Accuracy

Market Stability

Range

0–100

---

# Decision Rules

Strong Bull

↓

Increase Exposure

Bull

↓

Buy Quality Stocks

Weak Bull

↓

Selective Buy

Sideway

↓

Wait

Trade Selectively

Weak Bear

↓

Reduce Risk

Bear

↓

Increase Cash

Strong Bear

↓

Defensive

Crash

↓

Capital Preservation

---

# Evidence Requirements

Every regime must include

Trend Evidence

Liquidity Evidence

Breadth Evidence

Capital Flow Evidence

Volatility Evidence

Historical Comparison

---

# Output

Market Regime

Market Health

Opportunity Score

Risk Score

Liquidity Score

Momentum Score

Volatility Score

Breadth Score

Confidence

Evidence

---

# Scheduler

08:00

Morning Analysis

09:30–16:30

Realtime Refresh

Every 5 Minutes

16:40

Closing Analysis

20:00

Learning Update

---

# Error Handling

Realtime Missing

↓

Delay Data

Delay Missing

↓

Previous Close

Historical Missing

↓

Skip Feature

Continue Processing

---

# Monitoring

Calculation Time

Collector Status

API Status

Memory

CPU

Queue

---

# Integration

Used By

Market Engine

Risk Engine

Portfolio Engine

Decision Engine

Dashboard

Learning Engine

AI Committee

---

# Acceptance Criteria

The engine shall

Identify Market Regime

Calculate Confidence

Generate Evidence

Complete within

5 seconds

Support replay

Support historical backtesting

---

End of Document
