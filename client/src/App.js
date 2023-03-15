import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Arena from './components/pages/Arena';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<>
                <Navbar/>
              <AppContainer />
              </>}>
                <Route index element={<Home />} />
                <Route path="/Arena" element={<Arena />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/About" element={<About />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </ApolloProvider>
  );
}

export default App;

