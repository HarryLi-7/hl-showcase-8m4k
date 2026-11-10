import React, { useEffect, useRef } from 'react'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'article'
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  as: Tag = 'div',
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    let rect = el.getBoundingClientRect()
    const ro = new ResizeObserver(() => {
      rect = el.getBoundingClientRect()
    })
    ro.observe(el)

    const onMove = (e: PointerEvent) => {
      if (rect.width === 0 || rect.height === 0) return
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }

    el.addEventListener('pointermove', onMove)
    return () => {
      ro.disconnect()
      el.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <Tag ref={cardRef} className={`bento-card ${className}`}>
      <div className="spotlight-layer" aria-hidden="true" />
      {children}
    </Tag>
  )
}
