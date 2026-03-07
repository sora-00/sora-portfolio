"use client"
import { Sticker } from "../common/sticker";

export const Top = () => {
  return (
    <div className="flex flex-col pl-10 pt-10 items-center gap-6">
      <h1 className="text-4xl font-bold">Sora&apos;s Portfolio</h1>
      <Sticker
        title="自己紹介"
        imageSrc="/sticker-box.png"
        imageAlt="自己紹介"
      >
        自己紹介
      </Sticker>
    </div>
  )
}

