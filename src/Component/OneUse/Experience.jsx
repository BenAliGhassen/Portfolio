import React from 'react';
import { useTranslation } from 'react-i18next';
import medianet from '../../images/medianet.png';
import medicapet from '../../images/medicapetLg.png';
import clickme from '../../images/clickme.png';
import clickme2 from '../../images/clickme2.png';
import CardComp from '../Reusable/Card';
import '../../Styles/HomeStyle/Experience/OrganizationHover.css';
import Swal from 'sweetalert2';

function Experience() {
  const { t, i18n } = useTranslation();

  const ExpDataRaw = t('Experience.cards', { returnObjects: true });
  const ExpData = Array.isArray(ExpDataRaw) ? ExpDataRaw : Object.values(ExpDataRaw);

  const images = [medicapet, medianet];
  const pageLanguage = i18n.language;

  const Fnalert = (index) => {
    index === 0
      ? Swal.fire(t('Organization.medicapet'))
      : Swal.fire(t('Organization.medianet'));
  };

  return (
    <div className="container" id="Experience">
      <h2 className="m-4">Experience</h2>

      <div className="slider-container d-flex justify-content-center flex-wrap">
        {ExpData.map((exp, index) => (
          <div
            key={index}
            className="organization"
            style={{ margin: '10px', position: 'relative' }}
            onClick={() => Fnalert(index)}
          >
            <CardComp
              title={exp.titre}
              description={exp.description}
              organi={images[index]}
              date={exp.date}
            />

            {pageLanguage === 'fr' ? (
              <img
                src={clickme2}
                alt="Cliquez pour plus d'infos"
                className="hover-image"
              />
            ) : (
              <img
                src={clickme}
                alt="Click me to see more infos"
                className="hover-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
