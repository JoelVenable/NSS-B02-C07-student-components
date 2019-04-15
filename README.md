# NSS-B02-C07-student-components


## Practice: Student Components

1. Create a new project sub-directory in your `workspace/javascript` directory.
1. Paste the array of student objects above into your JavaScript file.
1. Copy the `createStudentComponent` function into your code.
1. Add the following styles to your CSS.
    ```css
    #container {
        display: flex;
        flex-direction: column;
    }

    .pushRight {
        margin-left: auto;
    }

    .xx-large {
        font-size: 3em;
    }

    .bordered {
        border-width: 1px;
        border-color: goldenrod;
        border-style: solid;
    }

    .dashed {
        border-style: dashed;
    }

    .section--padded {
        padding: 10px;
    }

    .passing {
        color: green;
    }

    .failing {
        color: orange;
    }
    ```
1. Add a container article to your HTML.
    ```html
    <article id="container"></article>
    ```
1. Iterate the array of students, and apply the correct style to the `h1` depending on the score of the student being below 60, or above it.
    ```js
    for (const student of students) {
        let studentComponent = ""
        if (student.score >= 60) {
            studentComponent = ...
        } else {
            studentComponent = ...
        }
    }
    ```

If a student is passing, then the structure should look like the following.

```html
<div class="student">
    <h1 class="xx-large passing">Student Name</h1>
    <section class="bordered dashed section--padded">Subject</section>
    <aside class="pushRight">Additional information</aside>
</div>
```

## Practice: One Object to Rule Them All

Instead of defining four arguments for the `createStudentComponent` function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

Then refactor your string interpolation code to use the object properties.

---

> Challenges are optional exercises that you should only attempt if you have completed the practice exercises, and fully understand the concepts used in them.

## Challenge: Composition of Smaller Components

Write functions that build the sub-components of the larger student component.

* h1
* section
* aside

Invoke those functions inside the `createStudentComponent` function to build the parent `<div>`.

```js
const createStudentComponent = (student) => `
    <div id="student">
        ${h1(student.name)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
`
```

## Challenge: Generic HTML Function

Look at the three functions you created to build an `h1`, a `section`, and an `aside`. Notice that each one follows the same pattern of accepting a single argument - a string - and outputting a single HTML component. Since there is a pattern, you can consider writing a single function that generalizes the creation of an HTML component even further.

Create one function that will generate **any** HTML component, with **any** content. It should be defined with three arguments.

1. The type of HTML component to make
1. The content of the component
1. The value of the `class` attribute

```js
const createStudentComponent = (student) => `
    <div id="student">
        ${element("h1", student.name, "xx-large passing")}
        ${element("section", student.subject, "bordered dashed section--padded")}
        ${element("aside", student.info, "pushRight")}
    </div>
`
```

## Advanced Challenge: Using createElement for Components

> The learning objective of this challenge is to move away from using string templates completely, and use the methods of `createElement()` and `appendChild()` to create DOM components.


### createElement()

JavaScript provides the `document.createElement()` method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

### appendChild()

The `document.appendChild()` method will take a virtual DOM element you created and attach it as a child element of another one.

### Usage

```js
// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)
```

When you insert the `list` object to the DOM, it will generate the following HTML.

```html
<ul>
    <li class="president">George Bush</li>
</ul>
```

### Creating Elements

Using `createElement()`, you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

1. Put an `article` DOM element in your index.html with the `id` attribute value of `messages`.
1. In your JavaScript, use `querySelector()` to obtain a reference to that `article` DOM element.
1. Create five (5) `section` components, each with a class of `message`, and with the content of your choosing.
1. Using `appendChild()`, attach each message as a child to the `messages` element.

Example output.

```html
<article id="messages">
    <section class="message">
        Are we doing fireworks this year?
    </section>
    <section class="message">
        After last year's "tree incident", should we?
    </section>
    <section class="message">
        The fire fighters put it out in like a minute. Wasn't even a real fire.
    </section>
    <section class="message">
        We can set them off in the street.
    </section>
    <section class="message">
        Our neighbors' houses are flammable, too
    </section>
</article>
```

## Advanced Challenge: DOM Fragments

### createDocumentFragment()

What you did in the previous challenge was actually an expensive way of adding those elements to the DOM. Now, it didn't cost you any extra money, but it was expensive in terms of memory and processing power. When the DOM is written to, layout is 'invalidated', and at some point needs to be reflowed.

We can use a document fragment to reduce the processing and layout cost of constant, rapid-fire DOM updates. You can add as many components to it as you like, and then add the fragment to the DOM as a one-time operation.

```js
// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// Create an emperor component element
const julius = document.createElement('div')
julius.textContent = "Julius Caesar"
fragment.appendChild(julius)

// Create an emperor component element
const augustus = document.createElement('div')
augustus.textContent = "Augustus Caesar"
fragment.appendChild(augustus)

// Create an emperor component element
const aurelius = document.createElement('div')
aurelius.textContent = "Marcus Aurelius"
fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
document.querySelector("#emperorList").appendChild(fragment)
```

### Practice Document Fragment

Update your code from the previous challenge to add the chat messages to the `messages` elements via a document fragment.