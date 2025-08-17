import { ChevronRight, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showEllipsis?: boolean
  maxVisiblePages?: number
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showEllipsis = true,
  maxVisiblePages = 5,
}: PaginationProps) {
  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const halfVisible = Math.floor(maxVisiblePages / 2)
    let start = Math.max(1, currentPage - halfVisible)
    const end = Math.min(totalPages, start + maxVisiblePages - 1)

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1)
    }

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  const visiblePages = getVisiblePages()
  const showLeftEllipsis = showEllipsis && visiblePages[0] > 1
  const showRightEllipsis = showEllipsis && visiblePages[visiblePages.length - 1] < totalPages

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  return (
    <div className="flex items-center gap-2">
      {/* Previous Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-12 h-12 rounded-full text-black flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {/* First page if not visible */}
      {showLeftEllipsis && (
        <>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onPageChange(1)}
            className="w-12 h-12 rounded-full border border-gray-400 bg-white/50 backdrop-blur-[10px] text-black flex items-center justify-center hover:border-white transition-colors"
          >
            1
          </motion.button>
          <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center">...</div>
        </>
      )}

      {/* Visible page numbers */}
      {visiblePages.map((page) => (
        <motion.button
          key={page}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => onPageChange(page)}
          className={`w-12 h-12 rounded-full border text-black flex items-center justify-center border-black transition-colors backdrop-blur-[10px] ${
            page === currentPage ? "bg-white" : "bg-white/20 "
          }`}
        >
          {page}
        </motion.button>
      ))}

      {/* Last page if not visible */}
      {showRightEllipsis && (
        <>
          <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center">...</div>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onPageChange(totalPages)}
            className="w-12 h-12 rounded-full border border-gray-400 bg-transparent text-white flex items-center justify-center hover:border-white transition-colors"
          >
            {totalPages}
          </motion.button>
        </>
      )}

      {/* Next Button */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-12 h-12 rounded-full text-black flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  )
}
