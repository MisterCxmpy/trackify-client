import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom';
import { FormProvider } from './contexts/FormContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <FormProvider>
      <App />
    </FormProvider>
  </Router>
)
