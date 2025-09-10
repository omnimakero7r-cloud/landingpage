'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WhatsAppMessageProps {
  children: React.ReactNode
  isOwn?: boolean
  showTyping?: boolean
  typingDuration?: number
  className?: string
  delay?: number
}

export function WhatsAppMessage({ 
  children, 
  isOwn = false, 
  showTyping = true,
  typingDuration = 2000,
  className,
  delay = 0
}: WhatsAppMessageProps) {
  const [isTyping, setIsTyping] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (!showTyping) {
      // Se não deve mostrar typing, mostra a mensagem diretamente após o delay
      const timer = setTimeout(() => {
        setShowMessage(true)
      }, delay)
      return () => clearTimeout(timer)
    }

    // Sequência correta: delay inicial -> typing -> mensagem
    const initialTimer = setTimeout(() => {
      setIsTyping(true)
      setShowMessage(false)
      
      // Após o período de typing, mostra a mensagem
      const typingTimer = setTimeout(() => {
        setIsTyping(false)
        setShowMessage(true)
      }, typingDuration)
      
      return () => clearTimeout(typingTimer)
    }, delay)

    return () => clearTimeout(initialTimer)
  }, [showTyping, typingDuration, delay])

  return (
    <div className={cn(
      "flex mb-2",
      isOwn ? "justify-end" : "justify-start"
    )}>
      <AnimatePresence mode="wait">
        {isTyping && showTyping && (
          <TypingIndicator key="typing" isOwn={isOwn} />
        )}
        
        {showMessage && (
          <motion.div
            key="message"
            initial={{ 
              opacity: 0, 
              y: 20,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.3
            }}
            className={cn(
              "max-w-md lg:max-w-md px-4 py-2 rounded-full shadow-md",
              isOwn 
                ? "bg-green-500 text-white rounded-br-sm" 
                : "bg-lime-100 text-gray-800 rounded-bl-sm",
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function TypingIndicator({ isOwn }: { isOwn: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center space-x-1 px-4 py-3 rounded-2xl shadow-md",
        isOwn 
          ? "bg-gray-600 rounded-br-sm" 
          : "bg-lime-100 items-start rounded-bl-sm"
      )}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn(
            "w-2 h-2 rounded-full",
            isOwn ? "bg-white/70" : "bg-green-900"
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </motion.div>
  )
}

// Componente para múltiplas mensagens com animação sequencial
interface WhatsAppConversationProps {
  messages: Array<{
    content: React.ReactNode
    isOwn: boolean
    showTyping?: boolean
    typingDuration?: number
    className?: string
  }>
  messageDelay?: number
  initialDelay?: number
  className?: string
}

export function WhatsAppConversation({ 
  messages, 
  messageDelay = 1000,
  initialDelay = 500,
  className 
}: WhatsAppConversationProps) {
  // Calcula o delay cumulativo para cada mensagem
  const calculateDelay = (index: number) => {
    let totalDelay = initialDelay
    
    for (let i = 0; i < index; i++) {
      const message = messages[i]
      const typingDuration = message.typingDuration || 2000
      const showTyping = message.showTyping !== false
      
      totalDelay += messageDelay // delay entre mensagens
      if (showTyping) {
        totalDelay += typingDuration // tempo de typing da mensagem anterior
      }
    }
    
    return totalDelay
  }

  return (
    <div className={cn("space-y-2 p-2", className)}>
      {messages.map((message, index) => (
        <WhatsAppMessage
          key={index}
          isOwn={message.isOwn}
          showTyping={message.showTyping}
          typingDuration={message.typingDuration}
          className={message.className}
          delay={calculateDelay(index)}
        >
          {message.content}
        </WhatsAppMessage>
      ))}
    </div>
  )
}
