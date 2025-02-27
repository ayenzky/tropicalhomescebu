import { defineType } from "sanity";
import { propertyTypeType } from './propertyType';

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'displayPrice',
      title: 'Display Price',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Property Transaction Type',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'sale' },
          { title: 'For Rent', value: 'rent' },
          { title: 'Preselling', value: 'preselling' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'reference',
      to: [{ type: 'propertyType' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'beds',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'baths',
      title: 'Bathrooms',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sqft',
      title: 'Square Footage',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      price: 'displayPrice',
      propertyType: 'propertyType.title',
    },
    prepare({ title, media, price, propertyType }: any) {
      return {
        title,
        subtitle: `${propertyType || 'No type'} - ${price}`,
        media,
      };
    },
  },
});
