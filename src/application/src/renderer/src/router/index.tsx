import { lazy, Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'

const HomePage = lazy(() => import('../layouts/HomeLayout'))
const WelcomePage = lazy(() => import('../features/welcome'))
const SandboxPage = lazy(() => import('../features/sandbox'))

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Design...</div>}>
            <WelcomePage />
          </Suspense>
        )
      },
      {
        path: '/sandbox',
        element: (
          <Suspense fallback={<div>Loading Design...</div>}>
            <SandboxPage />
          </Suspense>
        )
      }
    ]
  }
])

export default router
