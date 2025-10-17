import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.hue = Math.random() * 60 + 240 // Blue to purple range
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Connection class
    class Connection {
      constructor(particle1, particle2) {
        this.particle1 = particle1
        this.particle2 = particle2
        this.distance = Math.sqrt(
          Math.pow(particle1.x - particle2.x, 2) + 
          Math.pow(particle1.y - particle2.y, 2)
        )
      }

      draw() {
        if (this.distance < 100) {
          ctx.save()
          ctx.globalAlpha = (100 - this.distance) / 100 * 0.3
          ctx.strokeStyle = `hsl(${(this.particle1.hue + this.particle2.hue) / 2}, 70%, 60%)`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.particle1.x, this.particle1.y)
          ctx.lineTo(this.particle2.x, this.particle2.y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }

    const particles = []
    const connections = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Create connections
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const connection = new Connection(particles[i], particles[j])
          connections.push(connection)
        }
      }

      // Draw connections
      connections.forEach(connection => {
        connection.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
    </motion.div>
  )
}

export default ParticleBackground
