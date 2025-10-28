1. Start Infrastructure (in project root):
   docker compose up redis -d

2. Start Frontend (in a new terminal):
   cd frontend && npm run dev

3. Start Backend (in a new terminal):
   cd backend && uv run api.py

4. Start Background Worker (in a new terminal):
   cd backend && uv run dramatiq run_agent_background

# Kortix Frontend

## Quick Setup

The easiest way to get your frontend configured is to use the setup wizard from the project root:

```bash
cd .. # Navigate to project root if you're in the frontend directory
python setup.py
```

This will configure all necessary environment variables automatically.

## Environment Configuration

The setup wizard automatically creates a `.env.local` file with the following configuration:

```sh
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_ENV_MODE=LOCAL
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Development Notes

- The frontend connects to the backend API at `http://localhost:8000/api`
- Supabase is used for authentication and database operations
- The app runs on `http://localhost:3000` by default
- Environment variables are automatically configured by the setup wizard
