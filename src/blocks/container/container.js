/**
 * BLOCK: Container
 *
 * Create a Bootstrap container
 * Wraps content in a container div
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.blockEditor;
const classnames = require( 'classnames' );
const { default: containerIcon } = require('./icon');

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'rglb/container', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'RGLB - Bootstrap Container' ), // Block title.
	icon: containerIcon,
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'rglb — Container' ),
		__( 'bootstrap' ),
		__( 'container' ),
	],
	description: __(`Containers are used to contain, pad, and (sometimes) center the content within them. Their max-width changes responsively.`),

	example: {
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					/* translators: example text. */
					content: __(
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
					),
				},
			},
			],
	},

	getEditWrapperProps( attributes ) {
		return { 'data-align': 'wide' }; // We set to align-wide in the editor, but don't add the actual attribute due to class conflicts
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		const { className } = props;

		return (
			<div className={ classnames( 'container rglb-outer is-style-wide', className ) }>
				<InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { className } = props;

		return (
			<div className={ classnames( 'container is-style-wide', className ) }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
