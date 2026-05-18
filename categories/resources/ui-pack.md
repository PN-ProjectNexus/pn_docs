---
title: UI Pack
---

**Resource :** `pn_ui`  
**Version :** 1.0.0  
**Framework :** Indépendant (NUI)

## Composants inclus

- **Menu principal** — Interface stylisée avec animations fluides
- **Inventaire visuel** — Grille responsive avec drag & drop
- **Notifications** — Système de notifications personnalisables
- **Loader** — Écran de chargement animé avec tips
- **HUD** — Barre de vie, soif, faim, argent (compatible `pn_hud`)

## Personnalisation

Les fichiers UI se trouvent dans `pn_ui/html/` :

```
pn_ui/html/
├── index.html
├── css/
│   ├── main.css
│   ├── inventory.css
│   └── menu.css
├── js/
│   ├── app.js
│   └── inventory.js
└── assets/
    ├── fonts/
    └── images/
```

### Couleurs

Modifiez les variables CSS dans `main.css` :

```css
:root {
  --primary: #6366f1;
  --secondary: #06b6d4;
  --background: rgba(15, 23, 42, 0.95);
  --text: #f1f5f9;
  --danger: #ef4444;
  --success: #10b981;
}
```

### Exports NUI

```lua
-- Ouvrir le menu
exports.pn_ui:openMenu('main')

-- Notification
exports.pn_ui:notify({
  type = 'success',
  message = 'Achat effectué avec succès',
  duration = 3000
})
```

## Prévisualisation

Les notifications supportent 4 types : `success`, `error`, `info`, `warning` avec des icônes et animations distinctes.
