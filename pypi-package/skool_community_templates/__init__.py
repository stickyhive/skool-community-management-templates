import os
import shutil
import sys

TEMPLATES_DIR = os.path.join(os.path.dirname(__file__), 'templates')

TEMPLATES = {
    'onboarding-checklist': 'skool-onboarding-checklist.md',
    'dm-sequence': 'skool-dm-sequence-template.md',
    'content-calendar': 'skool-content-calendar-template.md',
    'member-reactivation': 'skool-member-reactivation-template.md',
    'weekly-digest': 'skool-weekly-digest-template.md',
    'welcome-workflow': 'new-member-welcome-workflow.md',
    'inactive-rescue': 'inactive-member-rescue-workflow.md',
    'trial-conversion': 'trial-member-conversion-workflow.md',
    'churn-alert': 'churn-risk-alert-workflow.md',
    '30-day-plan': '30-day-skool-engagement-plan.md',
    '7-day-activation': '7-day-new-member-activation-plan.md',
    'health-score': 'skool-community-health-score-example.md',
}


def get_template(name):
    filename = TEMPLATES.get(name)
    if not filename:
        return None
    filepath = os.path.join(TEMPLATES_DIR, filename)
    if not os.path.exists(filepath):
        return None
    with open(filepath, 'r') as f:
        return f.read()


def list_templates():
    return list(TEMPLATES.keys())
