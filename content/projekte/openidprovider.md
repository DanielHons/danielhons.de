---
title: "Integration von OpenID in ein bestehendes Altsystem"
---
Durch das Hinzufügen einer OpenID Schnittstelle an eine bestehende Software wurde die nötige Voraussetzung für künftige Modularisierung und Skalierung geschaffen.

Da die bestehenden Lösungen voll abwärtskompatibel weiterbetrieben wurden, kam es zu keiner Zeit zu einem API-Bruch. Zu den implementierten Schnittstellen gehörte insbesondere auch die 
UI für das Self Management (auf Basis von Go Template).

##### Beitrag
- Konzeption
- Architektur
- Entwicklung

##### Technologien:
- ORY Hydra
- Go
- Postgres
- Go Templates
