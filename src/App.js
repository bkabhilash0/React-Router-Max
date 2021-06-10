import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={() => <Redirect to="/quotes" />} exact />
        <Route path="/quotes" component={AllQuotes} exact />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
