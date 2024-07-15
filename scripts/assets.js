let questions = [
  {   "question": "Wer hat HTML erfunden?",
      "answer_1": "Robbie Williams",
      "answer_2": "Lady Gaga",
      "answer_3": "Tim Berners-Lee",
      "answer_4": "Justin Bieber",
      "right_answer": 3
  },
  {   "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
      "answer_1": "Text Fett",
      "answer_2": "Container",
      "answer_3": "Ein Link",
      "answer_4": "Kursiv",
      "right_answer": 3
  },
  {   "question": "Wie bindet man eine Website in eine Website ein?",
      "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, &lt;frameset&gt;",
      "answer_2": "&lt;iframe&gt;",
      "answer_3": "&lt;frame&gt;",
      "answer_4": "&lt;frameset&gt;",
      "right_answer": 2,
  },
  // {   "question": "Wie stellt man TEXT am BESTEN fett dar?",
  //     "answer_1": "&lt;strong&gt;",
  //     "answer_2": "CSS nutzen",
  //     "answer_3": "&lt;bold&gt;",
  //     "answer_4": "&lt;b&gt;",
  //     "right_answer": 1,
  // },
  // {   "question": "Welches Attribut kann man NICHT fü Textarea verwenden?",
  //     "answer_1": "readonly",
  //     "answer_2": "max",
  //     "answer_3": "from",
  //     "answer_4": "spellcheck",
  //     "right_answer": 1,
  // },
  // {   "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
  //     "answer_1": "a[title]{...}",
  //     "answer_2": "a > title {...}",
  //     "answer_3": "a. title {...}",
  //     "answer_4": "a=title {...}",
  //     "right_answer": 1,
  // },
  // {   "question": "Wie definiert man in JavaScript eine Variable?",
  //     "answer_1": "let 100 = rate;",
  //     "answer_2": "100 = let rate;",
  //     "answer_3": "rate = 100;",
  //     "answer_4": "let rate = 100;",
  //     "right_answer": 4,
  // },
  // {   
  //     "question": "Was ist eine Schleife in der Programmierung?",
  //     "answer_1": "Ein Block von Code, der einmal ausgeführt wird.",
  //     "answer_2": "Ein Block von Code, der wiederholt ausgeführt wird, bis eine bestimmte Bedingung erfüllt ist.",
  //     "answer_3": "Ein Block von Code, der nur beim Programmstart ausgeführt wird.",
  //     "answer_4": "Ein Block von Code, der nie ausgeführt wird.",
  //     "right_answer": 2
  // },
  // {   
  //     "question": "Was ist eine Funktion in der Programmierung?",
  //     "answer_1": "Ein Datentyp.",
  //     "answer_2": "Eine Variable.",
  //     "answer_3": "Eine wiederverwendbare Codeeinheit, die eine bestimmte Aufgabe ausführt.",
  //     "answer_4": "Ein Kommentar.",
  //     "right_answer": 3
  // },
  // {   
  //     "question": "Welches HTML-Tag wird verwendet, um ein Bild einzufügen?",
  //     "answer_1": "<img>",
  //     "answer_2": "<picture>",
  //     "answer_3": "<image>",
  //     "answer_4": "<src>",
  //     "right_answer": 1
  // },
  // {   
  //     "question": "Wie erstellt man einen Link in HTML?",
  //     "answer_1": "<a link='url'>Link</a>",
  //     "answer_2": "<a href='url'>Link</a>",
  //     "answer_3": "<link href='url'>Link</link>",
  //     "answer_4": "<url link='url'>Link</url>",
  //     "right_answer": 2
  // },
  // {   
  //     "question": "Welches Tag wird verwendet, um eine geordnete Liste zu erstellen?",
  //     "answer_1": "<ul>",
  //     "answer_2": "<ol>",
  //     "answer_3": "<li>",
  //     "answer_4": "<dl>",
  //     "right_answer": 2
  // },
  // {   
  //     "question": "Wofür steht CSS?",
  //     "answer_1": "Cascading Style Sheets",
  //     "answer_2": "Computer Style Sheets",
  //     "answer_3": "Creative Style Sheets",
  //     "answer_4": "Colorful Style Sheets",
  //     "right_answer": 1
  // },
  // {   
  //     "question": "Wie kann man die Textfarbe in CSS ändern?",
  //     "answer_1": "color: blue;",
  //     "answer_2": "text-color: blue;",
  //     "answer_3": "font-color: blue;",
  //     "answer_4": "change-color: blue;",
  //     "right_answer": 1
  // },
  // {   
  //     "question": "Welches CSS-Attribut wird verwendet, um den Innenabstand eines Elements zu definieren?",
  //     "answer_1": "margin",
  //     "answer_2": "padding",
  //     "answer_3": "border",
  //     "answer_4": "space",
  //     "right_answer": 2
  // },
  // {   
  //     "question": "Wie kann man eine Funktion in JavaScript aufrufen?",
  //     "answer_1": "functionName;",
  //     "answer_2": "functionName[];",
  //     "answer_3": "call functionName;",
  //     "answer_4": "functionName();",
  //     "right_answer": 4
  // }
];

function saveAll() {
  save("One", One);
  save("Two", Two);
}

function save(key, array) {
  let value = JSON.stringify(array);
  localStorage.setItem(key, value);
}

function load(key) {
  let ArrayAsText = localStorage.getItem(key);
  if (ArrayAsText) {
    return JSON.parse(ArrayAsText);
  }
  return null;
}
