import { createFileRoute } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "Dashboard - PlanWise",
      },
    ],
  }),
})

function Dashboard() {
  const { user: currentUser } = useAuth()

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">
          Welcome to PlanWise!!
        </h1>

        <p className="text-muted-foreground mt-2">
          AI-Powered Productivity & Task Planning Platform
        </p>

        <p className="mt-6">
          Logged in as:
          {" "}
          <strong>
            {currentUser?.full_name || currentUser?.email}
          </strong>
        </p>
      </div>
    </div>
  )
}