export const profile = {
  name: 'Luis Pichio',
  role: 'Desarrollador Fullstack IoT',
  location: '25 de Mayo, Buenos Aires, Argentina',
  email: 'luispichio@gmail.com',
  image: '/assets/img/me.jpeg',
  resume: '/assets/pdf/luis-pichio-resume.pdf',
  intro: 'Diseño, desarrollo y fabrico cosas.',
  summary:
    'Desarrollador electrónico y programador con más de 20 años de experiencia. Me especializo en plataformas IoT/IIoT, hardware de instrumentación, firmware, control y adquisición de datos para la industria.',
  focusAreas: [
    {
      title: 'Hardware + firmware',
      summary: 'Diseño electrónico, bring-up, firmware embebido, RTOS, buses de campo y producción.',
    },
    {
      title: 'IoT / IIoT',
      summary: 'Telemetría, edge computing, conectividad satelital/celular y protocolos industriales.',
    },
    {
      title: 'Ingesta / data-ops',
      summary: 'Microservicios, APIs, back/frontend, monitoreo, herramientas de diagnóstico y despliegue.',
    },
    {
      title: 'Instrumentación',
      summary: 'Medición, control, adquisición de datos, sensores, ensayos y bancos de calibración.',
    },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luispichio', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/luispichio', icon: 'github' },
    { label: 'Blog', href: 'https://luispichio.blogspot.com', icon: 'blog' },
    { label: 'Email', href: 'mailto:luispichio@gmail.com', icon: 'email' },
    { label: 'LW6DIO', href: 'http://qsl.net/lw6dio', icon: 'radio' },
  ],
};

export const jobs = [
  {
    company: 'TwinDimension',
    detail: 'Unidad de negocios de Tesacom S.A.',
    role: 'Desarrollador Fullstack IoT',
    url: 'https://www.twindimension.com/',
    period: '01/2023 - Actualidad',
    place: 'Remoto | Buenos Aires, Argentina',
    tasks: [
      'Diseño y desarrollo de microservicios de ingesta entre dispositivos de borde y bases de datos.',
      'Diseño y desarrollo de soluciones para terminales Orbcomm IDP / ST.',
      'Diseño y desarrollo de hardware y firmware IoT.',
      'Soporte a delivery, preventa, capacitaciones y monitoreo de soluciones desplegadas.',
    ],
    projects: [
      'T.Platform: plataforma IIoT',
      'Microservicios de ingesta para reconectadores DNP3, Modbus y OPC-UA',
      'Processing Service',
      'T.Wizard',
      'Protocol Analyzer',
      'Beacon BLE',
    ],
  },
  {
    company: 'Tesacom S.A.',
    role: 'Líder de área | Microservicios de ingesta | Software de embebidos',
    url: 'https://www.tesacom.net/',
    period: '11/2020 - 01/2023',
    place: 'Remoto | Buenos Aires, Argentina',
    tasks: [
      'Arquitectura y desarrollo de microservicios de ingesta.',
      'Soluciones de borde para conectividad satelital/celular.',
      'Soporte técnico a implementaciones, preventa y capacitaciones.',
    ],
    projects: ['Reconectadores', 'Processing Service', 'Herramientas de diagnóstico y configuración'],
  },
  {
    company: 'Sistemas Industriales S.A.',
    role: 'Líder de área | Diseño electrónico',
    url: 'https://sistemasindustriales.com',
    period: '05/2003 - 11/2020',
    place: 'La Plata, Buenos Aires, Argentina',
    tasks: [
      'Diseño, especificación y producción de hardware/software.',
      'Desarrollo de instrumentos de medición e instrumentación industrial.',
      'Capacitación y soporte técnico.',
    ],
    projects: [
      'Caudalímetros electromagnéticos, ultrasónicos y coriolis',
      'Manómetros y transmisores de presión',
      'Medidor de porcentaje de crudo',
      'VANTAR',
      'EuroCerco',
      'Plataforma IoT industrial',
    ],
  },
  {
    company: 'L2M Ingeniería',
    role: 'Socio responsable',
    url: 'http://l2m-ingenieria.com.ar',
    period: '04/2008 - 01/2013',
    place: 'La Plata, Buenos Aires, Argentina',
    tasks: ['Diseño, especificación y producción de hardware/software.'],
    projects: ['Fuentes switching', 'Tracking satelital', 'Telesupervisión GPRS', 'Conversores de medio'],
  },
];
