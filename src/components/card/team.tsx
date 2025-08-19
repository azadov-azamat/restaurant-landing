"use client"

import { motion } from "framer-motion"
import CircularImage from "./circular-profile"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay?: number
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="text-center"
    >
       <CircularImage
          src={image || "/placeholder.svg"}
          alt={name}
          name={name}
          position={role}
          size={190}
        />
    </motion.div>
  )
}
