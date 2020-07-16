1. em Vs rem
 
	While em is relative to the font size of its direct or nearest parent, rem is only relative to the html (root) font-size.

2. css selectors:
 
.class

	The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

#id

	The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document. The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

div ~ p

	All <p> elements that are siblings of a <div> element.

div p

	All <p> elements that are inside a <div> element.

div > p

	Select and style every <p> element where the parent is a <div> element

div + p

	The <p> element that are next to a <div> elements.

[target]

	All elements with an target attribute.	

p:first-child

	All <p> elements that are the first child of their parent.

p::first-letter

	The first letter of all <p> elements.

p::first-line

	The first line of all <p> elements.

p::first-of-type

	All <p> elements that are the first <p> element of their parent.

input:readonly

	All <input> elements where the value is read-only field which cannot be modified

input:required

	All <input> elements where the value is required according to limitations.
