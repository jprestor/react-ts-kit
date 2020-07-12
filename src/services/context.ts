import React from 'react';

const DataServiceContext = React.createContext<Partial<{}>>({});
/* Обходим ошибку Typescript - An argument for 'defaultValue' was not provided */

const { Provider: DataServiceProvider } = DataServiceContext;

export { DataServiceContext, DataServiceProvider };
