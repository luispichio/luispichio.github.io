---
title: "PSI | Presence Signal Inhibitor"
description: "Aplicación de Android (BLE) para inhibir señal de presencia"
company: "TwinDimension"
date: "Q2/2026"
cover: "/assets/projects/psi/1.png"
images: ["/assets/projects/psi/1.png", "/assets/projects/psi/2.png", "/assets/projects/psi/3.png", "/assets/projects/psi/4.png", "/assets/projects/psi/5.png", "/assets/projects/psi/6.png"]
tags: ["ble", "android", "iot"]
featured: true
category: "Nuevo"
order: 6
---

## Description

Aplicación Android desarrollada para operadores autorizados que permite controlar dispositivos EP mediante Bluetooth Low Energy, habilitando sesiones temporales de inhibición de señal de presencia durante tareas operativas en campo.
El sistema evita falsas alarmas en plataformas SCADA mientras se realizan trabajos autorizados, manteniendo trazabilidad, seguridad criptográfica y control centralizado desde backend.

## Características principales
- Login y gestión segura de sesión de operador.
- Escaneo y detección de dispositivos EP cercanos vía BLE.
- Resolución criptográfica online contra ThingsBoard.
- Comunicación BLE cifrada con AES-CTR.
- Inicio, cierre y reemplazo de sesiones temporales.
- Visualización de estado del dispositivo, inhibición y tiempo restante.
- Notificaciones locales antes del vencimiento de sesión.
- Telemetría operativa hacia backend.
- Firmware mock BLE para validar protocolo y expiración de sesiones.

## Aplicaciones
- Operación segura en instalaciones industriales.
- Prevención de falsas alarmas durante mantenimiento.
- Integración operativa con entornos SCADA.
- Control temporal de inhibición de señales en campo.
- Auditoría de acciones por operador y dispositivo.

## Tecnologías utilizadas
- Kotlin
- Android
- Jetpack Compose
- Material Design 3
- Navigation Compose
- Hilt
- Coroutines + Flow
- Retrofit / OkHttp
- EncryptedSharedPreferences
- Bluetooth Low Energy
- Nordic BLE Library
- Nordic Scanner Compat Library
- ThingsBoard IoT Platform
- AES-CTR
- Gradle Kotlin DSL

## Skills aplicadas
- Arquitectura Android MVVM.
- Integración BLE real con GATT.
- Seguridad aplicada a comunicación local.
- Diseño de protocolos binarios y payloads cifrados.
- Integración con backend IoT.
- Manejo de autenticación, refresh token y almacenamiento seguro.
- UI declarativa con Compose.
- Gestión de estados operativos críticos.
- Notificaciones locales Android.
- Validación funcional con firmware mock.

## Estado del Proyecto
- Desarrollo finalizado
