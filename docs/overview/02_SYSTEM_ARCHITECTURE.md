# MASTER LOOP ENGINE V100
## 02_SYSTEM_ARCHITECTURE.md

Version: V100.0.0 Enterprise LTS

---

# 1. Overview

MASTER LOOP ENGINE V100 is an Institutional Investment Operating System designed for the Thai Capital Market.

The system continuously collects market data, validates information, analyzes investment opportunities, evaluates portfolio risk, and generates explainable investment recommendations.

The architecture follows a modular design so every component can evolve independently.

---

# 2. High-Level Architecture

                    +----------------------+
                    |     SET Open API     |
                    +----------+-----------+
                               |
                               |
                    +----------v-----------+
                    |      API Gateway     |
                    +----------+-----------+
                               |
                    +----------v-----------+
                    |   Data Orchestrator  |
                    +----------+-----------+
                               |
              +----------------+----------------+
              |                                 |
     +--------v--------+               +--------v--------+
     | Data Validation |               | Data Cache      |
     +--------+--------+               +--------+--------+
              |                                 |
              +----------------+----------------+
                               |
                    +----------v-----------+
                    |    Feature Store     |
                    +----------+-----------+
                               |
                    +----------v-----------+
                    | Knowledge Graph      |
                    +----------+-----------+
                               |
               +---------------+---------------+
               |                               |
     +---------v--------+             +--------v---------+
     | Intelligence Hub |             | Portfolio Engine |
     +---------+--------+             +--------+---------+
               |                               |
               +---------------+---------------+
                               |
                    +----------v-----------+
                    | Decision Committee   |
                    +----------+-----------+
                               |
                    +----------v-----------+
                    | Report Generator     |
                    +----------+-----------+
                               |
                    +----------v-----------+
                    | Dashboard / API      |
                    +----------------------+

---

# 3. Layer Architecture

The system is divided into eight logical layers.

Layer 1

External Data Sources

- SET Open API
- BOT
- Trading Economics
- FRED
- Yahoo Finance
- Portfolio Holdings

Layer 2

Data Platform

Responsible for

- Authentication
- API Gateway
- Scheduler
- Retry
- Logging
- Versioning

Layer 3

Storage Platform

Contains

- PostgreSQL
- Redis Cache
- Feature Store

Layer 4

Knowledge Platform

Contains

- Company Knowledge Graph
- Portfolio Knowledge Graph
- Decision History

Layer 5

Intelligence Platform

Runs every AI Engine.

Layer 6

Decision Platform

Produces

BUY

HOLD

WAIT

TRIM

SELL

HEDGE

Layer 7

Presentation Layer

- Dashboard
- REST API
- Reports

Layer 8

Automation Layer

Morning Loop

Intraday Loop

Closing Loop

Alerts

Learning

---

# 4. Core Modules

01 API Gateway

Responsible for all external API communication.

02 Data Collector

Downloads data from SET.

03 Validation Engine

Checks

- Missing Values
- Duplicate Records
- Timestamp
- Data Quality

04 Feature Store

Stores calculated indicators.

05 Knowledge Graph

Stores relationships between

Company

Financial

News

Corporate Action

Portfolio

Decision History

06 Intelligence Hub

Contains

- Market Intelligence
- Financial Intelligence
- ESG Intelligence
- Risk Intelligence
- Capital Flow Intelligence
- Macro Intelligence
- Portfolio Intelligence

07 Decision Committee

Aggregates AI opinions.

08 Portfolio Engine

Calculates

Portfolio Health

Allocation

Risk

Expected Return

09 Report Engine

Generates

Morning Report

Intraday Report

Closing Report

Executive Summary

10 Dashboard

Provides visualization.

---

# 5. Data Flow

SET API

↓

API Gateway

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

AI Intelligence

↓

Decision Committee

↓

Reports

↓

Dashboard

---

# 6. System Principles

Single Source of Truth

Every company has one master record.

Explainable AI

Every recommendation must contain evidence.

Modular Architecture

Each module is independently deployable.

Event Driven

Corporate Actions

IR News

Alerts

can trigger immediate analysis.

Continuous Learning

Every decision is stored for replay and evaluation.

---

# 7. Scalability

The architecture supports

Single User

↓

Multi User

↓

Enterprise

↓

Institutional

↓

Cloud Native Deployment

---

# 8. Technology Stack

Backend

Python

FastAPI

Database

PostgreSQL

Cache

Redis

Dashboard

Streamlit

Deployment

Docker

GitHub Actions

Cloud

Future

Kubernetes

---

# 9. Security

API Keys stored in environment variables.

No secrets inside source code.

Role-based authentication.

Encrypted communication.

Audit logging.

---

# 10. Success Criteria

Realtime market monitoring.

Explainable recommendations.

Automated reporting.

Scalable architecture.

Production-ready deployment.

---

End of Document
