# Aufgabe: Erstellen eines Sequenzdiagramms für einen Geldautomaten

## Beschreibung
Ein Kunde möchte an einem Geldautomaten Geld abheben. Modellieren Sie den Ablauf dieses Vorgangs mithilfe eines UML-Sequenzdiagramms.

## Systembeschreibung
Der Geldautomat besteht aus folgenden Komponenten:
- **Benutzeroberfläche**: Interagiert mit dem Kunden
- **Kartenleser**: Liest die Bankkarte des Kunden
- **Controller**: Steuert den gesamten Prozess
- **Kontoservice**: Überprüft den Kontostand und führt Transaktionen durch
- **Geldausgabemodul**: Gibt das Geld aus

## Ablauf
1. Der Kunde führt seine Bankkarte in den Kartenleser ein
2. Der Kartenleser liest die Kartendaten und leitet sie an den Controller weiter
3. Der Controller fordert den Kunden über die Benutzeroberfläche zur PIN-Eingabe auf
4. Der Kunde gibt seine PIN über die Benutzeroberfläche ein
5. Der Controller sendet die Kartendaten und PIN an den Kontoservice zur Überprüfung
6. Der Kontoservice validiert die Daten und sendet eine Bestätigung zurück
7. Der Controller fordert den Kunden über die Benutzeroberfläche auf, den gewünschten Betrag einzugeben
8. Der Kunde gibt den gewünschten Betrag ein
9. Der Controller sendet eine Anfrage an den Kontoservice, ob genügend Geld auf dem Konto vorhanden ist
10. Der Kontoservice prüft den Kontostand und sendet das Ergebnis zurück
11. Bei ausreichendem Kontostand:
    - Der Controller weist das Geldausgabemodul an, den Betrag auszugeben
    - Das Geldausgabemodul bestätigt die Ausgabe
    - Der Controller informiert den Kontoservice über die erfolgreiche Transaktion
    - Der Kontoservice bucht den Betrag vom Konto ab
12. Der Controller weist die Benutzeroberfläche an, eine Erfolgsmeldung anzuzeigen
13. Der Controller gibt die Karte über den Kartenleser zurück

## Anforderungen an das Sequenzdiagramm
1. Stellen Sie alle beteiligten Objekte (Akteure und Systemkomponenten) dar
2. Zeigen Sie alle Nachrichten zwischen den Objekten mit korrekten Pfeilen und Beschriftungen
3. Verwenden Sie Aktivierungsbalken, um anzuzeigen, wann ein Objekt aktiv ist
4. Stellen Sie alternative Abläufe dar (z.B. wenn nicht genügend Geld auf dem Konto ist)
5. Zeigen Sie die Rückgabe von Informationen oder Bestätigungen mit gestrichelten Pfeilen

## Abgabeformat
- Erstellen Sie das Sequenzdiagramm nach UML-Standard
- Achten Sie auf eine übersichtliche und leserliche Darstellung
- Markieren Sie kritische Entscheidungspunkte im Ablauf