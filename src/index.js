import React from 'react'
import {createRoot} from 'react-dom/client'
import MyNotesApp from './MyNotesApp'

const root = createRoot(document.getElementById('root'))
root.render(<MyNotesApp/>)