import React from 'react';
import ProjectsCard from '../Reusable/ProjectsCard';
import medicapet from '../../images/medicapet.png';
import parking from '../../images/parkingSpots.png';
import messi from '../../images/messi.png'
import ratings from '../../images/rate1.png'
import bayer from '../../images/bayer.png'
import cine from '../../images/cine.png'
import pfe from '../../images/pfe.png'
import LM from '../../images/LM.png'
export default function Projects() {
  const titres = [
    'Parking Spot Detection',
    'Medicapet',
    'E-Commerce',
    'Messi vs Betis',
    'Euro 2024 Stats',
    'Football Rating Model',
    'Littel Lemon',
    'Cinema Seats Reservation',
  ];

  const descriptions = [
    `Système intelligent de détection de places de parking disponibles à partir d’images capturées.
    Entraînement d’un modèle de deep learning pour identifier les emplacements libres..
    Technologies : Python, OpenCV,`,

    `Application web de gestion des factures, fiches clients et consultations.
    Implémentation d’un système de prise de rendez-vous en ligne.
    Hébergement et déploiement sur Hostinger.
    Maintenance et amélioration continue.
    Technologies : ReactJS, Laravel, MySQL, Git.`,

    
    
    `Plateforme e-commerce pour automatiser les
    commandes et améliorer l’expérience client.
    Intégration d’un module NLP (traitement automatique du langage) pour
    personnaliser les recommandations produits.
    Technologies : ReactJS, Laravel, MongoDB, Flask, Scikit-learn,Git`,
    
    
    `Analyse des performances de Lionel Messi contre le Real Betis.
    Visualisations dynamiques et responsive.
    Technologies : python`,
    
    `Application web affichant les statistiques de l'Euro 2024 en temps réel.
    Technologies : python,stramlit`,
    
    `Modèle de notation des performances de joueurs de football basé sur des critères statistiques..
    Présentation visuelle des résultats dans un tableau.
    Technologies : Python, Pandas, Scikit-learn, Matplotlib.`,
    
    `Projet basé sur le défi Frontend Mentor "Little Lemon".
    Création d'une interface de restaurant avec menu, réservation et contact.
    Approche centrée sur le responsive design et la modularité.
    Technologies : ReactJS, CSS.`,

    `Application de réservation de sièges de cinéma simulée.
    Interface interactive permettant aux utilisateurs de choisir et réserver leurs places.
    Utilisation de JavaScript pour la logique et le DOM pour l'affichage dynamique.
    Technologies : HTML, CSS, JavaScript.`,
  ];

  const images = [
    parking,
    medicapet,
    pfe,
    messi,
    bayer,
    ratings,
    LM,
    cine,
  ]
  return (
    <div className="container">
      <h2 className="mb-4">Projets</h2>
      <div className="container d-flex flex-row flex-wrap">
        {titres.map((titre, index) => (
          <ProjectsCard
            key={index}
            titre={titre}
            description={descriptions[index]}
            image={images[index]}
          />
        ))}
      </div>
    </div>
  );
}
