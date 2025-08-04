import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Правильный импорт
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// 1. Получаем корневой элемент
const rootElement = document.getElementById('root')
const root = createRoot(rootElement) // Создаем корень приложения

// 2. Рендерим приложение
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)