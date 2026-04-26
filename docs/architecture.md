# Architecture

```text
Telegram User -> Bot Router -> Booking Service -> Availability Store
       |             |                 |
       v             v                 v
   FAQ Flow      Admin Alerts        MySQL
```

## Design Notes

- Bot routing is separated from booking rules.
- Booking validation is deterministic and can be tested without Telegram.
- Admin notifications are side effects after state changes, not part of validation.
- Date/time handling is centralized to avoid inconsistent slot calculations.

## Public-Safe Simplification

This showcase does not include real academy schedules, user records, payment flows, Telegram tokens, or admin chat IDs.
