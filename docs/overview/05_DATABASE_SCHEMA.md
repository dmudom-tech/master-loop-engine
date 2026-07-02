# MASTER LOOP ENGINE V100
## 05_DATABASE_SCHEMA.md

Version: V100.0.0

---

# Database Engine

PostgreSQL 16

Timezone

Asia/Bangkok

Encoding

UTF-8

ORM

SQLAlchemy 2.x

Migration

Alembic

---

# Database Architecture

Database

master_loop

contains

Core Tables

Reference Tables

Market Tables

Financial Tables

Portfolio Tables

Decision Tables

System Tables

---

# Core Tables

## company

Primary Key

company_id

Columns

symbol

company_name

industry

sector

market

isin

par_value

listed_share

status

created_at

updated_at

---

## stock_price

price_id

company_id

date

time

open

high

low

close

volume

value

bid

offer

last

change

percent_change

---

## index_price

index_id

index_name

date

time

open

high

low

close

change

volume

---

## financial_statement

statement_id

company_id

period

year

quarter

revenue

gross_profit

net_profit

eps

book_value

roe

roa

debt_equity

cash_flow

---

## corporate_action

action_id

company_id

action_type

announcement_date

effective_date

description

status

---

## ir_news

news_id

company_id

publish_datetime

headline

summary

url

importance

---

## alert_news

alert_id

publish_datetime

headline

category

priority

source

---

## esg_report

esg_id

company_id

year

environment_score

social_score

governance_score

overall_score

---

## investor_statistics

stat_id

date

foreign_buy

foreign_sell

local_buy

local_sell

institution_buy

institution_sell

---

## program_trading

program_id

date

buy_value

sell_value

net_value

---

## short_sale

short_id

company_id

date

short_volume

short_value

---

## nvdr

nvdr_id

company_id

date

buy

sell

net

holding

---

## tfex

tfex_id

contract

date

open

high

low

close

settlement

volume

oi

---

## portfolio

portfolio_id

user_id

cash

market_value

cost

profit_loss

return_percent

updated_at

---

## portfolio_position

position_id

portfolio_id

company_id

quantity

average_cost

current_price

market_value

unrealized_pl

allocation

---

## watchlist

watchlist_id

company_id

priority

theme

note

---

## decision_history

decision_id

company_id

datetime

recommendation

confidence

risk_score

opportunity_score

reason

---

## evidence

evidence_id

decision_id

source

category

description

weight

confidence

---

## learning_history

learning_id

decision_id

actual_return

expected_return

accuracy

review_date

---

## scheduler_log

log_id

task_name

status

start_time

finish_time

duration

message

---

## api_log

api_log_id

endpoint

request_time

response_time

status

error_message

---

## system_setting

setting_id

key

value

updated_at

---

# Relationships

company

↓

stock_price

↓

financial_statement

↓

corporate_action

↓

ir_news

↓

esg_report

↓

decision_history

↓

evidence

---

portfolio

↓

portfolio_position

↓

company

---

# Indexes

symbol

date

company_id

portfolio_id

decision_id

publish_datetime

---

# Retention Policy

Realtime

5 years

Financial

Forever

Corporate Action

Forever

Decision History

Forever

Logs

365 days

---

# Backup Policy

Daily Backup

Weekly Full Backup

Monthly Archive

---

End of Document
