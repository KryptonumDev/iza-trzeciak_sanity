export default {
  name: 'cooperation',
  title: 'Współpraca',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      fieldset: 'hero',
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'hero',
    },
    {
      name: 'hero_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'hero',
    },
    {
      name: 'contact',
      type: 'contact',
      title: 'Kontakt',
    },
    {
      name: 'faq',
      type: 'faq',
      title: 'FAQ',
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
      options: { collapsible: true }
    },
  ]
}