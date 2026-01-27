---
layout: page
title: TT.Data - Microservicios de ingesta (Dataops)
description: >
    Microservicios de ingesta de T.Data: Plataforma de IoT de Twindimension
    Twindimension<br>
    Q1/2023 - Actualidad
img: assets/img/coming_soon.jpeg
importance: 1
category: featured
giscus_comments: false
images:
  slider: true
---

## Description
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        T.Data es una plataforma de IoT desarrollada por Twindimension para la gestión de dispositivos IoT.<br>
        Los microservicios de ingesta (Dataops) son parte importante de la plataforma, encargados de recibir, procesar (agregaciones, conversiones, enriquecimiento, etc.) y disponibilizar (unificar en un único protocolo: MQTT) la telemetría de los dispositivos IoT (diferentes protocolos de campo / obtensión de telemetría a traves de API's de terceros).
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/coming_soon.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

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
