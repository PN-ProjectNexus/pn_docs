---
title: Véhicules
---

**Resource :** `pn_vehicles`  
**Version :** 2.0.1  
**Framework :** ESX / QBCore

## Fonctionnalités

- Achat / vente de véhicules en concession
- Personnalisation complète (via LS Customs)
- Système de clés / portes à distance
- Coffre de véhicule par catégorie (poids / slots)
- Plaques d'immatriculation personnalisables
- Véhicules de fonction (police, EMS, mécanos)

## Commandes

| Commande | Description |
|----------|-------------|
| `/car` | Faire apparaître son véhicule |
| `/dv` | Supprimer le véhicule |
| `/keys [id]` | Donner les clés à un joueur |
| `/engine` | Allumer / éteindre le moteur |

## Catégories de véhicules

```lua
Config.VehicleCategories = {
  { name = 'low', label = 'Citadine', multiplier = 1.0 },
  { name = 'mid', label = 'Berline',   multiplier = 1.5 },
  { name = 'high', label = 'Sportive', multiplier = 2.5 },
  { name = 'suv', label = 'SUV',       multiplier = 2.0 },
  { name = 'moto', label = 'Moto',     multiplier = 1.8 },
}
```

## Coffre par type

| Type de véhicule | Slots | Poids max (kg) |
|------------------|-------|----------------|
| Citadine | 30 | 50 |
| Berline | 45 | 80 |
| Sportive | 20 | 30 |
| SUV | 60 | 120 |
| Moto | 10 | 15 |
