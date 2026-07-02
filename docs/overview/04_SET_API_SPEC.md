# MASTER LOOP ENGINE V100
## 04_SET_API_SPEC.md

Version: V100.0.0 Enterprise LTS

---

# Purpose

This document defines every SET Open API used by MASTER LOOP ENGINE V100.

Each API specification includes

- Purpose
- Category
- Authentication
- Update Frequency
- Collector
- Database Table
- Feature Store
- Intelligence Engine
- Priority
- Failure Policy

---

# API Classification

Tier 0

Critical APIs

Tier 1

Core APIs

Tier 2

Supporting APIs

---

# API 001

Security Profile

Category

Reference Data

Purpose

Master Company Registry

Collector

security_profile_collector.py

Database

security_profile

Update

Daily

Priority

Tier 0

Used By

Knowledge Graph

Portfolio Engine

Corporate Engine

---

# API 002

Stock Realtime

Category

Realtime

Collector

stock_realtime_collector.py

Database

stock_realtime

Update

Realtime

Priority

Tier 0

Used By

Market Engine

Dashboard

Decision Engine

---

# API 003

Index Realtime

Collector

index_realtime_collector.py

Database

index_realtime

Update

Realtime

Priority

Tier 0

---

# API 004

Market Insight

Collector

market_insight_collector.py

Database

market_insight

Update

Daily

Used By

Market Intelligence

Macro Intelligence

---

# API 005

Financial Statement

Collector

financial_collector.py

Database

financial_statement

Update

Quarterly

Used By

Financial Engine

---

# API 006

One Report

Collector

one_report_collector.py

Database

one_report

Update

Annual

Used By

Corporate Engine

---

# API 007

Corporate Action

Collector

corporate_action_collector.py

Database

corporate_action

Update

Daily

Used By

Portfolio Engine

---

# API 008

IR News

Collector

ir_news_collector.py

Database

ir_news

Update

Realtime

Used By

News Engine

---

# API 009

Alert News

Collector

alert_news_collector.py

Database

alert_news

Update

Realtime

Used By

Alert Engine

---

# API 010

ESG

Collector

esg_collector.py

Database

esg_report

Update

Annual

Used By

ESG Engine

---

# API 011

Investor Type

Collector

investor_type_collector.py

Database

investor_statistics

Update

Daily

Used By

Capital Flow

---

# API 012

Program Trading

Collector

program_trading_collector.py

Database

program_trading

Used By

Smart Money

---

# API 013

Short Sale

Collector

short_sale_collector.py

Database

short_sale

Used By

Risk Engine

---

# API 014

NVDR

Collector

nvdr_collector.py

Database

nvdr

Used By

Capital Flow

---

# API 015

Margin Rate

Collector

margin_rate_collector.py

Database

margin_rate

Used By

Risk Engine

---

# API 016

TFEX

Collector

tfex_collector.py

Database

tfex

Used By

Derivatives Engine

---

# API 017

TRI

Collector

tri_collector.py

Database

tri

---

# API 018

ROI

Collector

roi_collector.py

Database

roi

---

# API 019

Beta

Collector

beta_collector.py

Database

beta

---

# API 020

Index Constituents

Collector

index_constituent_collector.py

Database

index_constituents

---

# API 021

Index Weight

Collector

index_weight_collector.py

Database

index_weight

---

# Data Pipeline

SET API

↓

Collector

↓

Validation

↓

Database

↓

Feature Store

↓

Knowledge Graph

↓

AI Engine

↓

Decision Engine

---

# Error Handling

Retry

3 attempts

↓

Fallback Cache

↓

Log Error

↓

Notify Scheduler

---

# Success Criteria

Every API

Must have

Collector

Database

Validation

Logging

Monitoring

Documentation

End of Document
