---
title: Personnalisation
---

Adaptez chaque script PN à l'univers de votre serveur.

## Thème des UI

Les composants NUI (`pn_ui`, `pn_hud`) utilisent des variables CSS. Créez un thème sur mesure :

```css
:root {
  --primary: #f97316;        /* Orange — couleur principale */
  --primary-hover: #ea580c;
  --background: rgba(0, 0, 0, 0.9);
  --card-bg: rgba(30, 30, 30, 0.95);
  --text: #ffffff;
  --border-radius: 12px;
}
```

Placez le fichier dans `pn_ui/html/css/theme.css` — il est chargé après `main.css`.

## Traductions

Ajoutez ou modifiez les langues dans `pn_*/locales/` :

```lua
-- locales/fr.lua
Locales['fr'] = {
  vehicle_bought = 'Vous avez acheté le véhicule %s pour $%s',
  vehicle_sold = 'Vous avez vendu le véhicule pour $%s',
  not_enough_money = 'Vous n\'avez pas assez d\'argent',
}
```

## Sons

Remplacez les fichiers audio dans `pn_ui/html/assets/sounds/` :

```
sounds/
├── notification.wav
├── error.wav
├── success.wav
└── click.wav

# Formats supportés : .wav, .mp3, .ogg
```

## Règles métier

Modifiez les comportements via les blocs `Config` :

```lua
-- Limiter les véhicules achetables par joueur
Config.MaxVehiclesPerPlayer = 5

-- Délai avant réutilisation d'une commande (cooldown)
Config.CommandCooldowns = {
  car = 10,     -- 10 secondes
  dv = 5,
  engine = 3,
}
```
