import { useEffect, RefObject } from 'react'

/**
 * Fallback scroll-edge fade observer for browsers lacking CSS `animation-timeline: scroll()`.
 * Toggles `.more-start` / `.more-end` classes consumed by `.filter-scroller` in index.css.
 */
export function useScrollFade(
  ref: RefObject<HTMLElement | null>,
  deps: readonly unknown[] = []
) {
  useEffect(() => {
    const scroller = ref.current
    if (!scroller) return
    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'scroll()')) {
      return
    }

    const first = scroller.firstElementChild
    const last = scroller.lastElementChild
    if (!first || !last) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, intersectionRatio } of entries) {
          scroller.classList.toggle(
            target === first ? 'more-start' : 'more-end',
            intersectionRatio < 1
          )
        }
      },
      { root: scroller, threshold: 1, rootMargin: '1px' }
    )

    observer.observe(first)
    observer.observe(last)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
