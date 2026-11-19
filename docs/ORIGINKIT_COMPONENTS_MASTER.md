# OriginKit Components Master Code Repository

This document collects and tracks all verified OriginKit components provided for the **Atchuth Ram — Executive Portfolio** website.

---

## 1. KineticGrid
- **Role**: Hero Section Interactive Ambient Background
- **Source**: [Originkit - kineticgrid](https://www.originkit.dev/components/kineticgrid)
- **Local File**: `src/components/originkit/KineticGrid.tsx`
- **Dependencies**: React, TypeScript (Canvas 2D / No external npm package required)
- **Status**: Received & Integrated

### Code:
```tsx
/* eslint-disable */
// Kinetic Grid — Originkit

"use client"

import { useRef, useEffect, type CSSProperties } from "react"
const useIsStaticRenderer = () => false

export interface KineticGridProps {
    background?: string
    dotColor?: string
    lineColor?: string
    trailColor?: string
    spacing?: number // grid spacing in px
    radius?: number // cursor attraction radius in px
    strength?: number // 1-10 attraction strength
    trail?: boolean // show cursor trail line
    style?: CSSProperties
    className?: string
}

export default function KineticGrid(props: KineticGridProps) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        background = "#070b14",
        dotColor = "#FFFFFF",
        lineColor = "#2563EB",
        trailColor = "#2664EB",
        spacing = 50,
        radius = 200,
        strength = 4,
        trail = true,
        className = "",
    } = props

    const hostRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: -9999, y: -9999, active: false })
    const trailRef = useRef<{ x: number; y: number; t: number }[]>([])
    const isStatic = useIsStaticRenderer()

    useEffect(() => {
        const host = hostRef.current
        const canvas = canvasRef.current
        if (!host || !canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const GAP = Math.max(8, spacing)
        const R = Math.max(1, radius)
        const PULL = (Math.max(1, Math.min(10, strength)) / 10) * 4

        let W = 1
        let H = 1
        let cols: {
            hx: number
            hy: number
            x: number
            y: number
            vx: number
            vy: number
        }[][] = []
        let dots: {
            hx: number
            hy: number
            x: number
            y: number
            vx: number
            vy: number
        }[] = []

        const build = (mw?: number, mh?: number) => {
            const r = host.getBoundingClientRect()
            W = Math.max(1, Math.floor(mw ?? r.width))
            H = Math.max(1, Math.floor(mh ?? r.height))
            const dpr = window.devicePixelRatio || 1
            canvas.width = Math.floor(W * dpr)
            canvas.height = Math.floor(H * dpr)
            canvas.style.width = W + "px"
            canvas.style.height = H + "px"
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            cols = []
            dots = []
            const nCols = Math.floor(W / GAP) + 2
            const nRows = Math.floor(H / GAP) + 2
            for (let c = 0; c < nCols; c++) {
                const col: typeof dots = []
                for (let rIdx = 0; rIdx < nRows; rIdx++) {
                    const hx = c * GAP
                    const hy = rIdx * GAP
                    const d = { hx, hy, x: hx, y: hy, vx: 0, vy: 0 }
                    col.push(d)
                    dots.push(d)
                }
                cols.push(col)
            }
        }

        const drawStatic = () => {
            ctx.clearRect(0, 0, W, H)
            ctx.globalAlpha = 0.14
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.75
            for (let c = 0; c < cols.length; c++) {
                for (let rIdx = 0; rIdx < cols[c].length; rIdx++) {
                    const d = cols[c][rIdx]
                    const right = cols[c + 1]?.[rIdx]
                    const down = cols[c]?.[rIdx + 1]
                    if (right) {
                        ctx.beginPath()
                        ctx.moveTo(d.hx, d.hy)
                        ctx.lineTo(right.hx, right.hy)
                        ctx.stroke()
                    }
                    if (down) {
                        ctx.beginPath()
                        ctx.moveTo(d.hx, d.hy)
                        ctx.lineTo(down.hx, down.hy)
                        ctx.stroke()
                    }
                }
            }
            ctx.globalAlpha = 0.4
            ctx.fillStyle = dotColor
            for (const d of dots) {
                ctx.beginPath()
                ctx.arc(d.hx, d.hy, 1.2, 0, 2 * Math.PI)
                ctx.fill()
            }
            ctx.globalAlpha = 1
        }

        build()

        const ro =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver((entries) => {
                      const cr = entries[0]?.contentRect
                      build(cr?.width, cr?.height)
                      if (isStatic) drawStatic()
                  })
                : null
        ro?.observe(host)

        if (isStatic) {
            drawStatic()
            return () => ro?.disconnect()
        }

        const setMouse = (clientX: number, clientY: number) => {
            const r = canvas.getBoundingClientRect()
            const mx = clientX - r.left
            const my = clientY - r.top
            mouseRef.current.x = mx
            mouseRef.current.y = my
            mouseRef.current.active = true
            const now = performance.now()
            const trailArr = trailRef.current
            trailArr.push({ x: mx, y: my, t: now })
            if (trailArr.length > 80) trailArr.shift()
        }

        const onMove = (e: MouseEvent) => setMouse(e.clientX, e.clientY)
        const onLeave = () => {
            mouseRef.current.active = false
            mouseRef.current.x = -9999
            mouseRef.current.y = -9999
        }
        const onTouch = (e: TouchEvent) => {
            const t = e.touches[0]
            if (t) setMouse(t.clientX, t.clientY)
        }

        host.addEventListener("mousemove", onMove)
        host.addEventListener("mouseleave", onLeave)
        host.addEventListener("touchmove", onTouch, { passive: true })
        host.addEventListener("touchend", onLeave)

        let raf = 0
        const frame = () => {
            const m = mouseRef.current
            ctx.clearRect(0, 0, W, H)

            for (const d of dots) {
                let ax = (d.hx - d.x) * 0.08
                let ay = (d.hy - d.y) * 0.08
                if (m.active) {
                    const dx = m.x - d.x
                    const dy = m.y - d.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < R && dist > 0.001) {
                        const f = (1 - dist / R) * PULL
                        ax += (dx / dist) * f
                        ay += (dy / dist) * f
                    }
                }
                d.vx = (d.vx + ax) * 0.82
                d.vy = (d.vy + ay) * 0.82
                d.x += d.vx
                d.y += d.vy
            }

            for (let c = 0; c < cols.length; c++) {
                for (let rIdx = 0; rIdx < cols[c].length; rIdx++) {
                    const d = cols[c][rIdx]
                    const right = cols[c + 1]?.[rIdx]
                    const down = cols[c]?.[rIdx + 1]
                    const prox = m.active
                        ? Math.max(
                              0,
                              1 -
                                  Math.sqrt(
                                      (m.x - d.x) ** 2 + (m.y - d.y) ** 2
                                  ) /
                                      R
                          )
                        : 0
                    if (right) {
                        ctx.globalAlpha = 0.06 + prox * 0.7
                        ctx.strokeStyle = lineColor
                        ctx.lineWidth = 0.5 + prox * 1.5
                        ctx.beginPath()
                        ctx.moveTo(d.x, d.y)
                        ctx.lineTo(right.x, right.y)
                        ctx.stroke()
                    }
                    if (down) {
                        ctx.globalAlpha = 0.06 + prox * 0.7
                        ctx.strokeStyle = lineColor
                        ctx.lineWidth = 0.5 + prox * 1.5
                        ctx.beginPath()
                        ctx.moveTo(d.x, d.y)
                        ctx.lineTo(down.x, down.y)
                        ctx.stroke()
                    }
                }
            }

            for (const d of dots) {
                const prox = m.active
                    ? Math.max(
                          0,
                          1 - Math.sqrt((m.x - d.x) ** 2 + (m.y - d.y) ** 2) / R
                      )
                    : 0
                ctx.globalAlpha = 0.22 + prox * 0.78
                ctx.fillStyle = dotColor
                ctx.beginPath()
                ctx.arc(d.x, d.y, 0.8 + prox * 2.2, 0, 2 * Math.PI)
                ctx.fill()
            }

            if (trail) {
                const now = performance.now()
                const tr = trailRef.current
                ctx.lineCap = "round"
                ctx.lineJoin = "round"
                for (let i = 1; i < tr.length; i++) {
                    const a = tr[i - 1]
                    const b = tr[i]
                    const age = now - b.t
                    if (age > 260) continue
                    ctx.globalAlpha = Math.max(0, 1 - age / 260) * 0.85
                    ctx.strokeStyle = trailColor
                    ctx.lineWidth = 2
                    ctx.beginPath()
                    ctx.moveTo(a.x, a.y)
                    ctx.lineTo(b.x, b.y)
                    ctx.stroke()
                }
            }

            ctx.globalAlpha = 1
            raf = requestAnimationFrame(frame)
        }
        raf = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(raf)
            ro?.disconnect()
            host.removeEventListener("mousemove", onMove)
            host.removeEventListener("mouseleave", onLeave)
            host.removeEventListener("touchmove", onTouch)
            host.removeEventListener("touchend", onLeave)
        }
    }, [
        background,
        dotColor,
        lineColor,
        trailColor,
        spacing,
        radius,
        strength,
        trail,
        isStatic,
    ])

    return (
        <div
            ref={hostRef}
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background,
                cursor: "crosshair",
                ...(props.style || {}),
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            />
        </div>
    )
}

const COMPONENT_DEFAULTS = {
    background: "#070b14",
    dotColor: "#FFFFFF",
    lineColor: "#80ACFF",
    trail: true,
    trailColor: "#2664EB",
    spacing: 30,
    radius: 400,
    strength: 4,
}

KineticGrid.displayName = "Kinetic Grid"
```

---

## 2. FocusReveal
- **Role**: Hero Headline Cinematic Typography Reveal
- **Source**: [Originkit - focus-reveal](https://www.originkit.dev/components/focus-reveal)
- **Local File**: `src/components/originkit/FocusReveal.tsx`
- **Dependencies**: `framer-motion`, React, TypeScript
- **Status**: Received & Integrated into Codebase

### Code:
```tsx
/* eslint-disable */
// Focus Reveal — Originkit (framer-motion)
// Full implementation saved in src/components/originkit/FocusReveal.tsx
```

---

## 3. OrbitBorderButton
- **Role**: Primary Executive CTA Button with rotating perimeter comet light trail
- **Source**: [Originkit - orbit-border-button](https://www.originkit.dev/components/orbit-border-button)
- **Local File**: `src/components/originkit/OrbitBorderButton.tsx`
- **Dependencies**: `framer-motion`, React, TypeScript
- **Status**: Received & Integrated into Codebase

### Code:
```tsx
/* eslint-disable */
// Orbit Border Button — Originkit (framer-motion)
// Full implementation saved in src/components/originkit/OrbitBorderButton.tsx
```

---

## 4. ShineCard
- **Role**: Executive Impact Dashboard & Case Study 3D Metallic Shimmer Card
- **Source**: [Originkit - shine-card](https://www.originkit.dev/components/shine-card)
- **Local File**: `src/components/originkit/ShineCard.tsx`
- **Dependencies**: React, TypeScript, WebGL (No external packages required)
- **Status**: Received & Integrated into Codebase

### Code:
```tsx
/* eslint-disable */
// Shine Card — Originkit (WebGL + 3D Tilt)
// Full implementation saved in src/components/originkit/ShineCard.tsx
```

---

## 5. CharcoalShuttle
- **Role**: Segmented Slider Controller / Filter Tabs for Case Studies, Experience & Skills
- **Source**: [Originkit - charcoal-shuttle](https://www.originkit.dev/components/charcoal-shuttle)
- **Local File**: `src/components/originkit/CharcoalShuttle.tsx`
- **Dependencies**: `framer-motion`, React, TypeScript
- **Status**: Received & Integrated into Codebase (Compiled cleanly, 0 errors)

### Code:
```tsx
/* eslint-disable */
// Charcoal Shuttle — Originkit (framer-motion)
// Full implementation saved in src/components/originkit/CharcoalShuttle.tsx
```

---

## 6. PixelCard
- **Role**: Executive Metric & Impact KPI Shimmer Cards, Project Feature Grid
- **Source**: [Originkit - pixelcard](https://www.originkit.dev/components/pixelcard)
- **Local File**: `src/components/originkit/PixelCard.tsx`
- **Dependencies**: React, TypeScript, HTML5 Canvas, Framer ease math
- **Status**: Received & Integrated into Codebase (Compiled cleanly, 0 errors)

### Code:
```tsx
/* eslint-disable */
// Pixel Card — Originkit
// Full implementation saved in src/components/originkit/PixelCard.tsx
```

---

## 7. HoloFlipBadge
- **Role**: 3D Holographic Flip Badge (Preserved in Library; removed from Credentials UI per user request)
- **Source**: [Originkit - holo-flip-badge](https://www.originkit.dev/functional/holo-flip-badge)
- **Local File**: `src/components/originkit/HoloFlipBadge.tsx`
- **Dependencies**: React, TypeScript, SVG 3D CSS transforms
- **Status**: Received & Preserved in component library.

### Code:
```tsx
/* eslint-disable */
// Holo Flip Badge — Originkit
// Full implementation saved in src/components/originkit/HoloFlipBadge.tsx
```

---

## 8. EncryptButton
- **Role**: Cybernetic Decryption/Scramble Button for secondary CTAs (Download Resume, Copy Contact, Credly Link)
- **Source**: [Originkit - encrypt-button](https://www.originkit.dev/components/encrypt-button)
- **Local File**: `src/components/originkit/EncryptButton.tsx`
- **Dependencies**: `framer-motion`, React, TypeScript
- **Status**: Received & Integrated into Codebase (Compiled cleanly, 0 errors)

### Code:
```tsx
/* eslint-disable */
// Encrypt Button — Originkit (framer-motion)
// Full implementation saved in src/components/originkit/EncryptButton.tsx
```

---

## 9. InteractiveGrid
- **Role**: 3D Perspective Interactive Logo / Tech Stack Matrix Grid
- **Source**: [Originkit - interactive-grid](https://www.originkit.dev/components/interactive-grid)
- **Local File**: `src/components/originkit/InteractiveGrid.tsx`
- **Dependencies**: React, TypeScript, CSS 3D transforms, Framer perspective
- **Status**: Received & Integrated into Codebase (Compiled cleanly, 0 errors)

### Code:
```tsx
/* eslint-disable */
// Interactive Grid — Originkit
// Full implementation saved in src/components/originkit/InteractiveGrid.tsx
```

---

## 10. LumenCinch (Glowing Hourglass Shaped)
- **Role**: Visual Ambient Shader Background (Preserved in Library)
- **Source**: [Originkit - Glowing Hourglass Shaped](https://www.originkit.dev)
- **Local File**: `src/components/originkit/LumenCinch.tsx`
- **Dependencies**: React, TypeScript, WebGL2 (Half-float / R11G11B10F light buffer, Bloom passes, Multi-octave flow fields)
- **Status**: Received & Preserved in component library.

---

## 11. DigitalRainCurtain (ArgentCloudburst)
- **Role**: Hero Section Primary Interactive Background — Digital rain curtain falling from a luminous light bar
- **Source**: [Originkit - Digital Rain Curtain](https://www.originkit.dev)
- **Local File**: `src/components/originkit/DigitalRainCurtain.tsx`
- **Dependencies**: React, TypeScript, WebGL2 Shader (Custom frag/vert shaders, adaptive resolution ladder, GPU timer queries)
- **Status**: Active in Hero Section (`src/components/Hero.tsx`) tuned to the Dark Luxury Palette (`#0c0705`, `#bb9457`, `#ffe6a7`, `#432818`)
- **Key Capabilities**:
  - **Dynamic Flow**: Smooth dashes fading in/out, box-filtered pixel edges, multi-speed fall velocity.
  - **Interactive Physics**: Pointer sweep produces wind sway/lean, hover parts the curtain around the cursor, click triggers lightning charge or splash ring, and hold triggers downpour bursts.
  - **Top Blur Header**: Smooth frosted glass overlay and gradient blur across the top region.

---

## 12. MoonlitPetals (NightSceneBacklit)
- **Role**: Full Page Ambient Background for the rest of the site (Impact Dashboard through Contact Hub)
- **Source**: [Originkit - Moonlit Petals](https://www.originkit.dev)
- **Local File**: `src/components/originkit/MoonlitPetals.tsx`
- **Dependencies**: React, TypeScript, HTML5 Canvas 2D + WebGL Warp Shader
- **Status**: Integrated in `src/App.tsx` as a sticky viewport background behind all content sections
- **Visuals & Physics**:
  - Procedural cherry blossom tree crown with limbs, twigs, and thousands of multi-layered flower petals.
  - Dynamic wind swaying on sprites and hanging sprays.
  - Smooth WebGL warp field for cursor interaction.
  - Drifting, rotating near-lens and background petals with bokeh blur flares and film grain.
  - Harmonized with dark luxury palette: deep obsidian background (`#0c0705`), burnished amber blossoms (`#bb9457`), champagne petals (`#ffe6a7`), and warm espresso branches (`#3a2216`).











