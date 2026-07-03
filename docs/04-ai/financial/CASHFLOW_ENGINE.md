# MASTER LOOP ENGINE V100
## CASHFLOW_ENGINE.md

Version : V100.0.0 Enterprise LTS

Module

Financial Intelligence Engine

Submodule

Cash Flow Engine

---

# Purpose

Cash Flow Engine evaluates the ability of a company to generate, sustain, and efficiently utilize cash.

Unlike Profitability Engine, which measures accounting earnings, Cash Flow Engine focuses on actual cash generation and financial flexibility.

Cash flow is the strongest indicator of earnings quality, business resilience, dividend sustainability, debt repayment capability, and long-term intrinsic value.

The engine is a core component of institutional-quality fundamental analysis.

---

# Objectives

Evaluate

• Operating Cash Flow

• Free Cash Flow

• Cash Flow Quality

• Cash Conversion

• Capital Allocation

• Financial Flexibility

• Cash Sustainability

Generate

• Cash Flow Score

• Cash Flow Grade

• Cash Flow Trend

• Cash Flow Confidence

---

# Data Sources

SET Financial Statement API

Cash Flow Statement

Income Statement

Balance Sheet

Quarterly Reports

Annual Reports

One Report

Historical Financial Statements

Dividend History

Capital Expenditure

Debt Schedule

Industry Statistics

---

# Processing Pipeline

Cash Flow Statement

↓

Validation

↓

Normalization

↓

Cash Flow Features

↓

Cash Flow Analysis

↓

Cash Flow Score

↓

Forecast

↓

Evidence Generation

↓

AI Committee

---

# Cash Flow Components

Operating Cash Flow

Free Cash Flow

Cash Conversion

Cash Flow Stability

Capital Expenditure

Owner Earnings

Financial Flexibility

Dividend Coverage

Debt Coverage

Cash Allocation Efficiency

---

# Component Weights

| Component | Weight |
|-----------|--------|
| Operating Cash Flow | 20% |
| Free Cash Flow | 20% |
| Cash Conversion | 15% |
| Cash Flow Stability | 10% |
| Dividend Coverage | 10% |
| Debt Coverage | 10% |
| Capital Allocation | 5% |
| Owner Earnings | 5% |
| Financial Flexibility | 5% |

Total = 100%

---

# Operating Cash Flow

Evaluate

Operating Cash Flow (OCF)

OCF Growth

OCF Margin

OCF / Revenue

OCF / Net Income

Operating Cash Trend

---

# Free Cash Flow

Calculate

Free Cash Flow

= Operating Cash Flow

− Capital Expenditure

Evaluate

FCF Growth

FCF Margin

FCF Yield

FCF Consistency

---

# Cash Conversion

Evaluate

Cash Conversion Ratio

Operating Cash Flow / Net Income

Cash Conversion Cycle (CCC)

Days Inventory Outstanding

Days Sales Outstanding

Days Payable Outstanding

Working Capital Efficiency

---

# Cash Flow Stability

Evaluate

Quarterly Stability

Annual Stability

Cash Flow Volatility

Cash Flow Persistence

Recovery Speed

Consistency

---

# Capital Expenditure

Evaluate

CAPEX

Maintenance CAPEX

Growth CAPEX

CAPEX / Revenue

CAPEX Efficiency

Return on CAPEX

---

# Owner Earnings

Estimate

Operating Cash Flow

− Maintenance CAPEX

± Working Capital Adjustment

Evaluate

Owner Earnings Growth

Owner Earnings Yield

---

# Dividend Coverage

Evaluate

Dividend Payout

Dividend Coverage Ratio

FCF Coverage

Dividend Sustainability

Dividend Growth Support

---

# Debt Coverage

Evaluate

Operating Cash Flow / Total Debt

Free Cash Flow / Debt

Interest Coverage

Debt Repayment Capacity

Refinancing Risk

---

# Financial Flexibility

Evaluate

Cash Balance

Cash Ratio

Unused Credit Capacity

Liquidity Buffer

Funding Flexibility

Acquisition Capacity

---

# Capital Allocation

Evaluate

Dividend Policy

Share Buyback

Debt Reduction

Reinvestment

M&A Activity

Capital Efficiency

---

# Cash Flow Quality

Evaluate

Cash Earnings

Accrual Ratio

Earnings Manipulation Risk

Recurring Cash Flow

One-Time Cash Flow

Accounting Quality

---

# Cash Flow Trend

Possible States

Strong Growth

Improving

Stable

Weakening

Recovery

Declining

Negative

Turnaround

---

# Cash Flow Classification

| Score | Classification |
|--------|----------------|
| 95–100 | Outstanding |
| 90–94 | Excellent |
| 80–89 | Strong |
| 70–79 | Healthy |
| 60–69 | Stable |
| 50–59 | Weak |
| 40–49 | Distressed |
| Below 40 | Critical |

---

# Cash Flow Forecast

Estimate

Next Quarter

Next Year

3 Years

5 Years

Forecast

Operating Cash Flow

Free Cash Flow

CAPEX

Dividend Capacity

Debt Repayment Capacity

---

# Cash Flow Risk

Evaluate

Negative Cash Flow

Working Capital Risk

Liquidity Risk

CAPEX Risk

Debt Service Risk

Dividend Cut Risk

Funding Risk

Cash Burn Rate

---

# Confidence Calculation

Confidence depends on

Statement Completeness

Historical Stability

Accounting Quality

Forecast Reliability

Industry Stability

Range

0–100

---

# Decision Rules

Cash Flow Score > 90

↓

Institutional Quality

Excellent Capital Allocation

---

80–89

↓

High Quality

Long-Term Compounder

---

70–79

↓

Healthy Cash Generator

---

60–69

↓

Monitor Cash Trend

---

50–59

↓

Weak Cash Generation

Reduce Exposure

---

Below 50

↓

Avoid

Financial Distress Watch

---

# Evidence Requirements

Every recommendation must include

Operating Cash Flow

Free Cash Flow

Cash Conversion

Debt Coverage

Dividend Coverage

Capital Allocation

Historical Comparison

Peer Comparison

---

# Output Contract

Generate

Cash Flow Score

Cash Flow Grade

Operating Cash Flow Score

Free Cash Flow Score

Cash Conversion Score

Cash Flow Stability Score

Dividend Coverage Score

Debt Coverage Score

Capital Allocation Score

Financial Flexibility Score

Owner Earnings Score

Cash Flow Forecast

Cash Flow Risk Score

Confidence

Evidence

Recommendation

---

# Input Contract

Required

Cash Flow Statement

Income Statement

Balance Sheet

Historical Financial Statements

Optional

Dividend History

Debt Schedule

Industry Statistics

Management Guidance

---

# Cross-Engine Dependencies

Consumes

Financial Engine

Revenue Engine

Profitability Engine

Balance Sheet Engine

Produces

Quality Engine

Valuation Engine

Dividend Engine

Financial Risk Engine

Financial Score

Portfolio Engine

Decision Engine

AI Committee

Dashboard

---

# Scheduler

Quarterly

Financial Statement Refresh

Daily

Cash Flow Score Refresh

Weekly

Cash Flow Trend Review

Monthly

Forecast Update

Annual

Capital Allocation Review

---

# Error Handling

Missing Cash Flow Statement

↓

Use TTM Cash Flow

Missing CAPEX

↓

Estimate Using Historical Average

Missing Working Capital

↓

Reduce Confidence

Collector Failure

↓

Retry

↓

Fallback Cache

↓

Continue Processing

---

# Monitoring

Cash Flow Coverage

FCF Trend

Cash Conversion

Forecast Accuracy

Calculation Time

Memory Usage

API Health

Scheduler Status

---

# Unit Test Scenarios

Scenario 1

Positive OCF

Positive FCF

Expected

Cash Flow Score > 90

---

Scenario 2

Net Profit Positive

Negative Operating Cash Flow

Expected

Low Cash Quality Alert

---

Scenario 3

High CAPEX

Strong Future Growth

Expected

FCF Reduced

Growth Classification Maintained

---

Scenario 4

Dividend Higher Than FCF

Expected

Dividend Sustainability Warning

---

Scenario 5

Debt Increasing

Cash Flow Weakening

Expected

Debt Coverage Risk Alert

---

Scenario 6

Missing Quarterly Statement

Expected

Fallback to TTM

Reduced Confidence

No System Failure

---

# Acceptance Criteria

The engine shall

• Calculate Cash Flow Score (0–100)

• Evaluate Operating Cash Flow

• Evaluate Free Cash Flow

• Measure Cash Conversion

• Assess Capital Allocation Quality

• Evaluate Dividend Sustainability

• Evaluate Debt Repayment Capacity

• Forecast Future Cash Flow

• Produce Explainable Evidence

• Calculate Confidence Score

• Complete analysis within 2 seconds

• Support Historical Replay

• Support Backtesting

• Support Continuous Learning

---

# Future Enhancements (V101)

Support

Owner Earnings Model

Cash Flow Digital Twin

FCF Monte Carlo Forecast

Working Capital Optimization

Cash Burn Prediction

AI Cash Flow Forecasting

Liquidity Stress Testing

Capital Allocation Optimizer

Share Buyback Efficiency Model

Enterprise Cash Quality Index

---

End of Document
