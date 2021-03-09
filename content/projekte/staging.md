---
title: "Aufbau einer Entwicklungs- und Staging-Umgebung"
---
Ein bereits produktiv gestellte Software benötigt für den Entwicklungsbetrieb zusätzliche (lokale wie gehostete) Umgebungen. Nach anfänglicher Analyse des Systems wurde die benötigte Infrastruktur
geplant, provisioniert und mit initialen Daten befüllt. Die lokale Umgebung und Teile der Remote-Umgebung basieren auf Docker (-compose).

Deployments zu den Umgebungen erfolgen teilautomatisiert aus dem Codemanagement (Git/Bitbucket) heraus.

Auf Kubernetes wurde verzichtet.

Zusätzlich wurden dem Entwicklerteam Skripte zum Testdatenmanagement bereitgestellt.

##### Beitrag
Ist-Analyse, Konzeption & Entwicklung

##### Technologien:
Docker, Docker Compose, Influx, Mongo, Bash, Bitbucket Pipelines, SSH, Linux
