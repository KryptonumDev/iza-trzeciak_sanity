export default {
  name: 'global',
	title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'email',
      type: 'string',
      description: 'Ten adres e-mail będzie wyświetlany na stronie, oraz będzie on adresem odbierającym wszystkie wiadomości w formularza kontaktowego na stronie.',
      validation: Rule => Rule.required(),
      title: 'Email',
    },
    {
      type: 'string',
      name: 'linkedin',
      title: 'LinkedIn',
      validation: Rule => Rule.required(),
      fieldset: 'social',
    },
    {
      type: 'string',
      name: 'facebook',
      title: 'Facebook',
      validation: Rule => Rule.required(),
      fieldset: 'social',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Social linki',
      options: {
        collapsible: true
      }
    }
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px'
    },
  ]
}