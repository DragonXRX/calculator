<div align="center">

# 🧮 آلة حاسبة تفاعلية حديثة

**آلة حاسبة عصرية بواجهة داكنة مبنية بـ React 19، بمحرك حسابي يحترم أسبقية العمليات (BODMAS)، ومؤثرات صوتية، وسجل دائم.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)

[🌐 **English Version (النسخة الإنجليزية)**](./README.md)

</div>

---

## 📱 المخطط البصري للواجهة

```text
┌────────────────────────────────────────────────────────┐
│                   حاوية الآلة الحاسبة                  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ شاشة العرض:   (12 + 8) × 4 ÷ 2 = 40              │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ شريط الأدوات:             [ 🕒 السجل ] [ 🗑️ ]    │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │ لوحة الأزرار:                                    │  │
│  │   [  C  ]   [  (  ]   [  )  ]   [  ÷  ]          │  │
│  │   [  7  ]   [  8  ]   [  9  ]   [  ×  ]          │  │
│  │   [  4  ]   [  5  ]   [  6  ]   [  -  ]          │  │
│  │   [  1  ]   [  2  ]   [  3  ]   [  +  ]          │  │
│  │   [  D  ]   [  0  ]   [  .  ]   [  =  ]          │  │
│  └──────────────────────────────────────────────────┘  │
│  ┌─────────────────────────┐                           │
│  │ ◄ درج السجل المنزلق     │                           │
│  │ [ 🗑️ تصفير ] [ ✕ إغلاق ] │                           │
│  │ 10 + 5 = 15             │                           │
│  │ 40 ÷ 2 = 20             │                           │
│  └─────────────────────────┘                           │
└────────────────────────────────────────────────────────┘
```

---

## ✨ المميزات الرئيسية

- **تصميم زجاجي داكن**: واجهة عصرية شبه شفافة مع مؤثرات ناعمة باللون البرتقالي (`#FF6500`).
- **محرك رياضي آمن (بدون `eval`)**: خوارزمية مخصصة لحساب الأقواس وأسبقية العمليات (الضرب والقسمة قبل الجمع والطرح).
- **تدقيق المدخلات**: منع المعاملات المزدوجة المتتالية (`++`، `*/`)، الفواصل المتكررة (`..`)، والبدء بمعاملات خاطئة.
- **سجل دائم (LocalStorage)**: درج منزلق يعرض العمليات السابقة مع خيار حذف وتصفير السجل.
- **تأثيرات صوتية**: أصوات تفاعلية مختلفة للنقر، الحذف (`D`)، التصفير (`C`)، وفتح السجل.

---

## 🏗️ معمارية المشروع وتدفق البيانات

```mermaid
flowchart TD
    App["App.js (المنسق الرئيسي)"]
    
    subgraph State["الحالات"]
        Expr["expression"]
        Res["result"]
        CssDrawer["css (فتح/إغلاق السجل)"]
    end
    
    subgraph UI["المكونات"]
        ShowResult["ShowResult (شاشة العرض)"]
        ButtonCalc["ButtonCalculator (الأزرار والشريط)"]
        HistoryShow["HistoryShow (درج السجل)"]
    end
    
    subgraph Engine["منطق الحساب (myfunctions.jsx)"]
        Calc["calculateNow() / addshit()"]
        Storage["localStorage ('mainArray')"]
        Audio["playSong()"]
    end

    App --> Expr & Res & CssDrawer
    Expr & Res --> ShowResult
    CssDrawer --> HistoryShow
    ButtonCalc -- "تحديث الحالة" --> App
    HistoryShow -- "إغلاق الدرج" --> App
    ButtonCalc --> Calc & Audio
    Calc --> Storage --> HistoryShow
```

---

## ⚙️ خوارزمية الحساب (أسبقية العمليات)

```mermaid
flowchart LR
    In["المدخلات: '5 + 2 × 6 + 3 ÷ 2'"] --> Par{"توجد أقواس؟"}
    Par -- نعم --> ResPar["calculateInParentes()"]
    Par -- لا --> Parse["استخراج الأرقام والمعاملات"]
    ResPar --> Parse
    
    Parse --> Pass1["المرحلة 1: الأسبقية العالية (* و /)<br/>2 × 6 = 12,  3 ÷ 2 = 1.5"]
    Pass1 --> Pass2["المرحلة 2: الأسبقية المنخفضة (+ و -)<br/>5 + 12 + 1.5"]
    Pass2 --> Out["النتيجة: 18.5"]
```

---

## 🔄 دورة حياة السجل (LocalStorage)

```mermaid
sequenceDiagram
    autonumber
    actor المستخدم
    participant لوحة_الأزرار as ButtonCalculator
    participant المحرك as myfunctions.jsx
    participant التخزين as localStorage
    participant درج_السجل as HistoryShow

    المستخدم->>لوحة_الأزرار: النقر على '='
    لوحة_الأزرار->>المحرك: calculateNow(...)
    المحرك->>التخزين: إضافة { arr: العملية, res: النتيجة }
    المستخدم->>لوحة_الأزرار: النقر على 'السجل'
    لوحة_الأزرار->>درج_السجل: فتح الدرج (left: 0)
    درج_السجل->>التخزين: قراءة 'mainArray' وعرض القائمة
    المستخدم->>درج_السجل: النقر على 'تصفير' -> مسح التخزين
```

---

## 📁 هيكل الملفات

```text
calculator/
├── public/                 # المؤثرات الصوتية MP3 وقالب HTML
├── src/
│   ├── components/
│   │   ├── buttons_calculator.js  # لوحة الأزرار وشريط الأدوات
│   │   ├── history_show.js        # درج السجل المنزلق
│   │   ├── myfunctions.jsx        # المحرك الرياضي والمؤثرات الصوتية
│   │   └── show_result.js         # شاشة العرض الرقمية
│   ├── App.css                    # التنسيقات والتحريكات والسمة الداكنة
│   ├── App.js                     # إدارة الحالة الرئيسية
│   └── index.js                   # نقطة الدخول للتطبيق
├── package.json
├── README.md                      # التوثيق باللغة الإنجليزية
└── README.ar.md                   # التوثيق باللغة العربية
```

---

## 🚀 البدء السريع والتشغيل

```bash
# 1. الاستنساخ وتثبيت الحزم
git clone https://github.com/your-username/calculator.git
cd calculator
npm install

# 2. تشغيل السيرفر المحلي (http://localhost:3000)
npm start

# 3. بناء المشروع للإنتاج
npm run build
```
