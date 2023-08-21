export default {
  name: 'global',
	title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Link',
    },
    {
      name: 'youtube',
      type: 'string',
      title: 'YouTube Link',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
  ],
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