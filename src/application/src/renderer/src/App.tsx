import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import mainTheme from './theme/mainTheme'
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState
} from '@xyflow/react'
import { useCallback } from 'react'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

function App(): JSX.Element {
  const ipcHandle = (): void => {
    console.log('sending ipc ping')
    window.electron.ipcRenderer.send('ping')
  }

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Button variant="outlined" onClick={ipcHandle}>
        Ping
      </Button>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </ThemeProvider>
  )
}

export default App
