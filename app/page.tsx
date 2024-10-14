import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">欢迎使用三菱动力AI服务</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>对话</CardTitle>
            <CardDescription>知识性问答服务</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="输入您的问题" className="mb-2" />
            <Button>开始对话</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>翻译</CardTitle>
            <CardDescription>主流语言翻译服务</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="输入要翻译的文本" className="mb-2" />
            <Button>开始翻译</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>知识库</CardTitle>
            <CardDescription>公司文档知识检索</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="搜索公司文档" className="mb-2" />
            <Button>搜索</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>PPT制作</CardTitle>
            <CardDescription>员工工作PPT生成</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="输入PPT主题" className="mb-2" />
            <Button>生成PPT</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>图片生成</CardTitle>
            <CardDescription>PPT制作图片生成</CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="描述所需图片" className="mb-2" />
            <Button>生成图片</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}