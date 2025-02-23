import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"

export function BlogPostPreview({ post }: { post: BlogPost }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm">
          <span>{post.author}</span>
          <span className="text-muted-foreground">{post.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

