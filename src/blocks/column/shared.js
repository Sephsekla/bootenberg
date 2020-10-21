/**
 * Create an array of classes to pass to our column
 * @param {object} props 
 */
const createColumnClasses = ( props ) => {

	const { xs, sm, md, lg, xl } = props.attributes;

	let classes = [];

	classes.push( xs ? `col-${ xs }` : 'col-12' );

	if ( sm ) {
		classes.push( `col-sm-${ sm } `);
	}
	if ( md ) {
		classes.push( `col-md-${ md } `);
	}
	if ( lg ) {
		classes.push( `col-lg-${ lg } `);
	}
	if ( xl ) {
		classes.push( `col-xl-${ xl } `);
	}
	return classes;
};

export { createColumnClasses };