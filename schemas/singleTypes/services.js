import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'services',
  title: 'Wszystkie usługi',
  type: 'document',
  icon: () => '🕵️‍♀️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'experience_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'experience',
    },
    {
      name: 'experience_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'experience',
    },
    {
      name: 'courses_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'courses',
    },
    {
      name: 'courses_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'courses',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Sekcja wezwanie do działania'
    },
    {
      name: 'textSection',
      type: 'textSection',
      title: 'Sekcja z tekstem'
    },
    {
      name: 'textSection2',
      type: 'textSection',
      title: 'Sekcja z tekstem'
    },
    {
      name: 'textSection3',
      type: 'textSection',
      title: 'Sekcja z tekstem'
    },
    {
      name: 'textSection4',
      type: 'textSection',
      title: 'Sekcja z tekstem'
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'services_List'
        }
      ],
      title: 'Lista',
      fieldset: 'services',
    },
    {
      name: 'services_SecondParagraph',
      type: 'markdown',
      title: 'Drugi Paragraf',
      fieldset: 'services',
    },
    {
      name: 'cooperation_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'cooperation',
    },
    {
      name: 'cooperation_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      fieldset: 'cooperation',
    },
    {
      name: 'cooperation_CtaParagraph',
      type: 'markdown',
      title: 'Wezwanie do działania - Paragraf',
      fieldset: 'cooperation',
    },
    {
      name: 'cooperation_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      fieldset: 'cooperation',
    },
    {
      name: 'cooperation_List',
      type: 'array',
      of: [
        { type: 'titleAndDescription' }
      ],
      title: 'Lista',
      fieldset: 'cooperation',
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
    {
      name: 'experience',
      title: 'Sekcja doświadczenie',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'courses',
      title: 'Sekcja kursy i szkolenia',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'services',
      title: 'Sekcja zakres usług',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cooperation',
      title: 'Sekcja współpraca',
      options: { collapsible: true, collapsed: true }
    },
  ]
}

export const services_List = {
  name: "services_List",
  title: "Lista",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'Opis',
    },
  ],
  preview: {
    select: {
      title: 'title',
    }
  },
  prepare({ title }) {
    return {
      title: removeMarkdown(title),
    }
  }
}