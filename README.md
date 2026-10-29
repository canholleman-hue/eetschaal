# Eetschaal – online PWA-test

Dit is de bestaande Eetschaal-browserapp, voorbereid voor **GitHub Pages**. Er zijn geen servers, frameworks of betaalde pakketten nodig.

## Eenmalig publiceren (GitHub)
1. Maak een **privé-repository** aan als de gegevens of code niet openbaar mogen zijn. Let op: een GitHub Pages-website kan openbaar toegankelijk zijn, afhankelijk van het account en de instellingen. Voor een afgeschermde gezondheidsapp is een eigen authenticatie-oplossing nodig.
2. Upload alle bestanden uit deze map naar de hoofdmap van de repository, inclusief `.github/workflows/pages.yml` en `.nojekyll`.
3. Ga in de repository naar **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Na een geslaagde workflow staat de website op `https://<gebruikersnaam>.github.io/<repositorynaam>/`.
5. Open diezelfde URL op je iPhone en kies Safari → Deel → Zet op beginscherm.

## Updates
- Werk het bestand `index.html` bij, pas de versiestring in het update-script aan en pas `version.json` aan naar exact dezelfde versie. Verhoog ook de CACHE-sleutel in `sw.js`.
- Commit/push naar `main`. GitHub Pages voert dan automatisch een nieuwe publicatie uit.
- De website controleert de online versie bij het openen, bij het terugkeren naar de app en elke 5 minuten. Als er een nieuwe versie is, verschijnt een knop **Vernieuwen**.
- De service worker gebruikt het netwerk eerst en heeft een offline fallback voor de app. Een refresh haalt normaal de actuele online versie binnen.

## Gegevensbehoud en privacy
- Voeding, wegingen, instellingen en recepten staan in `localStorage` op dat specifieke apparaat en binnen die specifieke site-origin. **Ze synchroniseren niet automatisch tussen iPhone en computer.**
- Maak geregeld via **Instellingen → Gegevens en opslag → Back-up exporteren** een JSON-back-up.
- Een andere domeinnaam, privévenster of wissen van websitegegevens maakt de lokale gegevens niet automatisch overzetbaar; herstel dan je back-up.
- Website-updates vervangen alleen appbestanden, niet opzettelijk de opslag onder de sleutel `eetschaal_web_v1`. Pas die sleutel of het opslagformaat nooit zonder migratie aan.
- Dit pakket bevat geen persoonlijke historische metingen, voedingsweken of profielwaarden. De startinstellingen zijn algemene demowaarden. Vul je eigen gegevens alleen lokaal in of importeer een eigen back-up op je apparaat.

## Beperkingen
De oorspronkelijke webtest is niet volledig functie-equivalent met de geplande Flutter-app. Camerascannen, volledige meertalige productzoekfunctie en directe XLSX-import zijn nog niet werkend. GitHub Pages biedt geen privésynchronisatie of login.

## Repository ontbreekt nog
De GitHub-connector kan een bestaande repository vullen, maar ondersteunt in deze ChatGPT-omgeving geen aanmaak van een nieuwe repository. Maak een repository met de naam `eetschaal-web` via GitHub aan. Daarna kunnen we bestanden publiceren.

## Privacybevestiging
De publieke index.html bevat geen voorgeprogrammeerde gebruikersgeschiedenis. Bij eerste bezoek begint de database met lege wegingen, lege geschiedenis en leeg Dagboek. Algemene voorbeeldwaarden zijn geen persoonlijk profiel. Publiceer nooit JSON-back-ups of exports. Bestaande gegevens in localStorage op dezelfde URL worden bewust niet verwijderd.
