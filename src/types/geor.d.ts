export interface FrequentQuestion {
  id: number
  title: string
  description: string
  attach: any
  component_id: number
  created_at: string
  updated_at: string
  active: number
  module_id: number
  count: number
  category_frecuents_questions_id: number
  slug: string
  components: Components
}

export interface Components {
  id: number
  id_module: number
  value: string
  description: string
  sort: number
  in_sidebar: boolean
  modules: Modules
}

export interface Modules {
  id: number
  value: string
  description: string
  icon: string
  is_link: boolean
  sort: number
  show: boolean
  created_at: any
  updated_at: any
}
