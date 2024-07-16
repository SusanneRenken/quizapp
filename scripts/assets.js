let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Vint Cerf",
    answer_2: "Linus Torvalds",
    answer_3: "Tim Berners-Lee",
    answer_4: "Bill Gates",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag &lt;a&gt;?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer_1: "&lt;iframe&gt;, &lt;frame&gt;, &lt;frameset&gt;",
    answer_2: "&lt;iframe&gt;",
    answer_3: "&lt;frame&gt;",
    answer_4: "&lt;frameset&gt;",
    right_answer: 2,
  },
  {
    question: "Wie stellt man TEXT am BESTEN fett dar?",
    answer_1: "&lt;strong&gt;",
    answer_2: "CSS nutzen",
    answer_3: "&lt;bold&gt;",
    answer_4: "&lt;b&gt;",
    right_answer: 1,
  },
  {
    question: "Welches Attribut kann man NICHT fü Textarea verwenden?",
    answer_1: "readonly",
    answer_2: "max",
    answer_3: "from",
    answer_4: "spellcheck",
    right_answer: 1,
  },
  {
    question:
      "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
    answer_1: "a[title]{...}",
    answer_2: "a > title {...}",
    answer_3: "a. title {...}",
    answer_4: "a=title {...}",
    right_answer: 1,
  },
  {
    question: "Wie definiert man in JavaScript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
  {
    question: "Was ist eine Schleife in der Programmierung?",
    answer_1: "Ein Block von Code, der einmal ausgeführt wird.",
    answer_2:
      "Ein Block von Code, der wiederholt ausgeführt wird, bis eine bestimmte Bedingung erfüllt ist.",
    answer_3: "Ein Block von Code, der nur beim Programmstart ausgeführt wird.",
    answer_4: "Ein Block von Code, der nie ausgeführt wird.",
    right_answer: 2,
  },
  {
    question: "Was ist eine Funktion in der Programmierung?",
    answer_1: "Ein Datentyp.",
    answer_2: "Eine Variable.",
    answer_3:
      "Eine wiederverwendbare Codeeinheit, die eine bestimmte Aufgabe ausführt.",
    answer_4: "Ein Kommentar.",
    right_answer: 3,
  },
  {
    question: "Wofür steht CSS?",
    answer_1: "Cascading Style Sheets",
    answer_2: "Computer Style Sheets",
    answer_3: "Creative Style Sheets",
    answer_4: "Colorful Style Sheets",
    right_answer: 1,
  },
  {
    question: "Wie kann man die Textfarbe in CSS ändern?",
    answer_1: "color: blue;",
    answer_2: "text-color: blue;",
    answer_3: "font-color: blue;",
    answer_4: "change-color: blue;",
    right_answer: 1,
  },
  {
    question:
      "Welches CSS-Attribut wird verwendet, um den Innenabstand eines Elements zu definieren?",
    answer_1: "margin",
    answer_2: "padding",
    answer_3: "border",
    answer_4: "space",
    right_answer: 2,
  },
  {
    question: "Wie kann man eine Funktion in JavaScript aufrufen?",
    answer_1: "functionName;",
    answer_2: "functionName[];",
    answer_3: "call functionName;",
    answer_4: "functionName();",
    right_answer: 4,
  },
  {
    question: "Was bedeutet HTML?",
    answer_1: "Hypertext Markup Language",
    answer_2: "Hyperlink Text Markup Language",
    answer_3: "Home Tool Markup Language",
    answer_4: "Hyperlinking Text Marking Language",
    right_answer: 1,
  },
  {
    question:
      "Welches Attribut ist in HTML notwendig, um einem Bild eine alternative Textbeschreibung hinzuzufügen?",
    answer_1: "title",
    answer_2: "alt",
    answer_3: "src",
    answer_4: "href",
    right_answer: 2,
  },
  {
    question: "Wie kann in CSS die Schriftgröße geändert werden?",
    answer_1: "font-weight",
    answer_2: "font-style",
    answer_3: "font-size",
    answer_4: "text-size",
    right_answer: 3,
  },
  {
    question:
      "Welcher CSS-Selektor wird verwendet, um ein Element mit der ID 'header' auszuwählen?",
    answer_1: ".header",
    answer_2: "#header",
    answer_3: "header",
    answer_4: "*header",
    right_answer: 2,
  },
  {
    question:
      "Welcher CSS-Selektor wird verwendet, um alle Elemente vom Typ &lt;p&gt; auszuwählen?",
    answer_1: ".p",
    answer_2: "#p",
    answer_3: "p",
    answer_4: "*p",
    right_answer: 3,
  },
  {
    question: "Welcher Befehl wird verwendet, um ein neues Element am Ende eines Arrays hinzuzufügen?\n\nlet arr = [1, 2, 3];",
    answer_1: "arr.add(4);",
    answer_2: "arr.append(4);",
    answer_3: "arr.push(4);",
    answer_4: "arr.insert(4);",
    right_answer: 3,
  },
  {
    question: "Was ist JavaScript?",
    answer_1: "Eine Art von Kaffee",
    answer_2: "Eine Programmiersprache",
    answer_3: "Ein Framework",
    answer_4: "Ein Webbrowser",
    right_answer: 2,
  },
  {
    question: "Wie wird eine Funktion in JavaScript definiert?",
    answer_1: "function myFunction() {}",
    answer_2: "def myFunction() {}",
    answer_3: "fun myFunction() {}",
    answer_4: "create myFunction() {}",
    right_answer: 1,
  },
  {
    question: "Wie wird eine CSS-Datei in eine HTML-Datei eingebunden?",
    answer_1: "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
    answer_2: "&lt;style src='mystyle.css'&gt;",
    answer_3:
      "&lt;link rel='stylesheet' type='text/css' href='mystyle.css'&gt;",
    answer_4: "&lt;css href='mystyle.css'&gt;",
    right_answer: 3,
  },
  {
    question: "Wie kann ein Kommentar in CSS hinzugefügt werden?",
    answer_1: "// Dies ist ein Kommentar",
    answer_2: "&lt;!-- Dies ist ein Kommentar --&gt;",
    answer_3: "/* Dies ist ein Kommentar */",
    answer_4: "** Dies ist ein Kommentar **",
    right_answer: 3,
  },
  {
    question: "Wie kann in JavaScript der Wert eines Arrays ausgelesen werden?",
    answer_1: "array.get(0);",
    answer_2: "array[0];",
    answer_3: "array(0);",
    answer_4: "array.0;",
    right_answer: 2,
  },
  {
    question: "Was sagte das HTML-Element zum CSS-Stil?",
    answer_1: "'Ich kann dich nicht sehen, du bist inline.'",
    answer_2: "'Style mich bitte.'",
    answer_3: "'Du bringst Farbe in mein Leben.'",
    answer_4: "'Wir ergänzen uns perfekt.'",
    right_answer: 3,
  },
  {
    question:
      "Wie kann in JavaScript ein Element nach seiner ID ausgewählt werden?",
    answer_1: "document.querySelector('#id');",
    answer_2: "document.getElementById('id');",
    answer_3: "document.findElementById('id');",
    answer_4: "document.selectElementById('id');",
    right_answer: 2,
  },
  {
    question: "Was wird der folgende JavaScript-Code ausgeben?\n\nconst arr = ['a', 'b', 'c'];\nconsole.log(arr.length);",
    answer_1: "2",
    answer_2: "3",
    answer_3: "4",
    answer_4: "undefined",
    right_answer: 2,
  },
  {
    question:
      "Welcher Operator wird in JavaScript verwendet, um auf Gleichheit nach Typumwandlung zu prüfen?",
    answer_1: "=",
    answer_2: "==",
    answer_3: "===",
    answer_4: "!==",
    right_answer: 2,
  },
  {
    question: "Wie kann in JavaScript die Länge eines Arrays ermittelt werden?",
    answer_1: "array.size",
    answer_2: "array.count",
    answer_3: "array.length",
    answer_4: "array.number",
    right_answer: 3,
  },
  {
    question:
      "Welches Zeichen wird verwendet, um in JavaScript eine Zeile zu kommentieren?",
    answer_1: "/* */",
    answer_2: "//",
    answer_3: "&lt;!-- --&gt;",
    answer_4: "#",
    right_answer: 2,
  },
  {
    question:
      "Wie kann in JavaScript eine Schleife erstellt werden, die von 0 bis 4 läuft?",
    answer_1: "for (let i = 0; i &lt;= 4; i++) {}",
    answer_2: "for (let i = 0; i &lt; 5; i++) {}",
    answer_3: "for (let i = 1; i &lt;= 5; i++) {}",
    answer_4: "for (let i = 1; i &lt; 4; i++) {}",
    right_answer: 2,
  },
  {
    question: "Warum sehen Schleifen in JavaScript immer so entspannt aus?",
    answer_1: "Weil sie wissen, wann sie aufhören müssen.",
    answer_2: "Weil sie sich niemals verirren.",
    answer_3: "Weil sie immer in Bewegung sind.",
    answer_4: "Weil sie es lieben, durch Arrays zu spazieren.",
    right_answer: 1,
  },
  {
    question:
      "Was wird der folgende JavaScript-Code ausgeben?\n\nlet y = 10;\nif (y &lt; 10) {\n  console.log('y ist kleiner als 10');\n} else {\n  console.log('y ist nicht kleiner als 10');\n}",
    answer_1: "y ist kleiner als 10",
    answer_2: "y ist nicht kleiner als 10",
    answer_3: "undefined",
    answer_4: "Syntaxfehler",
    right_answer: 2,
  },
  {
    question: "Welches HTML-Tag wird verwendet, um eine Tabelle zu erstellen?",
    answer_1: "&lt;table&gt;",
    answer_2: "&lt;tab&gt;",
    answer_3: "&lt;tbl&gt;",
    answer_4: "&lt;grid&gt;",
    right_answer: 1,
  },
  {
    question:
      "Was wird der folgende JavaScript-Code ausgeben?\n\nlet sum = 0;\nfor (let i = 1; i &lt;= 3; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    answer_1: "3",
    answer_2: "6",
    answer_3: "9",
    answer_4: "12",
    right_answer: 2,
  },
  {
    question:
      "Welcher Operator wird in JavaScript verwendet, um auf strikte Gleichheit zu prüfen?",
    answer_1: "=",
    answer_2: "==",
    answer_3: "===",
    answer_4: "!==",
    right_answer: 3,
  },
  {
    question:
      "Was wird der folgende JavaScript-Code ausgeben?\n\nlet x = 5;\nif (x &gt; 3) {\n  console.log('x ist größer als 3');\n} else {\n  console.log('x ist nicht größer als 3');\n}",
    answer_1: "x ist größer als 3",
    answer_2: "x ist nicht größer als 3",
    answer_3: "undefined",
    answer_4: "Syntaxfehler",
    right_answer: 1,
  },
  {
    question: "Wie kann das letzte Element eines Arrays entfernt werden?\n\nlet arr = ['a', 'b', 'c'];",
    answer_1: "arr.remove();",
    answer_2: "arr.pop();",
    answer_3: "arr.delete();",
    answer_4: "arr.shift();",
    right_answer: 2,
  },
  {
    question:
      "Wie sieht die Syntax für eine if-else-Bedingung in JavaScript aus?",
    answer_1: "if (Bedingung) { Anweisungen } else if { Anweisungen }",
    answer_2: "if { Anweisungen } else (Bedingung) { Anweisungen }",
    answer_3: "if (Bedingung) { Anweisungen } else { Anweisungen }",
    answer_4: "if { Anweisungen } else { Anweisungen }",
    right_answer: 3,
  },
  {
    question: "Warum sind JavaScript-Entwickler so gut im Campen?",
    answer_1: "Weil sie viele Frameworks haben.",
    answer_2: "Weil sie alles asynchron erledigen.",
    answer_3: "Weil sie immer ein Callback haben.",
    answer_4: "Weil sie gut mit Nodes umgehen können.",
    right_answer: 4,
  },
  {
    question:
      "Wie oft wird die Schleife ausgeführt?\n\nfor (let i = 0; i &lt; 5; i++) {\n  // Code\n}",
    answer_1: "4 Mal",
    answer_2: "5 Mal",
    answer_3: "6 Mal",
    answer_4: "Unendlich oft",
    right_answer: 2,
  },
  {
    question: "Was wird der folgende JavaScript-Code ausgeben?\n\nconst arr = [1, 2, 3];\narr[1] = 4;\nconsole.log(arr);",
    answer_1: "[1, 2, 3]",
    answer_2: "[4, 2, 3]",
    answer_3: "[1, 4, 3]",
    answer_4: "[1, 2, 4]",
    right_answer: 3,
  },
];
