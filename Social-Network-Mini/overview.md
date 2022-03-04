## Mini Social Network || App | v0.0.1

> frontend: App logic | React + JS + CSS/SASS + HTML

- Create a react app
- Clean the code
- Create the <User/> component

## JSX

> Vanilla JS

let root = document.getElementById("root")
root.innerHTML = '<button>OK</button>' <----HTML String
_ parse
_ btn = document.createElement
_ btn.innerText = 'OK'
_ root.appendChild(btn)

> react | JSX

let root = document.getElementById("root")
...
<button>OK</button> <-------JSX code \* parse

                                                      btn = React.createElement("button", null, "OK")
                                                      * ReactDom.render(btn, root)


1.Vanilla JS

                                   page load ---> <html string/> ---> root ---> PARSE -----> render

2.React DOM

<JSX> ---> PARSE ---> render ---> page load ---> ...root ----> PARSE -----> render
