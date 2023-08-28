import { removeMarkdown } from "../../utils/functions"

export default {
  name: "faq",
  title: "FAQ",
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'questionAndAnswer'
        }
      ],
      title: 'Lista',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      list: 'list'
    },
  },
  prepare({ title, list }) {
    return {
      title: removeMarkdown(title),
      subtitle: `${list.length} pytań i odpowiedzi`,
    }
  }
}


export const questionAndAnswer = {
  name: "questionAndAnswer",
  title: "Pytanie i odpowiedź",
  type: "object",
  fields: [
    {
      name: 'question',
      type: 'markdown',
      title: 'Pytanie',
    },
    {
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer'
    },
  },
  prepare({ title, subtitle }) {
    return {
      title: `Pytanie: ${removeMarkdown(title)}`,
      subtitle: `Odpowiedź: ${removeMarkdown(subtitle)}`,
    }
  }
}