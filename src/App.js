import React from 'react'
import { CroodsProvider } from 'croods'
import { Router, navigate } from '@reach/router'
import Home from './Posts'
import PostInfo from './Posts/Info'
import PostCreate from './Posts/Create'
import PostEdit from './Posts/Edit'

function App() {
  return (
    <CroodsProvider
      debugRequests
      debugActions
      baseUrl="https://jsonplaceholder.typicode.com"
      parseResponse={response => response.data}
      renderLoading={() => <div>Loading do Provider...</div>}
      renderError={error => <span style={{ color: 'red' }}>{error}</span>}
      after4xx={code => code === 404 && navigate('/not-found')}
      after5xx={code => code === 503 && navigate('/service-unavailable')}
    >
      <AppContent />
    </CroodsProvider>
  )
}

const AppContent = props => (
  <Router>
    <Home path="/" {...props} />
    <PostInfo path="/posts/:id" {...props} />
    <PostCreate path="/posts/create" {...props} />
    <PostEdit path="/posts/:id/edit" {...props} />
    <NotFound path="/not-found" {...props} />
    <ServiceUnavailable path="/service-unavailable" {...props} />
  </Router>
)

const NotFound = () => <div>Recurso não encontrado</div>
const ServiceUnavailable = () => <div>Serviço indisponivel no momento</div>

export default App
