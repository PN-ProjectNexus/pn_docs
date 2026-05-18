---
title: Installation
---

## 1. Téléchargement

Clonez le dépôt des scripts dans le dossier `resources` de votre serveur :

```bash
cd /chemin/vers/server-fivem/resources
git clone https://github.com/PN-ProjectNexus/pn_scripts.git
```

Ou téléchargez l'archive ZIP depuis [GitHub Releases](https://github.com/PN-ProjectNexus/pn_scripts/releases).

## 2. Importer la base de données

Chaque script fournit un fichier SQL dans son dossier `sql/`. Importez-les dans votre base :

```bash
mysql -u root -p < resources/pn_scripts/pn_anticheat/sql/install.sql
mysql -u root -p < resources/pn_scripts/pn_vehicles/sql/install.sql
```

## 3. Configurer le `server.cfg`

Ajoutez les resources dans votre `server.cfg` :

```cfg
# PN Project Nexus Scripts
ensure oxmysql
ensure ox_lib
ensure pn_anticheat
ensure pn_vehicles
ensure pn_ui
```

L'ordre d'`ensure` est important — placez `oxmysql` et `ox_lib` en premier.

## 4. Vérifier l'installation

Redémarrez le serveur et vérifiez la console :

```
[script:pn_anticheat] ✓ Chargé — version 1.2.0
[script:pn_vehicles]  ✓ Chargé — version 2.0.1
[script:pn_ui]        ✓ Chargé — version 1.0.0
```

> **⚠️ Erreur fréquente** : si un script ne se charge pas, vérifiez que toutes ses dépendances sont bien `ensure` avant lui.
