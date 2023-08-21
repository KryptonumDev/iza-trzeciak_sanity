import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'faq',
	title: 'Pytania i odpowiedzi',
  type: 'document',
  icon: () => '🙋‍♀️',
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
    prepare({ title, subtitle }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}