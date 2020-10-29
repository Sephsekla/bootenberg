const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, InspectorControls, BlockControls } = wp.blockEditor;
const { PanelBody, PanelRow, FormToggle, SelectControl } = wp.components;
const classnames = require( 'classnames' );
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
import { createColumnClasses } from './shared.js';


/**
 * Render select element for sidebar
 * @param {*} props 
 */
const RenderSelect = ( props ) => {

    const { size, label, label2 } = props;

    const { className, setAttributes, onUpdate } = props;
    const { xs, sm, md, lg, xl } = props.attributes;

    return <PanelRow>
    <label htmlFor='reverse-form-toggle'>
        { label }
    </label>
     <SelectControl
        id='reverse-form-toggle'
        label={ label2 }
        value={ size }
        onChange={ onUpdate }

        
        options={ [
            { value: null, label: 'Inherit from smaller', disabled: props.noNullValue ? true : false },
            { value: 1, label: '1 (1/12)' },
            { value: 2, label: '2 (1/6)' },
            { value: 3, label: '3 (1/4)' },
            { value: 4, label: '4 (1/3)' },
            { value: 5, label: '5 (5/12)' },
            { value: 6, label: '6 (1/2)' },
            { value: 7, label: '7 (7/12)' },
            { value: 8, label: '8 (2/3)' },
            { value: 9, label: '9 (3/4)' },
            { value: 10, label: '10 (5/6)' },
            { value: 11, label: '11 (11/12)' },
            { value: 12, label: '12 (Full-width)' },
        ] } 
        
    />
</PanelRow>
}


/**
 * Edit function
 */
const editColumn = ( props ) => {
    const { className, setAttributes } = props;
    const { xs, sm, md, lg, xl } = props.attributes;

    return (
        <Fragment>
            <InspectorControls>
                 <PanelBody  title={ 'Width' } >
                    <RenderSelect size={xs} noNullValue={true} label={'XS'} label2={'Default width'} onUpdate={ ( value ) => setAttributes( { xs: parseInt(value) } ) } {...props} />
                    <RenderSelect size={sm} label={'SM'} label2={'min-width: 576px'} onUpdate={ ( value ) => setAttributes( { sm: parseInt(value) } ) } {...props} />
                    <RenderSelect size={md} label={'MD'} label2={'min-width: 768px'} onUpdate={ ( value ) => setAttributes( { md: parseInt(value) } ) } {...props} />
                    <RenderSelect size={lg} label={'LG'} label2={'min-width: 992px'} onUpdate={ ( value ) => setAttributes( { lg: parseInt(value) } ) } {...props} />
                    <RenderSelect size={xl} label={'XL'} label2={'min-width: 1200px'} onUpdate={ ( value ) => setAttributes( { xl: parseInt(value) } ) } {...props} />
                </PanelBody>
            </InspectorControls>

            <div className={ classnames( 'rglb-outer' ) }>
                <InnerBlocks />
            </div>
        </Fragment>
    );
}


/**
 * Add classes to editor wrapper element
 */
const addWrapperClasses = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {



		// Bail out if it’s not the block we want to target.
		if ( 'rglb/column' !== props.block.name ) {
			return <BlockListBlock { ...props } />;
		  }

        return <BlockListBlock { ...props } className={ classnames( props.attributes.className, ...createColumnClasses( props ) ) } />;
    }; 
}, 'addWrapperClasses' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'rglb/column', addWrapperClasses );


export default editColumn;