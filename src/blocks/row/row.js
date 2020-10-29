/**
 * BLOCK: Row
 *
 * Create a Bootstrap row
 * Wraps content in a row div. Only columns can be placed within.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks } = wp.blockEditor;
const classnames = require( 'classnames' );
const { default: editRow } = require('./edit');
const { default: exampleLayout } = require('./example');
const { rowIcon } = require('./icon');
import returnAlignmentClasses from './shared';



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
registerBlockType( 'rglb/row', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'RGLB - Bootstrap Row' ), // Block title.
	icon: rowIcon,
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'rglb — Row' ),
		__( 'bootstrap' ),
		__( 'row' ),
	],
	description: __(`Rows are used to wrap responsive columns for your layout.`),
	example: exampleLayout,
	attributes: {
		halign: {
			type: 'string',
        
		},
		valign: {
			type: 'string',
        
		},
	},



	edit: editRow,

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
			<div className={ classnames( 'row', className, ...returnAlignmentClasses(props) ) }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
