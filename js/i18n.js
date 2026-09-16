(function () {
  var STRONG = 'class="text-ink font-semibold"';
  var B = 'class="text-ink font-semibold"';

  var translations = {
    pt: {
      'nav.sobre': 'Sobre',
      'nav.experiencia': 'Experiência',
      'nav.stack': 'Stack',
      'nav.formacao': 'Formação',
      'nav.contato': 'Contato',
      'nav.cta': 'Falar comigo',

      'header.status': 'Disponível para novas oportunidades',
      'header.role': 'Software Engineer, especialista em Front-end',
      'header.location': 'São Paulo, Brasil',
      'header.ctaResume': 'Currículo em PDF',
      'header.bio': 'Arquitetura e desenvolvimento de aplicações web escaláveis: construo interfaces de alta performance, acessíveis e responsivas com <strong ' + STRONG + '>React.js</strong>, <strong ' + STRONG + '>Next.js</strong> e <strong ' + STRONG + '>TypeScript</strong>, garantindo segurança de tipos e manutenibilidade de código em todo o ciclo de desenvolvimento.',

      'sobre.heading': 'Sobre',
      'sobre.p1': 'Desenvolvedor <strong ' + STRONG + '>Full Stack</strong> especializado em tecnologias modernas de Front-End e Web, com profundo conhecimento em React, Next.js, Node.js e TypeScript. Tenho experiência na construção de aplicações web de alta performance, escaláveis e de fácil manutenção, desde a arquitetura e integração de APIs até o deploy e a otimização.',
      'sobre.p2': 'Domínio em desenvolvimento baseado em componentes, renderização no servidor (SSR), geração de sites estáticos (SSG) e design de interfaces responsivas com foco em performance e acessibilidade.',
      'sobre.p3': 'Proficiente em APIs RESTful e GraphQL, gerenciamento de estado (Redux, Zustand, Context API) e frameworks de teste (Jest, Cypress, Playwright). Tenho experiência com bancos de dados (PostgreSQL, MongoDB, Redis, Prisma) e ferramentas de DevOps (Docker, CI/CD, Vercel, AWS). Sou apaixonado por código limpo, escalabilidade, experiência do desenvolvedor e pela entrega de produtos digitais elegantes usando as tecnologias web mais recentes.',
      'sobre.p4': 'Atualmente, estou expandindo meu conhecimento em Python e no desenvolvimento de agentes de IA para aprimorar experiências de usuário e automação. Apaixonado por tecnologia, exploro constantemente formas de unir engenharia de software com as tendências emergentes de IA.',
      'sobre.p5': 'Meu conjunto de habilidades também inclui Docker, Git, CI/CD, MySQL, PostgreSQL, MongoDB, Firebase, Express.js, Astro.js, Vue.js, Tailwind CSS, SCSS, Styled-components, TDD, Jest, Testing Library, Tsup, Vite e Puppeteer, entre diversas outras ferramentas e frameworks.',
      'sobre.teacherTitle': 'Professor voluntário desde 2021',
      'sobre.teacherDesc': 'Ensino front-end para quem nunca escreveu uma linha de código, no programa Do Zero ao Um.',
      'sobre.stat1': 'anos escrevendo front-end',
      'sobre.stat2': 'empresas e squads',
      'sobre.stat3': 'anos formando devs',
      'sobre.stat4': 'certificações',

      'exp.heading': 'Experiência',
      'exp.subheading': 'Trajetória recente, da mais atual para a mais antiga.',

      'exp.act.role': 'Software Engineer',
      'exp.act.dates': 'mar 2026 - atual',
      'exp.act.b1': 'Arquitetura e desenvolvimento de aplicações web escaláveis: construção de interfaces de alta performance, acessíveis e responsivas com React.js, Next.js e TypeScript, garantindo segurança de tipos e manutenibilidade de código em todo o ciclo de desenvolvimento.',
      'exp.act.b2': 'Gerenciamento de estado avançado e lógica modular: fluxos de dados robustos com Redux e Context API para estados globais complexos e efeitos colaterais, otimizando performance e consistência dos dados.',
      'exp.act.b3': 'Implementação e orquestração de micro-frontends: arquiteturas para deploys independentes, flexibilidade tecnológica e integração fluida entre módulos desacoplados em ecossistemas de grande escala.',
      'exp.act.b4': 'Design systems e estilização moderna: interfaces consistentes e refinadas com Shadcn/ui para componentes acessíveis e Styled Components ou Tailwind CSS para estilos altamente customizáveis.',
      'exp.act.b5': 'Plataformas com IA e workflows inteligentes: contribuição em plataformas de curadoria com IA, unindo interatividade de front-end a agentes inteligentes e workflows automatizados de back-end.',
      'exp.act.b6': 'DevOps e infraestrutura escalável: ambientes containerizados com Docker e pipelines de CI/CD automatizados (GitHub Actions, Google Cloud) para entregas rápidas e de alta disponibilidade.',
      'exp.act.b7': 'Colaboração ágil e descoberta estratégica de produto: atuação em Scrum/Kanban, colaborando com designers de UX/UI e stakeholders para traduzir objetivos de negócio em requisitos técnicos.',

      'exp.flow.role': 'Software Engineer Front-end',
      'exp.flow.dates': 'abr 2024 - mar 2026',
      'exp.flow.b1': 'Desenvolvimento de aplicações web modernas, responsivas e de alta performance (Vue.js, React.js, Next.js, Astro.js, TypeScript, Tailwind CSS).',
      'exp.flow.b2': 'Colaboração próxima com designers de UX/UI e product managers para implementar funcionalidades, melhorar taxas de conversão e otimizar jornadas do cliente.',
      'exp.flow.b3': 'Integração com back-end e desenvolvimento de APIs (Node.js, Express.js, REST).',
      'exp.flow.b4': 'Infraestrutura escalável e pipelines de CI/CD (Google Cloud, Docker, GitHub Actions).',
      'exp.flow.b5': 'Participação em uma plataforma de curadoria com IA, integrando interatividade de front-end com automação de workflows e agentes inteligentes.',
      'exp.flow.b6': 'Colaboração ativa com stakeholders na descoberta e desenvolvimento de produto, contribuindo com análise de requisitos, desenho de soluções e priorização de funcionalidades.',

      'exp.farmtech.role': 'Software Engineer Front-end',
      'exp.farmtech.dates': 'jun 2023 - abr 2024',
      'exp.farmtech.b1': 'Desenvolvimento e manutenção de interfaces de e-commerce de alta performance e responsivas para a Leroy Merlin, com React.js, Next.js, Vue.js e TypeScript, garantindo experiência consistente entre web e mobile.',
      'exp.farmtech.b2': 'Colaboração próxima com designers de UX/UI e product managers para implementar funcionalidades, melhorar taxas de conversão e otimizar jornadas do cliente.',
      'exp.farmtech.b3': 'Integração de componentes de front-end com APIs REST e GraphQL, lidando com catálogos de produtos dinâmicos, carrinho de compras e fluxos de checkout.',
      'exp.farmtech.b4': 'Implementação de testes A/B, rastreamento de analytics e otimizações de performance para aumentar o engajamento do usuário e a velocidade de carregamento das páginas.',
      'exp.farmtech.b5': 'Participação em cerimônias ágeis, planejamento de sprints e code reviews, contribuindo para a melhoria contínua dos processos de desenvolvimento.',

      'exp.maitha.role': 'Senior Front-End Developer',
      'exp.maitha.dates': 'ago 2020 - jun 2023',
      'exp.maitha.b1': 'Projeto base em React para plataforma de upload de dados, na Serasa Experian.',
      'exp.maitha.b2': 'Integração com sistema legado em Next.js.',
      'exp.maitha.b3': 'Fluxo de dados com back-end em Python e Node.js.',

      'exp.mjv.role': 'Desenvolvedor ReactJS',
      'exp.mjv.dates': 'out 2019 - ago 2020',
      'exp.mjv.b1': 'Arquitetura e desenvolvimento de aplicações web escaláveis: construção de interfaces de alta performance, acessíveis e responsivas com React.js, Next.js e TypeScript, garantindo segurança de tipos e manutenibilidade de código em todo o ciclo de desenvolvimento.',
      'exp.mjv.b2': 'Gerenciamento de estado avançado e lógica modular: fluxos de dados robustos com Redux e Context API para estados globais complexos e efeitos colaterais, otimizando performance e consistência dos dados.',
      'exp.mjv.b3': 'Colaboração ágil e descoberta estratégica de produto: atuação em Scrum/Kanban, colaborando com designers de UX/UI e stakeholders para traduzir objetivos de negócio em requisitos técnicos.',

      'exp.older.summary': 'Trajetória anterior (2009 a 2019)',
      'exp.older.liq': '<b ' + B + '>Liq</b> · Technology Analyst · 2014 a 2019. Coordenação de squad full-stack e API de dados para BI.',
      'exp.older.netbiis': '<b ' + B + '>Netbiis</b> · Frontend Developer · 2013 a 2014. Projeto base em React reaproveitado por outros times.',
      'exp.older.w51': '<b ' + B + '>W51 Informática e Marketing</b> · Frontend Developer · 2012. Sites em HTML, CSS, JavaScript e jQuery.',
      'exp.older.tv1': '<b ' + B + '>Grupo TV1</b> · Frontend Developer · 2010 a 2012. Sites em HTML, CSS e JavaScript.',
      'exp.older.asteria': '<b ' + B + '>Astéria Internet Solutions</b> · Web Developer · 2009 a 2010. Primeiros passos com HTML e CSS.',

      'stack.frontend': 'Front-end',
      'stack.backend': 'Back-end & dados',
      'stack.infra': 'Infra & práticas',

      'form.heading': 'Formação',
      'form.academic': 'Formação acadêmica',
      'form.degree': 'Design Industrial, Comunicação Visual e Informação',
      'form.degreeDates': '2001 a 2006',
      'form.continuous': 'Formação contínua',
      'form.course2': 'Trilhas de Java, Spring Boot, SQL e JavaScript avançado',
      'form.course3': 'React Hooks e tópicos avançados',
      'form.certsHeading': 'Certificações em destaque',
      'form.cert2name': 'Spring Boot 3, API Rest em Java',
      'form.cert3name': 'SQL com MySQL',
      'form.cert5name': 'Advanced JavaScript I, II e III',
      'form.cert6name': 'React: componentes e integração com API',
      'form.certsMore': '+ 50 outras certificações no LinkedIn',
      'form.langPt': 'Português, nativo',
      'form.langEn': 'Inglês, intermediário',
      'form.langEs': 'Espanhol, avançado',

      'footer.heading': 'Vamos conversar sobre a próxima vaga?',
      'footer.credit': 'Construído com HTML, Tailwind CSS e JavaScript.'
    },

    en: {
      'nav.sobre': 'About',
      'nav.experiencia': 'Experience',
      'nav.stack': 'Stack',
      'nav.formacao': 'Education',
      'nav.contato': 'Contact',
      'nav.cta': 'Get in touch',

      'header.status': 'Open to new opportunities',
      'header.role': 'Software Engineer, Front-end specialist',
      'header.location': 'São Paulo, Brazil',
      'header.ctaResume': 'Resume (PDF)',
      'header.bio': 'Architecture and development of scalable web applications: I build high-performance, accessible and responsive interfaces with <strong ' + STRONG + '>React.js</strong>, <strong ' + STRONG + '>Next.js</strong> and <strong ' + STRONG + '>TypeScript</strong>, ensuring type safety and code maintainability across the entire development lifecycle.',

      'sobre.heading': 'About',
      'sobre.p1': 'I am a <strong ' + STRONG + '>Full Stack</strong> Developer specialized in modern Front-End and Web technologies, with deep expertise in React, Next.js, Node.js and TypeScript. Experienced in building high-performance, scalable and maintainable web applications, from architecture and API integration to deployment and optimization.',
      'sobre.p2': 'Skilled in component-based development, server-side rendering (SSR), static site generation (SSG) and responsive UI design focused on performance and accessibility.',
      'sobre.p3': 'Proficient in RESTful and GraphQL APIs, state management (Redux, Zustand, Context API) and testing frameworks (Jest, Cypress, Playwright). Experienced with databases (PostgreSQL, MongoDB, Redis, Prisma) and DevOps tools (Docker, CI/CD, Vercel, AWS). Passionate about clean code, scalability, developer experience and delivering elegant digital products using the latest web technologies.',
      'sobre.p4': 'Currently, I am expanding my expertise in Python and AI agent development to enhance user experiences and automation. Passionate about technology, I constantly explore ways to merge software engineering with emerging AI trends.',
      'sobre.p5': 'My skill set also includes Docker, Git, CI/CD, MySQL, PostgreSQL, MongoDB, Firebase, Express.js, Astro.js, Vue.js, Tailwind CSS, SCSS, Styled-components, TDD, Jest, Testing Library, Tsup, Vite and Puppeteer, among several other tools and frameworks.',
      'sobre.teacherTitle': 'Volunteer teacher since 2021',
      'sobre.teacherDesc': 'I teach front-end to people who have never written a line of code, through the Do Zero ao Um program.',
      'sobre.stat1': 'years writing front-end',
      'sobre.stat2': 'companies and squads',
      'sobre.stat3': 'years mentoring developers',
      'sobre.stat4': 'certifications',

      'exp.heading': 'Experience',
      'exp.subheading': 'Recent career path, from most recent to oldest.',

      'exp.act.role': 'Software Engineer',
      'exp.act.dates': 'Mar 2026 - present',
      'exp.act.b1': 'Architecture & Development of Scalable Web Applications: expertly crafting high-performance, accessible, and responsive interfaces using React.js, Next.js, and TypeScript, ensuring type safety and code maintainability across the entire development lifecycle.',
      'exp.act.b2': 'Advanced State Management & Modular Logic: implementing robust data flows using Redux and Context API to manage complex global states and side effects, optimizing performance and data consistency.',
      'exp.act.b3': 'Micro-Frontend Implementation & Orchestration: designing and maintaining Micro-Frontend architectures to enable independent deployments, technology flexibility, and seamless integration between decoupled modules in large-scale ecosystems.',
      'exp.act.b4': 'Design Systems & Modern Styling: developing polished, consistent interfaces using Shadcn/ui for accessible components and Styled Components or Tailwind CSS for highly customizable styling.',
      'exp.act.b5': 'AI-Driven Platforms & Intelligent Workflows: contributing to AI-powered curation platforms, bridging front-end interactivity with intelligent agents and automated back-end workflows.',
      'exp.act.b6': 'DevOps & Scalable Infrastructure: managing containerized environments via Docker and orchestrating automated CI/CD pipelines (GitHub Actions, Google Cloud) for fast, reliable, highly available delivery.',
      'exp.act.b7': 'Agile Collaboration & Strategic Product Discovery: operating within Scrum/Kanban, collaborating with UX/UI designers and stakeholders to translate business goals into technical requirements.',

      'exp.flow.role': 'Software Engineer Front-end',
      'exp.flow.dates': 'Apr 2024 - Mar 2026',
      'exp.flow.b1': 'Development of modern, responsive, and high-performance web applications (Vue.js, React.js, Next.js, Astro.js, TypeScript, Tailwind CSS).',
      'exp.flow.b2': 'Collaborated closely with UX/UI designers and product managers to implement features, improve conversion rates, and optimize customer journeys.',
      'exp.flow.b3': 'Backend integration and API development (Node.js, Express.js, REST).',
      'exp.flow.b4': 'Scalable infrastructure and CI/CD pipelines (Google Cloud, Docker, GitHub Actions).',
      'exp.flow.b5': 'Participated in an AI-powered curation platform, integrating front-end interactivity with workflow automation and intelligent agents.',
      'exp.flow.b6': 'Active collaboration with stakeholders in product discovery, contributing to requirement analysis, solution design, and feature prioritization.',

      'exp.farmtech.role': 'Software Engineer Front-end',
      'exp.farmtech.dates': 'Jun 2023 - Apr 2024',
      'exp.farmtech.b1': 'Developed and maintained high-performance, responsive e-commerce interfaces for Leroy Merlin using React.js, Next.js, Vue.js, and TypeScript, ensuring a seamless experience across web and mobile.',
      'exp.farmtech.b2': 'Collaborated closely with UX/UI designers and product managers to implement features, improve conversion rates, and optimize customer journeys.',
      'exp.farmtech.b3': 'Integrated front-end components with REST and GraphQL APIs, handling dynamic product catalogs, shopping cart functionality, and checkout flows.',
      'exp.farmtech.b4': 'Implemented A/B testing, analytics tracking, and performance optimizations to enhance user engagement and page load times.',
      'exp.farmtech.b5': 'Participated in Agile ceremonies, sprint planning, and code reviews, contributing to continuous improvement of development processes.',

      'exp.maitha.role': 'Senior Front-End Developer',
      'exp.maitha.dates': 'Aug 2020 - Jun 2023',
      'exp.maitha.b1': 'Base React project for a data upload platform, at Serasa Experian.',
      'exp.maitha.b2': 'Integration with a legacy Next.js system.',
      'exp.maitha.b3': 'Data flow with a Python and Node.js back-end.',

      'exp.mjv.role': 'ReactJS Developer',
      'exp.mjv.dates': 'Oct 2019 - Aug 2020',
      'exp.mjv.b1': 'Architecture & Development of Scalable Web Applications: expertly crafting high-performance, accessible, and responsive interfaces using React.js, Next.js, and TypeScript, ensuring type safety and code maintainability across the entire development lifecycle.',
      'exp.mjv.b2': 'Advanced State Management & Modular Logic: implementing robust data flows using Redux and Context API to manage complex global states and side effects, optimizing performance and data consistency.',
      'exp.mjv.b3': 'Agile Collaboration & Strategic Product Discovery: operating within Scrum/Kanban, collaborating with UX/UI designers and stakeholders to translate business goals into technical requirements.',

      'exp.older.summary': 'Earlier career (2009 to 2019)',
      'exp.older.liq': '<b ' + B + '>Liq</b> · Technology Analyst · 2014 to 2019. Coordinated a full-stack squad and built a data API for BI.',
      'exp.older.netbiis': '<b ' + B + '>Netbiis</b> · Frontend Developer · 2013 to 2014. Base React project reused by other teams.',
      'exp.older.w51': '<b ' + B + '>W51 Informática e Marketing</b> · Frontend Developer · 2012. Websites built with HTML, CSS, JavaScript and jQuery.',
      'exp.older.tv1': '<b ' + B + '>Grupo TV1</b> · Frontend Developer · 2010 to 2012. Websites built with HTML, CSS and JavaScript.',
      'exp.older.asteria': '<b ' + B + '>Astéria Internet Solutions</b> · Web Developer · 2009 to 2010. First steps with HTML and CSS.',

      'stack.frontend': 'Front-end',
      'stack.backend': 'Back-end & Data',
      'stack.infra': 'Infra & Practices',

      'form.heading': 'Education',
      'form.academic': 'Academic Education',
      'form.degree': 'Industrial Design, Visual Communication and Information',
      'form.degreeDates': '2001 to 2006',
      'form.continuous': 'Continuing Education',
      'form.course2': 'Java, Spring Boot, SQL and advanced JavaScript tracks',
      'form.course3': 'React Hooks and advanced topics',
      'form.certsHeading': 'Highlighted Certifications',
      'form.cert2name': 'Spring Boot 3, REST API in Java',
      'form.cert3name': 'SQL with MySQL',
      'form.cert5name': 'Advanced JavaScript I, II and III',
      'form.cert6name': 'React: components and API integration',
      'form.certsMore': '+ 50 more certifications on LinkedIn',
      'form.langPt': 'Portuguese, native',
      'form.langEn': 'English, intermediate',
      'form.langEs': 'Spanish, advanced',

      'footer.heading': "Let's talk about your next opportunity?",
      'footer.credit': 'Built with HTML, Tailwind CSS and JavaScript.'
    },

    es: {
      'nav.sobre': 'Sobre mí',
      'nav.experiencia': 'Experiencia',
      'nav.stack': 'Stack',
      'nav.formacao': 'Formación',
      'nav.contato': 'Contacto',
      'nav.cta': 'Hablemos',

      'header.status': 'Disponible para nuevas oportunidades',
      'header.role': 'Software Engineer, especialista en Front-end',
      'header.location': 'São Paulo, Brasil',
      'header.ctaResume': 'Currículum (PDF)',
      'header.bio': 'Arquitectura y desarrollo de aplicaciones web escalables: construyo interfaces de alto rendimiento, accesibles y responsivas con <strong ' + STRONG + '>React.js</strong>, <strong ' + STRONG + '>Next.js</strong> y <strong ' + STRONG + '>TypeScript</strong>, garantizando la seguridad de tipos y la mantenibilidad del código en todo el ciclo de desarrollo.',

      'sobre.heading': 'Sobre mí',
      'sobre.p1': 'Desarrollador <strong ' + STRONG + '>Full Stack</strong> especializado en tecnologías modernas de Front-End y Web, con profundo conocimiento en React, Next.js, Node.js y TypeScript. Tengo experiencia en la construcción de aplicaciones web de alto rendimiento, escalables y de fácil mantenimiento, desde la arquitectura y la integración de APIs hasta el despliegue y la optimización.',
      'sobre.p2': 'Dominio del desarrollo basado en componentes, renderizado en el servidor (SSR), generación de sitios estáticos (SSG) y diseño de interfaces responsivas centrado en el rendimiento y la accesibilidad.',
      'sobre.p3': 'Competente en APIs RESTful y GraphQL, gestión de estado (Redux, Zustand, Context API) y frameworks de testing (Jest, Cypress, Playwright). Tengo experiencia con bases de datos (PostgreSQL, MongoDB, Redis, Prisma) y herramientas de DevOps (Docker, CI/CD, Vercel, AWS). Apasionado por el código limpio, la escalabilidad, la experiencia del desarrollador y la entrega de productos digitales elegantes usando las tecnologías web más recientes.',
      'sobre.p4': 'Actualmente, estoy ampliando mis conocimientos en Python y en el desarrollo de agentes de IA para mejorar la experiencia de usuario y la automatización. Apasionado por la tecnología, exploro constantemente formas de combinar la ingeniería de software con las tendencias emergentes de IA.',
      'sobre.p5': 'Mi conjunto de habilidades también incluye Docker, Git, CI/CD, MySQL, PostgreSQL, MongoDB, Firebase, Express.js, Astro.js, Vue.js, Tailwind CSS, SCSS, Styled-components, TDD, Jest, Testing Library, Tsup, Vite y Puppeteer, entre muchas otras herramientas y frameworks.',
      'sobre.teacherTitle': 'Profesor voluntario desde 2021',
      'sobre.teacherDesc': 'Enseño front-end a quienes nunca escribieron una línea de código, en el programa Do Zero ao Um.',
      'sobre.stat1': 'años escribiendo front-end',
      'sobre.stat2': 'empresas y equipos',
      'sobre.stat3': 'años formando desarrolladores',
      'sobre.stat4': 'certificaciones',

      'exp.heading': 'Experiencia',
      'exp.subheading': 'Trayectoria reciente, de la más actual a la más antigua.',

      'exp.act.role': 'Software Engineer',
      'exp.act.dates': 'mar 2026 - actualidad',
      'exp.act.b1': 'Arquitectura y desarrollo de aplicaciones web escalables: construcción de interfaces de alto rendimiento, accesibles y responsivas con React.js, Next.js y TypeScript, garantizando la seguridad de tipos y la mantenibilidad del código en todo el ciclo de desarrollo.',
      'exp.act.b2': 'Gestión de estado avanzada y lógica modular: flujos de datos robustos con Redux y Context API para estados globales complejos y efectos colaterales, optimizando el rendimiento y la consistencia de los datos.',
      'exp.act.b3': 'Implementación y orquestación de micro-frontends: arquitecturas para despliegues independientes, flexibilidad tecnológica e integración fluida entre módulos desacoplados en ecosistemas de gran escala.',
      'exp.act.b4': 'Design systems y estilización moderna: interfaces consistentes y refinadas con Shadcn/ui para componentes accesibles y Styled Components o Tailwind CSS para estilos altamente personalizables.',
      'exp.act.b5': 'Plataformas con IA y workflows inteligentes: contribución en plataformas de curaduría con IA, uniendo la interactividad de front-end con agentes inteligentes y workflows automatizados de back-end.',
      'exp.act.b6': 'DevOps e infraestructura escalable: entornos containerizados con Docker y pipelines de CI/CD automatizados (GitHub Actions, Google Cloud) para entregas rápidas y de alta disponibilidad.',
      'exp.act.b7': 'Colaboración ágil y descubrimiento estratégico de producto: actuación en Scrum/Kanban, colaborando con diseñadores de UX/UI y stakeholders para traducir objetivos de negocio en requisitos técnicos.',

      'exp.flow.role': 'Software Engineer Front-end',
      'exp.flow.dates': 'abr 2024 - mar 2026',
      'exp.flow.b1': 'Desarrollo de aplicaciones web modernas, responsivas y de alto rendimiento (Vue.js, React.js, Next.js, Astro.js, TypeScript, Tailwind CSS).',
      'exp.flow.b2': 'Colaboración estrecha con diseñadores de UX/UI y product managers para implementar funcionalidades, mejorar las tasas de conversión y optimizar los recorridos del cliente.',
      'exp.flow.b3': 'Integración con el back-end y desarrollo de APIs (Node.js, Express.js, REST).',
      'exp.flow.b4': 'Infraestructura escalable y pipelines de CI/CD (Google Cloud, Docker, GitHub Actions).',
      'exp.flow.b5': 'Participación en una plataforma de curaduría con IA, integrando la interactividad de front-end con la automatización de workflows y agentes inteligentes.',
      'exp.flow.b6': 'Colaboración activa con stakeholders en el descubrimiento de producto, contribuyendo con análisis de requisitos, diseño de soluciones y priorización de funcionalidades.',

      'exp.farmtech.role': 'Software Engineer Front-end',
      'exp.farmtech.dates': 'jun 2023 - abr 2024',
      'exp.farmtech.b1': 'Desarrollo y mantenimiento de interfaces de e-commerce de alto rendimiento y responsivas para Leroy Merlin, con React.js, Next.js, Vue.js y TypeScript, garantizando una experiencia coherente entre web y móvil.',
      'exp.farmtech.b2': 'Colaboración estrecha con diseñadores de UX/UI y product managers para implementar funcionalidades, mejorar las tasas de conversión y optimizar los recorridos del cliente.',
      'exp.farmtech.b3': 'Integración de componentes de front-end con APIs REST y GraphQL, gestionando catálogos de productos dinámicos, carrito de compras y flujos de checkout.',
      'exp.farmtech.b4': 'Implementación de pruebas A/B, seguimiento de analíticas y optimizaciones de rendimiento para aumentar el engagement del usuario y la velocidad de carga de las páginas.',
      'exp.farmtech.b5': 'Participación en ceremonias ágiles, planificación de sprints y code reviews, contribuyendo a la mejora continua de los procesos de desarrollo.',

      'exp.maitha.role': 'Senior Front-End Developer',
      'exp.maitha.dates': 'ago 2020 - jun 2023',
      'exp.maitha.b1': 'Proyecto base en React para una plataforma de carga de datos, en Serasa Experian.',
      'exp.maitha.b2': 'Integración con un sistema legado en Next.js.',
      'exp.maitha.b3': 'Flujo de datos con back-end en Python y Node.js.',

      'exp.mjv.role': 'Desarrollador ReactJS',
      'exp.mjv.dates': 'oct 2019 - ago 2020',
      'exp.mjv.b1': 'Arquitectura y desarrollo de aplicaciones web escalables: construcción de interfaces de alto rendimiento, accesibles y responsivas con React.js, Next.js y TypeScript, garantizando la seguridad de tipos y la mantenibilidad del código en todo el ciclo de desarrollo.',
      'exp.mjv.b2': 'Gestión de estado avanzada y lógica modular: flujos de datos robustos con Redux y Context API para estados globales complejos y efectos colaterales, optimizando el rendimiento y la consistencia de los datos.',
      'exp.mjv.b3': 'Colaboración ágil y descubrimiento estratégico de producto: actuación en Scrum/Kanban, colaborando con diseñadores de UX/UI y stakeholders para traducir objetivos de negocio en requisitos técnicos.',

      'exp.older.summary': 'Trayectoria anterior (2009 a 2019)',
      'exp.older.liq': '<b ' + B + '>Liq</b> · Analista de Tecnología · 2014 a 2019. Coordinación de squad full-stack y API de datos para BI.',
      'exp.older.netbiis': '<b ' + B + '>Netbiis</b> · Frontend Developer · 2013 a 2014. Proyecto base en React reutilizado por otros equipos.',
      'exp.older.w51': '<b ' + B + '>W51 Informática e Marketing</b> · Frontend Developer · 2012. Sitios web en HTML, CSS, JavaScript y jQuery.',
      'exp.older.tv1': '<b ' + B + '>Grupo TV1</b> · Frontend Developer · 2010 a 2012. Sitios web en HTML, CSS y JavaScript.',
      'exp.older.asteria': '<b ' + B + '>Astéria Internet Solutions</b> · Web Developer · 2009 a 2010. Primeros pasos con HTML y CSS.',

      'stack.frontend': 'Front-end',
      'stack.backend': 'Back-end y Datos',
      'stack.infra': 'Infra y Prácticas',

      'form.heading': 'Formación',
      'form.academic': 'Formación académica',
      'form.degree': 'Diseño Industrial, Comunicación Visual e Información',
      'form.degreeDates': '2001 a 2006',
      'form.continuous': 'Formación continua',
      'form.course2': 'Rutas de Java, Spring Boot, SQL y JavaScript avanzado',
      'form.course3': 'React Hooks y temas avanzados',
      'form.certsHeading': 'Certificaciones destacadas',
      'form.cert2name': 'Spring Boot 3, API Rest en Java',
      'form.cert3name': 'SQL con MySQL',
      'form.cert5name': 'Advanced JavaScript I, II y III',
      'form.cert6name': 'React: componentes e integración con API',
      'form.certsMore': '+ 50 certificaciones más en LinkedIn',
      'form.langPt': 'Portugués, nativo',
      'form.langEn': 'Inglés, intermedio',
      'form.langEs': 'Español, avanzado',

      'footer.heading': '¿Hablamos sobre tu próxima oportunidad?',
      'footer.credit': 'Construido con HTML, Tailwind CSS y JavaScript.'
    }
  };

  var htmlLang = { pt: 'pt-BR', en: 'en', es: 'es' };
  var STORAGE_KEY = 'cv-lang';

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.documentElement.setAttribute('lang', htmlLang[lang] || 'pt-BR');

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('ring-white', active);
      btn.classList.toggle('ring-transparent', !active);
      btn.classList.toggle('scale-110', active);
      btn.classList.toggle('shadow-strong', active);
      btn.classList.toggle('opacity-60', !active);
      btn.classList.toggle('opacity-100', active);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLanguage(saved && translations[saved] ? saved : 'pt');
})();
