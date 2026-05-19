# Churn Risk Alert Workflow

An early warning system for identifying Skool community members who are likely to cancel, so you can intervene before they leave.

---

## Workflow Overview

```
Continuous: Monitor member engagement signals
    ↓
Weekly: Calculate risk score for all members
    ↓
Flag members above risk threshold
    ↓
Trigger appropriate intervention based on risk level
    ↓
Track intervention outcomes
    ↓
Refine scoring model based on results
```

---

## Churn Risk Signals

### High-Risk Signals (3 points each)

| Signal | Description |
|--------|-------------|
| Zero logins in 14+ days | Member has completely disengaged |
| Billing page visit | Member is reviewing their subscription |
| Unsubscribed from email notifications | Cutting ties with the community |
| Stopped replying to DMs | Ignoring outreach attempts |
| Asked about cancellation | Direct intent signal |

### Medium-Risk Signals (2 points each)

| Signal | Description |
|--------|-------------|
| Login frequency dropped 50%+ | Was daily, now every 3–4 days |
| Posts/comments dropped 75%+ | Was active, now mostly silent |
| Stopped reacting (likes/comments) | Lowest-effort engagement disappeared |
| Skipped last 2 live events | Was a regular attendee |
| No classroom progress in 14 days | Stopped consuming content |

### Low-Risk Signals (1 point each)

| Signal | Description |
|--------|-------------|
| Login frequency dropped 25% | Slight decrease in engagement |
| Shorter comments than usual | Still engaging but less deeply |
| Stopped using community features | e.g., chat, events, DMs |
| Has not posted in 7+ days | Beginning of silence |

---

## Risk Score Calculation

| Score | Risk Level | Action |
|-------|-----------|--------|
| 1–3 | Low | Monitor, no action needed |
| 4–6 | Moderate | Soft check-in within 3 days |
| 7–9 | High | Direct outreach within 24 hours |
| 10+ | Critical | Immediate personal intervention |

---

## Intervention Playbook

### Low Risk (Score 1–3): Monitor

**Action:** No direct outreach. Add to watch list.

**What to do:**
- Note the date the risk was flagged
- Check again in 7 days
- If score increases, escalate

---

### Moderate Risk (Score 4–6): Soft Check-In

**Timing:** Within 3 days of flagging

**DM Template:**

```
Hey [Name]! Just checking in — how have things been going?

I noticed we have not connected in a while and wanted to make sure you are getting value from the community.

Is there anything specific I can help with, or anything you wish we had more of? Always looking for ways to make things better.
```

---

### High Risk (Score 7–9): Direct Outreach

**Timing:** Within 24 hours of flagging

**DM Template:**

```
Hey [Name], hope you are doing well! I wanted to reach out personally.

I know life gets busy, and I just wanted to check if there is anything on your end that is making the community less useful than it could be.

A few things you might have missed recently:
- [Valuable recent post/event]
- [Upcoming content relevant to them]
- [Member win they might relate to]

If there is something we could do differently, I am genuinely all ears. And if now is just not the right season, I completely understand.

Either way, would love to hear how you are doing!
```

---

### Critical Risk (Score 10+): Personal Intervention

**Timing:** Same day

**Action:** Voice note, video message, or phone call if possible.

**Approach:**
- Be genuine, not salesy
- Acknowledge their value to the community
- Ask directly if something went wrong
- Offer a solution if there is a problem
- Accept gracefully if they want to leave

**DM Template (if voice/call not possible):**

```
Hey [Name] — sending this because I genuinely value having you in this community.

I know you have been less active lately and I just wanted to say: if something about the community is not working for you, I want to fix it.

You do not need to sugarcoat it. If there is something off — the content, the community, the format, anything — I want to know.

And if it is just a timing thing or a season of life thing, I completely get that too.

Whatever it is, I am here. Would love to chat if you are open to it.
```

---

## Churn Reasons to Track

When members do churn, document why:

| Category | Examples |
|----------|---------|
| Value | "Not getting enough value," "Content is not relevant" |
| Financial | "Too expensive," "Budget cuts" |
| Time | "Too busy," "Not enough time to engage" |
| Fit | "Not the right community for me," "Outgrew it" |
| Experience | "Too overwhelming," "Not sure how to use it" |
| External | "Life event," "Changing focus" |
| Unknown | No response, silent cancellation |

---

## Prevention Strategies by Churn Reason

| Reason | Prevention Strategy |
|--------|-------------------|
| Value | Improve content, personalize recommendations |
| Financial | Offer payment plans, demonstrate ROI |
| Time | Create micro-content, reduce overwhelm |
| Fit | Better qualify members at entry, set expectations |
| Experience | Improve onboarding, simplify navigation |
| External | Stay connected, welcome them back later |

---

## Weekly Churn Review Process

Every Monday morning:

1. Pull list of all members with risk scores above 4
2. Review new flags since last week
3. Check status of ongoing interventions
4. Send outreach messages for new high-risk members
5. Log outcomes of completed interventions
6. Calculate weekly churn rate

---

## Metrics to Track

| Metric | Target |
|--------|--------|
| Monthly churn rate | Under 5% |
| Rescue success rate (prevented cancellation) | 30%+ |
| Average risk score at cancellation | Document baseline |
| Time from first high-risk flag to cancellation | 14+ days (gives you time) |
| Members saved per month | Trending up |

---

## Scaling Churn Prevention

For small communities, a weekly spreadsheet review works. For communities over 100 members, manually tracking engagement signals across every member becomes impractical.

Automated member health monitoring can flag at-risk members the moment their behavior changes, giving you maximum time to intervene. The earlier you catch disengagement, the higher your save rate.

---

## Related Resources

- [Inactive Member Rescue Workflow](inactive-member-rescue-workflow.md)
- [Skool Member Reactivation Template](../templates/skool-member-reactivation-template.md)
- [Skool Community Health Score Example](../examples/skool-community-health-score-example.md)
