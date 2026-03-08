"use client"
import type { ReactNode } from "react"
import { Sticker } from "../common/sticker";

type StickerConfig = {
  id: number
  title: string
  content: ReactNode
}

const STICKERS: StickerConfig[] = [
  { id: 1, title: "自己紹介", content: "ここに1の内容を書く" },
  { id: 2, title: "プログラミング歴", content: "ここに2の内容を書く" },
  { id: 3, title: "技術スタック", content: "ここに3の内容を書く" },
  { id: 4, title: "各種リンク", content: "ここに4の内容を書く" },
  { id: 5, title: "制作物1", content: "ここに5の内容を書く" },
  { id: 6, title: "制作物2", content: "ここに6の内容を書く" },
  { id: 7, title: "記事", content: "ここに7の内容を書く" },
  { id: 8, title: "my love", content: "ここに8の内容を書く" },
];

export const Top = () => {
  return (
    <div className="flex flex-col px-2 pt-4 pb-2 items-center gap-4">
      <h1 className="text-4xl font-bold">Sora&apos;s Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {STICKERS.map(({ id, title, content }) => (
          <Sticker
            key={id}
            title={title}
            imageSrc={`/sticker-${id}.png`}
            imageAlt={title}
          >
            {content}
          </Sticker>
          ))}
      </div>
    </div>
  )
}

