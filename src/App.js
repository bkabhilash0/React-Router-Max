import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" component={() => <Redirect to="/quotes" />} exact />
          <Route path="/quotes" component={AllQuotes} exact />
          <Route path="/quotes/:quoteId" component={QuoteDetail} />
          <Route path="/new-quote" component={NewQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
