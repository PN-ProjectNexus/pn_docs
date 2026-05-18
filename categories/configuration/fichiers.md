---
title: Fichiers de configuration
---

Chaque script PN expose sa configuration via un fichier `config.lua` à sa racine.

## Structure type

```lua
-- config.lua — pn_anticheat
Config = {}

Config.AutoBan = true
Config.BanReason = 'Anticheat - Detection de logiciel tiers'
Config.MaxWarnings = 3

Config.Detection = {
  GodMode = true,
  SpeedHack = {
    enabled = true,
    maxSpeed = 50.0,
  },
  BlacklistedWeapons = {
    'WEAPON_RAILGUN',
  }
}

Config.Webhooks = {
  discord = 'https://discord.com/api/webhooks/...',
  screenshot = true,
}
```

## Emplacement des fichiers

```
resources/pn_anticheat/
├── config.lua        ← Configuration principale
├── config_esx.lua    ← Surcharges ESX (optionnel)
├── config_qb.lua     ← Surcharges QB (optionnel)
├── client/
├── server/
└── fxmanifest.lua
```

## Priorité des fichiers

1. `config.lua` — chargé en premier
2. `config_esx.lua` ou `config_qb.lua` — surcharge selon le framework détecté

> **💡 Astuce** : si vous utilisez ESX, ne modifiez que `config_esx.lua` — il écrase les valeurs de `config.lua`. Cela facilite les mises à jour.
