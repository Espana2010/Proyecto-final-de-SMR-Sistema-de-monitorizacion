# Topología de Red - Sistema de Monitorización

## Descripción General

Red de monitorización basada en **Zabbix** para supervisión de sistemas en un entorno virtualizado (GNS3).

---

## Rango de Red

- **Red Simulada (LAN):** `192.168.10.0/24`
- **Interfaz WAN:** `10.0.3.15`

---

## Diagrama de la Topología


---

## Tabla de Configuración de Dispositivos

| Dispositivo | IP Address | Tipo Config | Función |
|---|---|---|---|
| **Services Server** | 192.168.10.1 | Fija | Servidor de servicios LAN |
| **Zabbix Server** | 192.168.10.10 | Fija | Servidor de monitorización |
| **Ubuntu Client 1** | 192.168.10.100 | DHCP | Cliente monitorizado |
| **Windows Client 2** | 192.168.10.101 | DHCP | Cliente monitorizado |
| **Gateway WAN** | 10.0.3.15 | Fija | Salida a internet |

---

## Configuración de Red

### LAN Principal (192.168.10.0/24)
- **Máscara de subred:** 255.255.255.0
- **Rango utilizable:** 192.168.10.1 - 192.168.10.254
- **Broadcast:** 192.168.10.255

### Dispositivos Fijos
- Services Server: `192.168.10.1/24`
- Zabbix Server: `192.168.10.10/24`

### Clientes DHCP
- Ubuntu 1: `192.168.10.100/24`
- Windows 2: `192.168.10.101/24`

### WAN
- Salida a internet: `10.0.3.15`

---

## Funcionalidades

✓ Monitorización centralizada con Zabbix  
✓ Servidor de servicios para la LAN  
✓ Clientes con gestión DHCP  
✓ Conectividad WAN para acceso remoto

