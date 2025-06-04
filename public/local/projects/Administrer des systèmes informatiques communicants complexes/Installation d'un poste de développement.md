## Objectif du projet

Mettre en place un poste de travail fonctionnel pour un développeur dans le cadre d’une mission confiée par une ESN. Ce poste servira à automatiser le traitement de fichiers (textes, images, tableaux) en vue de leur intégration dans un site Web dédié aux Jeux Olympiques de Paris 2024.

## Organisation de l'équipe
Le projet est réalisé en groupe de 4. Chaque membre avait un rôle dans la rédaction des livrables et dans les manipulations techniques.

## Étapes de réalisation
1. **Détermination des attentes**  
   - Analyse du jeu de fichiers fourni (images, textes, tableaux) et identification des besoins de conversion et de traitement.
2. **Choix et test des outils**  
   - Utilisation de Docker et d’images spécifiques (excel2csv, imagick, html2pdf) pour convertir les fichiers dans des formats adaptés au Web.
3. **Conception de la chaîne de traitement**  
   - Écriture de scripts (Bash ou PHP) pour automatiser les conversions dans des conteneurs Docker.
4. **Adaptation continue**  
   - Prise en compte de nouveaux fichiers ou de modifications de fichiers et mise à jour de la chaîne de traitement.
5. **Livraison des livrables**  
   - Rédaction de documents PDF décrivant les méthodes utilisées, les choix techniques, et archivage des fichiers traités.

## Outils utilisés
- Linux
- Langages Bash, PHP
- Docker
- **Images Docker** :
  - 'excel2csv'
  - 'imagick'
  - 'html2pdf'
- Filtres Unix : 'grep', 'cut', 'awk', etc.
- nano

## Livrables
- Tableau d’analyse des fichiers
- Archive contenant les fichiers convertis et un PDF explicatif
- Scripts de traitement automatisé
- Rapport décrivant la chaîne de traitement

## Compétences mobilisées

- **AC 13.01** : Identifier les différents composants (matériels et logiciels) d'un système numérique  
  - Analyse du poste, installation d’outils et manipulation des conteneurs Docker.
- **AC 13.02** : Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs  
  - Utilisation du terminal, gestion de scripts, interaction avec des environnements virtuels.
- **AC 13.03** : Installer et configurer un système d’exploitation et des outils de développement  
  - Mise en place de l’environnement de développement à l’aide de Docker et de ses images spécifiques.