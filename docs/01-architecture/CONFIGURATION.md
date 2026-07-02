# MASTER LOOP ENGINE V100
## Configuration Specification

Version: V100.0.0 Enterprise LTS

---

# Purpose

This document defines the configuration standards for MASTER LOOP ENGINE V100.

All environments must follow this specification.

Configuration must never be hardcoded.

Secrets must never be committed into Git.

---

# Supported Environments

Development

Testing

Staging

Production

---

# Configuration Sources

Priority Order

1. Environment Variables

2. .env File

3. Default Configuration

---

# Environment Variables

## Application

APP_NAME

APP_VERSION

APP_ENV

DEBUG

TIMEZONE

LOG_LEVEL

---

## SET Open API

SET_API_KEY

SET_API_SECRET

SET_BASE_URL

SET_TIMEOUT

SET_RETRY

SET_RATE_LIMIT

---

## Database

DB_HOST

DB_PORT

DB_NAME

DB_USER

DB_PASSWORD

DB_POOL_SIZE

DB_MAX_OVERFLOW

---

## Redis

REDIS_HOST

REDIS_PORT

REDIS_PASSWORD

REDIS_DB

CACHE_TTL

---

## Scheduler

MORNING_LOOP_TIME

INTRADAY_INTERVAL

CLOSING_LOOP_TIME

ENABLE_BACKGROUND_JOB

---

## Portfolio

DEFAULT_CURRENCY

DEFAULT_MARKET

RISK_FREE_RATE

DEFAULT_POSITION_SIZE

MAX_POSITION_SIZE

MAX_PORTFOLIO_RISK

---

## AI

MODEL_NAME

MAX_TOKENS

TEMPERATURE

ENABLE_LEARNING

CONFIDENCE_THRESHOLD

---

## Logging

LOG_PATH

LOG_ROTATION

LOG_RETENTION_DAYS

ENABLE_AUDIT_LOG

---

## Dashboard

HOST

PORT

AUTO_REFRESH

REFRESH_INTERVAL

---

## Security

SECRET_KEY

JWT_SECRET

JWT_EXPIRE_MINUTES

ENCRYPTION_KEY

---

# File Structure

config/

├── base.py

├── development.py

├── testing.py

├── staging.py

├── production.py

└── loader.py

---

# .env.example

APP_ENV=development

APP_NAME=MASTER_LOOP_ENGINE

APP_VERSION=100

TIMEZONE=Asia/Bangkok

DEBUG=True

SET_API_KEY=

SET_API_SECRET=

SET_BASE_URL=

DB_HOST=localhost

DB_PORT=5432

DB_NAME=master_loop

DB_USER=postgres

DB_PASSWORD=

REDIS_HOST=localhost

REDIS_PORT=6379

CACHE_TTL=300

---

# Configuration Validation

System startup must validate

✓ Required variables

✓ Database connection

✓ Redis connection

✓ API Key

✓ Timezone

✓ Folder permissions

If validation fails

Application startup must stop.

---

# Secret Management

Secrets

Never stored in Git.

Never stored in source code.

Never printed in logs.

Use Environment Variables only.

---

# Logging Policy

Every configuration change

Must be logged.

Sensitive values

Must be masked.

---

# Timezone

Default

Asia/Bangkok

All timestamps stored in UTC.

Display converted to Asia/Bangkok.

---

# Error Handling

Invalid configuration

↓

Startup Error

↓

Write Log

↓

Exit Application

---

# Acceptance Criteria

The application starts successfully in

Development

Testing

Staging

Production

without changing source code.

Only environment configuration changes.

---

End of Document
