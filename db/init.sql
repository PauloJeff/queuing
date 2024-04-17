CREATE DATABASE IF NOT EXISTS queue;

use queue;

CREATE TABLE IF NOT EXISTS `Users`( `id` int NOT NULL AUTO_INCREMENT, `name` text, `email` text, `age` int DEFAULT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `deleted_at` datetime DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
