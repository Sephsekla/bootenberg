const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InnerBlocks, InspectorControls, BlockControls } = wp.blockEditor;
const { PanelBody, PanelRow, FormToggle, SelectControl } = wp.components;
const classnames = require( 'classnames' );
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;

const editColumn = ( props ) => {
    const { className, setAttributes } = props;
    const { xs, sm, md, lg, xl } = props.attributes;

    return (
        <Fragment>
            <InspectorControls>
                 <PanelBody  title={ 'About' } >
                    <PanelRow>
                        <label htmlFor='reverse-form-toggle'>
                            { 'Width' }
                        </label>
                         <SelectControl
                            id='reverse-form-toggle'
                            label={ 'Default' }
                            value={ xs }
                            onChange={ ( value ) => setAttributes( { xs: parseInt(value) } ) }

                            
                            options={ [
                                //{ value: null, label: 'Select a User', disabled: false },
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
                </PanelBody>
            </InspectorControls>

            <div className={ classnames( 'bootenberg-outer' ) }>
                <InnerBlocks />
            </div>
        </Fragment>
    );
}

export default editColumn;
