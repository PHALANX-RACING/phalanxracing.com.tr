export const teamDesc = {
  'Yönetim': 'Takım koordinasyonu, planlama, sponsor ve dış ilişkiler.',
  'Aero-Kompozit': 'Aerodinamik verimlilik ve kompozit gövde tasarımı/üretimi.',
  'Elektronik': 'Araç kontrol sistemi, haberleşme, yazılım, telemetri ve emniyet devreleri.',
  'Şasi-Süspansiyon': 'Şasi, süspansiyon, fren, direksiyon ve mekanik entegrasyon.',
  'Powertrain': 'Motor, motor sürücüsü, batarya, güç aktarımı ve termal yönetim.',
  'Medya': 'Sosyal medya, tanıtım, görsel kimlik ve sponsor görünürlüğü.',
};

export const groups = [
  { name: 'Yönetim', members: [
    { n: 'Ege Şeker', r: 'Baş Mühendis', d: 'Makine Müh. (İng.) 4. Sınıf', lead: true },
    { n: 'Ebru Tokatlı', r: 'Takım Direktörü', d: 'Makine Müh. (İng.) 2. Sınıf', lead: true },
    { n: 'Ayberk Şahin', r: 'Kaptan', d: 'Makine Müh. (İng.) 2. Sınıf', lead: true },
  ]},
  { name: 'Aero-Kompozit', members: [
    { n: 'Ayberk Şahin', r: 'Kaptan · Lider', d: 'Makine Müh. (İng.) 2. Sınıf', lead: true },
    { n: 'Berra Yıldırım', r: 'Üye', d: 'Makine Müh. 3. Sınıf' },
    { n: 'Arda Ayden', r: 'Üye', d: 'Kimya Müh. 1. Sınıf' },
  ]},
  { name: 'Elektronik', members: [
    { n: 'Burak Furkan Koç', r: 'Lider', d: 'Makine Müh. (İng.) 2. Sınıf', lead: true },
    { n: 'Muhammet Mert Yıldız', r: 'Üye', d: 'Yazılım Müh. 2. Sınıf' },
    { n: 'Hasan Hacıahmetoğlu', r: 'Üye', d: 'Bilgisayar Müh. 2. Sınıf' },
    { n: 'Mehmet Fuat Mat', r: 'Üye', d: 'Makine Müh. 2. Sınıf' },
    { n: 'Ebru Tokatlı', r: 'EMC / İzolasyon', d: 'Makine Müh. (İng.) 2. Sınıf' },
  ]},
  { name: 'Şasi-Süspansiyon', members: [
    { n: 'İsmail Öztürk', r: 'Lider', d: 'End. Tasarım Müh. 3 · Makine Müh. ÇAP', lead: true },
    { n: 'Rana Şenkardeşler', r: 'Üye', d: 'Makine Müh. (İng.) 2. Sınıf' },
    { n: 'Miraç Taha Aynacı', r: 'Üye', d: 'Makine Müh. (Tr.) 2. Sınıf' },
    { n: 'Kaan Koç', r: 'Üye', d: 'Mekatronik Müh. 3. Sınıf' },
    { n: 'Yusuf Kalender', r: 'Üye', d: 'Kimya Müh. 2. Sınıf' },
  ]},
  { name: 'Powertrain', members: [
    { n: 'Ebrar Berrak Elmalı', r: 'Lider', d: 'Mekatronik Müh. 1. Sınıf', lead: true },
    { n: 'Ferhat Karakuş', r: 'Üye', d: 'Mekatronik Müh. 2. Sınıf' },
    { n: 'Işıl Yaman', r: 'Üye', d: 'Kimya Müh. 2. Sınıf' },
    { n: 'Murat Adsan', r: 'Üye', d: 'Mekatronik Müh. 3. Sınıf' },
    { n: 'Mustafa Deniz Abaylamak', r: 'Üye', d: 'Makine Müh. (Tr.) 2. Sınıf' },
  ]},
  { name: 'Medya', members: [
    { n: 'Muhammed Yiğit Akgün', r: 'Medya & Tanıtım Lideri', d: 'End. Tasarım Müh. 2. Sınıf', lead: true },
  ]},
];

// --- English translations for team metadata ---
export const teamDescEn = {
  'Y\u00f6netim': 'Team coordination, planning, sponsors and external relations.',
  'Aero-Kompozit': 'Aerodynamic efficiency and composite body design/manufacturing.',
  'Elektronik': 'Vehicle control system, communication, software, telemetry and safety circuits.',
  '\u015easi-S\u00fcspansiyon': 'Chassis, suspension, brakes, steering and mechanical integration.',
  'Powertrain': 'Motor, motor driver, battery, power transmission and thermal management.',
  'Medya': 'Social media, promotion, visual identity and sponsor visibility.',
};

export const groupNameEn = {
  'Y\u00f6netim': 'Management',
  'Aero-Kompozit': 'Aero-Composite',
  'Elektronik': 'Electronics',
  '\u015easi-S\u00fcspansiyon': 'Chassis-Suspension',
  'Powertrain': 'Powertrain',
  'Medya': 'Media',
};

export const roleEn = {
  'Ba\u015f M\u00fchendis': 'Chief Engineer',
  'Tak\u0131m Direkt\u00f6r\u00fc': 'Team Director',
  'Kaptan \u00b7 Lider': 'Captain \u00b7 Lead',
  'Kaptan': 'Captain',
  '\u00dcye': 'Member',
  'Lider': 'Lead',
  'EMC / \u0130zolasyon': 'EMC / Isolation',
  'Medya & Tan\u0131t\u0131m Lideri': 'Media & PR Lead',
};

// Translate a department string like "Makine M\u00fch. (\u0130ng.) 2. S\u0131n\u0131f" to English.
export function deptEn(d) {
  return d
    .replace('Makine M\u00fch.', 'Mechanical Eng.')
    .replace('Kimya M\u00fch.', 'Chemical Eng.')
    .replace('Yaz\u0131l\u0131m M\u00fch.', 'Software Eng.')
    .replace('Bilgisayar M\u00fch.', 'Computer Eng.')
    .replace('Mekatronik M\u00fch.', 'Mechatronics Eng.')
    .replace('End. Tasar\u0131m M\u00fch.', 'Industrial Design Eng.')
    .replace('(\u0130ng.)', '(EN)')
    .replace('(Tr.)', '(TR)')
    .replace('\u00c7AP', 'Double Major')
    .replace(/(\d)\.\s*S\u0131n\u0131f/g, 'Year $1')
    .replace(/Eng\.\s(\d)(\s\u00b7)/g, 'Eng. Year $1$2');
}

// Group name in the requested language.
export const groupName = (name, lang) => (lang === 'en' ? (groupNameEn[name] ?? name) : name);
// Role in the requested language.
export const roleName = (role, lang) => (lang === 'en' ? (roleEn[role] ?? role) : role);
// Department in the requested language.
export const deptName = (d, lang) => (lang === 'en' ? deptEn(d) : d);
// Team description in the requested language.
export const teamDescLang = (name, lang) => (lang === 'en' ? (teamDescEn[name] ?? teamDesc[name]) : teamDesc[name]);

export const slug = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replaceAll('ı', 'i').replaceAll('ç', 'c').replaceAll('ğ', 'g')
  .replaceAll('ö', 'o').replaceAll('ş', 's').replaceAll('ü', 'u')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const initials = (s) => s.split(' ').filter(Boolean).slice(0, 2)
  .map((w) => w[0]).join('').toLocaleUpperCase('tr');

export function people() {
  const map = new Map();
  for (const g of groups) {
    for (const m of g.members) {
      const s = slug(m.n);
      if (!map.has(s)) map.set(s, { name: m.n, dept: m.d, slug: s, roles: [] });
      map.get(s).roles.push({ team: g.name, role: m.r, lead: !!m.lead });
    }
  }
  return [...map.values()];
}