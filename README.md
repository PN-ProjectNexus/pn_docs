# Project Nexus - Documentation FiveM

Documentation officielle des scripts, mappings et ressources FiveM de **Project Nexus**, compatible GitHub Pages.

## Structure

```text
_config.yml           # Configuration Jekyll
_data/navigation.yml  # Navigation du site
_layouts/             # Templates HTML
_includes/            # Partiels reutilisables
assets/css/style.css  # Styles du site
assets/js/main.js     # Recherche, theme, sidebar
categories/           # Contenu en Markdown
  pndoc/              # Documentation du template
index.md              # Page d'accueil
```

## Documentation actuelle

La categorie active est `PNDOC`. Elle documente le template :

- vue d'ensemble ;
- installation ;
- deploiement GitHub Pages ;
- structure ;
- ajout de futures documentations.

Template source :

https://github.com/PN-ProjectNexus/pn-docs_template/releases

## Ajouter une categorie

1. Creez un dossier dans `categories/` : `categories/ma-categorie/`
2. Ajoutez-y vos pages en Markdown avec `title:` en front matter.
3. Declarez la categorie dans `_data/navigation.yml`.

## Previsualisation locale

```bash
gem install jekyll bundler
jekyll serve
# http://localhost:4000/pn_docs/
```

## Deploiement GitHub Pages

Le site peut etre deploye via GitHub Pages depuis la branche `main`.

Dans GitHub :

1. Ouvrez `Settings`.
2. Ouvrez `Pages`.
3. Choisissez `Deploy from a branch`.
4. Selectionnez `main` et `/root`.
5. Enregistrez.

## Personnalisation

- **Theme** : modifiez les variables CSS dans `assets/css/style.css`.
- **Navigation** : editez `_data/navigation.yml`.
- **Contenu** : ajoutez ou modifiez les fichiers `.md` dans `categories/`.
