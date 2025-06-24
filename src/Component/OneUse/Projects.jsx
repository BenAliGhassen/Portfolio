import React from 'react';
import ProjectsCard from '../Reusable/ProjectsCard';
import medicapet from '../../images/medicapet.png';
import parking from '../../images/parkingSpots.png';
import messi from '../../images/messi.png';
import ratings from '../../images/rate1.png';
import bayer from '../../images/bayer.png';
import cine from '../../images/cine.png';
import pfe from '../../images/pfe.png';
import LM from '../../images/LM.png';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projetsData = t('projects.cards', { returnObjects: true });
  const projets = Array.isArray(projetsData) ? projetsData : Object.values(projetsData);

  const images = [
    parking,
    medicapet,
    pfe,
    messi,
    bayer,
    ratings,
    LM,
    cine,
  ];

  return (
    <div className="container" id="Projets">
      <h2 className="mb-4">{t("projects.title")}</h2>
      <div className="container d-flex flex-row flex-wrap">
        {projets.map((project, index) => (
          <ProjectsCard
            key={index}
            titre={project.titre}
            description={project.description}
            image={images[index]}
          />
        ))}
      </div>
    </div>
  );
}
