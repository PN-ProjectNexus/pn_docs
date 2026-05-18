---
title: Deploiement GitHub Pages
---

GitHub Pages permet de publier automatiquement la documentation depuis un depot GitHub.

## Preparation

Verifiez ces fichiers avant de deployer :

- `_config.yml` contient le bon `url` et le bon `baseurl` ;
- `index.md` existe a la racine du depot ;
- les pages sont rangees dans `categories/` ;
- la navigation est declaree dans `_data/navigation.yml`.

## Envoyer le site sur GitHub

Depuis le dossier du projet :

```bash
git add .
git commit -m "Initialise documentation site"
git branch -M main
git remote add origin https://github.com/PN-ProjectNexus/pn_docs.git
git push -u origin main
```

Si le remote existe deja, utilisez simplement :

```bash
git push
```

## Activer GitHub Pages

Dans GitHub :

1. Ouvrez le depot.
2. Allez dans `Settings`.
3. Ouvrez `Pages`.
4. Dans `Build and deployment`, choisissez `Deploy from a branch`.
5. Selectionnez la branche `main`.
6. Selectionnez le dossier `/root`.
7. Enregistrez.

L'URL finale aura ce format :

```text
https://PN-ProjectNexus.github.io/pn_docs/
```

## Apres chaque modification

Pour publier une mise a jour :

```bash
git add .
git commit -m "Update documentation"
git push
```

GitHub Pages relancera le build automatiquement apres le push.
