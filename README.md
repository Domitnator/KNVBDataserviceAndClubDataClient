# KNVBDataserviceAndClubDataClient
A project for easily integrate the KNVB Dataservice API and the Club Data API on your own website. It has features for templating, filtering, sorting and displaying the data.

CBT KNVB Dataservice En Sportlink API V3
Op deze pagina kunt u lezen hoe u de CBT V3 KNVBDataservice koppeling kunt configureren op uw eigen site

Download
Download versie 1.0.10

Browser support
Alle browsers worden ondersteund, inclusief Internet Explorer 9. Voor het werken met internet explorer 8 dient een kleine aanpassing gemaakt te worden, hierover later meer.

Afhankelijkheden
De html is gebasseerd op Bootstrap. Om dus direct een mooi resultaat te krijgen dien je bootstrap css toe te voegen aan je pagina.

De templates zijn gemaakt middels knockoutjs. U bent vrij de templates naar eigen smaak in te richten.

(Basis) Configuratie
Download de zip (hierboven).
Plaats de knvbdataservice.extensions.js uit de zip op een locatie naar keuze.
Optioneel: Plaats de templates uit de zip op een locatie naar keuze en pas deze aan naar uw wensen.
Voeg het volgende script toe vlak voor het einde van de body tag van je html

    <script>

    var cood = {

        config: {

        'config': {

        clubname: 'xxxx', //Vervangen door correcte waarde

        rootUri: 'https://knvbdataservicehatch.azurewebsites.net',

        templatePath:  '/xxx/templates ', //(Optioneel) Let op: geen backslash op het einde

        knvbKey: 'xxxxx', //Vervangen door correcte waarde

        knvbPath: 'xxxxx' //Vervangen door correcte waarde

        }

    }

};

</script>

<script data-main="build/app" src="xxxx/knvbdataservice.extensions.js"></script>

</body>

                    
Vervang in de config de waarden door waarden die van toepassing zijn voor de club.

Installatie video's
Programma



Programma/Stand/Uitslagen per competitie



Templates aanpassen



Componenten
U kunt gegevens overzichten eenvoudig toevoegen aan uw pagina. Hieronder vindt u een overzicht van componenten die momenteel beschikbaar zijn. U hoeft de component-html alleen maar toe te voegen aan uw eigen html.

Voorbeeld
Bekijk hier een voorbeeld implementatie

Competitie overzichten
Competitie stand:

<div data-bind="component: { name: 'cood-competitie-stand', params: { teamid: '190286', district: 'OO', compid: '0214', classid: '16', pouleid: '428286', programmaOptions: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Competitie uitslagen:

<div data-bind="component: { name: 'cood-competitie-uitslagen', params: { teamid: '190294', district: 'OO', compid: '0512', classid: '13', pouleid: '419820', programmaOptions: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Competitie programma:

<div data-bind="component: { name: 'cood-competitie-programma', params: {teamid: '190294', district: 'OO', compid: '0512', classid: '13', pouleid: '419820', programmaOptions: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Competitie programma/uitslagen/stand:

<div data-bind="component: { name: 'cood-competitie-programma-uitslagen-stand', params: { teamid: '190286', district: 'OO', compid: '0214', classid: '16', pouleid: '428286', programmaOptions: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, uitslagenOptions: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Club overzichten
Club Programma:

<div data-bind="component: { name: 'cood-club-programma', params: {options: { reverseOrder: false, filter: '&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Club Uitslagen:

<div data-bind="component: { name: 'cood-club-uitslagen', params: { sessionId: $root.sessionId } }"> </div>
Bekijk hier een voorbeeld implementatie

Club Programma (gegroupeerd):

<div data-bind="component: { name: 'cood-club-programma-gegroepeerd', params: { options: { reverseOrder: false, filter: '&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

Club Uitslagen (gegroupeerd):

<div data-bind="component: { name: 'cood-club-uitslagen-gegroepeerd', params: { options: { reverseOrder: false, filter: '&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>
Bekijk hier een voorbeeld implementatie

U kunt zelf bepalen welke teams er getoond worden in het overzicht. Om dit te regelen kunt u in de options de "csvTeamIds" property toevoegen en comma gescheiden de id's van de teams opgeven. Bijvoorbeeld:

<div data-bind="component: { name: 'cood-club-programma', params: {options: { csvTeamIds: '189616,191488,254804', reverseOrder: false, filter: '&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>

Let op: de volgorde van het opgeven van de teamid's bepaalt ook de volgorde van de weergave.

Bekijk hier een voorbeeld implementatie

Templates
De templates worden gebruikt om de gegevens van de knvb om te zetten in html. Elk component heeft zijn eigen template, aan de naam van de template kunt u zien bij welk component deze hoort. Deze templates kunt u naar eigen wens aanpassen. Alle templates zijn te vinden in de zip-file die boven aan de pagina te vinden is.

CSS
Omdat de componenten uiteindelijk gerendered worden in de DOM van de pagina kunt u gewoon CSS wijzigingen doen zoals u normaal ook zou doen. Er is dus géén speciale CSS die u moet inladen. Let wel: de templates zijn gemaakt op basis van boostrap. Als u dus de Bootstrap CSS toevoegd heeft u gelijk een mooi resultaat. Heeft u speciale opmaak nodig dan voor bepaalde elementen dan kunt u altijd zelf classes toevoegen aan de templates en deze vervolgens stylen zoals u wilt.

Image Pack
De standaard templates gebruiken afbeeldingen om aan te geven of een wedstrijd voor de beker/competitie/oefen is. De gebruikte afbeeldingen kunt u hier downloaden.

Download afbeeldingen

KNVB ID's
Sommige componenten vereisen speciale KNVB id's (bijvoorbeeld: teamid, district, pouleid). Deze id's kunt u vinden via het club-teams component én het club-competities component: 
<div data-bind="component: { name: 'cood-club-teams', params: { sessionId: $root.sessionId } }"> </div>

 

<div data-bind="component: { name: 'cood-club-competities', params: { sessionId: $root.sessionId} }"></div> .
Klik hier om een voorbeeld pagina te zien met beide componenten.

Filters
Sommige componenten beschikken over een "filter" parameter. Bijvoorbeeld:

<div data-bind="component: { name: 'cood-club-programma-gegroepeerd', params: { options: { filter: '&order=time&weeknummer=' + $root.currentWeekNumber }, sessionId: $root.sessionId} }"> </div>

Deze filter parameter wordt 1 op 1 doorgegeven, als querystring, aan de achterliggende call richting de dataservice van de knvb. Hetgeen opgegeven kan worden wordt dus bepaald door de knvb-dataservice. Op de site van de knvbdataservice kunt u per call zien wat de mogelijkheden zijn: api.knvbdataservice.nl

Bijvoorbeeld: Het club-programma gebruikt de volgende knvb-dataservice call: http://api.knvbdataservice.nl/hoofdstuk/wedstrijden.. Daar is te lezen desbetreffende call een parameter "order" heeft:

De parameter order is optioneel. De default is leeg, hierdoor worden alle wedstrijden op sterkte van competitie teruggegeven. Als de optie time wordt meegegeven, dan zijn de wedstrijden gesorteerd op tijd.

Als de dus op datum willen sorteren dan geven we als filter "&order=time" mee in het component (zoals hierboven te zien is).

Changelog
1.0.10
club-competities template aangepast. Er is nu een kolom met een gegenereerde programma-uitslagen-stand div. Dit scheelt veel kopieren en plakken
1.0.9
Internet explorer + Firefox bug opgelost
