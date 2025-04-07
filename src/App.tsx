import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router'
import { Toaster } from 'sonner'

function App() {

  return (
    <BrowserRouter>
      <Router />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
