// Single Types
import global, { global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'

export const singleTypes = [
  homepage,
]

// Collection Types
import faq from './collectionTypes/faq'

export const collectionTypes = [
  faq,
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'

export const components = [
  cta,
  seo
]

export const schemaTypes = [
  // Single Types
  global,
  global_Seo,

  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]