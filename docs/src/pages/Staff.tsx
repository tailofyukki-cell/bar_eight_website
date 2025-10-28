import { Card, CardContent } from "@/components/ui/card";

export default function Staff() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">スタッフ紹介</h1>
            <p className="text-lg text-muted-foreground">
              BAR Eightを支えるスタッフをご紹介します
            </p>
          </div>

          {/* Master Profile */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <img 
                  src="/jazz_atmosphere.jpg" 
                  alt="Master" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-6 space-y-6">
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">オーナー・バーテンダー</div>
                  <h2 className="text-3xl font-serif font-bold">マスター</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">経歴</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      岡山で生まれ育ち、長年バーテンダーとして経験を積んできました。
                      2023年、地元岡山市南区にBAR Eightをオープン。
                      お客様一人ひとりに合わせたカクテルを提供することを心がけています。
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-primary">お酒へのこだわり</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      豊富な知識を活かし、クラシックカクテルからオリジナルカクテルまで、
                      幅広いメニューをご用意しています。
                      お客様のお好みやその日の気分に合わせて、最適な一杯をお作りします。
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-primary">音楽とアニメへの情熱</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      岡山出身のアニソンユニット「angela」の地元の先輩として、
                      音楽とアニメに深い造詣を持っています。
                      店内では心地よいジャズを中心に、時折アニソンも流れることも。
                      音楽やアニメの話題で盛り上がることも多く、
                      angelaファン（ぢぇらっこ）の方々にとっては聖地のような存在です。
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-primary">お客様へのメッセージ</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      「BAR Eightは、お客様がリラックスして楽しめる空間を目指しています。
                      美味しいお酒と楽しい会話で、日常の疲れを癒していただければ幸いです。
                      初めての方も常連の方も、どうぞお気軽にお越しください。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* angela Connection */}
          <Card className="bg-muted/50 border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎵</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">angelaファンの聖地</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    マスターは岡山出身のアニソンユニット「angela」の地元の先輩です。
                    angelaファン（通称ぢぇらっこ）の皆様にとって、
                    BAR Eightは特別な場所となっています。
                    angelaの話題はもちろん、アニメや音楽全般について、
                    マスターと熱く語り合うことができます。
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ※ angela公式サイト: 
                    <a 
                      href="https://angela-official.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      https://angela-official.com/
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Join Us */}
          <div className="text-center space-y-4 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-serif font-bold">ぜひお越しください</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              マスターが心を込めて作るカクテルと、楽しい会話でお待ちしております。
              お酒が好きな方、音楽が好きな方、アニメが好きな方、
              どなたでも大歓迎です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
