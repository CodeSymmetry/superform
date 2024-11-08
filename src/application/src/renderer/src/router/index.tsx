import { lazy, Suspense } from 'react'
import { createHashRouter, Outlet } from 'react-router-dom'

const WelcomeLayout = lazy(() => import('../features/welcome/WelcomeLayout'))
const WelcomePage = lazy(() => import('../features/welcome'))
const DomainLayout = lazy(() => import('../features/domain/DomainLayout'))
const DomainPage = lazy(() => import('../features/domain'))
const SandboxPage = lazy(() => import('../features/sandbox'))
const Actions = lazy(() => import('../actions'))

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Actions />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '',
        element: <WelcomeLayout />,
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
      },
      {
        path: '/domain',
        element: <DomainLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading Design...</div>}>
                <DomainPage />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
])

export default router
