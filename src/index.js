import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App"
import "./index.css"

// create an instance of ApolloClient
// pass a configuration object to the constructor
const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/clbq4ju4z13gl01uuf7xi0ulm/master",
  // create an instance of InMemoryCache for caching query results
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById("root"))

// wrap App in ApolloProvider and inject the client
// App can access the retrieve data via useQuery hook
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
