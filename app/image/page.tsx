"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function ImagePage() {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)

  const handleGenerateImage = () => {
    // 这里应该调用实际的图片生成API
    setGeneratedImage('https://source.unsplash.com/random/400x300')
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">图片生成</h1>
      <Card>
        <CardHeader>
          <CardTitle>PPT制作图片生成</CardTitle>
          <CardDescription>描述所需图片，AI自动生成</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="描述所需图片"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleGenerateImage} className="mb-4">生成图片</Button>
          {generatedImage && (
            <div className="mt-4">
              <img src={generatedImage} alt="Generated" className="w-full rounded-lg shadow-lg" />
              <Button className="mt-2">下载图片</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}