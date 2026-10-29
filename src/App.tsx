import { useState } from 'react'

import './App.css'
import Cabecalho from './Cabecalho'
import Chamados from './Chamados'
import Estoque from './Estoque'
import Inicio from './Inicio'
import Nav from './Nav'
import Orcamentos from './Orcamentos'
import FornecedoresCompras from './FornecedoresCompras'
import EquipeEscalas from './EquipeEscalas'
import TarefasDemandas from './TarefasDemandas'
import type { Modulo } from './types'

export default function App() {
  const [modulo, setModulo] = useState<Modulo>('inicio')

  return (
    <div className="app-shell">
      <Nav moduloAtual={modulo} navegar={setModulo} />

      <main className="main-content">
        <Cabecalho />

        {modulo === 'inicio' && <Inicio navegar={setModulo} />}
        {modulo === 'chamados' && <Chamados />}
        {modulo === 'orcamentos' && <Orcamentos />}
        {modulo === 'estoque' && <Estoque />}
        {modulo === 'fornecedores' && <FornecedoresCompras />}
        {modulo === 'equipe' && <EquipeEscalas />}
        {modulo === 'tarefas' && <TarefasDemandas />}

        <footer className="app-footer">
          <span>Livraria Cultural</span>
          <span>Plataforma de gestão integrada · 2026</span>
        </footer>
      </main>
    </div>
  )
}
