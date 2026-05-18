# PN Project Nexus — Documentation FiveM

Documentation officielle des scripts FiveM de **Project Nexus**, compatible GitHub Pages.

## Structure

```
├── _config.yml           # Configuration Jekyll
├── _data/navigation.yml  # Navigation (ajoutez vos catégories ici)
├── _layouts/             # Templates HTML
├── _includes/            # Partiels réutilisables
├── assets/css/style.css  # Styles modernes (clair/sombre)
├── assets/js/main.js     # Recherche, thème, sidebar
├── categories/           # Contenu en Markdown
│   ├── getting-started/
│   ├── resources/
│   ├── configuration/
│   └── development/
└── index.md              # Page d'accueil
```

## Ajouter une catégorie

1. Créez un dossier dans `categories/` : `categories/ma-categorie/`
2. Ajoutez-y vos pages en Markdown (avec `title:` en front matter)
3. Déclarez la catégorie dans `_data/navigation.yml`

## Prévisualisation locale

```bash
# Avec Ruby / Jekyll installé :
gem install jekyll bundler
jekyll serve
# → http://localhost:4000/pn_docs/
```

## Déploiement GitHub Pages

Le site est automatiquement déployé via GitHub Pages sur la branche `main`.  
Le repo est configuré sur `https://github.com/PN-ProjectNexus/pn_docs`.

## Personnalisation

- **Thème** : modifiez les variables CSS dans `assets/css/style.css` (section `:root`)
- **Navigation** : éditez `_data/navigation.yml`
- **Contenu** : ajoutez/modifiez les fichiers `.md` dans `categories/`
