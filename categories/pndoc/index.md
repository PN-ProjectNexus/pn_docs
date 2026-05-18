---
title: PNDOC - Vue d'ensemble
---

PNDOC est la premiere categorie de documentation du site. Elle sert de base pour installer, configurer et publier le template de documentation Project Nexus.

Le nouveau point de depart est le template officiel :

[PN-ProjectNexus/pn-docs_template](https://github.com/PN-ProjectNexus/pn-docs_template/releases)

La derniere release disponible au moment de la mise a jour est `1.0`, publiee le 18 mai 2026.

## Objectif du template

Ce template permet de creer une documentation statique pour les projets Project Nexus :

- scripts FiveM ;
- mappings FiveM ;
- packs UI ;
- ressources serveur ;
- guides d'installation et de configuration.

Chaque nouveau projet pourra ensuite avoir son propre dossier dans `categories/`, par exemple :

```text
categories/
  pndoc/
  mon-script/
  mon-mapping/
  mon-pack-ui/
```

## Pages disponibles

- [Installation]({{ '/categories/pndoc/installation/' | relative_url }}) : recuperer le template et preparer le projet.
- [Deploiement GitHub Pages]({{ '/categories/pndoc/deploiement-github-pages/' | relative_url }}) : publier la documentation en ligne.
- [Structure du template]({{ '/categories/pndoc/structure/' | relative_url }}) : comprendre les dossiers importants.
- [Ajouter une documentation]({{ '/categories/pndoc/ajouter-une-documentation/' | relative_url }}) : creer les prochaines categories pour les autres scripts ou mappings.
