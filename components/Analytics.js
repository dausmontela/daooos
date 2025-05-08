import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const AnalyticsGA = () => {
  useEffect(() => {
    ReactGA.initialize('G-HWD08FX0W2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default AnalyticsGA;