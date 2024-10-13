import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {

  const preview = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === null && lastLine === null) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header    | Crazy Header  | Another Header? |
| -------------- | ------------- | --------------- |
| Your content   | can be here,  | and it can be...|
| And here       | Okay.         | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [markdown, setMarkDown] = useState(preview)

  return (
    <main>
      <section className='Markdown'>
        <textarea className='input' id="editor" value={markdown} onChange={(e) => setMarkDown(e.target.value)}></textarea>
        <article className='result' id="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
