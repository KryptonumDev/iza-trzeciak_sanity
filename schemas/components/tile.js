import { removeMarkdown } from "../../utils/functions"

export const titleAndImage = {
  name: "titleAndImage",
  title: "Title and Image",
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

export const titleAndDescription = {
  name: "titleAndDescription",
  title: "Title and Description",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  },
  prepare({ title, subtitle }) {
    return {
      title: removeMarkdown(title),
      subtitle: removeMarkdown(subtitle),
    }
  }
}