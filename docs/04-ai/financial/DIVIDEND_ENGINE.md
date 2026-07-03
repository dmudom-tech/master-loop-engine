# MASTER LOOP ENGINE V100
## DIVIDEND_ENGINE.md

Version : V100.0.0 Enterprise LTS

Module

Financial Intelligence Engine

Submodule

Dividend Engine

---

# Purpose

Dividend Engine evaluates a company's dividend quality, sustainability, growth potential, and shareholder return policy.

Unlike Valuation Engine, which estimates intrinsic value, Dividend Engine evaluates whether a company can consistently return capital to shareholders without compromising future growth.

The engine identifies companies capable of delivering sustainable and growing dividends over long investment horizons.

Dividend quality is a key characteristic of mature, financially disciplined businesses.

---

# Objectives

Evaluate

• Dividend Sustainability

• Dividend Growth

• Dividend Safety

• Shareholder Return

• Capital Allocation

• Income Quality

Generate

• Dividend Score

• Dividend Grade

• Dividend Trend

• Dividend Confidence

---

# Data Sources

SET Financial Statement API

Dividend History

Corporate Action

Cash Flow Statement

Income Statement

Balance Sheet

Historical Financial Statements

One Report

Annual Report

Market Price

Sector Statistics

Industry Statistics

---

# Processing Pipeline

Financial Statements

↓

Validation

↓

Normalization

↓

Dividend Features

↓

Dividend Analysis

↓

Dividend Score

↓

Forecast

↓

Evidence Generation

↓

AI Committee

---

# Dividend Components

Dividend Yield

Dividend Growth

Dividend Sustainability

Dividend Coverage

Payout Ratio

Free Cash Flow Coverage

Capital Allocation

Shareholder Return

Dividend Stability

Peer Comparison

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Dividend Sustainability | 20% |
| Free Cash Flow Coverage | 15% |
| Dividend Growth | 15% |
| Dividend Yield | 10% |
| Dividend Coverage | 10% |
| Payout Ratio | 10% |
| Capital Allocation | 10% |
| Shareholder Return | 5% |
| Dividend Stability | 5% |

Total = 100%

---

# Dividend Yield

Evaluate

Current Yield

Forward Yield

Historical Yield

Yield Trend

Relative Yield

Sector Yield

---

# Dividend Growth

Evaluate

1 Year Growth

3 Year CAGR

5 Year CAGR

10 Year CAGR

Dividend Increase Streak

Dividend Growth Stability

---

# Dividend Sustainability

Evaluate

Operating Cash Flow

Free Cash Flow

Retained Earnings

Net Profit

Cash Balance

Capital Requirement

Growth Investment Needs

---

# Dividend Coverage

Calculate

Operating Cash Flow

÷

Dividend Paid

Evaluate

Coverage Stability

Coverage Trend

Coverage Safety

---

# Free Cash Flow Coverage

Evaluate

FCF

Dividend

Coverage Ratio

Dividend Safety

Cash Flow Support

---

# Payout Ratio

Evaluate

Dividend / Net Profit

Dividend / FCF

Target Payout

Historical Payout

Payout Stability

---

# Capital Allocation

Evaluate

Dividend Policy

Share Buyback

Debt Reduction

Growth Investment

Acquisition Strategy

Capital Efficiency

---

# Shareholder Return

Evaluate

Dividend Yield

Share Buyback Yield

Total Shareholder Yield

Capital Return Policy

Shareholder Alignment

---

# Dividend Stability

Evaluate

Dividend Cut History

Dividend Suspension

Payment Consistency

Dividend Frequency

Special Dividend

---

# Peer Comparison

Compare

Sector Average

Industry Average

Top Dividend Companies

Historical Average

Dividend Aristocrats

---

# Dividend Trend

Possible States

Rapid Growth

Growing

Stable

Flattening

Declining

Recovery

Dividend Cut Risk

---

# Dividend Classification

| Score | Classification |
|--------|----------------|
| 95–100 | Dividend Aristocrat |
| 90–94 | Exceptional |
| 80–89 | Strong Dividend |
| 70–79 | Healthy Income |
| 60–69 | Average |
| 50–59 | Weak |
| 40–49 | Dividend At Risk |
| Below 40 | Unsustainable |

---

# Dividend Forecast

Estimate

Next Dividend

Annual Dividend

3-Year Dividend

5-Year Dividend

Dividend Growth Rate

Expected Yield

Dividend Coverage

---

# Dividend Risk

Evaluate

Dividend Cut Risk

Cash Flow Risk

Profit Decline Risk

Debt Burden

Capital Requirement

Refinancing Risk

Regulatory Risk

Economic Downturn

---

# Confidence Calculation

Confidence depends on

Financial Completeness

Dividend History

Cash Flow Stability

Management Policy

Forecast Reliability

Range

0–100

---

# Decision Rules

Dividend Score > 90

↓

Core Income Holding

---

80–89

↓

Long-Term Income

---

70–79

↓

Income Candidate

---

60–69

↓

Monitor

---

50–59

↓

Dividend Risk

---

Below 50

↓

Avoid Income Strategy

---

# Evidence Requirements

Every recommendation must include

Dividend Yield

Dividend Growth

FCF Coverage

Payout Ratio

Capital Allocation

Historical Comparison

Peer Comparison

Dividend Forecast

---

# Output Contract

Generate

Dividend Score

Dividend Grade

Dividend Yield Score

Dividend Growth Score

Dividend Sustainability Score

Dividend Coverage Score

Payout Ratio Score

Capital Allocation Score

Shareholder Return Score

Dividend Stability Score

Dividend Forecast

Dividend Risk Score

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Dividend History

Income Statement

Cash Flow Statement

Balance Sheet

Historical Financial Statements

Optional

Corporate Action

Management Guidance

Industry Statistics

Market Price

---

# Cross-Engine Dependencies

Consumes

Cash Flow Engine

Profitability Engine

Balance Sheet Engine

Valuation Engine

Quality Engine

Financial Risk Engine

Market Score

Sector Profile

Produces

Financial Score

Portfolio Engine

Income Portfolio Engine

Dividend Portfolio Engine

Decision Engine

AI Committee

Dashboard

Learning Engine

---

# Scheduler

Quarterly

Dividend Analysis

Daily

Dividend Yield Update

Weekly

Dividend Watch

Monthly

Forecast Update

Annual

Dividend Policy Review

---

# Error Handling

Missing Dividend History

↓

Use Corporate Action

Missing Cash Flow

↓

Reduce Confidence

Missing Forecast

↓

Historical Growth

Collector Failure

↓

Retry

↓

Fallback Cache

↓

Continue Processing

---

# Monitoring

Dividend Coverage

Dividend Growth

Yield Trend

Forecast Accuracy

Calculation Time

API Health

Memory Usage

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

10 Years Dividend Growth

Strong FCF

Expected

Dividend Score >95

---

Scenario 2

High Dividend

Negative Free Cash Flow

Expected

Dividend Trap Warning

---

Scenario 3

Dividend Cut

Expected

Dividend Stability Reduced

---

Scenario 4

High Buyback

Moderate Dividend

Expected

High Shareholder Return

---

Scenario 5

High Payout Ratio (>100%)

Expected

Dividend Sustainability Warning

---

Scenario 6

Missing Dividend Record

Expected

Fallback Activated

Reduced Confidence

---

# Acceptance Criteria

The engine shall

• Calculate Dividend Score (0–100)

• Evaluate Dividend Sustainability

• Evaluate Dividend Growth

• Evaluate Dividend Safety

• Forecast Future Dividends

• Detect Dividend Trap Risk

• Measure Total Shareholder Return

• Generate Explainable Evidence

• Calculate Confidence Score

• Complete analysis within 2 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

# Future Enhancements (V101)

Support

Dividend Aristocrat Detection

Dividend Trap AI

Shareholder Yield Model

Buyback Intelligence

Dividend Discount AI

Income Portfolio Optimizer

Tax-Adjusted Yield Analysis

Dividend Digital Twin

Multi-Scenario Dividend Forecast

Institutional Income Ranking

Adaptive Dividend Sustainability Model

---

End of Document
