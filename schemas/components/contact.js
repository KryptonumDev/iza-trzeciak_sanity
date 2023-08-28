import { removeMarkdown } from "../../utils/functions"

export default {
  name: "contact",
  title: "Kontakt",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      validation: Rule => Rule.required(),
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      validation: Rule => Rule.required(),
      title: 'Paragraf',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'paragraph'
    },
  },
  prepare({ title, subtitle }) {
    return {
      title: removeMarkdown(title),
      subtitle: removeMarkdown(subtitle),
    }
  }
}