export type Modulo =
  | 'inicio'
  | 'chamados'
  | 'orcamentos'
  | 'estoque'
  | 'fornecedores'
  | 'equipe'
  | 'tarefas'

export type Prioridade = 'Baixa' | 'Média' | 'Alta' | 'Urgente'
export type StatusChamado = 'Aberto' | 'Em andamento' | 'Encerrado'
export type OrigemChamado = 'Interno' | 'Cliente'

export type Acompanhamento = {
  id: string
  texto: string
  data: string
}

export type Chamado = {
  id: string
  titulo: string
  solicitante: string
  origem: OrigemChamado
  prioridade: Prioridade
  descricao: string
  status: StatusChamado
  criadoEm: string
  acompanhamentos: Acompanhamento[]
}

export type Categoria = 'Livros' | 'Papelaria' | 'Insumos' | 'Outros'
export type TipoMovimentacao = 'Entrada' | 'Saída'

export type Produto = {
  id: string
  nome: string
  categoria: Categoria
  quantidade: number
  minimo: number
  custo: number
  data: string
}

export type Movimentacao = {
  id: string
  produtoId: string
  nome: string
  tipo: TipoMovimentacao
  quantidade: number
  data: string
}

export type Situacao = 'Rascunho' | 'Enviado' | 'Aprovado' | 'Recusado'

export type ItemOrcamento = {
  id: string
  nome: string
  quantidade: number
  valorUnitario: number
}

export type Orcamento = {
  id: string
  cliente: string
  descricao: string
  situacao: Situacao
  data: string
  itens: ItemOrcamento[]
}
