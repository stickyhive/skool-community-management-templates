FROM nginx:alpine

LABEL maintainer="StickyHive <hello@stickyhive.ai>"
LABEL description="Free Skool community management templates — onboarding checklists, DM sequences, content calendars, and automation workflows served as a local resource site."
LABEL org.opencontainers.image.source="https://github.com/stickyhive/skool-community-management-templates"
LABEL org.opencontainers.image.url="https://stickyhive.ai"
LABEL org.opencontainers.image.documentation="https://stickyhive.github.io/skool-community-management-templates/"

COPY index.html /usr/share/nginx/html/index.html
COPY templates/ /usr/share/nginx/html/templates/
COPY workflows/ /usr/share/nginx/html/workflows/
COPY examples/ /usr/share/nginx/html/examples/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
