import { hAlignmentIcons, vAlignmentIcons } from './icon';
import returnAlignmentClasses from './shared';

const { __ } = wp.i18n; // Import __() from wp.i18n

const { InnerBlocks, InspectorControls, BlockControls, useBlockProps } = wp.blockEditor;
const useInnerBlocksProps = wp.blockEditor.__experimentalUseInnerBlocksProps;
const { IconButton, Button, ButtonGroup, PanelBody, PanelRow, } = wp.components;
const { Fragment } = wp.element;
const classnames = require( 'classnames' );

const HAlignButtons = ( props ) => {

	const { setAttributes } = props;

	const { halign } = props.attributes;

	const buttons = [
		{ text: 'Start', value: 'start', icon: hAlignmentIcons.start },
		{ text: 'End', value: 'end', icon: hAlignmentIcons.end },
		{ text: 'Center', value: 'center', icon: hAlignmentIcons.center },
		{ text: 'Space Between', value: 'between', icon: hAlignmentIcons.between },
		{ text: 'Space Around', value: 'around', icon: hAlignmentIcons.around },

	];



	return <ButtonGroup>
		{ buttons.map( 
			button => ( <IconButton key={button.value} isPressed={button.value === halign } 
				onClick={ () => { setAttributes( { halign: halign === button.value ? null : button.value } ) } } label={ button.text } icon={ button.icon } /> )
		) }
	</ButtonGroup>;
};

const VAlignButtons = ( props ) => {

	const { setAttributes } = props;

	const { valign } = props.attributes;

	const buttons = [
		{ text: 'Start', value: 'start', icon: vAlignmentIcons.start },
		{ text: 'End', value: 'end', icon: vAlignmentIcons.end },
		{ text: 'Center', value: 'center', icon: vAlignmentIcons.center },
		{ text: 'Stretch', value: 'stretch', icon: vAlignmentIcons.stretch },

	];



	return <ButtonGroup>
		{ buttons.map( 
			button => ( <IconButton key={button.value} isPressed={button.value === valign } 
				onClick={ () => { setAttributes( { valign: valign === button.value ? null : button.value } ) } } label={ button.text } icon={ button.icon } /> )
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


   const ALLOWED_BLOCKS = [ 'rglb/column' ];
   const TEMPLATE = [[ 'rglb/column', {} ]];


   /**
	* For compatibility we have two methods of creating the InnerBlocks, eventually the InnerBlocks method will be deprecated
	* @param {object} props 
	*/
   const InnerRowBlocks = (props) => {
	   if( typeof useBlockProps === "function" ){
		const blockProps = useBlockProps( {
			className: classnames( 'row', className, ...returnAlignmentClasses(props) ),
		} );
		
		const innerBlocksProps = useInnerBlocksProps( blockProps, {
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			orientation: "horizontal"
		} );

		return <div { ...innerBlocksProps } />
	   }
	   else{
		   return <InnerBlocks orientation="horizontal" allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } __experimentalPassedProps={ { className: classnames('row', className, ...returnAlignmentClasses(props) ) } } />
	   }
   }

   

   return (
	   <Fragment>
		   <InspectorControls>
                 <PanelBody  title={ 'Horizontal Alignment' } >
					<PanelRow  title={ 'Horizontal Alignment' } >
						<HAlignButtons { ...props } />
					</PanelRow>
				 </PanelBody>
				 <PanelBody  title={ 'Vertical Alignment' } >
					<PanelRow  title={ 'Vertical Alignment' } >
						<VAlignButtons { ...props } />
					</PanelRow>
				 </PanelBody>
			</InspectorControls>
	   <div className={ classnames( 'rglb-outer rglb-row') }>
	   		<InnerRowBlocks { ...props } />
	   </div>
	   </Fragment>
   );
};

export default editRow;
