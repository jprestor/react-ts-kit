import React, { useRef } from 'react';

import { AnchorLink } from '../anchor-link';

import '../../assets/styles/style.scss';
import './page-header.scss';
import brandLogo from '../../assets/images/brand.svg';

const PageHeader: React.FC = () => {
  return (
    <header className="page-header">
      <div className="container">
        <ul className="page-header__nav">
          <li className="page-header__nav-item  page-header__nav-item--brand">
            <img className="page-header__nav-brand" src={brandLogo} alt="" />
          </li>
          <li className="page-header__nav-item">
            <AnchorLink className="link" target="first-static">
              Текстовые блоки
            </AnchorLink>
          </li>
          <li className="page-header__nav-item">
            <AnchorLink className="link" target="gallery-section">
              Галерея
            </AnchorLink>
          </li>
          <li className="page-header__nav-item">
            <AnchorLink className="link" target="form-section">
              Форма с приветами
            </AnchorLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { PageHeader };
