### Online-Shop System - Klassendiagramm

Das System besteht aus vier Hauptklassen:

1. **Kunde**
    
    - Attribute: kundenID (int), name (String), email (String), adresse (String)
    - Methoden: getKundendetails(), bestellungAufgeben()
2. **Produkt**
    
    - Attribute: produktID (int), name (String), preis (double), lagerbestand (int)
    - Methoden: getProduktdetails(), prüfeLagerbestand()
3. **Bestellung**
    
    - Attribute: bestellID (int), datum (Datum), status (String)
    - Methoden: getBestelldetails(), berechneSumme()
4. **BestellPosition**
    
    - Attribute: menge (int), einzelpreis (double)
    - Methoden: berechneTeilsumme()

### Beziehungen zwischen den Klassen:

- Ein Kunde kann mehrere (0 oder mehr) Bestellungen tätigen
- Eine Bestellung gehört zu genau einem Kunden
- Eine Bestellung enthält mindestens eine oder mehrere BestellPositionen
- Eine BestellPosition gehört zu genau einer Bestellung
- Eine BestellPosition bezieht sich auf genau ein Produkt
- Ein Produkt kann in mehreren (0 oder mehr) BestellPositionen vorkommen

Du sollst diese Informationen in einem UML-Klassendiagramm darstellen, mit den entsprechenden Klassen, Attributen, Methoden und Beziehungen (inkl. Multiplizitäten).