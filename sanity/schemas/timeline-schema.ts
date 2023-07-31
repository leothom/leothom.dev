const timeline = {
  name: 'timeline',
  title: 'Timeline',
  type: 'document',
  fields: [
    {
      name: 'job_title',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'company_name',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'company_location',
      title: 'Company Location',
      type: 'string',
    },
    {
      name: 'company_image',
      title: 'Company Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    },
    {
      name: 'start_date',
      title: 'Start Date',
      type: 'string',
    },
    {
      name: 'end_date',
      title: 'End Date',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'button_text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'button_url',
      title: 'Button URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    }
  ],
};

export default timeline;