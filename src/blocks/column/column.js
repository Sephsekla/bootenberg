/**
 * BLOCK: Column
 *
 * Create a Bootstrap column
 * Wraps content in a conlumn div. This can only be placed in a row.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, InspectorControls, BlockControls } = wp.blockEditor;
const { PanelBody, PanelRow, FormToggle, SelectControl } = wp.components;
const classnames = require( 'classnames' );
const { default: editColumn } = require('./edit');
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
import './edit.js';
import colIcon from './icon.js';
import { createColumnClasses } from './shared.js';

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
registerBlockType( 'rglb/column', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'RGLB - Bootstrap column' ), // Block title.
	icon: colIcon,
	category: 'design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'rglb — column' ),
		__( 'bootstrap' ),
		__( 'column' ),
	],
	parent: [ 'rglb/row' ],
	description: __(`Columns sit within a row. They can be sized responsively for different screen sizes.`),
	supports: {
		//lightBlockWrapper: true,
	},
	attributes: {
		xs: {
			type: 'number',
			default: 12,
        
		},
		sm: {
            type: 'number',
        
		},
		md: {
            type: 'number',
        
		},
		lg: {
            type: 'number',
        
		},
		xl: {
            type: 'number',
        
        },
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The 'edit' property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: editColumn,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The 'save' property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {

		return (
			<div className={ classnames( ...createColumnClasses( props )) }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );