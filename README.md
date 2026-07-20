# AI Text Assistant

A small full-stack JavaScript app that uses an LLM to help with everyday text tasks. Paste in some text — meeting notes, an email, a message — pick an action, and the tool returns the result:

- **Summarize** — condense the text into a few clear sentences
- **Extract to-dos** — pull out a bulleted list of action items
- **Make professional** — rewrite the text to be clear and polite

It's the kind of small "office automation" helper that could plug into a real workflow.

## How it works

- **Frontend** (`public/`): plain HTML, CSS and JavaScript. The browser sends the text and chosen action to the backend with `fetch`.
- **Backend** (`server.js`): a small Node/Express server that receives the request, calls the LLM API, and returns the response.

The **API key lives only on the server**, loaded from a git-ignored `.env` file. It is never sent to the browser — so the key can't be scraped from the page source. Keeping secrets out of client-side code is the whole reason for the little backend.

## Tech stack

JavaScript · Node.js · Express · LLM API (Anthropic) · HTML/CSS

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your API key
cp .env.example .env
#    then edit .env and paste in your key

# 3. Start the server
npm start

# 4. Open http://localhost:3000 in your browser
```

Get an API key from the [Anthropic Console](https://console.anthropic.com). The model is set to `claude-haiku-4-5` (fast and cheap) in `server.js` — swap it for another model in one line if you want.

## Possible next steps

- Add more actions (translate, extract key dates, draft a reply)
- Stream the response so text appears as it's generated
- Turn the "extract to-dos" action into a real task list that saves items

