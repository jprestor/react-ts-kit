import React, { Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataServiceContext } from '../../services';
import { fetchData } from '../../actions';

import { PageHeader } from '../page-header';
import { PageFooter } from '../page-footer';
import {
  IntroSection,
  FirstStatic,
  SecondStatic,
  ThirdStatic,
  GallerySection,
  FormSection,
} from '../sections';

import { Row } from '../row';

import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spinner';

import { Props, MapStateToProps, MapDispatchToProps } from './types';

import './app.scss';

const App: React.FC = () => {
  return (
    <Fragment>
      <PageHeader />
      <IntroSection />
      <FirstStatic />
      <Row
        main={[<SecondStatic />, <ThirdStatic />]}
        aside="Рекламный макет, согласно Ф.Котлеру, развивает связанный процесс
            стратегического планирования. Воздействие на потребителя,
            пренебрегая деталями, настроено позитивно. Медийная связь тормозит
            BTL."
        stickyAside
        className="container"
      />
      <GallerySection />
      <FormSection />
      <PageFooter />
    </Fragment>
  );
};

const AppContainer: React.FC<Props> = ({ loading, error, fetchData }) => {
  const { getData } = useContext<any>(DataServiceContext);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <App />;
};

const mapStateToProps: MapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps: MapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
