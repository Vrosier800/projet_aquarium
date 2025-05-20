# 🐠 Journal d'Aquarium

Une application de bureau pour suivre l'évolution de votre aquarium récifal : poissons, coraux, paramètres d'eau, notes, etc.

Développé en **Symfony (API)** et **Electron (frontend JS/HTML/CSS)**.

---

## 🧱 Stack technique

- **Frontend** : Electron (Vanilla JS, HTML, CSS)
- **Backend** : Symfony 7.2 (API REST)
- **Base de données** : MySQL
- **ORM** : Doctrine
- **Format API** : JSON-LD via API Platform

---
## 🏢 Architecture du projet
```
/backend
  └── Symfony (API REST)
      ├── src/Entity
              ├── Fish.php
              ├── Coral.php
              ├── Parameter.php
              ├── Note.php
              ├── AquariumTank.php
              └── ...


/frontend
  ├── main.js                # Point d'entrée Electron
  ├── public/index.html      # Page HTML principale
  ├── src/
      ├── App.js
      ├── js/                # Scripts JS (scripts js)
      ├── css/               # Feuilles de style
      ├── api/               # Requêtes API
          └── aquariumTank/
              ├── getAquariumTank.js
              └── postAquariumTank.js
          └── ...
      ├── pages /            # Pages à afficher en React
      └── assets/     
```
---

## 💻 Développé par 
Victor Rosier – [Développeur Web Junior]

Projet personnel de suivi d'aquarium récifal, pour se former à Symfony + Electron.
