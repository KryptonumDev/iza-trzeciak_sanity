// Single Types
import global, { global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import cooperation from './singleTypes/cooperation'
import privacyPolicy from './singleTypes/privacyPolicy'
import notFound from './singleTypes/notFound'

export const singleTypes = [
  homepage,
  cooperation,
  privacyPolicy,
  notFound,
]

// Collection Types

export const collectionTypes = [

]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndImage } from './components/tile'
import contact from './components/contact'
import ctaSection from './components/ctaSection'
import textSection from './components/textSection'
import faq, { questionAndAnswer } from './components/faq'

export const components = [
  cta,
  seo,
  titleAndImage,
  contact,
  ctaSection,
  textSection,
  faq,
  questionAndAnswer,
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