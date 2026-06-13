import { mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { jobs, profile } from '../src/data/profile';

type CsvRow = Record<string, string>;

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(root, 'public/assets/pdf/luis-pichio-resume.pdf');

function parseCsvLine(line: string) {
  const values: string[] = [];
  let current = '';
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && quoted && nextChar === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function parseCsv(csv: string) {
  const [header, ...rows] = csv.trim().split(/\r?\n/);
  const keys = parseCsvLine(header);

  return rows.map((row) => {
    const values = parseCsvLine(row);
    return Object.fromEntries(keys.map((key, index) => [key, values[index] ?? ''])) as CsvRow;
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function list(items: string[]) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function linkLabel(href: string) {
  return href.replace(/^mailto:/, '').replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function generatedAtLabel(date = new Date()) {
  return new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Argentina/Buenos_Aires',
  }).format(date);
}

async function loadData() {
  const [keySkillsCsv, technicalSkillsCsv] = await Promise.all([
    readFile(resolve(root, 'src/data/key-skills.csv'), 'utf8'),
    readFile(resolve(root, 'src/data/technical-skills.csv'), 'utf8'),
  ]);

  return {
    keySkills: parseCsv(keySkillsCsv),
    technicalSkills: parseCsv(technicalSkillsCsv),
  };
}

function compactExperience(experience: string) {
  return experience.replace(' años', 'año').replace(' año', 'a').replace('años', 'a').replace('año', 'a');
}

function experienceValue(experience: string) {
  const match = experience.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function levelClass(level: string) {
  return level
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function groupTechnicalSkills(skills: CsvRow[]) {
  const categories = new Map<string, Map<string, CsvRow[]>>();

  for (const skill of skills) {
    const groups = categories.get(skill.category) ?? new Map<string, CsvRow[]>();
    groups.set(
      skill.group,
      [...(groups.get(skill.group) ?? []), skill].sort(
        (a, b) => experienceValue(b.experience) - experienceValue(a.experience) || a.name.localeCompare(b.name, 'es'),
      ),
    );
    categories.set(skill.category, groups);
  }

  return [...categories.entries()].map(([category, groups]) => [category, [...groups.entries()]] as const);
}

function buildHtml(keySkills: CsvRow[], technicalSkills: CsvRow[]) {
  const contactLinks = profile.socials.filter((social) => ['LinkedIn', 'GitHub', 'Blog'].includes(social.label));
  const skillGroups = groupTechnicalSkills(technicalSkills);
  const generatedAt = generatedAtLabel();

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>CV | ${escapeHtml(profile.name)}</title>
    <style>
      @page { size: A4; margin: 13mm; }
      * { box-sizing: border-box; }
      body {
        color: #172126;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 9.4pt;
        line-height: 1.36;
        margin: 0;
      }
      h1, h2, h3, h4, p { margin: 0; }
      a { color: inherit; text-decoration: none; }
      ul { margin: 4px 0 0; padding-left: 15px; }
      li { margin: 1px 0; }
      .resume { display: grid; gap: 8px; }
      .header {
        border-bottom: 2px solid #20a99a;
        display: grid;
        gap: 10px;
        grid-template-columns: 1fr 61mm;
        padding-bottom: 9px;
      }
      h1 { color: #071319; font-size: 27pt; letter-spacing: -0.05em; line-height: 0.95; }
      .role { color: #177d8f; font-size: 11.5pt; font-weight: 800; margin-top: 4px; }
      .summary { color: #41565d; margin-top: 7px; max-width: 118mm; }
      .contact { color: #41565d; display: grid; gap: 3px; font-size: 8.5pt; justify-items: end; text-align: right; }
      .contact strong { color: #071319; }
      .section { margin-top: 2px; }
      .section-title {
        align-items: baseline;
        border-bottom: 1px solid #c7d8d8;
        color: #071319;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        padding-bottom: 3px;
      }
      h2 { font-size: 13pt; letter-spacing: -0.03em; }
      .muted { color: #5b6d73; }
      .grid-2 { display: grid; gap: 8px; grid-template-columns: 1fr 1fr; }
      .key-skills { display: grid; gap: 5px; grid-template-columns: repeat(3, 1fr); }
      .pill {
        background: #eef8f6;
        border: 1px solid #c8e5e1;
        border-radius: 9px;
        padding: 5px 7px;
      }
      .pill strong { color: #071319; display: block; font-size: 8.4pt; line-height: 1.2; }
      .pill span { color: #587076; display: block; font-size: 7.8pt; margin-top: 2px; }
      .job {
        border-left: 2px solid #20a99a;
        break-inside: avoid;
        margin-bottom: 8px;
        padding-left: 8px;
      }
      .job-head { display: grid; gap: 5px; grid-template-columns: 1fr auto; }
      h3 { color: #071319; font-size: 11pt; line-height: 1.15; }
      h4 { color: #177d8f; font-size: 8.4pt; margin-top: 5px; text-transform: uppercase; }
      .meta { color: #587076; font-size: 8.3pt; text-align: right; white-space: nowrap; }
      .company { color: #177d8f; font-weight: 800; margin-top: 1px; }
      .skill-category { margin-bottom: 7px; }
      .skill-category h3 { color: #071319; font-size: 9.6pt; margin-bottom: 4px; }
      .skill-subgroup {
        align-items: flex-start;
        break-inside: avoid;
        display: grid;
        gap: 4px;
        grid-template-columns: 34mm 1fr;
        margin-bottom: 3px;
      }
      .skill-subgroup-label {
        background: #eef8f6;
        border: 1px solid #c8e5e1;
        border-radius: 999px;
        color: #177d8f;
        display: inline-block;
        font-size: 7.4pt;
        font-weight: 800;
        line-height: 1.1;
        padding: 3.5px 6px;
      }
      .skill-chips { display: flex; flex-wrap: wrap; gap: 3px; }
      .skill-chip {
        border: 1px solid #c7d8d8;
        border-radius: 999px;
        color: #344b52;
        display: inline-flex;
        font-size: 7.5pt;
        gap: 3px;
        line-height: 1.1;
        padding: 2.8px 5.5px;
      }
      .skill-chip small { color: #6c7e84; font-size: 7pt; }
      .skill-chip.experto { border-color: #20a99a; color: #071319; font-weight: 800; }
      .skill-chip.avanzado { border-color: #54b8d3; }
      .skill-chip.intermedio { border-color: #b5c7ca; color: #5b6d73; }
      .skill-chip.basico { border-color: #d2dcde; color: #849296; }
      .footer { border-top: 1px solid #c7d8d8; color: #708187; font-size: 7.6pt; padding-top: 5px; text-align: center; }
    </style>
  </head>
  <body>
    <main class="resume">
      <header class="header">
        <div>
          <h1>${escapeHtml(profile.name)}</h1>
          <p class="role">${escapeHtml(profile.role)} | ${escapeHtml(profile.location)}</p>
          <p class="summary">${escapeHtml(profile.summary)}</p>
        </div>
        <address class="contact">
          <strong>Contacto</strong>
          <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
          ${contactLinks.map((social) => `<a href="${escapeHtml(social.href)}">${escapeHtml(linkLabel(social.href))}</a>`).join('')}
        </address>
      </header>

      <section class="section">
        <div class="section-title"><h2>Skills clave</h2><span class="muted">Experiencia principal</span></div>
        <div class="key-skills">
          ${keySkills.map((skill) => `<div class="pill"><strong>${escapeHtml(skill.name)}</strong><span>${escapeHtml(skill.experience)} | ${escapeHtml(skill.level)}</span></div>`).join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-title"><h2>Experiencia</h2><span class="muted">Trayectoria profesional</span></div>
        ${jobs.map((job) => `<article class="job">
          <div class="job-head">
            <div>
              <h3>${escapeHtml(job.role)}</h3>
              <p class="company">${escapeHtml(job.company)}${job.detail ? ` - ${escapeHtml(job.detail)}` : ''}</p>
            </div>
            <p class="meta">${escapeHtml(job.period)}<br />${escapeHtml(job.place)}</p>
          </div>
          <div class="grid-2">
            <div><h4>Tareas</h4>${list(job.tasks)}</div>
            <div><h4>Proyectos</h4>${list(job.projects)}</div>
          </div>
        </article>`).join('')}
      </section>

      <section class="section">
        <div class="section-title"><h2>Skills técnicas</h2><span class="muted">Experiencia por tecnología</span></div>
        ${skillGroups.map(([category, groups]) => `<div class="skill-category">
          <h3>${escapeHtml(category)}</h3>
          ${groups.map(([group, skills]) => `<div class="skill-subgroup">
            <span class="skill-subgroup-label">${escapeHtml(group)}</span>
            <div class="skill-chips">
              ${skills.map((skill) => `<span class="skill-chip ${levelClass(skill.level)}" title="${escapeHtml(skill.level)}">${escapeHtml(skill.name)} <small>${escapeHtml(compactExperience(skill.experience))}</small></span>`).join('')}
            </div>
          </div>`).join('')}
        </div>`).join('')}
      </section>

      <p class="footer">Generado automáticamente desde los contenidos del portfolio · ${escapeHtml(generatedAt)}</p>
    </main>
  </body>
</html>`;
}

async function main() {
  const { keySkills, technicalSkills } = await loadData();
  const html = buildHtml(keySkills, technicalSkills);

  await mkdir(dirname(outputPath), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`Resume PDF generated: ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
