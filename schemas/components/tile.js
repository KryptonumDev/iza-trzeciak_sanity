import { removeMarkdown } from "../../utils/functions"

export const titleAndImage = {
  name: "titleAndImage",
  title: "Title And Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Title',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    }
  },
  prepare({ title, media }) {
    return {
      title: removeMarkdown(title),
      media
    }
  }
}