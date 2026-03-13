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

<<<<<<< HEAD
### ?? Objetivos t�cnicos
- Dise�ar una topolog�a de red dom�stica funcional.  
- Configurar m�quinas virtuales en VirtualBox.  
=======
### Objetivos técnicos
- Diseñar una topología de red doméstica funcional.  
- Configurar máquinas virtuales en VirtualBox.  
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a
- Integrarlas en GNS3 mediante un switch virtual.  
- Instalar y configurar Zabbix Server + MariaDB.  
- Instalar agentes Zabbix en los equipos.  
- Monitorizar CPU, RAM, disco, ping y servicios.  
- Crear triggers personalizados.  
<<<<<<< HEAD
- Realizar pruebas de estr�s reales.  
- Configurar alertas autom�ticas por correo.

### ?? Objetivos formativos
- Aprender administraci�n de sistemas Linux y Windows.  
- Comprender la monitorizaci�n profesional.  
- Documentar un proyecto t�cnico de forma completa.  
- Preparar una defensa ante tribunal acad�mico.
=======
- Realizar pruebas de estrés reales.  
- Configurar alertas automáticas por correo.

### Objetivos formativos
- Aprender administración de sistemas Linux y Windows.  
- Comprender la monitorización profesional.  
- Documentar un proyecto técnico de forma completa.  
- Preparar una defensa ante tribunal académico.
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

---

## Arquitectura del Sistema

<<<<<<< HEAD
La arquitectura est� compuesta por:
=======
La arquitectura está compuesta por:
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

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

<<<<<<< HEAD
## ?? Topolog�a de Red

La topolog�a fue dise�ada en **GNS3**, integrando m�quinas VirtualBox mediante adaptadores bridged e internos.
=======
## Topología de Red

La topología fue diseñada en **GNS3**, integrando máquinas VirtualBox mediante adaptadores bridged e internos.
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

Incluye:

- Switch virtual  
<<<<<<< HEAD
- ServidorServicios (que act�a como router)  
=======
- ServidorServicios (que actúa como router)  
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a
- Servidor Zabbix  
- Cliente Ubuntu  
- Cliente Windows  

---

<<<<<<< HEAD
## ?? Configuraci�n del ServidorServicios

Incluye:

- Configuraci�n de Netplan  
- Activaci�n de IP forwarding  
- Reglas IPTables persistentes (NAT)  
- Instalaci�n y configuraci�n de DHCP  
- Instalaci�n y configuraci�n de BIND9  
- Instalaci�n de Apache2  

Todas las capturas est�n documentadas en la [memoria final](Proyecto%20final%20de%20SMR%20Sistema%20de%20monitorización/02_Memoria/).

---

## ??? Configuraci�n de Clientes

### Cliente Ubuntu
- Configuraci�n de red  
- Recepci�n de IP por DHCP  
- Pruebas de conectividad  
- Resoluci�n DNS  
- Rutas y ping a Internet  

### Cliente Windows
- Configuraci�n de red  
- Instalaci�n del agente Zabbix  
- Verificaci�n de conectividad  

---

## ?? Instalaci�n del Servidor Zabbix

Incluye:

- Instalaci�n del repositorio oficial  
- Instalaci�n de Zabbix Server, Frontend y Agent  
- Configuraci�n de MariaDB  
- Configuraci�n del frontend web  
- Inicio de servicios y verificaci�n  

---

## ?? Monitorizaci�n
=======
## Configuración del ServidorServicios

Incluye:

- Configuración de Netplan  
- Activación de IP forwarding  
- Reglas IPTables persistentes (NAT)  
- Instalación y configuración de DHCP  
- Instalación y configuración de BIND9  
- Instalación de Apache2  

Todas las capturas están documentadas en la memoria final: [📁 Ir a la carpeta de Memoria](./02_Memoria)



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

##  Instalación del Servidor Zabbix

Incluye:

- Instalación del repositorio oficial  
- Instalación de Zabbix Server, Frontend y Agent  
- Configuración de MariaDB  
- Configuración del frontend web  
- Inicio de servicios y verificación  

---

##  Monitorización
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

Se monitorizan:

- CPU  
- RAM  
- Disco  
- Ping  
- Latencia  
- Interfaces de red  
- Servicios del ServidorServicios  

---

##  Triggers Personalizados

Se han creado triggers para:

- CPU alta  
- RAM baja  
- Disco bajo  
<<<<<<< HEAD
- Ping ca�do  
- P�rdida de paquetes  
=======
- Ping caído  
- Pérdida de paquetes  
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a
- Servicios inactivos  

---

<<<<<<< HEAD
## ?? Pruebas de Estr�s
=======
##  Pruebas de Estrés
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

Se realizaron pruebas reales:

### CPU
stress --cpu 4 --timeout 20

### RAM
stress --vm 1 --vm-bytes 500MB --vm-hang 0

### Disco
dd if=/dev/zero of=/tmp/testfile bs=1M count=5000


<<<<<<< HEAD
### Validaci�n manual
=======
### Validación manual
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a
- top 
- free -h 
- df -h 
- ping -c 4 8.8.8.8


---

<<<<<<< HEAD
## ?? Acciones Autom�ticas

Zabbix env�a alertas por correo cuando:

- Un host cae  
- Un servicio falla  
- Un recurso llega a un umbral cr�tico  
=======
## ?Acciones Automáticas

Zabbix envía alertas por correo cuando:

- Un host cae  
- Un servicio falla  
- Un recurso llega a un umbral crítico  
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a

---

##  Capturas

<<<<<<< HEAD
Todas las capturas est�n organizadas en la carpeta: [01_Capturas](Proyecto%20final%20de%20SMR%20Sistema%20de%20monitorización/01_Capturas/)

La memoria final incluye cada captura en su [apartado correspondiente](Proyecto%20final%20de%20SMR%20Sistema%20de%20monitorización/02_Memoria/).

---

## ?? Conclusi�n

Este proyecto demuestra la implementaci�n completa de un sistema de monitorizaci�n profesional en un entorno dom�stico simulado.  
Permite detectar fallos reales, generar alertas autom�ticas y visualizar el estado de la red en tiempo real.

---

## ?? Autores

**Ricardo Gordo, Alejandro Casatejada y Pablo V�lez**  
2� SMR � IES Clara del Rey
=======
Todas las capturas están organizadas en la carpeta: [Evidencias](01_Capturas)

La memoria final incluye cada captura en su capítulo correspondiente.--> [memoria_final](02_Memoria)

---

## Conclusión

Este proyecto demuestra la implementación completa de un sistema de monitorización profesional en un entorno doméstico simulado.  
Permite detectar fallos reales, generar alertas automáticas y visualizar el estado de la red en tiempo real.

---

## Autores

**Ricardo Gordo, Alejandro Casatejada y Pablo Vélez**  
2º SMR – IES Clara del Rey
>>>>>>> 35152ddbd8131d6771cd878b148a8f5816f6d80a


