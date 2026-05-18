---
title: Structure du template
---

Le template est organise pour separer le contenu, la navigation, le theme et les layouts.

```text
_config.yml
_data/
  navigation.yml
_includes/
_layouts/
assets/
  css/
  img/
  js/
categories/
index.md
README.md
```

## Fichiers importants

`_config.yml` configure le titre, l'URL, le `baseurl`, Markdown et les options Jekyll.

`_data/navigation.yml` controle les categories affichees dans la sidebar.

`categories/` contient les dossiers de documentation. Chaque dossier represente une categorie ou un projet.

`assets/css/style.css` contient le style global du site.

`assets/js/main.js` gere les interactions du site, comme la sidebar, la recherche ou le theme.

## Organisation recommandee

Pour garder une documentation propre, utilisez un dossier par projet :

```text
categories/
  pndoc/
  pn-inventory/
  pn-garage/
  mapping-sandy/
```

Chaque dossier doit au minimum contenir un `index.md`, puis des pages dediees selon le besoin :

```text
categories/pn-inventory/
  index.md
  installation.md
  configuration.md
  exports.md
  faq.md
```
