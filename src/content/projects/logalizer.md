---
title: "Logalizer"
description: "Aplicación de escritorio de alto rendimiento para análisis de logs"
date: "Q1/2026 - Actualidad"
cover: "/assets/projects/logalizer/1.png"
images: ["/assets/projects/logalizer/1.png", "/assets/projects/logalizer/2.png", "/assets/projects/logalizer/3.png"]
tags: ["opensource", "logs", "tool", "devops"]
featured: true
category: "Open Source"
order: 1
external: "https://github.com/luispichio/Logalizer"
---

## Aplicación  
Logalizer es una aplicación de escritorio para análisis de logs de alto rendimiento. Permite abrir archivos grandes, analizar streams desde stdin o comandos externos, buscar texto rápidamente y navegar por líneas sin cargar todo el contenido en memoria.

## Características
- Apertura de múltiples fuentes en pestañas independientes.
- Ingesta multihilo para mantener la UI fluida.
- Búsqueda full-text global usando SQLite FTS5 en memoria.
- Navegación eficiente por línea mediante rowid, sin paginación por offset.
- Búsqueda local en el contenido visible con Ctrl+F, F3 y Shift+F3.
- Soporte para regex, case-sensitive y filtros persistentes.
- JSON Helper para visualizar logs JSON/JSONL en formato compacto, solo valores o filtrado por campos.
- Menú contextual para crear filtros desde selecciones, excluir texto y copiar líneas.
- Persistencia de preferencias, historial de búsquedas, filtros y archivos recientes.
- Packaging con CPack para .deb, .rpm, .tar.gz y AppImage.

## Tareas Realizadas
- Diseño de arquitectura desktop basada en Qt Widgets.
- Implementación de procesamiento multihilo con workers por fuente.
- Integración de SQLite FTS5 en memoria para búsquedas rápidas.
- Desarrollo de navegación por puntero de línea para archivos grandes.
- Implementación de UI programática sin Qt Designer.
- Persistencia de configuración con QSettings.
- Soporte para análisis de archivos, entrada estándar y salida de comandos.
- Automatización de builds y paquetes de distribución.

## Tecnologías
- C++17
- Qt6 Widgets
- SQLite FTS5
- CMake
- Ninja
- PlanCPack·GPT-5.5OpenAI·none
- AppImage
- QSettings
- Git / GitHub

## Skills Demostradas
- Desarrollo de aplicaciones desktop en C++.
- Programación multihilo con Qt.
- Diseño de interfaces eficientes para grandes volúmenes de datos.
- Optimización de consultas y navegación con SQLite FTS5.
- Arquitectura modular orientada a rendimiento.
- Gestión de estado y preferencias de usuario.
- Empaquetado y distribución de software Linux.
- Diseño de herramientas para análisis técnico y debugging.

## Estado Del Proyecto  
Proyecto funcional en desarrollo activo. Ya cuenta con apertura y análisis de logs, búsqueda FTS5, navegación eficiente, soporte JSON, configuración persistente y packaging. El roadmap incluye resaltado avanzado, exportación de resultados, tests unitarios, soporte para archivos comprimidos, workspaces y detección automática de formatos de log.