---
title: Contribution
---

Merci de vouloir contribuer aux scripts PN Project Nexus !

## Signalement de bugs

Ouvrez une [issue GitHub](https://github.com/PN-ProjectNexus/pn_docs/issues) avec :

- Version du script concerné
- Version du framework (ESX / QB)
- Logs pertinents (console F8, serveur)
- Étapes pour reproduire

## Propositions d'amélioration

Les suggestions sont les bienvenues. Précisez :

- Le script concerné
- Le cas d'usage
- Une proposition d'implémentation si possible

## Contribution au code

### 1. Fork et branche

```bash
git clone https://github.com/PN-ProjectNexus/pn_scripts.git
cd pn_scripts
git checkout -b feature/ma-fonctionnalite
```

### 2. Convention de code

- Indentation : **2 espaces** (pas de tabs)
- Nommage : `snake_case` pour les variables et fonctions
- Commentaires en français ou anglais
- Pas de `print()` de debug dans le code final

### 3. Commit et PR

```bash
git commit -m "feat(pn_vehicles): ajout du système de location"
git push origin feature/ma-fonctionnalite
```

Ouvrez une Pull Request vers `main` avec une description claire.

### 4. Revue

Chaque PR est revue sous 48h. Les retours sont constructifs — ne les prenez pas personnellement 🙌

## Code de conduite

- Soyez respectueux
- Pas de _drama_ dans les issues / PRs
- La communauté avant tout
