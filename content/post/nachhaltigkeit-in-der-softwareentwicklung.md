---

date: "2019-10-17T12:00:00-00:00"
title: "Nachhaltige Softwareentwicklung"
image: "green-energy.jpg"
categories:
- Nachhaltigkeit
---

Die Entwicklung von Software verbraucht Resourcen. Durch den Betrieb der Rechner, inklusive Server für das Hosting von Werkzeugen für automatisierte Builds, Requirement- und 
Defectmanagement sowie zur Bereitstellung von meist mehreren Testumgebungen wird Energie verbraucht. Die Hardware zum Betrieb dieser Software musste hergestellt und geliefert werden. 
Die Datenübertragung durch das Netzwerk bzw. Internet muss berücksichtigt werden. Meistens entstehen Aufwände durch das Pendeln der Projektmitarbeiter.
<!--more-->

### Fußabdruck eines Projekts reduzieren
Der naheliegendste Weg, die Nachhaltigkeit eines Produkts zu erhöhen, ist die direkte Reduktion der aufzuwendenden Ressourcen. Bei der Herstellung von Software ist das nicht anders, also lohnt es sich, die ökologischen Kostentreiber zu betrachten.

#### Direkter Energieverbrauch
Der wahrscheinlich offensichtlichste Punkt ist der eigene Stromverbrauch. 
Hierbei sollte unbedingt auf einen Tarif ohne Kohlestromanteil Wert gelegt werden. Und zwar nicht nur in den eigenen Büroräumen, sondern auch und vielleicht vor allem bei der Wahl eines Cloud-Anbieters. Mein Arbeitsraum und das Rechenzentrum, auf dem diese Seite gehostet wird, werden zu 100% aus Naturstrom versorgt.

#### Hardware
Auf Hardware kann insgesamt nicht verzichtet werden. Es ist schlicht nicht möglich, Software ohne einen Computer zu entwickeln. Mann kann jedoch auch hier Maßnahmen ergreifen, die den Ressourcenaufwand erheblich reduzieren. Das Umweltbundesamt betont[^1], wie wichtig eine lange Nutzungsdauer von Hardware ist. Daher sollte sehr darauf geachtet werden, dass anzuschaffende Geräte für ihren geplanten Zweck geeignet, ausreichend dimensioniert und in guter Qualität gefertigt ist.

> Hochwertige Gebrauchtgeräte haben oft ein deutlich besseres Kosten-Nutzen-Verhältnis als oft nur vermeindlich preisgünstige Neuware.

Beim Cloud-Hosting in Rechenzentren dritter Anbieter hat man auf Hardwarekäufe in der Regel keinen Einfluss. Man kann jedoch kosequent an der Vermeidung von Überprovisionierung arbeiten. 
Nicht jede Datenbank braucht gleich 8GB Ram, und eine CPU schafft auch oft mehr als man glaubt. 
Dienste können und sollen sich Kapazitäten durch geschickte Orchestrierung teilen. So halten Sie die durch Ihr Projekt gebundenen Ressourcen gering. 
Eine Erhöhung der Kapazität ist meistens problemlos kurzfristig möglich.

#### Straßenverkehr / Pendeln
Bei diesem Punkt möchte ich gerne auf meinen Artikel zu Home-Office verweisen. Bei einer Zusammenarbeit mit Freiberuflern (wie mir) sollte auf eine regionale Nähe Wert gelegt werden.

#### Die passende Technologien wählen
Wählen Sie Technologien aus, die geeignet sind, das jeweilige Problem mit einem nicht unnötig großen Aufwand an Rechenkapazität zu lösen. Eine speicherintensive Java-Anwendung kann oft durch ihren hohen Durchsatz punkten, in vielen Fällen (besonders im Microservice-Umfeld) kann jedoch ein auf Bash oder Go basierender Ansatz deutlich effektiver und effizienter sein.

### Nutzen maximieren
Parallel zur Reduktion des ökologischen Fußabdrucks des Projektes sollte man sich Gedanken machen, wie ein möglichst großer und lange anhaltender Mehrwert durch das Projekt geschaffen werden kann.

Genau wie bei anderen Produkten, ist die Qulität einer Software ein maßgeblicher Faktor wenn es darum geht, einen bleibenden und damit nachhaltigen Nutzen zu stiften. Hier steckt die Relevanz der oft vernachlässigten nicht-funktionalen Qualitätskriterien nach ISO 9126[^2], namentlich Übertragbarkeit, Effizienz, Zuverlässigkeit, Änderbarkeit und Benutzbarkeit.

#### Teilhaben (lassen)
Lassen sich Lösungen für Teilprobleme herauslösen und anderen Teams/Abteilungen zur Verfügung stellen? Sind vielleicht Teile für einen noch großeren Nutzerkreis interessant und können unter einer Open-Source Lizenz veröffentlicht werden? Mit der Entwicklung von Open-Source-Software in hoher Qualität betreten Sie die Königsklasse nachhaltiger Software.

##### Einzelnachweise
 [^1]: https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/elektrogeraete/computer-pc-laptop#textpart-2 
 [^2]: [https://de.wikipedia.org/wiki/Softwarequalität](https://de.wikipedia.org/wiki/Softwarequalität)