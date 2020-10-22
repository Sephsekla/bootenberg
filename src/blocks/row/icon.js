const rowIcon = 

	<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-columns" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
		<path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
</svg>;

const hAlignmentIcons = {

	start: <svg
		width="1.2em"
		height="1.2em"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit="2"
		clipRule="evenodd"
		viewBox="0 0 12 12" >
	<path d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"></path>
	<path
		fillRule="nonzero"
		d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
		transform="matrix(.6714 0 0 1 -1.521 0)"></path>
	<path
		fillRule="nonzero"
		d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
		transform="matrix(.6714 0 0 1 .493 0)"
	></path>
  </svg>,

	end: <svg
		width="1.2em"
		height="1.2em"
		fillRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit="2"
		clipRule="evenodd"
		viewBox="0 0 12 12"
  >
	<path d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"></path>
	<path
		fillRule="nonzero"
		d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
		transform="matrix(.6714 0 0 1 3.465 .044)"
	></path>
	<path
		fillRule="nonzero"
		d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
		transform="matrix(.6714 0 0 1 5.465 .044)"
	></path>
  </svg>,

center: <svg
width="1.2em"
height="1.2em"
fillRule="evenodd"
strokeLinejoin="round"
strokeMiterlimit="2"
clipRule="evenodd"
viewBox="0 0 12 12"
>
<path d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"></path>
<path
  fillRule="nonzero"
  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
  transform="matrix(.6714 0 0 1 .965 .044)"
></path>
<path
  fillRule="nonzero"
  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
  transform="matrix(.6714 0 0 1 2.965 .044)"
></path>
</svg>,


between: <svg
	width="1.2em"
	height="1.2em"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
>
<path d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"></path>
      <path
        fillRule="nonzero"
        d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
        transform="matrix(.6714 0 0 1 -1.521 .044)"
      ></path>
      <path
        fillRule="nonzero"
        d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
        transform="matrix(.6714 0 0 1 5.465 .044)"
      ></path>
</svg>,

around: <svg
	width="1.2em"
	height="1.2em"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
>
<path d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"></path>
<path
	fillRule="nonzero"
	d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	transform="matrix(.6714 0 0 1 -.021 0)"
></path>
<path
	fillRule="nonzero"
	d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	transform="matrix(.6714 0 0 1 3.965 0)"
></path>
</svg>,	
};

const vAlignmentIcons = {

	start: <svg
	xmlns="http://www.w3.org/2000/svg"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
  >
	<path
	  d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"
	  transform="rotate(-90 6 6)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 -.6714 1 0 .044 8.535)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 -.6714 1 0 .044 6.535)"
	></path>
  </svg>,

	end: <svg
	xmlns="http://www.w3.org/2000/svg"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
  >
	<path
	  d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"
	  transform="rotate(90 6 6)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 .6714 -1 0 11.956 3.465)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 .6714 -1 0 11.956 5.465)"
	></path>
  </svg>,


	center:   <svg
	xmlns="http://www.w3.org/2000/svg"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
  >
	<path
	  d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"
	  transform="rotate(90 6 6)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 .6714 -1 0 11.956 .965)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 .6714 -1 0 11.956 2.965)"
	></path>
  </svg>,

	stretch: <svg
	xmlns="http://www.w3.org/2000/svg"
	fillRule="evenodd"
	strokeLinejoin="round"
	strokeMiterlimit="2"
	clipRule="evenodd"
	viewBox="0 0 12 12"
  >
	<path
	  d="M10.875.75a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75a.376.376 0 00-.375-.375zm-9.75 0a.376.376 0 00-.375.375v9.75c0 .206.169.375.375.375a.376.376 0 00.375-.375v-9.75A.376.376 0 001.125.75z"
	  transform="rotate(90 6 6)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 1.5 -1 0 12 -5.25)"
	></path>
	<path
	  fillRule="nonzero"
	  d="M4.5 9.75c0 .411.339.75.75.75h1.5c.411 0 .75-.339.75-.75v-7.5a.754.754 0 00-.75-.75h-1.5a.754.754 0 00-.75.75v7.5z"
	  transform="matrix(0 1.5 -1 0 12 -.75)"
	></path>
  </svg>,

}


export { rowIcon, hAlignmentIcons, vAlignmentIcons };
