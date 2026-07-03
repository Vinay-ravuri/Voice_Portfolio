import React from 'react';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'databases' | 'aiml';
  description: string;
  proficiency: string;
  experience: string;
  svgPath: string; // We will store inline SVG paths or custom rendering function
}

export const skillsData: Skill[] = [
  // FRONTEND
  {
    id: 'html',
    name: 'HTML5',
    category: 'frontend',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Semantic markup, accessibility standards (WCAG), and search engine optimization. Coded semantic frameworks for highly responsive digital products.',
    svgPath: 'HTML5'
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'frontend',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Advanced responsive design using modern layout strategies (Grid, Flexbox), custom variable styling systems, transitions, and keyframe animations.',
    svgPath: 'CSS3'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Core ES6+ scripting, asynchronous programming, promises, DOM manipulation, functional paradigms, and data structures representation.',
    svgPath: 'JavaScript'
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    proficiency: 'Expert',
    experience: '2+ Years',
    description: 'Component lifecycles, hooks architecture, context-driven state management, server integration, and performance optimization using memoization.',
    svgPath: 'React'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    proficiency: 'Advanced',
    experience: '1+ Years',
    description: 'App Router architecture, Server Actions, Incremental Static Regeneration (ISR), static site generation, and server-side rendering patterns.',
    svgPath: 'Nextjs'
  },

  // BACKEND
  {
    id: 'java',
    name: 'Java',
    category: 'backend',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Object-Oriented Programming (OOP) principles, multithreading, collections framework, memory management, and enterprise-grade software development.',
    svgPath: 'Java'
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'backend',
    proficiency: 'Advanced',
    experience: '2+ Years',
    description: 'Microservice configurations, Spring Security, dependency injection, REST Controllers, JPA integrations, and automated build scaffolding.',
    svgPath: 'SpringBoot'
  },
  {
    id: 'restapi',
    name: 'REST APIs',
    category: 'backend',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Designing modular API systems, payload structures, endpoint security, versioning standards, pagination systems, and Swagger documentation.',
    svgPath: 'RestAPI'
  },
  {
    id: 'hibernate',
    name: 'Hibernate ORM',
    category: 'backend',
    proficiency: 'Advanced',
    experience: '2+ Years',
    description: 'Object-relational mapping, transaction controls, entity associations, HQL queries, caching layers, and database optimization indices.',
    svgPath: 'Hibernate'
  },
  {
    id: 'jsp',
    name: 'JSP & Servlets',
    category: 'backend',
    proficiency: 'Intermediate',
    experience: '2+ Years',
    description: 'Java Server Pages, session handling, web server requests filtration, dynamic content serving, and MVC MVC structures implementation.',
    svgPath: 'JSP'
  },

  // DATABASES
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    proficiency: 'Advanced',
    experience: '2+ Years',
    description: 'Relational data modeling, ACID transactions, subqueries, index tuning, triggers, complex multi-table joins, and query profile analyzer.',
    svgPath: 'MySQL'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    proficiency: 'Advanced',
    experience: '1.5+ Years',
    description: 'NoSQL document design, aggregation pipelines, cursor indexing, geospatial queries, replica set cluster configurations, and model validation rules.',
    svgPath: 'MongoDB'
  },

  // AI & ML
  {
    id: 'python',
    name: 'Python',
    category: 'aiml',
    proficiency: 'Expert',
    experience: '3+ Years',
    description: 'Scientific computing scripts, data preprocessing (Pandas, NumPy), data visualization (Matplotlib, Seaborn), and modular coding structures.',
    svgPath: 'Python'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    category: 'aiml',
    proficiency: 'Advanced',
    experience: '2+ Years',
    description: 'Building pipeline architectures (Scikit-Learn, TensorFlow), fraud classifications, SMS spam filtering, model evaluation metrics, and hyperparameter tuning.',
    svgPath: 'ML'
  },
  {
    id: 'dsa',
    name: 'DSA',
    category: 'aiml',
    proficiency: 'Advanced',
    experience: '3+ Years',
    description: 'Complex structures: Graphs, Trees, Dynamic Programming algorithms, time and space complexity evaluations, and rigorous logic troubleshooting.',
    svgPath: 'DSA'
  }
];
