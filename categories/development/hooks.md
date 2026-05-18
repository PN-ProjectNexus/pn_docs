---
title: Hooks & Events
---

## Events clients

### pn_anticheat

```lua
-- Déclenché quand un joueur est banni par l'anti-cheat
AddEventHandler('pn_anticheat:onPlayerBanned', function(playerId, reason, detectionType)
  print(('%s banni pour %s (type: %s)'):format(playerId, reason, detectionType))
end)

-- Déclenché quand un joueur reçoit un avertissement
AddEventHandler('pn_anticheat:onPlayerWarned', function(playerId, reason, warningCount)
  if warningCount >= 3 then
    -- Action personnalisée
    DropPlayer(playerId, 'Banni après 3 avertissements')
  end
end)
```

### pn_vehicles

```lua
-- Déclenché après l'achat d'un véhicule
AddEventHandler('pn_vehicles:onVehiclePurchased', function(playerId, vehicleProps, price)
  TriggerEvent('my_shop:logPurchase', vehicleProps.plate, price)
end)

-- Déclenché quand un véhicule est supprimé
AddEventHandler('pn_vehicles:onVehicleDeleted', function(playerId, plate)
  -- Nettoyage personnalisé
end)
```

## Events serveur

```lua
-- Vérifier si un joueur possède un véhicule
exports.pn_vehicles:isOwner(playerId, plate)
-- → true / false

-- Obtenir les données d'un véhicule
exports.pn_vehicles:getVehicleData(plate)
-- → { owner, model, plate, ... }

-- Bannir manuellement un joueur via l'anti-cheat
exports.pn_anticheat:banPlayer(playerId, reason, duration)
```

## Hooks métier

```lua
-- Intercepter une vente de véhicule
Config.OnVehicleSell = function(playerId, targetId, vehicleProps, price)
  -- Ajouter une taxe de 5%
  local tax = price * 0.05
  return price - tax
end

-- Validation personnalisée avant achat
Config.CanPurchaseVehicle = function(playerId, vehicleModel, price)
  local job = exports['esx_jobs']:GetPlayerJob(playerId)
  if job.name == 'mechanic' then
    return true, nil  -- Les mécanos peuvent tout acheter
  end
  return true, nil
end
```
