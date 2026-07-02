# MASTER LOOP ENGINE V100
## MARKET_SENTIMENT.md

Version : V100.0.0 Enterprise LTS

Module

Market Intelligence Engine

---

# Purpose

Market Sentiment measures the psychological condition of market participants.

Unlike Market Regime, which measures price behavior, and Market Breadth, which measures participation, Market Sentiment evaluates investor confidence, fear, optimism, and conviction.

Market Sentiment is a leading indicator that may change before price trends.

---

# Objectives

Evaluate

• Investor Psychology

• Market Confidence

• Fear

• Greed

• Buying Conviction

• Selling Pressure

• Risk Appetite

Generate

• Sentiment Score

• Sentiment Classification

• Sentiment Trend

• Sentiment Confidence

---

# Data Sources

SET Realtime

SET Index

Market Statistics

Investor Statistics

Program Trading

NVDR

Short Sale

TFEX

Market Insight

IR News

Alert News

Corporate Action

Economic Calendar

Historical Market Data

Volatility

Sector Rotation

---

# Processing Pipeline

Realtime Data

↓

Validation

↓

Normalization

↓

Sentiment Indicators

↓

Component Scores

↓

Weighted Aggregation

↓

Sentiment Score

↓

Classification

↓

Evidence Generation

↓

AI Committee

---

# Sentiment Components

Price Momentum

Volume Momentum

Investor Flow

Program Trading

NVDR

Short Sale

Volatility

News Sentiment

Sector Rotation

Market Participation

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Price Momentum | 20% |
| Investor Flow | 15% |
| Volume Momentum | 15% |
| News Sentiment | 15% |
| Volatility | 10% |
| Program Trading | 10% |
| NVDR | 5% |
| Short Sale | 5% |
| Sector Rotation | 3% |
| Market Participation | 2% |

Total = 100%

---

# Price Momentum

Evaluate

Daily Return

Weekly Return

Monthly Return

Moving Average

Breakout

Breakdown

Acceleration

---

# Volume Momentum

Evaluate

Trading Volume

Volume Ratio

Average Volume

Buying Volume

Selling Volume

---

# Investor Flow

Evaluate

Foreign Investors

Institution

Retail

Net Buy

Net Sell

Smart Money

---

# Program Trading

Evaluate

Program Buy

Program Sell

Net Program

Program Trend

---

# NVDR

Evaluate

NVDR Buy

NVDR Sell

Net NVDR

Holding Trend

---

# Short Sale

Evaluate

Short Volume

Short Ratio

Short Value

Short Pressure

---

# Volatility

Evaluate

ATR

Historical Volatility

Intraday Volatility

Expected Volatility

Higher Volatility

↓

Lower Sentiment

---

# News Sentiment

Evaluate

IR News

Alert News

Corporate Action

Economic News

Company Announcements

News Classification

Positive

Neutral

Negative

---

# Sector Rotation

Evaluate

Leading Sector

Lagging Sector

Capital Rotation

Sector Strength

---

# Market Participation

Evaluate

Advance Decline

Participation Rate

Trading Breadth

Market Breadth Score

---

# Sentiment Classification

| Score | Classification |
|--------|----------------|
| 90–100 | Extreme Greed |
| 80–89 | Strong Bullish |
| 70–79 | Bullish |
| 60–69 | Neutral Positive |
| 50–59 | Neutral |
| 40–49 | Cautious |
| 30–39 | Bearish |
| 20–29 | Strong Bearish |
| 0–19 | Extreme Fear |

---

# Sentiment Trend

Possible States

Improving

Stable

Weakening

Recovery

Deteriorating

Reversal

Capitulation

Euphoria

---

# Divergence Detection

Detect

Price ↑

Sentiment ↓

↓

Hidden Weakness

---

Price ↓

Sentiment ↑

↓

Hidden Strength

---

# Confidence Calculation

Confidence depends on

Data Freshness

Indicator Agreement

News Quality

Historical Accuracy

Market Stability

Range

0–100

---

# Decision Rules

Extreme Greed

↓

Reduce Aggressive Buying

Protect Profits

Strong Bullish

↓

Normal Buy

Bullish

↓

Selective Buy

Neutral

↓

Hold

Cautious

↓

Reduce Exposure

Bearish

↓

Increase Cash

Extreme Fear

↓

Wait for Confirmation

Look for Recovery Signals

---

# Evidence Requirements

Every recommendation must include

Price Trend

Volume

Investor Flow

News

Volatility

Program Trading

NVDR

Sector Rotation

Historical Comparison

---

# Output Contract

Generate

Sentiment Score

Sentiment Classification

Sentiment Trend

Fear Score

Greed Score

Investor Confidence

Buying Pressure

Selling Pressure

News Score

Volatility Score

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Realtime Market

Market Statistics

Historical Prices

Optional

News

Program Trading

NVDR

Short Sale

TFEX

Investor Statistics

---

# Scheduler

08:00

Morning Sentiment

09:30–16:30

Realtime Refresh

Every 5 Minutes

16:40

Closing Sentiment

20:00

Learning Update

---

# Error Handling

News Missing

↓

Continue

Flow Missing

↓

Use Available Indicators

Realtime Missing

↓

Delay Data

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

News Freshness

API Health

Calculation Time

Memory Usage

CPU Usage

Scheduler Status

---

# Integration

Consumed By

Market Engine

Market Health

Market Regime

Market Breadth

Risk Engine

Portfolio Engine

Decision Engine

Dashboard

Learning Engine

AI Committee

---

# Unit Test Scenarios

Scenario 1

Strong Bull Market

Expected

Sentiment > 80

---

Scenario 2

Price Rising

News Negative

Expected

Negative Divergence

---

Scenario 3

Market Crash

Expected

Sentiment < 20

Extreme Fear

---

Scenario 4

Foreign Buying

Program Buying

Positive News

Expected

Bullish Sentiment

---

Scenario 5

Missing News

Expected

Fallback Activated

No System Failure

---

# Acceptance Criteria

The engine shall

• Calculate Sentiment Score (0–100)

• Detect Fear and Greed Conditions

• Identify Sentiment Divergence

• Generate Explainable Evidence

• Calculate Confidence Score

• Complete within 3 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

End of Document
