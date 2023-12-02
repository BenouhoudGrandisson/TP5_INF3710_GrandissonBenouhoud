# INF3710 -- GestoMédic
Mehdi Benouhoud

Arnaud Grandisson

## Utilisation

Vous pouvez lancer le serveur et le client puis la BD Postgres en procédant de la [manière conventionelle](#démarrer-lapplication) ou en utilisant la stack Docker fourni, auquel cas vous devrez installer [Docker](https://www.docker.com/).

```bash
docker-compose up -d
```

Éteindre le projet avec la commande
```bash
docker-compose down
```

Utilisez la commande suivante pour mettre à jour les images Docker si le code a changé

```bash
docker-compose up -d --build
```
ou directement
```bash
docker-compose build
```

On pourra donc accéder au client (l'application web) sur http://localhost:4200 et au serveur API sur http://localhost:3000

Il est possible d'exécuter des commandes SQL en effectuant la commande suivante
```bash
docker-compose exec database psql -U medecin_specialiste -d hopital_bd
```

Vous devez vous assurer de configurer la base de données avant d'utiliser l'application, c'est-à-dire en y ajoutant les schémas spécifiés dans le fichier db/bdschema.sql et les données spécifiés dans le fichier db/data.sql. Ce sera fait si vous exécuter la stack Docker fourni dans le fichier "docker-compose.yml"

# Utilisation en mode développement
Fourni par les chargés du cours.
## Important

Les commandes débutant par `npm` ou `yarn` doivent être exécutées dans le dossier `client` ou le dossier `server`.

## Installation des dépendances

-   Installer `npm`
-   Exécuter `npm -v` et `node -v` dans une fenêtre de commande pour s'assurer de bien voir les versions, ce qui confirme l'installation.
-   Exécuter `npm install` dans le dossier `client` et le dossier `server`.

## Démarrer l’application

Exécuter : `npm start` dans le dossier `client` et le dossier `server`.

Client:
Une page web: `http://localhost:4200/` devrait s'ouvrir automatiquement.

Serveur:
Écoute sur le port 3000 du client local (localhost) AKA 127.0.0.1 : `http://localhost:3000`.

## Générer de nouveau module (Client Side)

En utilisant les commandes Angular CLI: 
	`ng g c component-name` pour un nouveau composant.
	`ng g s service-name` pour un nouveau service.

Vous pouvez aussi utiliser `ng g directive|pipe|service|class|guard|interface|enum|module nameOfWhatYouWant` pour d'autres modules de votre projet.

## Tests Unitaires

-   Exécuter `npm run test`.

-   Exécuter `npm run coverage` pour générer un rapport de couverture.

## TSLint

-   Execute `npm run lint`.

-   Execute `npm run lint -- --fix` or `yarn lint --fix` to automatically resolve certain lint errors.

# Glossaire
| Mot | Definition  |
|---|---|
| NPM | Node Package Manager  |
| NVM | Node Version Manager  |
| CLI | Command Line Interface  |