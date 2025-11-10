import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { usePortfolioDataSource } from '../hooks/usePortfolioData';

const PortfolioDataContext = createContext(null);

export function PortfolioDataProvider({ children }) {
  const value = usePortfolioDataSource();
  return (
    <PortfolioDataContext.Provider value={value}>
      {children}
    </PortfolioDataContext.Provider>
  );
}

PortfolioDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function usePortfolioData() {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error(
      'usePortfolioData must be used within a PortfolioDataProvider',
    );
  }
  return context;
}
