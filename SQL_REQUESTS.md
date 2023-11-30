# SQL Requests

## Get all services name

```sql
SELECT nomservice FROM services;
```

## Get all specialties name

```sql
SELECT DISTINCT specialite FROM medecins;
```

## Get all medecins with their service as a name

```sql
SELECT medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesExperience, services.nomService FROM medecins INNER JOIN services ON medecins.idService = services.idService;
```