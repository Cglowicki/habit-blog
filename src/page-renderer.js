import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const generatePage = page => {
  const componet = () => require(`./pages/${page}`).default

  try {
    return React.createElement(componet())
  } catch (err) {
    console.warn(err);
    return React.createElement(() => 404);
  }
}

export default function PageRenderer () {
  const {
    params: { page }
  } = useRouteMatch()

  return generatePage(page);
}