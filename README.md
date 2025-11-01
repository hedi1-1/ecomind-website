# 🌿 EcoMind - Templates HTML/CSS/JS

## 📋 Description du projet

Templates front-office et back-office pour la plateforme **SynthWell** - Innovation Technologique & Développement Durable.

Une plateforme web intelligente intégrant l'IA et le développement durable pour améliorer la qualité de vie tout en préservant notre planète.

---

## 🎨 Charte Graphique

### Couleurs Principales
- **Vert** (`#10b981`) - Durabilité / Écologie
- **Bleu** (`#3b82f6`) - Technologie / Innovation
- **Blanc** (`#ffffff`) - Clarté / Simplicité

### Logo
Fusion entre une feuille (🌿) et une puce électronique - symbole de la rencontre entre nature et innovation.

---

## 📁 Structure des fichiers

```
html-template/
│
├── index.html              # Front-office (partie client)
├── admin.html              # Back-office (administration)
│
├── css/
│   ├── front-office.css    # Styles front-office
│   └── back-office.css     # Styles back-office (thème sombre)
│
├── js/
│   ├── front-office.js     # JavaScript front-office
│   └── back-office.js      # JavaScript back-office
│
└── assets/                 # Images, logos, etc.
```

---

## 🎯 FRONT-OFFICE (index.html)

### Caractéristiques
- **Design moderne** et éco-responsable
- **Animations fluides** et interactives
- **Thème clair** avec dégradés verts/bleus
- **Responsive** - s'adapte à tous les écrans

### Sections incluses
1. **Hero Section** - Présentation principale avec stats
2. **Features** - 4 fonctionnalités clés avec icônes
3. **Dashboard Preview** - Aperçu du tableau de bord utilisateur
4. **Recommendations** - Recommandations IA personnalisées
5. **Statistics** - Impact écologique en chiffres
6. **CTA** - Appel à l'action
7. **Footer** - Liens et réseaux sociaux

### Fonctionnalités JavaScript
- ✅ Navigation smooth scroll
- ✅ Animations au scroll (Intersection Observer)
- ✅ Graphiques Chart.js avec données dynamiques
- ✅ Compteurs animés pour les statistiques
- ✅ Effets parallax
- ✅ Système de notifications
- ✅ Effets ripple sur les boutons

### Comment voir le template
```bash
# Ouvrez simplement index.html dans votre navigateur
# Ou utilisez un serveur local (recommandé)
```

---

## 🖥️ BACK-OFFICE (admin.html)

### Caractéristiques
- **Thème sombre professionnel** (`#0f172a`)
- **Dashboard complet** avec statistiques
- **Graphiques interactifs** (Chart.js)
- **Gestion des utilisateurs**
- **Système d'activité en temps réel**

### Sections incluses
1. **Sidebar** - Navigation avec 8 sections
2. **Top Bar** - Recherche, notifications, messages
3. **Stats Cards** - 4 cartes de statistiques animées
4. **Charts** - Graphiques ligne & donut
5. **Activity Feed** - Flux d'activités récentes
6. **Users Table** - Tableau de gestion utilisateurs
7. **System Status** - État du système avec barres de progression

### Fonctionnalités JavaScript
- ✅ Sidebar responsive (mobile menu)
- ✅ Graphiques dynamiques Chart.js
- ✅ Recherche dans les tableaux
- ✅ Système de notifications
- ✅ Animations de compteurs
- ✅ Mises à jour en temps réel simulées
- ✅ Actions sur les utilisateurs (voir/éditer)
- ✅ Export de données
- ✅ Raccourcis clavier (Ctrl+K pour recherche)

### Comment voir le template
```bash
# Ouvrez admin.html dans votre navigateur
```

---

## 🚀 Installation & Utilisation

### Méthode 1: Ouverture directe
1. Double-cliquez sur `index.html` ou `admin.html`
2. Le template s'ouvre dans votre navigateur par défaut

### Méthode 2: Serveur local (Recommandé)

#### Avec Python
```bash
# Python 3
cd html-template
python -m http.server 8000

# Puis ouvrez: http://localhost:8000/index.html
# Ou: http://localhost:8000/admin.html
```

#### Avec Node.js (http-server)
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
cd html-template
http-server

# Ouvrez: http://localhost:8080/index.html
```

#### Avec PHP
```bash
cd html-template
php -S localhost:8000

# Ouvrez: http://localhost:8000/index.html
```

#### Avec VS Code Live Server
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html` ou `admin.html`
3. Sélectionner "Open with Live Server"

---

## 📦 Dépendances externes

Les templates utilisent des CDN (aucune installation requise):

### Font Awesome 6.4.0
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```
**Usage:** Icônes (🌿 leaf, 📊 chart, 👤 user, etc.)

### Chart.js
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```
**Usage:** Graphiques interactifs

---

## 🎨 Personnalisation

### Changer les couleurs
Modifiez les variables CSS dans `:root`:

**Front-office** (`front-office.css`):
```css
:root {
    --color-primary: #10b981;    /* Vert principal */
    --color-secondary: #3b82f6;  /* Bleu principal */
    --color-accent: #06b6d4;     /* Cyan accent */
}
```

**Back-office** (`back-office.css`):
```css
:root {
    --bg-primary: #0f172a;       /* Fond sombre */
    --color-primary: #10b981;    /* Vert accent */
    --color-secondary: #3b82f6;  /* Bleu accent */
}
```

### Modifier les données des graphiques
Éditez les fichiers JavaScript:
- `front-office.js` - ligne ~100 (impactChart)
- `back-office.js` - ligne ~50 (usersChart) et ~120 (impactChart)

---

## 📱 Responsive Design

### Breakpoints
- **Desktop:** > 968px
- **Tablet:** 640px - 968px
- **Mobile:** < 640px

Les deux templates sont **100% responsive** et s'adaptent automatiquement à tous les écrans.

---

## ✨ Fonctionnalités IA

### Front-office
- Analyse personnalisée des habitudes
- Recommandations intelligentes basées sur l'IA
- Tableaux de bord interactifs
- Suivi de l'impact écologique

### Back-office
- Dashboard de gestion IA
- Statistiques en temps réel
- Analyse des comportements utilisateurs
- Génération automatique de rapports

---

## 🌍 Développement Durable

### Approche éco-responsable
- ✅ Code optimisé et léger
- ✅ Images compressées (à ajouter)
- ✅ Animations performantes (CSS + requestAnimationFrame)
- ✅ Chargement lazy des ressources
- ✅ Compatibilité hébergement vert

---

## 🔧 Intégration Backend

Pour intégrer avec un backend:

### API Endpoints suggérés
```javascript
// Front-office
GET  /api/user/profile        // Profil utilisateur
GET  /api/user/stats          // Statistiques personnelles
GET  /api/recommendations     // Recommandations IA
POST /api/user/action         // Enregistrer une action

// Back-office
GET  /api/admin/dashboard     // Stats dashboard
GET  /api/admin/users         // Liste utilisateurs
GET  /api/admin/analytics     // Analyses IA
PUT  /api/admin/user/:id      // Modifier utilisateur
```

### Exemple d'intégration
```javascript
// Dans front-office.js ou back-office.js
async function fetchDashboardData() {
    try {
        const response = await fetch('/api/admin/dashboard');
        const data = await response.json();
        updateDashboard(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}
```

---

## 📊 Modules du Projet

### Répartition par étudiant
Chaque étudiant gère un module avec 2 entités reliées:

1. **Module Utilisateur** - Profil, suivi, interactions
2. **Module IA** - Analyse et recommandations
3. **Module Admin** - Gestion, statistiques
4. **Module Environnemental** - Impact, défis, durabilité

---

## 🎓 Pour les étudiants

### Objectifs pédagogiques
- ✅ HTML5 sémantique
- ✅ CSS3 avancé (Grid, Flexbox, Animations)
- ✅ JavaScript ES6+ (async/await, modules)
- ✅ Chart.js pour visualisations
- ✅ Responsive Web Design
- ✅ UX/UI moderne
- ✅ Accessibilité (ARIA)

### Améliorations possibles
- [ ] Ajouter un système d'authentification
- [ ] Intégrer une vraie API backend
- [ ] Ajouter plus de pages (profil, settings, etc.)
- [ ] Implémenter un mode sombre/clair (toggle)
- [ ] Ajouter des tests unitaires
- [ ] Optimiser les performances
- [ ] Ajouter PWA (Progressive Web App)

---

## 🐛 Support & Bugs

Si vous rencontrez des problèmes:
1. Vérifiez la console du navigateur (F12)
2. Assurez-vous que les CDN sont accessibles
3. Testez sur un autre navigateur
4. Vérifiez que JavaScript est activé

---

## 📄 Licence

Ce projet est créé à des fins éducatives pour le cours de développement web.

---

## 👥 Équipe

Projet réalisé dans le cadre de la thématique **"Innovation technologique"** avec une approche moderne, responsable et orientée vers l'avenir.

---

## 🚀 Prochaines étapes

1. ✅ Templates HTML/CSS/JS créés
2. ⏳ Intégration backend (PHP/Node.js)
3. ⏳ Base de données (MySQL/MongoDB)
4. ⏳ API IA pour recommandations
5. ⏳ Déploiement sur hébergement vert

---

**Conçu avec ❤️ pour la planète** 🌍
