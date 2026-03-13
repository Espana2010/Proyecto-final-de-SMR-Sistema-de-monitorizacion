# Sistema de Monitorización y Control de Red Doméstica  
Proyecto Final – 2º SMR  
Autores: **Ricardo Gordo, Alejandro Casatejada y Pablo Vélez**  
Tutor: **César**  
IES Clara del Rey – Madrid  

---

## Descripción del Proyecto

Este proyecto implementa un sistema completo de monitorización para una red doméstica simulada mediante **VirtualBox** y **GNS3**.  
El objetivo es supervisar el estado de los equipos, detectar fallos en tiempo real y generar alertas automáticas utilizando **Zabbix** como herramienta principal.

La red incluye:

- Servidor Zabbix + MariaDB  
- Servidor de Servicios (DHCP, DNS, Web)  
- Cliente Ubuntu  
- Cliente Windows  
- Switch virtual en GNS3  

**Importante:**  
En esta topología **no existe un router independiente**.  
El propio **ServidorServicios actúa como router**, ya que:

- Tiene **dos interfaces de red**  
- Tiene **IP forwarding activado**  
- Realiza **NAT con IPTables**  
- Proporciona **DHCP, DNS y Web**  
- Conecta la red interna con Internet  

---

## Objetivos del Proyecto

### Objetivos técnicos
- Diseñar una topología de red doméstica funcional.  
- Configurar máquinas virtuales en VirtualBox.  
- Integrarlas en GNS3 mediante un switch virtual.  
- Instalar y configurar Zabbix Server + MariaDB.  
- Instalar agentes Zabbix en los equipos.  
- Monitorizar CPU, RAM, disco, ping y servicios.  
- Crear triggers personalizados.  
- Realizar pruebas de estrés reales.  
- Configurar alertas automáticas por correo.

### Objetivos formativos
- Aprender administración de sistemas Linux y Windows.  
- Comprender la monitorización profesional.  
- Documentar un proyecto técnico de forma completa.  
- Preparar una defensa ante tribunal académico.

---

## Arquitectura del Sistema

La arquitectura está compuesta por:

- **ServidorServicios (Router + DHCP + DNS + Web)**  
  - 2 interfaces de red  
  - NAT + IP forwarding  
  - DHCP Server  
  - DNS Server (BIND9)  
  - Web Server (Apache2)

- **Servidor Zabbix**  
  - Zabbix Server  
  - Zabbix Frontend  
  - MariaDB

- **Cliente Ubuntu**  
- **Cliente Windows**  
- **Switch virtual en GNS3**

---

## Topología de Red

La topología fue diseñada en **GNS3**, integrando máquinas VirtualBox mediante adaptadores bridged e internos.

Incluye:

- Switch virtual  
- ServidorServicios (que actúa como router)  
- Servidor Zabbix  
- Cliente Ubuntu  
- Cliente Windows  

---

## Configuración del ServidorServicios

Incluye:

- Configuración de Netplan  
- Activación de IP forwarding  
- Reglas IPTables persistentes (NAT)  
- Instalación y configuración de DHCP  
- Instalación y configuración de BIND9  
- Instalación de Apache2  



---

## Configuración de Clientes

### Cliente Ubuntu
- Configuración de red  
- Recepción de IP por DHCP  
- Pruebas de conectividad  
- Resolución DNS  
- Rutas y ping a Internet  

### Cliente Windows
- Configuración de red  
- Instalación del agente Zabbix  
- Verificación de conectividad  

---

## Instalación del Servidor Zabbix

Incluye:

- Instalación del repositorio oficial  
- Instalación de Zabbix Server, Frontend y Agent  
- Configuración de MariaDB  
- Configuración del frontend web  
- Inicio de servicios y verificación  

---

## Monitorización

Se monitorizan:

- CPU  
- RAM  
- Disco  
- Ping  
- Latencia  
- Interfaces de red  
- Servicios del ServidorServicios  

---

## Triggers Personalizados

Se han creado triggers para:

- CPU alta  
- RAM baja  
- Disco bajo  
- Ping caído  
- Pérdida de paquetes  
- Servicios inactivos  

---

## Pruebas de Estrés

Se realizaron pruebas reales:

### CPU
stress --cpu 4 --timeout 20

### RAM
stress --vm 1 --vm-bytes 500MB --vm-hang 0

### Disco
dd if=/dev/zero of=/tmp/testfile bs=1M count=5000


### Validación manual
- top 
- free -h 
- df -h 
- ping -c 4 8.8.8.8


---

## Acciones Automáticas

Zabbix envía alertas por correo cuando:

- Un host cae  
- Un servicio falla  
- Un recurso llega a un umbral crítico  


---

## Conclusión

Este proyecto demuestra la implementación completa de un sistema de monitorización profesional en un entorno doméstico simulado.  
Permite detectar fallos reales, generar alertas automáticas y visualizar el estado de la red en tiempo real.

---

## Autores

**Ricardo Gordo, Alejandro Casatejada y Pablo Vélez**  
2º SMR – IES Clara del Rey


