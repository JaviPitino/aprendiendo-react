import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move effect
  useEffect(() => {
    // console.log('Efecto', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup cuando el componente se desmonta
    // Cuadno cambian las dependencias ANTES de ejecutar el efecto de nuevo
    return () => {
      // console.log('Cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> Solo se ejecuta una vez cuando de monta el componente
  // [dependencia] -> Se ejecuta cuando cambia la dependencia y cuando se monta el componente
  // undeefined -> Se ejecuta cada vez que se renderiza el componente

  // Change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      {enabled && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#a9b6be',
            border: '1px solid black',
            borderRadius: '50%',
            opacity: 0.3,
            pointerEvents: 'none',
            left: -15,
            top: -15,
            width: 30,
            height: 30,
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        />
      )}
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>
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
