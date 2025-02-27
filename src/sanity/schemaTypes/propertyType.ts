import { defineType } from "sanity";

export const propertyTypeType = defineType({
  name: 'propertyType',
  title: 'Property Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}); 