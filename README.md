# Portfolio en Next.js

## Introduction
Ce projet est un portfolio personnel réalisé avec le framework **Next.js**.  
Il a pour but de mettre en avant mes compétences et mes projets, et servira de preuve lors de la recherche d’emploi ou pour d’autres opportunités professionnelles.

## Technologies utilisées
- **Next.js** : Framework principal
- **React Redux** : Gestion d’état pour l'authentification et les témoignages
- **Tailwind CSS** : Styling rapide et responsive
- **React Hook Form** : Gestion et validation des formulaires
- **Redux Toolkit** : Simplification de Redux
- **NextAuth (optionnel)** : Gestion simplifiée de l'auth (facultatif si utilisé)

## Fonctionnalités principales
- **Page d’accueil** : Présentation avec photo, description et compétences.
- **Navigation** : 
  - Entête avec liens vers toutes les pages du portfolio
  - Pied de page contenant les liens vers mon GitHub et LinkedIn.
- **Projets** :
  - Une page de détails pour chaque projet avec description et liste des technologies utilisées (2 à 3 projets).
- **Authentification** :
  - Page d’inscription
  - Page de connexion
  - Gestion d’état avec Redux (sans backend)
  - Validation des formulaires avec affichage d’erreurs en rouge.
- **Témoignages** :
  - Page pour afficher les témoignages
  - Page pour ajouter / modifier un témoignage
  - Gestion des témoignages via Redux (sans backend)
- **Protection des pages** :
  - Seules les pages d’inscription et de connexion sont publiques.
  - Toutes les autres pages sont protégées et accessibles uniquement après connexion.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone [URL_DU_DEPOT]
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le projet en mode développement :
   ```bash
   npm run dev
   ```

Le projet sera disponible sur `http://localhost:3000/`.

## Remarques
- Ce projet est 100% frontend : aucun backend n'est nécessaire.
- Toutes les données d’utilisateur et de témoignages sont stockées temporairement dans le store Redux.
