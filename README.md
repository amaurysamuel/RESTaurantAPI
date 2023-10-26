API de gestion de restaurant
Ce projet fournit une API simple pour la gestion d'un restaurant. Il utilise Express pour le serveur HTTP et MySQL comme base de données.

Comment l'utiliser
Suiver les étapes suivantes pour lancer l'application :

Etape 1 : Clonez le dépôt GitHub.

Etape 2 : Installez les dépendances avec la commande npm -


npm install
Etape 3 : Ouvrez le fichier et veillez à mettre à jour les informations de la base de données pour qu'elles correspondent à votre environnement local MySQL. Les informations concernent l'hôte, l'utilisateur, le mot de passe et le nom de la base de données.

Etape 4 : Lancez le serveur, en utilisant la commande -


node nom_du_fichier.js
Votre server est maintenant en train de s'exécuter sur le port 3000 de votre local, pour tester cela, vous pouvez aller sur votre navigateur et taper http://localhost:3000.

Routes
L'API fournit plusieurs routes pour interagir avec les données :

/menus : Gérer les menus. Les requêtes HTTP supportées sont :
GET : obtenir une liste de tous les menus.
POST : ajouter un nouveau menu.
/menus/:id : Gérer un menu individuel. Les requêtes HTTP supportées sont :
GET : obtenir les détails du menu.
PUT : mettre à jour le menu.
DELETE : supprimer le menu.
/category : Gérer les catégories. Les requêtes HTTP supportées sont :
GET : obtenir une liste de toutes les catégories.
POST : ajouter une nouvelle catégorie.
/category/:id : Gérer une catégorie individuelle. Les requêtes HTTP supportées sont :
GET : obtenir les détails de cette catégorie.
PUT : mettre à jour cette catégorie.
DELETE : supprimer cette catégorie.
/formula : Gérer les formules. Les requêtes HTTP supportées sont :
GET : obtenir une liste de toutes les formules.
POST : ajouter une nouvelle formule.
/formula/:id : Gérer une formule individuelle. Les requêtes HTTP supportées sont :
GET : obtenir les détails de cette formule.
PUT : mettre à jour cette formule.
DELETE : supprimer cette formule.
Chaque route attend et retourne des données en format JSON. Jetez un coup d'oeil au code pour voir la structure exacte des données attendues.

Dépendances
Ce projet a été réalisé avec :

express
mysql
