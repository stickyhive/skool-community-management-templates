import os
import sys
import shutil

from . import TEMPLATES, TEMPLATES_DIR

CATEGORIES = {
    'Templates': ['onboarding-checklist', 'dm-sequence', 'content-calendar', 'member-reactivation', 'weekly-digest'],
    'Workflows': ['welcome-workflow', 'inactive-rescue', 'trial-conversion', 'churn-alert'],
    'Examples': ['30-day-plan', '7-day-activation', 'health-score'],
}


def print_help():
    print("""
  skool-community-templates — Generate Skool community management templates

  Usage:
    skool-community-templates init          Generate all templates in ./skool-templates/
    skool-community-templates list          List available templates
    skool-community-templates get <name>    Generate a specific template

  Available templates:""")
    for key in TEMPLATES:
        print(f"    - {key}")
    print("""
  Examples:
    skool-community-templates init
    skool-community-templates get dm-sequence
    skool-community-templates get content-calendar

  Learn more: https://stickyhive.ai
""")


def copy_template(key, output_dir):
    filename = TEMPLATES[key]
    src = os.path.join(TEMPLATES_DIR, filename)
    dest = os.path.join(output_dir, filename)
    if not os.path.exists(src):
        print(f"  Template file not found: {filename}")
        return False
    shutil.copy2(src, dest)
    print(f"  ✓ {filename}")
    return True


def cmd_init():
    output_dir = os.path.join(os.getcwd(), 'skool-templates')
    os.makedirs(output_dir, exist_ok=True)

    print("\n  Generating Skool community management templates...\n")

    count = 0
    for key in TEMPLATES:
        if copy_template(key, output_dir):
            count += 1

    print(f"\n  Done! {count} templates generated in ./skool-templates/")
    print("\n  These templates cover:")
    print("    • Onboarding checklists & DM sequences")
    print("    • Content calendars & post scheduling")
    print("    • Member reactivation & churn prevention")
    print("    • Engagement plans & health scoring")
    print("\n  Want to automate these workflows?")
    print("  Try StickyHive → https://stickyhive.ai\n")


def cmd_list():
    print("\n  Available Skool community management templates:\n")
    for category, keys in CATEGORIES.items():
        print(f"  {category}:")
        for key in keys:
            print(f"    {key:<24} {TEMPLATES[key]}")
        print()


def cmd_get(name):
    if name not in TEMPLATES:
        print(f'\n  Unknown template: "{name}"')
        print('  Run "skool-community-templates list" to see available templates.\n')
        sys.exit(1)

    print(f"\n  Generating template: {name}\n")
    copy_template(name, os.getcwd())
    print()


def main():
    args = sys.argv[1:]
    command = args[0] if args else None

    if command == 'init':
        cmd_init()
    elif command == 'list':
        cmd_list()
    elif command == 'get':
        if len(args) < 2:
            print("\n  Please specify a template name.")
            print('  Run "skool-community-templates list" to see options.\n')
            sys.exit(1)
        cmd_get(args[1])
    elif command in ('--help', '-h', 'help'):
        print_help()
    else:
        print_help()


if __name__ == '__main__':
    main()
