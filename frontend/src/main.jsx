import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GridBackground from "./components/ui/GridBackground.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import  createUploadLink  from 'apollo-upload-client/createUploadLink.mjs';
import './index.css'

const client = new ApolloClient({
	// TODO => Update the uri on production
	uri:  "http://localhost:4000/graphql", // the URL of our GraphQL server.
	cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
  link: createUploadLink({uri: 'http://localhost:4000/graphql'}),
	credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
			<GridBackground>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>    
			</GridBackground>
		</BrowserRouter>
  </React.StrictMode>,
)
