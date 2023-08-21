export default {
  name: 'homepage',
	title: 'Strona główna',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Nagłówek',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
}