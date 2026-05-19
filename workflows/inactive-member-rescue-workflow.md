# Inactive Member Rescue Workflow

A systematic workflow for identifying, segmenting, and re-engaging Skool community members who have gone quiet before they churn completely.

---

## Workflow Overview

```
Monitor member activity weekly
    ↓
Identify members with declining engagement
    ↓
Segment by inactivity type
    ↓
Send targeted reactivation message (Day 1)
    ↓
Wait 3 days → check for re-engagement
    ↓
If no response: send follow-up with specific value (Day 4)
    ↓
Wait 4 days → final check
    ↓
If still inactive: send final low-pressure message (Day 8)
    ↓
If no response after 14 days: mark as "at-risk" → feed into churn prevention
```

---

## Step 1: Identify Inactive Members

### Inactivity Signals

| Signal | Severity |
|--------|----------|
| No login for 7+ days | Moderate |
| No posts/comments for 14+ days | High |
| Stopped opening DMs | Critical |
| Was active daily, now absent for 5+ days | High |
| Never completed onboarding | High |

### When to Flag

Run this check weekly (recommended: Monday morning):

- Pull list of members with zero activity in the past 7 days
- Cross-reference against their historical engagement level
- Prioritize high-engagement members who suddenly went quiet

---

## Step 2: Segment Inactive Members

| Segment | Description | Rescue Priority |
|---------|-------------|-----------------|
| Never Activated | Joined but never posted | High — they never found value |
| One-and-Done | Posted once, then vanished | High — something did not stick |
| Gradually Fading | Activity decreasing week over week | Medium — catch them early |
| Sudden Ghost | Was very active, then nothing | High — something specific happened |
| Long-term Lurker | Reads but never engages | Low — they may still get value |

---

## Step 3: Send Segment-Specific Messages

### For Never Activated Members

```
Hey [Name]! I noticed you joined [Community] a while back but have not had a chance to jump in yet.

Totally fine — just wanted to let you know I am here if you need anything.

If you are not sure where to start, this is the post I would recommend: [link]

It takes about 3 minutes and most people find it really helpful. Let me know if you have any questions!
```

### For Gradually Fading Members

```
Hey [Name], just wanted to check in — I have noticed things have been a bit quieter for you in the group lately.

Completely understand if life is busy. Just wanted to make sure everything is good and see if there is anything I can help with.

We have [new content/event] coming up on [day] that I think would be valuable for you: [link]

Would be great to see you there!
```

### For Sudden Ghost Members

```
Hey [Name]! Hope you are doing well — I noticed you have been away from the community for a bit.

You were so active before, and your contributions were genuinely valued. No pressure at all — just wanted to reach out and see if everything is okay.

If there is something we could be doing differently, I am always open to feedback. And if you are dealing with something outside the community, I totally get it.

The door is always open when you are ready!
```

---

## Step 4: Follow-Up Sequence

### Day 4 Follow-Up (No Reply to First Message)

```
Hey [Name]! Just a quick follow-up — I shared [resource/event] a few days ago and wanted to make sure it did not get lost.

Here is the direct link: [link]

Also, we just had a great discussion about [topic] that I thought you would find interesting: [link to post]

Let me know if there is anything specific you are looking for!
```

### Day 8 Final Message (No Reply to Either)

```
Hey [Name], last message from me (I promise I am not trying to spam you 😄).

Just wanted you to know:
- The community is here whenever you are ready
- If there is something that would make the group more useful for you, I genuinely want to hear it
- No pressure, no judgment

Wishing you the best with [topic/goal they mentioned]! Feel free to reach out anytime.
```

---

## Step 5: Post-Rescue Outcomes

| Outcome | Next Step |
|---------|-----------|
| Member re-engages | Acknowledge publicly, continue normal engagement |
| Member replies but stays quiet | Address their concern, adjust approach |
| No response after 14 days | Mark as "at-risk," monitor for cancellation |
| Member leaves/cancels | Log reason if given, improve for next time |

---

## Tracking Template

| Member | Segment | Day 1 Sent | Reply? | Day 4 Sent | Reply? | Day 8 Sent | Outcome |
|--------|---------|-----------|--------|-----------|--------|-----------|---------|
| | | | | | | | |

---

## Red Flags That Predict Churn

Watch for these patterns across your inactive members:

1. **Login frequency dropping** before posts stop
2. **Shorter comments** before going silent
3. **Stopping DM replies** before stopping activity
4. **Unsubscribing from emails** or notifications
5. **Asking about refunds/cancellation** policy

If you catch members at signal #1 or #2, rescue success rates are much higher.

---

## Scaling This Workflow

For small communities (under 50), you can run this manually with a weekly review session.

For larger communities, you need automated activity monitoring that flags members when they cross inactivity thresholds. [Community automation for Skool](https://stickyhive.ai) can monitor member health scores and alert you when members start going quiet, so you can intervene at the right time.

---

## Related Resources

- [Skool Member Reactivation Template](../templates/skool-member-reactivation-template.md)
- [Churn Risk Alert Workflow](churn-risk-alert-workflow.md)
- [Skool Community Health Score Example](../examples/skool-community-health-score-example.md)
