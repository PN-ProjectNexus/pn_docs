---
title: Anti-Cheat
---

**Resource :** `pn_anticheat`  
**Version :** 1.2.0  
**Framework :** ESX / QBCore

## Fonctionnalités

- Détection de mods menus injectés en temps réel
- Protection contre les injections de code côté client (`ExecuteCommand`, etc.)
- Détection de godmode, spectateurs invisibles, speed hack
- Blacklist de models / weapons customs
- Logs Discord avec preuves (screenshot via screenshot-basic)
- Système d'auto-ban configurable

## Commandes

| Commande | Permission | Description |
|----------|-----------|-------------|
| `/ac_check [id]` | admin | Vérifier manuellement un joueur |
| `/ac_whitelist [id]` | superadmin | Ajouter un joueur à la whitelist |
| `/ac_ping` | admin | Test de latence anti-cheat |

## Configuration

```lua
Config = {
  AutoBan = true,
  BanReason = 'Anticheat - Detection de logiciel tiers',
  MaxWarnings = 3,
  DiscordWebhook = 'https://discord.com/api/webhooks/...',
  Detection = {
    GodMode = true,
    SpeedHack = { enabled = true, maxSpeed = 50.0 },
    VehicleTeleport = true,
    Injection = true,
    BlacklistedWeapons = {
      'WEAPON_RAILGUN',
      'WEAPON_HOMINGLAUNCHER',
    }
  }
}
```

## Logs Discord

![Aperçu logs Discord](https://via.placeholder.com/600x200/1e293b/94a3b8?text=Exemple+de+logs+Discord)

Le webhook envoie pour chaque détection : nom du joueur, ID, type de détection, screenshot, et timestamp.
