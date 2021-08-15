import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import WhatWeOffer from '../pages/WhatWeOffer'
import Prices from '../pages/Prices/index';
import Contact from '../pages/Contact/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/what-we-offer" component={WhatWeOffer} />
      <Route path="/prices" component={Prices} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}
