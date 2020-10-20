/**
 * BLOCK: Column
 *
 * Create a Bootstrap container
 * Wraps content in a container div
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
registerBlockType( 'bootenberg/column', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Bootenberg - column' ), // Block title.
	icon: 'align-center', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'bootenberg', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'bootenberg — column' ),
		__( 'bootstrap' ),
		__( 'column' ),
	],
	parent: [ 'bootenberg/row' ],
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

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

		// Bail out if it’s not the block we want to target.
		if ( 'bootenberg/column' !== props.block.name ) {
			return <BlockListBlock { ...props } />;
		  }

        return <BlockListBlock { ...props } className={ classnames( props.className, ...createColumnClasses( props ) ) } />;
    }; 
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'bootenberg/column', withClientIdClassName );