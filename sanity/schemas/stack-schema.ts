const stack = {
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    }
  ],
};

export default stack;