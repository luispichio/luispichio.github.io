import keySkillsCsv from './key-skills.csv?raw';
import technicalSkillsCsv from './technical-skills.csv?raw';

type KeySkill = {
  name: string;
  experience: string;
  level: string;
};

type TechnicalSkill = KeySkill & {
  category: string;
  group: string;
};

function parseCsvLine(line: string) {
  const values: string[] = [];
  let current = '';
  let quoted = false;

  for (const char of line) {
    if (char === '"') {
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
    return Object.fromEntries(keys.map((key, index) => [key, values[index] ?? '']));
  });
}

export const keySkills = parseCsv(keySkillsCsv) as KeySkill[];
export const technicalSkills = parseCsv(technicalSkillsCsv) as TechnicalSkill[];

export const skillGroups = technicalSkills.reduce<Record<string, TechnicalSkill[]>>((groups, skill) => {
  const key = `${skill.category} / ${skill.group}`;
  groups[key] = groups[key] ?? [];
  groups[key].push(skill);
  return groups;
}, {});
