# keep-scroll-position-on-chat
Created with CodeSandbox

Execution order

1️⃣            2️⃣             3️⃣              4️⃣             5️⃣
┌──────────┐  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  useMemo │  │   DOM    │   │useLayout │   │ Browser  │   │useEffect │
│   runs   │  │ Updates  │   │ Effect   │   │  Paint   │   │   runs   │
└──────────┘  └──────────┘   └──────────┘   └──────────┘   └──────────┘
     ↑             ↑              ↑               ↑              ↑
   During       React          After           Browser        After
   Render      Commits        Commit           Draws        Paint
     │             │              │               │              │
[Render Phase]  [Commit Phase]    │         [Paint Phase]       │
                               [Before Paint]              [After Paint]
