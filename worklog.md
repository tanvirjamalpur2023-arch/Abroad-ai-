# ScholarAI Worklog

## Date: 2026-03-04

### Update 1: Enhanced AI Chat with Web Search + Multi-turn Context

**Backend (`src/app/api/chat/route.ts`)**:
- Rewrote the entire chat route with enhanced functionality:
  - Accepts `chatHistory` parameter (array of previous messages) for multi-turn conversation
  - Accepts full scholarship context from the frontend
  - Enhanced system prompt with detailed instructions for scholarship search, comparison, personalized recommendations, application guidance, subject expertise, and web search
  - Built conversation history into the LLM messages array (last 10 messages)
  - Implemented `shouldSearchWeb()` function that detects when the user's question likely asks about scholarships/programs not in the database (checks for keywords like "latest", "new", "recent", "other than", "besides", specific country mentions, etc.)
  - Implemented `extractSearchQuery()` to generate focused search queries
  - When web search is needed, uses `zai.functions.invoke("web_search", {...})` to search the web and combines results with LLM response
  - Increased max_tokens from 1000 to 1500 for more detailed responses

**Frontend (`src/app/page.tsx`)**:
- Updated `sendChatMessage` function:
  - Now sends ALL scholarships in condensed format: `title | country | subject | degree | status | Deadline: date` (instead of just the first 5)
  - Sends last 10 chat messages as `chatHistory` for multi-turn conversation context

### Update 2: Clickable Notifications

**Frontend (`src/app/page.tsx`)**:
- Added `notificationOpen` state to control the Sheet component programmatically
- Changed `<Sheet>` to `<Sheet open={notificationOpen} onOpenChange={setNotificationOpen}>`
- Made each notification item clickable with:
  - `cursor-pointer` class and `hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors` hover effect
  - On click: marks notification as read, closes notification sheet, finds the scholarship from `scholarships` array using `scholarshipId`, and opens the scholarship detail dialog
  - Added "View" link text hint next to each notification
  - The "Mark as read" eye button now uses `e.stopPropagation()` to prevent triggering the notification click when just marking as read

### Update 3: Add More Country Scholarships

**Seed file (`seed-turso.mjs`)**:
- Added 42 new scholarships across 14 new countries:
  - **Middle East**: Qatar (3), United Arab Emirates (3), Saudi Arabia (3)
  - **Asia**: Malaysia (3), Thailand (3), Singapore (3)
  - **Europe**: Austria (3), Poland (3), Greece (3), Denmark (3), Norway (3), Ireland (3), Spain (3), Hungary (3)
- Each scholarship has:
  - Unique IDs like `sch_qatar_01`, `sch_uae_01`, `sch_saudi_01`, etc.
  - Textile/wet process engineering related subjects
  - Realistic university names and scholarship programs (IsDB, Stipendium Hungaricum, NUS Research, KAUST, OeAD, etc.)
  - Mix of "open", "closing_soon", and "closed" statuses
  - `isTextile: 1`
  - Realistic requirements and benefits strings

- Updated seed script to use `INSERT OR IGNORE` instead of deleting all data first
- Added `skipped` counter to track already-existing scholarships
- Successfully seeded 42 new scholarships (84 existing were skipped)

### Database Seeding Results
- Total scholarships in database: 126
- Textile scholarships: 116
- Non-textile scholarships: 10
- Failed inserts: 0

### Verification
- ESLint check passed with no errors
- Code pushed to GitHub: `Enhance AI chat, clickable notifications, add 14 new countries`
