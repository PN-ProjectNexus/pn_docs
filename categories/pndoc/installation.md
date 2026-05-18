---
title: Installation
---

Cette page explique comment demarrer avec le template `pn-docs_template`.

## Prerequis

Avant de commencer, installez :

- Git ;
- un compte GitHub ;
- Visual Studio Code ou un editeur equivalent ;
- Ruby et Jekyll si vous voulez tester le site en local.

## Recuperer le template

Depuis la page des releases :

[https://github.com/PN-ProjectNexus/pn-docs_template/releases](https://github.com/PN-ProjectNexus/pn-docs_template/releases)

Telechargez la release `1.0`, puis extrayez l'archive dans le dossier de votre documentation.

Vous pouvez aussi cloner le depot :

```bash
git clone https://github.com/PN-ProjectNexus/pn-docs_template.git
cd pn-docs_template
```

## Configurer le site

Ouvrez `_config.yml`, puis adaptez les valeurs principales :

```yml
title: Project Nexus - Docs FiveM
description: Documentation des scripts et mappings FiveM Project Nexus
url: "https://PN-ProjectNexus.github.io"
baseurl: "/pn_docs"
```

`baseurl` doit correspondre au nom du depot GitHub Pages. Si votre depot s'appelle `pn_docs`, gardez `/pn_docs`.

## Tester en local

Si Jekyll est installe :

```bash
gem install jekyll bundler
jekyll serve
```

Le site sera disponible sur :

```text
http://localhost:4000/pn_docs/
```

Si vous changez `baseurl`, l'adresse locale change aussi.
