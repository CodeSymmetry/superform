import DomainLayout from '@renderer/features/domain/DomainLayout'
import WelcomeLayout from '@renderer/features/welcome/WelcomeLayout'
import { lazy, Suspense } from 'react'
import { createHashRouter, Outlet } from 'react-router-dom'

const WelcomePage = lazy(() => import('../features/welcome'))
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
        path: '/domain/:domainName',
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
