---
title: "Arduino Remote Display"
description: "Librería liviana para enviar comandos gráficos desde sketches Arduino a un viewer remoto por TCP o Serial."
company: "Personal"
date: "2026"
cover: "/assets/img/coming_soon.jpeg"
tags: ["arduino", "firmware", "cpp", "python", "tcp", "serial", "display", "open-source"]
featured: false
category: "Open Source"
order: 2
external: "https://github.com/luispichio/ArduinoRemoteDisplay"
---

## Description

Arduino Remote Display es una librería liviana para sketches Arduino que permite enviar comandos gráficos a un viewer remoto en la computadora, usando TCP o Serial como transporte.

El objetivo del proyecto es facilitar desarrollo, debugging visual, prototipado de interfaces, demos y pruebas de código orientado a displays sin depender siempre de un display físico conectado.

## Características

- API core de display para sketches Arduino.
- Transporte por TCP y Serial.
- Viewer de escritorio implementado en Python con pygame.
- Soporte para salida RGB565 y monocromática.
- Wrapper opcional estilo Adafruit_GFX.
- Ejemplos para comunicación Serial, TCP/WiFi y demos gráficas.
- Protocolo binario documentado para separar la lógica del display remoto del viewer.

## Tecnologías / skills

- C / C++ embebido.
- Arduino IDE / Arduino CLI.
- Python.
- pygame.
- TCP/IP.
- Comunicación Serial.
- Protocolos binarios livianos.
- Diseño de APIs para librerías Arduino.

## Estado del Proyecto

- Desarrollo temprano.
- Protocolo core, transporte TCP, transporte Serial, viewer Python y wrapper básico estilo Adafruit_GFX disponibles.
- API y protocolo sujetos a cambios antes de una versión estable `1.0.0`.

### Referencias

- [Repositorio en GitHub](https://github.com/luispichio/ArduinoRemoteDisplay)
