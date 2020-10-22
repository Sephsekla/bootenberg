const returnAlignmentClasses = ( props ) => {

	const { halign, valign } = props.attributes;

	let classes = [];

	if ( halign ) {
		classes.push( `justify-content-${ halign }` );
	}

	if ( valign ) {
		classes.push( `align-items-${ valign }` );
	}

	return classes;
}

export default returnAlignmentClasses;