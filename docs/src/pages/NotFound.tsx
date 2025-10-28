import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">ページが見つかりません</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link href="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Home className="w-4 h-4 mr-2" />
            ホームに戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
