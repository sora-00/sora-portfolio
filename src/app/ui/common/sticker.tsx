import { useState, type ReactNode } from "react"
import * as motion from "motion/react-client"
import { Dialog } from "@mui/material"
import Image from "next/image"
import { PopupCard } from "./popupCard"

type StickerProps = {
  title?: string
  children: ReactNode
  imageSrc: string
  imageAlt?: string
}

export const Sticker = ({ title, children, imageSrc, imageAlt }: StickerProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
    <div className="flex flex-col items-center gap-3">
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        onClick={handleOpen}
        className="flex overflow-hidden w-86 h-100"
        >
        <Image
            src={imageSrc}
            alt={imageAlt ?? title ?? ""}
            width={540}
            height={540}
            className="w-full h-full object-cover"
        />
        </motion.button>
    </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "visible",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          },
        }}
      >
        <PopupCard title={title}>
          {children}
        </PopupCard>
      </Dialog>
    </>
  )
}
