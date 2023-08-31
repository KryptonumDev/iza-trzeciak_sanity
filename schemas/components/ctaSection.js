import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ctaSection",
  title: "Sekcja wezwanie do działania",
  options: { collapsible: true, collapsed: true },
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      cta: 'cta'
    },
  },
  prepare({ title, cta }){
    return {
      title: removeMarkdown(title),
      subtitle: `${cta.text} to ${cta.href}`
    }
  }
}