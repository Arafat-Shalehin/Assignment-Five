# Assignment-Five

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
-getElementById uses IDs to locate or target things, and because of IDs are unique getElementById can target the requirement thing faster. It seems to be the fastest among the three.
-getElementsByClassName can target multiple elements. They just have to share the same class name to be able get targeted by getElementsByClassName. The strange thing is, this returns an HTMLCollection which looks like an array but is not fully an array.
-querySelector targets the first element that matches the CSS selector. It is flexible because it supports any CSS selector.
-querySelectorAll targets all element with the same class or CSS Selector. It doesn't update automatically unlike getElementsByClassName. Also this return type is 'a NodeList'.

2. How do you create and insert a new element into the DOM?

Ans: We can create a new element in DOM by writing document.createElement("Tag Name");. There are few methods we can use to insert a new element into the DOM. Those are: appendChild(), prepend(), insertBefore(), append().

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling is a process where the intended event starts from the target element and then bubbles up (moves upward) through its ancestors in the DOM tree. Suppose you click a <button> inside a <div>. The event is first triggered on the button itself. Then the same event “bubbles up” to its parent <div>. Then to <body>, then <html>, then document.Unless you stop it, the event keeps going upward.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a method or a path where instead of attaching event listeners to multiple child elements, you attach a single event listener to a parent element. It is useful because using it can help to add fewer event listeners which leads to faster page, less memory. Works for elements developer might add later.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() prevents the default action of an element from happening. Meaning cancels the built-in browser behavior. On the otherhand stopPropagation() can use to stop event bubbling. It prevents the event from reaching parent elements. Also it does not cancel the element’s default behavior.