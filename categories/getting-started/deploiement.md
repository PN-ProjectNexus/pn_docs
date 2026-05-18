---
title: Déploiement
---

## Mise en production

Suivez ces étapes pour déployer les scripts sur votre serveur FiveM.

### 1. Préparer l'environnement

```bash
# Mettre à jour les artifacts
wget https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/LATEST
# ou sur Linux :
wget https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/LATEST
```

### 2. Transférer les fichiers

```bash
rsync -avz ./resources/pn_scripts/ utilisateur@serveur:/home/fivem/server/resources/pn_scripts/
```

### 3. Configuration TXAdmin

Dans le panneau TXAdmin, ajoutez les resources dans la section **Recipe** ou via le **server.cfg** directement.

### 4. Vérifications post-déploiement

- [ ] Toutes les tables SQL sont créées
- [ ] Les tokens de licence sont valides
- [ ] Les ports requis sont ouverts (30120, 30110)
- [ ] Les noms des resources n'entrent pas en conflit
- [ ] Les permissions Discord/Ox sont configurées

## Mise à jour

```bash
cd resources/pn_scripts
git pull
mysql -u root -p < sql/migration-v1.2-v1.3.sql  # si applicable
```

Consultez le [CHANGELOG](https://github.com/PN-ProjectNexus/pn_scripts/releases) avant chaque mise à jour.
