<!-- Header -->
<h1 align="center">🌪️ CycloneBB</h1>


<p align="center">
  <strong>Tornado-Alert & Storm-Path Dashboard</strong><br/>
  <em>Live severe-weather data • Web App • Built by <a href="https://github.com/ailynux">Ailyn Diaz</a></em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"/>
  <img src="https://img.shields.io/badge/status-WIP-yellow.svg" alt="Work in progress"/>
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Passing"/>
  <img src="https://img.shields.io/badge/PRs-welcome-purple.svg" alt="PRs Welcome"/>
</p>

---

## Overview
**CycloneBB** is an open-source web dashboard that tracks **live tornado alerts, severe-weather warnings, and historic storm paths**.  
It’s going to be a playground to master **React + MUI**, **Python/FastAPI**, **Linux deployments**, and **geospatial visualization** — plus it’s just cool to watch storms in real-time.

---

<!-- NOTE: This is a stock placeholder image. Will probably use CycloneBB screenshot later but this one is silly enough for now. -->

<p align="center">
<img width="661" height="360" alt="image" src="https://github.com/user-attachments/assets/f236d03b-e6d0-4902-a46f-6eb095179fa9" />
</p>

## Some Features planned
- ⛈ **Real-time NOAA / NWS alert feed** with risk-level badges  
- 🗺 **Interactive storm-path map** with dark-mode tiles  
- 📈 **Historic tornado outbreak replay** (EF-scale color-coded)  
- ⚡ **Instant alerts**: desktop notifications + optional SMS (Twilio)  
- 📊 **Dashboard widgets**: live radar snapshot, wind-speed gauge  
- 🐳 **Docker-ready backend** for quick Linux deployment  

---

## 🏗️ Architecture (WIP)

```mermaid
graph TD
    subgraph Browser[Client: React + MUI]
        A[User Dashboard] -->|REST or WebSocket| B[Alert Service API]
        A --> C[Map Component Leaflet or Mapbox]
    end

    subgraph Server[Python FastAPI Backend]
        B --> D[NOAA and NWS Poller plus Caching Layer]
        D --> E[(PostgreSQL and PostGIS)]
        D --> F[Historic Tornado Data Importer CSV or GeoJSON]
    end

    subgraph Worker[Linux VM and Cron Jobs]
        G[Hourly Cron Fetch SPC Outlooks]
        G --> D
    end

    subgraph External[External Services]
        H[NOAA and NWS REST Feeds]
        I[Tomorrow io Radar Tiles]
    end

    D --> H
    C --> I

```

### 📂 Folder Structure (Plan WIP)
```
cyclonebb/
├─ frontend/            # React + MUI code
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  └─ styles/
│
├─ backend/             # Python FastAPI service
│  ├─ app/
│  │   ├─ main.py
│  │   ├─ routers/
│  │   ├─ models/
│  │   └─ services/
│  └─ tests/
│
├─ infra/               # Dockerfiles, deploy scripts, nginx config
├─ data/                # Sample historic tornado datasets
├─ docs/                # Diagrams, design notes
└─ README.md
```

---


---

## 🧑‍💻 Contributing
### PRs are welcome!  
#### Please open an issue first to discuss new features or bug fixes.
<img width="584" height="328" alt="image" src="https://github.com/user-attachments/assets/2f6e5b1b-7e64-4db7-aa19-ffb2d22868b7" />


---

### 🌟 Acknowledgments

- NOAA / NWS for open severe-weather feeds

- Tomorrow.io for radar & forecast APIs

---

## ⚖️ License
Released under the **[MIT License](LICENSE)**  



© 2025 Ailyn Diaz — Built with ☕ & ⚡ for the storm-watching community.

