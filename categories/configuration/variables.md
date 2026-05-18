---
title: Variables serveur
---

Certains paramètres sont exposés via des ConVar FiveM pour une configuration sans redémarrage.

## ConVar disponibles

| Variable | Défaut | Description |
|----------|--------|-------------|
| `pn_anticheat_debug` | `false` | Mode debug anti-cheat |
| `pn_vehicles_default_price` | `10000` | Prix par défaut des véhicules |
| `pn_ui_locale` | `fr` | Langue de l'interface (`fr`, `en`, `es`, `de`) |
| `pn_hud_style` | `modern` | Style du HUD (`modern`, `minimal`, `classic`) |

## Dans `server.cfg`

```cfg
set pn_anticheat_debug true
set pn_vehicles_default_price 15000
set pn_ui_locale "en"
```

## Dans `config.lua` (surcharge possible)

```lua
Config.UseConVars = true  -- true = ConVar prioritaire, false = config.lua seul
```

## Variables d'environnement

Pour les hébergeurs supportant les `.env` (txAdmin v1.18+) :

```env
PN_ANTICHEAT_DEBUG=true
PN_VEHICLES_DEFAULT_PRICE=20000
PN_UI_LOCALE=en
```

> **⚠️** : les variables d'environnement ont la priorité la plus haute si `Config.UseConVars` est activé.
