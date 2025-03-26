# keep-scroll-position-on-chat
Created with CodeSandbox

useMemo is perfect for capturing measurements before changes
useLayoutEffect is good for DOM measurements/updates that need to happen before visual changes
useEffect is best for side effects that don't need to be synchronous with visual updates

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
