# EC 1745 midterm prep (exam Tuesday, Oct 13, 2026)

Textbook: Ross, Westerfield & Jordan, *Essentials of Corporate Finance*, 11th ed. (McGraw Hill, 2023). The midterm covers Chapters 1–6.

## Files (current version: v2)

| File | What it is |
|---|---|
| `EC1745_Basics_Guide_v2.pdf` / `.docx` | Start here. An 11-page guide that assumes no background. It explains each topic in plain English, shows exactly what to type in Excel, works a real practice-exam question for each, and maps each section to its textbook chapter. |
| `EC1745_Duration_Lesson_v1.pdf` / `.docx` | A 6-page lesson on duration built around the mock exam's Brewster bond. It covers what Macaulay and modified duration mean (with charts), a cell-by-cell Excel build, answers to 3.E and 3.F, common mistakes, and a practice bond. |
| `EC1745_Duration_Table_Brewster_v1.xlsx` | The finished Brewster duration table from the lesson, with live formulas, to check your own build against. |
| `EC1745_Notes_Sheet_v8.pdf` / `.docx` | The one-page, two-sided notes sheet to bring to the exam. Side 1 has fill-in-the-cell templates for the income statement (revenue down to net income), balance sheet, cash flow statement and the textbook's cash flow from assets, plus ratios. Side 2 has time value of money, bonds step by step, duration, and a "which tool when" lookup table. All text is 9.5 pt (the exam instructions ask for at least 11 pt). Write your name on the top line and print double-sided. |
| `EC1745_Practice_Exam_Answer_Keys_v2.xlsx` | Worked answers to the Fall 2025 and Fall 2024 practice midterms, with live formulas. Column C of each tab shows the exact formula used. |
| `EC1745_Mock_Midterm_v3.pdf` / `.docx` | A new practice exam in the same style. It covers the topics your professor listed that the old exams don't (building statements from raw numbers, deriving cash flows, restructuring a commitment, bond exchange, building duration by hand). The answer list is on the last page. |
| `EC1745_Mock_Midterm_ANSWER_KEY_v3.xlsx` | Full formula answer key for the mock exam. Part 1 builds the income statement and a two-year balance sheet first, then fills the gaps (equity, then cash) and reads the answers off the statements. |

**What changed in v2:** sustainable and internal growth now use the textbook formulas, `ROE·b / (1 − ROE·b)` and `ROA·b / (1 − ROA·b)`. The simpler `ROE × b` versions are still shown. v2 also adds the textbook's cash flow from assets (OCF, net capital spending, change in NWC, cash flow to creditors and stockholders) to the notes, guide and mock exam.

## Which chapter covers what

| Chapter (Essentials, 11th ed.) | Topics | Exam use |
|---|---|---|
| 1. Introduction to Financial Management | Goal of the firm, agency problems | Skim; nothing to calculate |
| 2. Financial Statements, Taxes, and Cash Flow | Balance sheet, income statement, cash flow from assets | Building statements, deriving cash flows |
| 3. Working with Financial Statements | Ratios, DuPont identity, internal and sustainable growth | Ratio questions |
| 4. Introduction to Valuation: The Time Value of Money | PV and FV of one cash flow, solving for rate or time | Basis for everything after |
| 5. Discounted Cash Flow Valuation | Annuities, perpetuities, growing annuities, APR vs. EAR, loans | Contracts, settlements, loans, EAY |
| 6. Interest Rates and Bond Valuation | Bond prices and yields, interest-rate risk, bond quotes (clean/dirty), ratings, yield spreads | Bond questions |
| Lecture | Duration, Excel's date-based bond functions | Bond questions |

## What this year's exam looks like

- **60 minutes, blank workbook.** In past years the financial statements came pre-loaded in the spreadsheet. This year you type every input yourself, so practice entering data fast and in labeled cells.
- **No equity questions.** Skip 2025 Part 5 and 2024 Part 6 (stock valuation, Ch. 7).
- Expect roughly three parts, matching the 2025 exam minus its equity part:
  1. **Financial statements and ratios (Ch. 2–3).** Build an income statement and balance sheet, derive cash flows, then compute gross margin, ROE, DuPont, sustainable and internal growth, EV, and P/E.
  2. **Cash flows (Ch. 4–5).** PV, FV, annuities, growing annuities, implied discount rates (RATE/IRR), loans, APR vs. EAR. Expect a business setting like a contract, settlement, or restructured obligation.
  3. **Bonds and duration (Ch. 6 + lecture).** Price and yield, Treasury benchmark plus spread, clean vs. dirty price, accrued interest, Macaulay and modified duration, and the estimated vs. actual price change.
- **"Dumb" and "smart" Excel commands.** My reading is that "dumb" means period-based tools: a cash-flow timeline, PV, RATE, PMT, NPV. "Smart" means the date-aware functions: PRICE, YIELD, COUPDAYBS, DURATION, MDURATION. The answer keys solve each problem both ways. Check this against your lecture notes.

## Two conventions to confirm in your lecture notes

1. **Sustainable/internal growth.** The keys use the textbook's `ROE·b / (1 − ROE·b)` and `ROA·b / (1 − ROA·b)`, and show the simpler `ROE × b` and `ROA × b` underneath.
2. **ROE denominator.** The keys use end-of-year equity, which is how the 2025 exam framed it.

## Study plan (Fri → Tue)

| Day | Do this |
|---|---|
| **Fri night** | Read sections 0–1 of the basics guide. Then take the **2025 practice midterm** (Parts 2–4 only) from a blank workbook, with a 50-minute timer. Then compare with the answer key tabs `2025 P2/P3/P4`. |
| **Sat** | Read **Ch. 2–3** (statements, cash flow, ratios, DuPont, growth). Then take the **2024 practice midterm** (Parts 3–5) and check it. |
| **Sun** | Skim **Ch. 4**, then read **Ch. 5** (annuities, APR/EAR, loans) and **Ch. 6** (bonds). Duration comes from lecture, so use your class notes plus guide section 7. Take the **mock midterm** with a 70-minute timer and check it. |
| **Mon** | Redo every question you missed, from a blank workbook, without looking. Swap made-up questions with a classmate, as your professor suggested. Print the notes sheet and add anything handwritten. |
| **Tue** | Bring the notes sheet with your name on it. Save the workbook after every part. |
