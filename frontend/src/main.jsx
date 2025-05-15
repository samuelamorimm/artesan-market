import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './pages/Inicio'
import Rotas from './route'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Rotas></Rotas>
    </StrictMode>
)
