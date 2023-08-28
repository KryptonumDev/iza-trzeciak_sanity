export default {
  name: 'privacyPolicy',
  title: 'Polityka Prywatności',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero - Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' }
      ],
      title: 'Treść dokumentu',
      fieldset: 'content',
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
    {
      name: 'content',
      title: 'Zawartość dokumentu',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ]
}