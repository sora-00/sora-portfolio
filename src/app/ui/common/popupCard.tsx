import { ReactNode } from "react"
import Image from "next/image"

type PopupCardProps = {
  title?: string
  children: ReactNode
}

export const PopupCard = ({ title, children }: PopupCardProps) => {
  return (
    <div className="relative w-full">
      {/* PC */}
      <Image
        src="/neko-dialog.png"
        alt="猫型ダイアログ"
        width={2000}
        height={2000}
        className="hidden w-full h-auto sm:block"
        unoptimized
        priority
      />
      {/* モバイル用 */}
      <Image
        src="/neko-dialog-mobile.png"
        alt="猫型ダイアログ（モバイル）"
        width={2000}
        height={2000}
        className="block w-full h-auto sm:hidden"
        unoptimized
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-start p-4 pt-20 sm:p-8 sm:pt-32">
        <div className="w-full max-w-full px-2 sm:px-4">
            {title && (
              <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-center">{title}</h2>
            )}
            <div className="flex-1 overflow-y-auto mb-2 sm:mb-4 text-center text-sm sm:text-base">
              {children}
            </div>
        </div>
      </div>
    </div>
  )
}

