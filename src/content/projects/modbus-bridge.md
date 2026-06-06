---
title: "Modbus Bridge"
description: "Firmware embebido para WIZnet/RP2040 que implementa una pasarela configurable entre Modbus TCP y Modbus RTU."
company: "TwinDimension"
date: "Q2/2026"
cover: "/assets/projects/modbus-bridge/4.png"
images: ["/assets/projects/modbus-bridge/1.png", "/assets/projects/modbus-bridge/2.png", "/assets/projects/modbus-bridge/3.png", "/assets/projects/modbus-bridge/4.png"]
tags: ["firmware", "modbus", "industrial", "rp2040", "ethernet"]
featured: false
category: "Nuevo"
order: 1
---

## Description

ModbusBridge es un firmware embebido para placas WIZnet/RP2040 que implementa un bridge configurable entre Modbus TCP y Modbus RTU, orientado a integración industrial, diagnóstico de comunicaciones serie y operación remota por Ethernet.
El proyecto está desarrollado sobre Arduino Core para RP2040 y utiliza Ethernet cableada mediante W55RP20lwIP. La configuración se administra desde shell serie, shell TCP o comandos AT, con persistencia en Flash y validación por CRC.

Características Principales
- Bridge Modbus TCP <-> Modbus RTU.
- Modos de operación:
- Clientes Modbus TCP consultando esclavos Modbus RTU.
- Maestro Modbus RTU consultando un esclavo Modbus TCP remoto.
- Conversión correcta entre tramas Modbus TCP MBAP y Modbus RTU con CRC.
- Preservación de Transaction ID, Unit ID, función y exception codes.
- Timeouts configurables y manejo de errores Modbus.
- Bridge RAW TCP/Serial para túneles transparentes o diagnóstico.
- Shell serie por SerialUSB.
- Shell TCP configurable y protegido por password.
- Comandos AT por UART dedicado o compartido con bridge.
- Configuración persistente en Flash con CRC16 y slot backup.
- DHCP o IP fija configurable.
- Logs TCP con formato estilo Zephyr:
- Aplicación dinámica de configuración por servicio cuando es posible.
- Cambios Ethernet persistidos y aplicados tras reinicio.
Tecnologías Utilizadas

Módulos Del Firmware
- ModbusBridge
- Implementa el bridge Modbus TCP/RTU.
- Gestiona clientes TCP, timeouts, conversión MBAP/RTU y CRC RTU.
- RawBridge
- Túnel TCP/Serial configurable.
- Agrupa bytes seriales por gap temporal o cantidad mínima antes de enviar por TCP.
- AppConfig
- Configuración persistente versionada.
- Validación con CRC16.
- Defaults automáticos y backup en EEPROM.
- LogService
- Servidor TCP de logs.
- Mirror opcional por USB serial.
- Formato estructurado estilo Zephyr.
- Shell / TCPShell
- Administración local/remota del dispositivo.
- Aliases legibles para comandos cortos.
- Password configurable para shell TCP.
- ATCommandService
- Comandos AT por UART.
- Puede operar en modo dedicado o compartido con bridge mediante escape +++.

Capacidades De Configuración
El firmware permite configurar, entre otros:
- Puertos TCP de servicios.
- DHCP o IP manual.
- Baudrate de puertos serie.
- UART usado por cada bridge.
- Modo Modbus.
- Host/puerto remoto TCP.
- Timeouts Modbus RTU.
- Parámetros de agrupamiento RAW:
- raw.inter_frame_gap_ms
- raw.flush_bytes
- Password del shell TCP mediante hash persistido.

## Empresa
- [https://www.twindimension.com/](https://www.twindimension.com/)
- [https://www.tesacom.net/](https://www.tesacom.net/)

## Teareas
- Desarrollo de firmware modular en C++.
- Integración Ethernet cableada en microcontroladores RP2040.
- Manejo de protocolos industriales Modbus TCP/RTU.
- Diseño de configuración persistente robusta con versionado y CRC.
- Arquitectura no bloqueante para multiplexar servicios TCP, UART, shell y logs.
- Herramientas de administración remota embebida.
- Build reproducible con Arduino CLI.
- Separación clara entre servicios, configuración, logging y lógica de protocolo.

## Tecnologías / skills
- C/C++ embebido.
- Arduino IDE / Arduino CLI.
- Core earlephilhower/arduino-pico.
- RP2040 / WIZnet W55RP20 compatible.
- W55RP20lwIP para Ethernet.
- EEPROM para persistencia.
- CRC de Rob Tillaart para CRC16.
- Commander-API para parser de comandos.
- Shellminator para shell interactivo serie/TCP.
- Git + scripts de build/release.

## Estado del Proyecto
- Desarrollo finalizado

### Referencias
