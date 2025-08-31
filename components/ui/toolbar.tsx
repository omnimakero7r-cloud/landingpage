"use client"

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ToolbarItem {
  id: string
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  active?: boolean
}

interface ToolbarProps {
  items: ToolbarItem[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline' | 'ghost'
}

export function Toolbar({
  items,
  className,
  orientation = 'horizontal',
  size = 'md',
  variant = 'default'
}: ToolbarProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const toolbarRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: 'h-8 px-2 text-xs',
    md: 'h-10 px-3 text-sm',
    lg: 'h-12 px-4 text-base'
  }

  const variantClasses = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm',
    outline: 'border border-gray-200 dark:border-gray-700',
    ghost: 'bg-transparent'
  }

  const orientationClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col'
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (toolbarRef.current) {
        const rect = toolbarRef.current.getBoundingClientRect()
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const toolbar = toolbarRef.current
    if (toolbar) {
      toolbar.addEventListener('mousemove', handleMouseMove)
      return () => toolbar.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={toolbarRef}
      className={cn(
        'relative flex items-center gap-1 p-1 rounded-lg',
        variantClasses[variant],
        orientationClasses[orientation],
        className
      )}
      role="toolbar"
    >
      {/* Cursor follower */}
      <div
        className="absolute pointer-events-none w-2 h-2 bg-blue-500 rounded-full opacity-20 transition-all duration-150 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px)`
        }}
      />

      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveItem(item.id)
            item.onClick?.()
          }}
          disabled={item.disabled}
          className={cn(
            'relative flex items-center gap-2 rounded-md transition-all duration-200',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            sizeClasses[size],
            {
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300': 
                item.active || activeItem === item.id,
              'text-gray-700 dark:text-gray-300': !item.active && activeItem !== item.id
            }
          )}
          onMouseEnter={() => setActiveItem(item.id)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {item.icon && (
            <span className="flex-shrink-0">
              {item.icon}
            </span>
          )}
          <span className="whitespace-nowrap">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

// Toolbar separator component
export function ToolbarSeparator({
  orientation = 'vertical',
  className
}: {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}) {
  return (
    <div
      className={cn(
        'bg-gray-200 dark:bg-gray-700',
        orientation === 'vertical' ? 'w-px h-6' : 'h-px w-6',
        className
      )}
      role="separator"
    />
  )
}

// Example usage component
export function ToolbarExample() {
  const toolbarItems: ToolbarItem[] = [
    {
      id: 'bold',
      label: 'Bold',
      icon: <span className="font-bold">B</span>,
      onClick: () => console.log('Bold clicked')
    },
    {
      id: 'italic',
      label: 'Italic',
      icon: <span className="italic">I</span>,
      onClick: () => console.log('Italic clicked')
    },
    {
      id: 'underline',
      label: 'Underline',
      icon: <span className="underline">U</span>,
      onClick: () => console.log('Underline clicked')
    }
  ]

  return (
    <div className="p-8 space-y-4">
      <h3 className="text-lg font-semibold">Toolbar Examples</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Default Horizontal Toolbar</p>
          <Toolbar items={toolbarItems} />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Outline Variant</p>
          <Toolbar items={toolbarItems} variant="outline" />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Large Size</p>
          <Toolbar items={toolbarItems} size="lg" />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">Vertical Orientation</p>
          <Toolbar items={toolbarItems} orientation="vertical" />
        </div>
      </div>
    </div>
  )
}
