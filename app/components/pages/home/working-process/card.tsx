'use client'

import { Button } from '@/app/components/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useState } from 'react'

type CardProps = {
  id: number
  title: string
  description: string
}

const Card = ({ id, description, title }: CardProps) => {
  const handleClickButton = () => {
    setShow(!show)
  }

  const [show, setShow] = useState(false)

  return (
    <Accordion
      type="single"
      collapsible
      className="bg-[#F3F3F3] p-12 rounded-xl shadow-black/25 shadow-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl font-medium">{id}</span>
              <h3 className="text-xl">{title}</h3>
            </div>
          </div>
          <Button
            className="font-medium text-4xl rounded-full bg-white h-8 w-8 border border-black hover:bg-blue-800/20"
            onClick={handleClickButton}
          >
            {!show ? '+' : '-'}
          </Button>
        </AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Card
