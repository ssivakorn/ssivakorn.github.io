Generate a PDF from the URL provided as: $ARGUMENTS

Steps:

1. If no argument is provided, respond: "Please provide a URL, e.g. `/generate_pdf http://localhost:8888/resume.html`" and stop.

2. Set TARGET_URL to the provided argument.

3. Check the URL is reachable:
   `curl -s -o /dev/null -w "%{http_code}" <TARGET_URL>`
   If it returns anything other than 200, tell the user and stop.

4. Run the puppeteer script, passing the URL as an argument:
   `cd /private/tmp/claude-501/-Users-bo-workspace-sites-ssivakorn-github-io/f43dae23-e70c-4c0f-a2e0-07cc31492118/scratchpad && node gen_resume_pdf.mjs <TARGET_URL>`

5. Confirm the PDF was saved to `/Users/bo/workspace/sites/ssivakorn.github.io/resume.pdf` and report success.

The script also rewrites all relative links (e.g. `papers/sivakorn.isc2026.recaptcha.pdf`) to
absolute URLs (e.g. `https://ssivakorn.github.io/papers/sivakorn.isc2026.recaptcha.pdf`) so
links in the PDF point to the live site.

Current PDF settings (edit the script to change):
- Scale: 77%
- Margins: 0.5 inches all sides
- Format: Letter
- Page numbers: centered bottom, 11px Arial
- Page break: forced before "2016" year section
