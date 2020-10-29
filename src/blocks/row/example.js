const { __ } = wp.i18n; // Import __() from wp.i18n

const exampleLayout = {
	innerBlocks: [
		{
			name: 'rglb/column',
			attributes: {
				xs: 6,
			},
			
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							/* translators: example text. */
							content: __(
								'Here is a column'
							),
						},
					},
					],

		},
		{
			name: 'rglb/column',
			attributes: {
				xs: 6,
			},

				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							/* translators: example text. */
							content: __(
								'Here is a column'
							),
						},
					},
					],

		},
		],
};

export default exampleLayout;