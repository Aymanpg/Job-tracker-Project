JavaScript DOM Manipulation and Events
1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById(id): Selects a single element by its unique id attribute. Returns the element object if found, or null if not. Efficient for targeting one specific element since IDs are unique.

getElementsByClassName(className): Selects all elements with the specified class name. Returns a live HTMLCollection (array-like object) that updates automatically if the DOM changes. Useful for multiple elements sharing a class, but doesn't support complex selectors.

querySelector(selector): Selects the first element that matches a CSS selector (e.g., #id, .class, tag[attribute], or combinations). Returns the element or null. More flexible than the above, as it allows CSS-style querying.

querySelectorAll(selector): Selects all elements matching the CSS selector. Returns a static NodeList (array-like) that doesn't update live. Ideal for complex selections, but may be slightly slower for simple cases due to its versatility.

In summary, getElementById and getElementsByClassName are older and faster for simple ID/class lookups, while querySelector/querySelectorAll are modern and support any CSS selector for more powerful querying.






2. How to Create and Insert a New Element into the DOM
To create a new element:

Use document.createElement(tagName) to create an element node.
Optionally, set attributes or content: div.id = 'newDiv'; div.textContent = 'Hello'; div.classList.add('myClass');.

To insert it into the DOM:

Append as a child: parentElement.appendChild(newElement);

Insert before a reference: parentElement.insertBefore(newElement, referenceElement);.

Use modern methods like parentElement.append(newElement); (adds to the end, can handle multiple) or referenceElement.before(newElement);/after(newElement); for relative positioning.

For HTML strings: Use element.insertAdjacentHTML(position, htmlString); where position can be 'beforebegin', 'afterbegin', etc.



3. What is Event Bubbling? And How Does It Work?
   
Event bubbling is the default propagation phase in the DOM event flow where an event starts at the target element and "bubbles up" through its ancestors.

How it works:

When an event  occurs on an element, it first triggers handlers on the target itself .

Then, the event bubbles up to the parent, grandparent, and so on, up to the document root.

Any event listeners attached to ancestors will fire in this order, unless stopped.

This allows handling events at higher levels without attaching listeners to every child.

Example: If you click a button inside a div inside a form, the click event bubbles: button → div → form → body → etc.


4. What is Event Delegation in JavaScript? Why is It Useful?
   
Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners on child elements. It leverages event bubbling to handle events on descendants.

How it works:

Listen for events on a container .
Check e.target to see if it matches the intended child selector.

Why it's useful:

Performance: Reduces memory usage by avoiding many listeners, especially for dynamic content .
Simplicity: Easier to manage one listener; works for future elements added dynamically.
Efficiency in large DOMs: Ideal for tables, menus, or infinite scrolls where direct attachment would be inefficient.


5. Difference between preventDefault() and stopPropagation() Methods
   
Both are methods on the event object (e) to control event behavior, but they serve different purposes:

e.preventDefault(): Prevents the browser's default action for the event . It doesn't affect propagation—the event still bubbles or captures.

e.stopPropagation(): Stops the event from bubbling up to ancestors or capturing down (depending on the phase). It prevents other handlers on parent elements from firing, but doesn't stop the default action.

Use preventDefault() for overriding built-in behaviors, and stopPropagation() for isolating events to the current element. You can use both if needed . Note: stopImmediatePropagation() is stronger, stopping propagation and other handlers on the same element.
