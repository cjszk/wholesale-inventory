import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact
          path={['/products']}
          render={(props) => (
            <Layout
              navSelection={'Products'}
              key="products"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/warehouses']}
          render={(props) => (
            <Layout
              navSelection={'Warehouses'}
              key="warehouses"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/orders']}
          render={(props) => (
            <Layout
              navSelection={'Orders'}
              key="orders"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/customers']}
          render={(props) => (
            <Layout
              navSelection={'Customers'}
              key="customers"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/employees']}
          render={(props) => (
            <Layout
              navSelection={'Employees'}
              key="employees"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/product_orders']}
          render={(props) => (
            <Layout
              navSelection={'Product Orders'}
              key="product_orders"
              {...props}
            />
          )}
        />
        <Route 
          exact
          path={['/warehouse_inventory']}
          render={(props) => (
            <Layout
              navSelection={'Warehouse Inventory'}
              key="warehouse_inventory"
              {...props}
            />
          )}
        />
        <Redirect exact from="/" to="products" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;