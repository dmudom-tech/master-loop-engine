# MASTER LOOP ENGINE V100
## Folder Structure Specification

Version : V100.0.0

---

# Purpose

This document defines the complete directory structure of MASTER LOOP ENGINE V100.

Every source file shall follow this structure.

No module shall be placed outside its designated directory.

---

# Root Structure

master-loop-engine/

├── app/
├── config/
├── database/
├── docs/
├── infrastructure/
├── scripts/
├── tests/
├── .github/
├── docker/
├── logs/
├── data/
├── notebooks/
├── requirements/
├── README.md
├── pyproject.toml
├── docker-compose.yml
└── .env.example

---

# app/

Contains all application source code.

app/

├── api/
├── collectors/
├── services/
├── intelligence/
├── portfolio/
├── reports/
├── scheduler/
├── dashboard/
├── models/
├── repositories/
├── core/
├── cache/
├── events/
├── security/
├── monitoring/
├── learning/
├── utils/

---

# api/

Contains API Gateway.

app/api/

├── set/
├── bot/
├── fred/
├── tradingeconomics/
├── yahoo/
└── internal/

---

# collectors/

Responsible for downloading data.

app/collectors/

├── realtime/
├── reference/
├── financial/
├── news/
├── esg/
├── tfex/
├── portfolio/

---

# intelligence/

AI engines.

app/intelligence/

├── market/
├── financial/
├── macro/
├── flow/
├── esg/
├── corporate/
├── risk/
├── portfolio/
├── technical/
├── committee/

---

# reports/

Report generation.

Morning

Intraday

Closing

Monthly

Quarterly

Annual

Executive

---

# dashboard/

Dashboard components.

Market

Portfolio

Risk

Watchlist

Performance

Settings

Alerts

Administration

---

# scheduler/

Automation.

Morning Loop

Intraday Loop

Closing Loop

Background Jobs

Retry Queue

---

# models/

SQLAlchemy Models.

One model

One file

---

# repositories/

Database Access Layer.

Repository Pattern

Only repositories access database directly.

---

# services/

Business Logic Layer.

No database access.

No UI logic.

---

# events/

Event Driven Architecture.

Corporate Action

IR News

Alert News

Scheduler

Portfolio Update

---

# monitoring/

System monitoring.

Health Check

API Status

Latency

Memory

CPU

Scheduler

---

# learning/

Learning Engine.

Backtesting

Paper Trading

Decision Replay

Performance Attribution

---

# config/

Application configuration.

config/

├── development.py
├── production.py
├── testing.py

---

# database/

Database related files.

database/

├── migrations/
├── seed/
├── schema/
├── backup/

---

# infrastructure/

Deployment.

Docker

Terraform

Kubernetes

Cloud

GitHub Actions

---

# scripts/

Utility scripts.

Import

Export

Backup

Restore

Maintenance

---

# tests/

Testing.

tests/

├── unit/
├── integration/
├── api/
├── performance/
├── security/

---

# docs/

Documentation.

Architecture

Database

API

AI

Security

Deployment

Roadmap

---

# logs/

Application Logs.

Scheduler

API

Decision

Errors

---

# data/

Temporary Data.

Import

Export

Cache

Snapshots

---

# notebooks/

Research.

Jupyter

Experiments

Prototype

---

# requirements/

Python dependency files.

base.txt

development.txt

production.txt

---

# Naming Convention

snake_case

Folder names

snake_case

Python files

snake_case

Classes

PascalCase

Functions

snake_case

Constants

UPPER_CASE

---

# Rules

No business logic inside API layer.

No SQL inside dashboard.

No direct database access outside repositories.

No duplicated collectors.

Every module must contain unit tests.

Every public function requires documentation.

---

End of Document
