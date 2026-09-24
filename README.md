# Sales Intelligence Portal

Next.js + Vercel-ready portal for the existing Tableau Public Sales Report dashboard.

## What is included

- Responsive analytics portal layout
- Tableau Embedding API v3 loading from Tableau Public
- Existing workbook/view:
  https://public.tableau.com/views/SalesReport_17901328145780/Dashboard1
- AI assistant UI
- Server-side `/api/chat` adapter where your existing AI backend can be connected
- Mobile/tablet/desktop responsive behavior

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Put this project in a GitHub repository.
2. Import the repository into Vercel.
3. Use the default Next.js build settings.
4. Add any AI/API secrets as Vercel Environment Variables.
5. Deploy.

## Connect the existing AI backend

Edit:

`app/api/chat/route.ts`

Replace the demo response with a server-side request to the AI service you already use.

Do not place AI API keys in browser/client code.

## Tableau

The project uses Tableau Embedding API v3 and loads the library from Tableau Public. The dashboard is publicly accessible because it is hosted on Tableau Public.

For private/commercial Tableau content later, move the workbook to Tableau Cloud/Server and add the appropriate authentication flow.
