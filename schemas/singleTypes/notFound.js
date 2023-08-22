export default {
  name: 'notFound',
	title: 'Strony nie znaleziono',
  type: 'document',
  icon: () => '🚫',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero - Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Hero - Paragraf',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Hero - Wezwanie do działania',
      fieldset: 'hero',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Sekcja Hero',
      options: {
        collapsible: true
      }
    },
  ]
}