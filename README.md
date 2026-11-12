<div align="center">

# 🧮 Modern React Calculator

**A sleek dark-themed calculator built with React 19, custom BODMAS precedence parsing, audio feedback, and persistent history.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)

[🌐 **النسخة العربية (Arabic Version)**](./README.ar.md)

</div>

---

## 📱 UI Layout

```text
┌────────────────────────────────────────────────────────┐
│                   CALCULATOR CONTAINER                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │ DISPLAY SCREEN:  (12 + 8) × 4 ÷ 2 = 40           │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ TOOLBAR:                 [ 🕒 History ] [ 🗑️ ]   │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ KEYPAD:                                          │  │
│  │   [  C  ]   [  (  ]   [  )  ]   [  ÷  ]          │  │
│  │   [  7  ]   [  8  ]   [  9  ]   [  ×  ]          │  │
│  │   [  4  ]   [  5  ]   [  6  ]   [  -  ]          │  │
│  │   [  1  ]   [  2  ]   [  3  ]   [  +  ]          │  │
│  │   [  D  ]   [  0  ]   [  .  ]   [  =  ]          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌─────────────────────────┐                           │
│  │ ◄ SLIDING HISTORY DRAWER│                           │
│  │ [ 🗑️ Clear ] [ ✕ Close ] │                           │
│  │ 10 + 5 = 15             │                           │
│  │ 40 ÷ 2 = 20             │                           │
│  └─────────────────────────┘                           │
└────────────────────────────────────────────────────────┘
```

---

## ✨ Features

- **Dark Glassmorphic UI**: Frosted semi-transparent dark surfaces with `#FF6500` accents.
- **Custom Math Engine (No `eval`)**: Custom parser enforcing parentheses and operator precedence (`×` & `÷` before `+` & `-`).
- **Input Validation**: Prevents invalid leading operators, double symbols (`++`, `*/`), and duplicate decimals (`..`).
- **Persistent History**: Slide-in drawer saving calculations to browser `localStorage`.
- **Audio Feedback**: Distinct sound effects for typing, deleting, clearing, and toggling history.

---

## 🏗️ Architecture & Data Flow

```mermaid
flowchart TD
    App["App.js (State Hub)"]
    
    subgraph State["States"]
        Expr["expression"]
        Res["result"]
        CssDrawer["css (drawer toggle)"]
    end
    
    subgraph UI["Components"]
        ShowResult["ShowResult (Screen)"]
        ButtonCalc["ButtonCalculator (Keypad & Toolbar)"]
        HistoryShow["HistoryShow (Drawer)"]
    end
    
    subgraph Engine["Logic (myfunctions.jsx)"]
        Calc["calculateNow() / addshit()"]
        Storage["localStorage ('mainArray')"]
        Audio["playSong()"]
    end

    App --> Expr & Res & CssDrawer
    Expr & Res --> ShowResult
    CssDrawer --> HistoryShow
    ButtonCalc -- "Update State" --> App
    HistoryShow -- "Close Drawer" --> App
    ButtonCalc --> Calc & Audio
    Calc --> Storage --> HistoryShow
```

---

## ⚙️ Calculation Algorithm (Order of Operations)

```mermaid
flowchart LR
    In["Input: '5 + 2 × 6 + 3 ÷ 2'"] --> Par{"Parentheses?"}
    Par -- Yes --> ResPar["calculateInParentes()"]
    Par -- No --> Parse["Parse Numbers & Operators"]
    ResPar --> Parse
    
    Parse --> Pass1["Pass 1: High Precedence (* and /)<br/>2 × 6 = 12,  3 ÷ 2 = 1.5"]
    Pass1 --> Pass2["Pass 2: Low Precedence (+ and -)<br/>5 + 12 + 1.5"]
    Pass2 --> Out["Result: 18.5"]
```

---

## 🔄 History Flow (LocalStorage)

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Pad as ButtonCalculator
    participant Engine as myfunctions.jsx
    participant Storage as localStorage
    participant Drawer as HistoryShow

    User->>Pad: Click '='
    Pad->>Engine: calculateNow(...)
    Engine->>Storage: Append { arr: expression, res: result }
    User->>Pad: Click 'History'
    Pad->>Drawer: Slide in (left: 0)
    Drawer->>Storage: Read 'mainArray' & Render
    User->>Drawer: Click 'Clear' -> localStorage.clear()
```

---

## 📁 File Structure

```text
calculator/
├── public/                 # MP3 Audio effects & HTML template
├── src/
│   ├── components/
│   │   ├── buttons_calculator.js  # Keypad & toolbar
│   │   ├── history_show.js        # Sliding history drawer
│   │   ├── myfunctions.jsx        # Math engine & audio logic
│   │   └── show_result.js         # Readout screen
│   ├── App.css                    # Glassmorphism styling & animations
│   ├── App.js                     # Root state management
│   └── index.js                   # App entry point
├── package.json
├── README.md                      # English documentation
└── README.ar.md                   # Arabic documentation
```

---

## 🚀 Quick Start

```bash
# 1. Clone & Install
git clone https://github.com/your-username/calculator.git
cd calculator
npm install

# 2. Start Dev Server (http://localhost:3000)
npm start

# 3. Production Build
npm run build
```
