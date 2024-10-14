"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState('')
  const [targetText, setTargetText] = useState('')
  const [sourceLang, setSourceLang] = useState('zh')
  const [targetLang, setTargetLang] = useState('en')

  const handleTranslate = () => {
    // 这里应该调用实际的翻译API
    setTargetText(`Translated: ${sourceText}`)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">翻译服务</h1>
      <Card>
        <CardHeader>
          <CardTitle>主流语言翻译</CardTitle>
          <CardDescription>选择语言并输入要翻译的文本</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Select value={sourceLang} onValueChange={setSourceLang}>
                <SelectTrigger>
                  <SelectValue placeholder="源语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="en">英语</SelectItem>
                  <SelectItem value="ja">日语</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger>
                  <SelectValue placeholder="目标语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zh">中文</SelectItem>
                  <SelectItem value="en">英语</SelectItem>
                  <SelectItem value="ja">日语</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Input
            placeholder="输入要翻译的文本"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleTranslate} className="mb-4">翻译</Button>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <h3 className="font-semibold mb-2">翻译结果：</h3>
            <p>{targetText}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}