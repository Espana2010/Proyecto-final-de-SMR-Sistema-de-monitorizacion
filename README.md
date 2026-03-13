# Sistema de Monitorizaci�n y Control de Red Dom�stica  
Proyecto Final � 2� SMR  
Autores: **Ricardo Gordo, Alejandro Casatejada y Pablo V�lez**  
Tutor: **C�sar**  
IES Clara del Rey � Madrid  

---

## ?? Descripci�n del Proyecto

Este proyecto implementa un sistema completo de monitorizaci�n para una red dom�stica simulada mediante **VirtualBox** y **GNS3**.  
El objetivo es supervisar el estado de los equipos, detectar fallos en tiempo real y generar alertas autom�ticas utilizando **Zabbix** como herramienta principal.

La red incluye:

- Servidor Zabbix + MariaDB  
- Servidor de Servicios (DHCP, DNS, Web)  
- Cliente Ubuntu  
- Cliente Windows  
- Switch virtual en GNS3  

**Importante:**  
En esta topolog�a **no existe un router independiente**.  
El propio **ServidorServicios act�a como router**, ya que:

- Tiene **dos interfaces de red**  
- Tiene **IP forwarding activado**  
- Realiza **NAT con IPTables**  
- Proporciona **DHCP, DNS y Web**  
- Conecta la red interna con Internet  

---

## ?? Objetivos del Proyecto

### ?? Objetivos t�cnicos
- Dise�ar una topolog�a de red dom�stica funcional.  
- Configurar m�quinas virtuales en VirtualBox.  
- Integrarlas en GNS3 mediante un switch virtual.  
- Instalar y configurar Zabbix Server + MariaDB.  
- Instalar agentes Zabbix en los equipos.  
- Monitorizar CPU, RAM, disco, ping y servicios.  
- Crear triggers personalizados.  
- Realizar pruebas de estr�s reales.  
- Configurar alertas autom�ticas por correo.

### ?? Objetivos formativos
- Aprender administraci�n de sistemas Linux y Windows.  
- Comprender la monitorizaci�n profesional.  
- Documentar un proyecto t�cnico de forma completa.  
- Preparar una defensa ante tribunal acad�mico.

---

## ??? Arquitectura del Sistema

La arquitectura est� compuesta por:

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

## ?? Topolog�a de Red

La topolog�a fue dise�ada en **GNS3**, integrando m�quinas VirtualBox mediante adaptadores bridged e internos.

Incluye:

- Switch virtual  
- ServidorServicios (que act�a como router)  
- Servidor Zabbix  
- Cliente Ubuntu  
- Cliente Windows  

---

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

Se monitorizan:

- CPU  
- RAM  
- Disco  
- Ping  
- Latencia  
- Interfaces de red  
- Servicios del ServidorServicios  

---

## ?? Triggers Personalizados

Se han creado triggers para:

- CPU alta  
- RAM baja  
- Disco bajo  
- Ping ca�do  
- P�rdida de paquetes  
- Servicios inactivos  

---

## ?? Pruebas de Estr�s

Se realizaron pruebas reales:

### CPU
stress --cpu 4 --timeout 20

### RAM
stress --vm 1 --vm-bytes 500MB --vm-hang 0

### Disco
dd if=/dev/zero of=/tmp/testfile bs=1M count=5000


### Validaci�n manual
- top 
- free -h 
- df -h 
- ping -c 4 8.8.8.8


---

## ?? Acciones Autom�ticas

Zabbix env�a alertas por correo cuando:

- Un host cae  
- Un servicio falla  
- Un recurso llega a un umbral cr�tico  

---

## ?? Capturas

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


