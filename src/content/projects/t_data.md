---
title: "T. Data"
description: "Plataforma IoT | Microservicios de ingesta"
company: "TwinDimension / Tesacom"
date: "Q1/2023 - Actualidad"
cover: "/assets/projects/tdata/1.jpg"
images: ["/assets/projects/tdata/1.jpg", "/assets/projects/tdata/2.jpg"]
tags: ["edge", "iot", "satellite", "microservices", "orbcomm"]
featured: false
order: 3
external: "https://tdata.tesacom.net/"
---

T.Data es una plataforma de IoT desarrollada por Twindimension para la gestión de dispositivos IoT.
Los microservicios de ingesta (Dataops) son parte importante de la plataforma, encargados de recibir, procesar (agregaciones, conversiones, enriquecimiento, etc.) y disponibilizar (unificar en un único protocolo: MQTT) la telemetría de los dispositivos IoT (diferentes protocolos de campo / obtensión de telemetría a traves de API's de terceros).

## Características
- Ingesta de datos de dispositivos de campo
    - Directo desde los dispositivos (MQTT, HTTP, DNP3, Modbus, OPC)
    - A través de API's de terceros
- Procesamiento, agregación y transformación de datos
- Configuración en caliente
- Monitoreo
- Comunicación bi-direccional (RPC)

## Empresa
- [https://www.twindimension.com/](https://www.twindimension.com/)
- [https://www.tesacom.net/](https://www.tesacom.net/)

## Tareas
- Diseño / especificación Técnicas.
- Desarrollo
    - Backoffice
        - Aplicación de configuración
        - Protocol analizer
    - Microservicios
        - Ingesta, procesamiento, enriquecimiento, etc.
        - Wizard's
- Despliegue
- Monitoreo
- Mantenimiento

## Tecnologías / skills
- Fremeworks
    - [moleculer.services](https://moleculer.services/)
    - Vite.js + React.js + Material UI
- Lenguajes
    - Javascript, Typescript, Python, .NET (c#)
- Arquitectura
    - Microservicios + ETL
- Contenedores
    - Docker, Kubernetes
- Protocolos
    - MQTT, AMQP, HTTP, DNP3, Modbus, OPCUA, IEC
- API Rest, RPC
- Bases de datos
    - MongoDB, PostgreSQL, MsSQL, MySQL
- Monitoreo
    - Grafana, Prometheus
  
## Estado del Proyecto
- En producción.
- Desarrollo de nuevas funcionalidades (microservicios) en función de las diferentes soluciones.

## Referencias
- [moleculer.services](https://moleculer.services/)
- [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load)
- [T.Data](https://www.tesacom.net/plataforma-iot)
- [T.Data](https://tdata.tesacom.net/)
