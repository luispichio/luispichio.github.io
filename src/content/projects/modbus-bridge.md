---
title: "Modbus Bridge"
description: "Firmware embebido para WIZnet/RP2040 que implementa una pasarela configurable entre Modbus TCP y Modbus RTU."
company: "TwinDimension"
date: "Q2/2026"
tags: ["firmware", "modbus", "industrial", "rp2040", "ethernet"]
featured: false
order: 1
---

Modbus Bridge esta orientado a integracion industrial, diagnostico de comunicaciones serie y operacion remota por Ethernet.

## Caracteristicas

- Bridge Modbus TCP / RTU.
- Modo cliente TCP consultando esclavos RTU.
- Modo maestro RTU consultando un esclavo TCP remoto.
- Conversion entre tramas Modbus TCP MBAP y Modbus RTU con CRC.
- Shell serie, shell TCP protegido por password y comandos AT.
- Configuracion persistente en EEPROM con CRC16 y backup.
- Logs TCP con formato estructurado.

## Tecnologias

- C / C++ embebido.
- Arduino Core para RP2040.
- WIZnet W55RP20 / Ethernet cableada.
- Modbus TCP / RTU.
