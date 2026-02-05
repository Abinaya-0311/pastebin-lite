# Pastebin Lite

A simple Pastebin-like web application built using Next.js App Router.  
Users can create text pastes and access them using a unique Paste ID.

---

## 🚀 Features

- Create and store text pastes
- Unique Paste ID generation
- View pastes using dynamic routes
- REST API support using Next.js Route Handlers

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Node.js

---

## 📂 Project Structure

app/
├─ api/
│ └─ paste/
│ ├─ route.ts # POST /api/paste
│ └─ [id]/
│ └─ route.ts # GET /api/paste/:id
├─ paste/
│ └─ [id]/
│ └─ page.tsx # View paste page
├─ page.tsx # Home page


---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
Open in browser:
👉 http://localhost:3000

⚠️ Notes
Pastes are stored in memory (temporary)

Data will reset when the server restarts

👩‍💻 Author
Abinaya S
