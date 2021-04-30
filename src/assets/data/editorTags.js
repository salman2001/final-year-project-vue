const allTags = [
    {
        tagId: "Paragraph Tag",
        title: "P tags",
        codeString: `<p>Paragraph tag</p>`,
        content:
          "The paragraph tag is used for defining a paragraph. The browser automatically adds a blank line before and after each P tag used. You can try changing the text inside the p tag or you can also try as many tags as you want.",
        contentList: [],
    },
    {
        tagId: "Head Tag",
        title: "head tags",
        codeString: `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
        content:
          "The head tag is used for heading which when used make a heading on the top of the page that is bold and the font is higher than normal paragraphs or divs. To use different fonts of heading the user can use different numbers from 1-6 and can be adjusted to the user's need",
        contentList: [],
    },
    {
        tagId: "Image Tag",
        title: "Image tags",
        codeString: `<img src="https://www.mmu.ac.uk/brand/logo/2.2-Secondary-Logo_1.jpg" width="200" height="200">`,
        content:
          "The Image tag is used to add different images in HTML and they can be images taken from websites or you can store them locally in your project folder. You just need to specify the source of the image and you can set the height or width within the image tag",
        contentList: [],
    },
    {
        tagId: "List Tag",
        title: "List tags",
        codeString: `
<ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ol>
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>`,
        content:
          "The <ol> tag is used for ordered lists and hence it gets the numbers and the <ul> is used for unordered lists and uses bullet points to show the list. You can try changing the code and see how the output turns out.",
        contentList: [],
    },
    {
        tagId: "Option Tag",
        title: "Option tags",
        codeString: `
<label for="cars">Choose an option:</label>

<select id="cars">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
</select>`,
        content:
          "Option tag is used to provide a dropdown selection for different things and its used together with a <select> tag",
        contentList: [],
    },
    {
        tagId: "Textarea Tag",
        title: "TextArea tags",
        codeString: `
<textarea rows="4" cols="50">
This is a Text Area
</textarea>
        `,
        content:
          "Textarea tag is used to define a multi-line input field that can have any text in it and it can be used in forms as well so the user can input any data inside. The width and height can be adjusted by using row and column like did below",
        contentList: [],
    },
    {
        tagId: "Button Tag",
        title: "Button tags",
        codeString: `<button type="button" onclick="alert('Hello world!')">Click Me!</button>`,
        content:
          "The button tag is used to make a button and you can link the button with javascript that will tell the button what to do. In this case its just a pop-up alert that comes on the screen. You can try using any other click functions as well",
        contentList: [],
    },
    {
        tagId: "Link Tag",
        title: "Link tags",
        codeString: `
<a href="https://www.google.com">Visit Google!</a>`,
        content:
          "Link tags use <a> tag to make a link to any other webpage or it can be any online website you want to make a link to. With proper address you can make a fully working link",
        contentList: [],
    },
    {
        tagId: "Nav Tag",
        title: "Nav tags",
        codeString: `
<nav>
    <a href="">Home</a> |
    <a href="">Contact Us</a> |
    <a href="">Login</a> |
    <a href="">Register</a>
</nav>`,
        content:
          "The <nav> tag is used to make a navigation bar on the top of the page and it can be linked to different pages that the user already has.The href is like a source of the page and is used to tell the nav where the file is located.",
        contentList: [],
    },
    {
        tagId: "Form Tag",
        title: "Form and Input tags",
        codeString: `
<form action="/action_page.php">
    <label for="fname">First name:</label>
    <input type="text" id="fname" placeholder="first name" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" placeholder="last name" name="lname"><br><br>
    <input type="submit" value="Submit">
</form>`,
        content:
          "The Form tag is used to make a form that lets the user input values and its used together with input so that there is a specified space where the user needs to put in the information.The placeholder can tell the user what needs to be inputted into that specific field.",
        contentList: [],
    },
    {
        tagId: "Section Tag",
        title: "Section tags",
        codeString: `
<section>
    <h2>Section 1</h2>
        <p>Paragraph for section 1 will be here</p>
</section>
<section>
    <h2>Section 2</h2>
        <p>Paragraph for section 2 should be here</p>
</section>`,
        content:
          "The section tags are used to divide paragraphs into different sections and the user can also give some headings to each section. To add more paragraphs just add some more sections below this code.",
        contentList: [],
    },
    {
        tagId: "Bold Tag",
        title: "Bold tags",
        codeString: `
<p>this is without bold - <b>this is with bold</b></p> `,
        content:
          "<b> tag is used to bold sentences in a paragraph or divs. They dont make it any important but just makes them bolder than the rest of the paragraph.",
        contentList: [],
    },
]

export default allTags;