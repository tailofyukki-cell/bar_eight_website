import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Wine, Music, Users, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/bar_interior.webp)",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary">
            BAR Eight
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
            岡山市南区で愛される、落ち着いた大人のジャズバー
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                メニューを見る
              </Button>
            </Link>
            <Link href="/access">
              <Button size="lg" variant="outline">
                アクセス情報
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              ようこそ、BAR Eightへ
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BAR Eightは、岡山市南区並木町に位置する隠れ家的なバーです。
              昭和レトロな雰囲気とモダンな要素が融合した空間で、
              マスターが丁寧に作る多彩なカクテルをお楽しみいただけます。
              ジャズの流れる落ち着いた店内で、ゆったりとした大人の時間をお過ごしください。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Wine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">豊富なカクテル</h3>
                <p className="text-sm text-muted-foreground">
                  マスターの豊富な知識で、様々な種類のカクテルをご提供
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">心地よい音楽</h3>
                <p className="text-sm text-muted-foreground">
                  ジャズを中心とした落ち着いた音楽が流れる空間
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">地元に愛される</h3>
                <p className="text-sm text-muted-foreground">
                  地元の常連客に愛される、アットホームな雰囲気
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">特別なイベント</h3>
                <p className="text-sm text-muted-foreground">
                  音楽イベントなど、様々な企画を定期的に開催
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* angela Connection Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/music_notes.jpg" 
                  alt="Music and Anime" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold">音楽とアニメの聖地</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当店のマスターは、岡山出身のアニソンユニット「angela」の地元の先輩として、
                  音楽とアニメに深い造詣を持っています。
                  angelaファン（通称ぢぇらっこ）にとっては、聖地のような特別な場所です。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  マスターはアニメの知識も豊富で、話題に尽きることがありません。
                  お酒を楽しみながら、音楽やアニメの話で盛り上がりましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-3xl font-serif font-bold">ご来店をお待ちしております</h2>
            <p className="text-muted-foreground">
              落ち着いた雰囲気の中で、美味しいお酒と楽しい会話をお楽しみください。
              初めての方も、常連の方も、心よりお待ちしております。
            </p>
            <Link href="/access">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                アクセス・営業時間を確認
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
