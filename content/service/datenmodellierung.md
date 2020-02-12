---
title: "Datenmodellierung"
hasMoreContent: true
---

* Erstellung problemspezifischer Datenmodelle
* **Domain-Driven Design** (DDD)

<!--more-->
Daten sind bei Geschäftsanwendungen oft die langlebigste "Komponente" von Software. Gerade deshalb ist eine langfristige Planung und problemspezifische Modellierung besonders wichtig. Dennoch kennen die meisten Programmierer 
und Projektleiter das Problem: Oft stellt sich mitten in der heißen Phase eines Projektes heraus, dass Teile des Datenmodells unzureichend sind, um die geforderte Situation abzubilden.

Häufig müssen Beziehungen neu gestaltet werden (beispielsweise *OneToMany* statt *OneToOne*). Dadurch werden singuläre Eigenschaften zu Listen, wodurch wiederum Schnittstellen angepasst werden müssen. Man sagt, dass die Schnittstelle "gebrochen"
wird. Solche Brüche sind eine häufige Ursache von Fehlern und behindern den Entwicklungsprozess. Deswegen lege ich besonderen Wert auf die akkurate Modellierung der Daten, angepasst auf die jeweilige Aufgabenstellung. 