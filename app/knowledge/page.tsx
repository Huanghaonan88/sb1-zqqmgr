"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function KnowledgePage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = () => {
    // 这里应该调用实际的知识库搜索API
    setResults([
      { title: '公司规章制度', excerpt: '这是一个示例搜索结果...' },
      { title: '产品说明书', excerpt: '这是另一个示例搜索结果...' },
    ])
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">知识库</h1>
      <Card>
        <CardHeader>
          <CardTitle>公司文档知识检索</CardTitle>
          <CardDescription>搜索公司内部文档和知识库</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="输入搜索关键词"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch}>搜索</Button>
          </div>
          <div className="space-y-4">
            {results.map((result, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{result.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}