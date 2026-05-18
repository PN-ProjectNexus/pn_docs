---
title: Ajouter une documentation
---

Cette methode servira pour les prochains scripts ou mappings FiveM.

## Creer un dossier

Ajoutez un nouveau dossier dans `categories/`.

Exemple pour un script :

```text
categories/pn-inventory/
```

Exemple pour un mapping :

```text
categories/mapping-sandy/
```

## Ajouter les pages Markdown

Chaque categorie doit avoir une page d'accueil :

```text
categories/pn-inventory/index.md
```

Exemple de contenu :

```md
---
title: PN Inventory
---

Documentation du script PN Inventory.
```

Ajoutez ensuite les pages utiles :

```text
installation.md
configuration.md
exports.md
changelog.md
```

## Declarer la navigation

Ouvrez `_data/navigation.yml`, puis ajoutez une entree :

```yml
- title: PN Inventory
  icon: INV
  folder: pn-inventory
  pages:
    - title: Installation
      url: /categories/pn-inventory/installation/
    - title: Configuration
      url: /categories/pn-inventory/configuration/
```

La page `index.md` sera automatiquement affichee comme `Vue d'ensemble` dans la sidebar.

## Publier

Une fois les pages ajoutees :

```bash
git add .
git commit -m "Add PN Inventory documentation"
git push
```

GitHub Pages mettra le site a jour automatiquement.
