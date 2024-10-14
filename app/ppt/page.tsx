"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function PPTPage() {
  const [topic, setTopic] = useState('')
  const [outline, setOutline] = useState('')
  const [generatedPPT, setGeneratedPPT] = useState(null)

  const handleGeneratePPT = () => {
    // 这里应该调用实际的PPT生成API
    setGeneratedPPT('PPT生成成功！点击下载按钮获取。')
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">PPT制作</h1>
      <Card>
        <CardHeader>
          <CardTitle>员工工作PPT生成</CardTitle>
          <CardDescription>输入主题和大纲，自动生成PPT</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="输入PPT主题"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mb-4"
          />
          <Textarea
            placeholder="输入PPT大纲（可选）"
            value={outline}
            onChange={(e) => setOutline(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleGeneratePPT} className="mb-4">生成PPT</Button>
          {generatedPPT && (
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <p className="mb-2">{generatedPPT}</p>
              <Button>下载PPT</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}