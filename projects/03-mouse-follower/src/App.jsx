import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('Efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup cuando el componente se desmonta
    // Cuadno cambian las dependencias ANTES de ejecutar el efecto de nuevo
    return () => {
      console.log('Cleanup');
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#a9b6be',
        border: '1px solid black',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}> {enabled ? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </>
  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
