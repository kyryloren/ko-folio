'use client'
import { useIsTouchDevice } from 'hooks'
import { useEffect, useRef } from 'react'
import { Z_INDEX } from 'styles'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

const Cursor = () => {
  const canvasRef = useRef(null)
  const touchDevice = useIsTouchDevice()

  useEffect(() => {
    if (touchDevice) return null

    webGLFluidEnhanced.simulation(canvasRef.current, {
      PRESSURE: 0.2,
      SUNRAYS: false,
      START_SPLATS: 10,
      SPLAT_AMOUNT: 1,
      SPLAT_FORCE: 1000,
      DENSITY_DISSIPATION: 3,
      CURL: 0,
      COLOR_PALETTE: ['#212521'],
      BACK_COLOR: '#141714',
    })
  }, [touchDevice])

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'all',
        zIndex: Z_INDEX.canvas,
      }}
    />
  )
}

export default Cursor
