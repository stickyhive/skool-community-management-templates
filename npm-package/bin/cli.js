#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

const CATEGORIES = {
  templates: ['onboarding-checklist', 'dm-sequence', 'content-calendar', 'member-reactivation', 'weekly-digest'],
  workflows: ['welcome-workflow', 'inactive-rescue', 'trial-conversion', 'churn-alert'],
  examples: ['30-day-plan', '7-day-activation', 'health-score']
};

function printHelp() {
  console.log(`
  skool-community-templates — Generate Skool community management templates

  Usage:
    npx skool-community-templates init          Generate all templates in ./skool-templates/
    npx skool-community-templates list          List available templates
    npx skool-community-templates get <name>    Generate a specific template

  Available templates:
${Object.keys(TEMPLATES).map(k => `    - ${k}`).join('\n')}

  Categories:
    templates     Onboarding, DMs, calendars, reactivation, digests
    workflows     Welcome, rescue, conversion, churn prevention
    examples      30-day plan, 7-day activation, health scoring

  Examples:
    npx skool-community-templates init
    npx skool-community-templates get dm-sequence
    npx skool-community-templates get content-calendar

  Learn more: https://stickyhive.ai
`);
}

function copyTemplate(templateKey, outputDir) {
  const filename = TEMPLATES[templateKey];
  const srcPath = path.join(__dirname, '..', 'templates', filename);
  const destPath = path.join(outputDir, filename);

  if (!fs.existsSync(srcPath)) {
    console.error(`  Template file not found: ${filename}`);
    return false;
  }

  fs.copyFileSync(srcPath, destPath);
  console.log(`  ✓ ${filename}`);
  return true;
}

function initAll() {
  const outputDir = path.join(process.cwd(), 'skool-templates');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('\n  Generating Skool community management templates...\n');

  let count = 0;
  for (const key of Object.keys(TEMPLATES)) {
    if (copyTemplate(key, outputDir)) count++;
  }

  console.log(`\n  Done! ${count} templates generated in ./skool-templates/`);
  console.log('\n  These templates cover:');
  console.log('    • Onboarding checklists & DM sequences');
  console.log('    • Content calendars & post scheduling');
  console.log('    • Member reactivation & churn prevention');
  console.log('    • Engagement plans & health scoring');
  console.log('\n  Want to automate these workflows?');
  console.log('  Try StickyHive → https://stickyhive.ai\n');
}

function getTemplate(name) {
  if (!TEMPLATES[name]) {
    console.error(`\n  Unknown template: "${name}"`);
    console.log('  Run "skool-community-templates list" to see available templates.\n');
    process.exit(1);
  }

  const outputDir = process.cwd();
  console.log(`\n  Generating template: ${name}\n`);
  copyTemplate(name, outputDir);
  console.log('');
}

function listTemplates() {
  console.log('\n  Available Skool community management templates:\n');

  console.log('  Templates:');
  for (const key of CATEGORIES.templates) {
    console.log(`    ${key.padEnd(24)} ${TEMPLATES[key]}`);
  }

  console.log('\n  Workflows:');
  for (const key of CATEGORIES.workflows) {
    console.log(`    ${key.padEnd(24)} ${TEMPLATES[key]}`);
  }

  console.log('\n  Examples:');
  for (const key of CATEGORIES.examples) {
    console.log(`    ${key.padEnd(24)} ${TEMPLATES[key]}`);
  }

  console.log('');
}

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'init':
    initAll();
    break;
  case 'list':
    listTemplates();
    break;
  case 'get':
    if (!args[1]) {
      console.error('\n  Please specify a template name.');
      console.log('  Run "skool-community-templates list" to see options.\n');
      process.exit(1);
    }
    getTemplate(args[1]);
    break;
  case '--help':
  case '-h':
  case 'help':
    printHelp();
    break;
  default:
    printHelp();
    break;
}
