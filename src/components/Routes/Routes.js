import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import Account from '../Account/Account'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/product" component={Product} />
            <Route path="/account" component={Account} />
        </Switch>
    )
}

export default Routes