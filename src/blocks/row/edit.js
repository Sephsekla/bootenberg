import { alignmentIcons } from './icon';
import returnAlignmentClasses from './shared';

const { __ } = wp.i18n; // Import __() from wp.i18n

const { InnerBlocks, InspectorControls, BlockControls } = wp.blockEditor;
const { IconButton, Button, ButtonGroup, PanelBody, PanelRow, } = wp.components;
const { Fragment } = wp.element;
const classnames = require( 'classnames' );

const HAlignButtons = ( props ) => {

	const { setAttributes } = props;

	const { halign } = props.attributes;

	const buttons = [
		{ text: 'Start', value: 'start', icon: alignmentIcons.start },
		{ text: 'End', value: 'end', icon: alignmentIcons.end },
		{ text: 'Center', value: 'center', icon: alignmentIcons.center },
		{ text: 'Space Between', value: 'between', icon: alignmentIcons.between },
		{ text: 'Space Around', value: 'around', icon: alignmentIcons.around },

	];



	return <ButtonGroup>
		{ buttons.map( 
			button => ( <IconButton key={button.value} isPressed={button.value === halign } 
				onClick={ () => { setAttributes( { halign: halign === button.value ? null : button.value } ) } } label={ button.text } icon={ button.icon } /> )
		) }
	</ButtonGroup>;
};

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
const editRow = ( props ) => {
   const { className } = props;
   const { halign, valign } = props.attributes;


   const ALLOWED_BLOCKS = [ 'bootenberg/column' ];
   const TEMPLATE = [[ 'bootenberg/column', {} ]];

   return (
	   <Fragment>
		   <InspectorControls>
                 <PanelBody  title={ 'Alignment' } >
					<PanelRow  title={ 'Horizontal Alignment' } >
						<HAlignButtons { ...props } />
					</PanelRow>
				 </PanelBody>
			</InspectorControls>
	   <div className={ classnames( 'bootenberg-outer bootenberg-row') }>
		   <InnerBlocks orientation="horizontal" allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } __experimentalPassedProps={ { className: classnames('row', className, ...returnAlignmentClasses(props) ) } } />
	   </div>
	   </Fragment>
   );
};

export default editRow;
