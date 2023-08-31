export default {
  name: "textSection",
  title: "Sekcja z tekstem",
  type: "object",
  options: { collapsible: true, collapsed: true },
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
      name: 'text',
      type: 'markdown',
      title: 'Tekst',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        { type: 'titleAndImage' }
      ],
      title: 'Lista',
    },
  ]
}