import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    description: 'Manage homepage content — hero section and about section text.',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category Label',
          localized: true,
          defaultValue: 'Smart Agriculture',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Headline',
          localized: true,
          defaultValue: 'Future of Farming',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
          defaultValue:
            'VerdaAgro combines precision engineering with biological insights. Maximize yields with autonomous drone fleets and IoT sensor networks.',
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Background Image',
          relationTo: 'media',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'CTA Button Text',
          localized: true,
          defaultValue: 'Explore Solutions',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'CTA Button Link',
          defaultValue: '/solutions/agro',
        },
        {
          name: 'typeColor',
          type: 'text',
          label: 'Accent Color (hex)',
          defaultValue: '#71A58D',
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Headline',
          localized: true,
          defaultValue: 'Building a Global UAV Ecosystem',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
          defaultValue:
            'Swiss precision built on years of UAV expertise. Full-cycle drone manufacturing for agriculture, defense, and emergency response.',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          localized: true,
          defaultValue: 'Read About Us',
        },
      ],
    },
  ],
}
