const path = require('path');
const fs = require('fs');

const TEMPLATES_DIR = path.join(__dirname, 'templates');

const TEMPLATES = {
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
  'health-score': 'skool-community-health-score-example.md'
};

function getTemplate(name) {
  const filename = TEMPLATES[name];
  if (!filename) return null;
  const filepath = path.join(TEMPLATES_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return fs.readFileSync(filepath, 'utf-8');
}

function listTemplates() {
  return Object.keys(TEMPLATES);
}

module.exports = { getTemplate, listTemplates, TEMPLATES };
