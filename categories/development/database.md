---
title: Base de données
---

Les scripts PN utilisent **oxmysql** pour toutes les interactions avec la base de données.

## Tables

### pn_anticheat

```sql
CREATE TABLE IF NOT EXISTS `pn_bans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(60) NOT NULL,
  `reason` text NOT NULL,
  `detection_type` varchar(50) DEFAULT NULL,
  `banned_by` varchar(60) DEFAULT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `identifier` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### pn_vehicles

```sql
CREATE TABLE IF NOT EXISTS `pn_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(60) NOT NULL,
  `model` varchar(60) NOT NULL,
  `plate` varchar(12) NOT NULL UNIQUE,
  `props` longtext DEFAULT NULL,
  `garage` varchar(50) DEFAULT 'public',
  `impounded` tinyint(1) DEFAULT 0,
  `price` int(11) DEFAULT 0,
  `purchase_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `owner` (`owner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Requêtes courantes

```lua
-- Récupérer les véhicules d'un joueur
MySQL.query('SELECT * FROM pn_vehicles WHERE owner = ?', { identifier },
  function(results)
    for _, v in ipairs(results) do
      print(v.plate, v.model)
    end
  end
)

-- Ajouter un bans
MySQL.insert('INSERT INTO pn_bans (identifier, reason, detection_type, banned_by) VALUES (?, ?, ?, ?)',
  { identifier, reason, detectionType, adminId })
```

## Migration

Les migrations SQL se trouvent dans `sql/migrations/` et suivent le format `migration-v{from}-v{to}.sql`. Appliquez-les dans l'ordre lors des mises à jour.
