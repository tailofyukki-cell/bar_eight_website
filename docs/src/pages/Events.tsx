import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Music } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "ジャズナイト",
      date: "2024年11月15日（金）",
      time: "21:00〜",
      description: "ジャズを中心とした音楽を楽しむ特別な夜。リクエストも受け付けます。",
      capacity: "先着15名様",
      icon: Music,
    },
    {
      id: 2,
      title: "アニソンナイト",
      date: "2024年11月23日（土）",
      time: "20:00〜",
      description: "angelaの楽曲を中心に、アニソンを楽しむ特別イベント。ぢぇらっこ大歓迎！",
      capacity: "先着20名様",
      icon: Music,
    },
    {
      id: 3,
      title: "カクテルワークショップ",
      date: "2024年12月7日（土）",
      time: "19:00〜21:00",
      description: "マスターが教えるカクテル作り体験。初心者の方も大歓迎です。",
      capacity: "定員10名（要予約）",
      icon: Users,
    },
  ];

  const regularEvents = [
    {
      title: "週末ジャズタイム",
      schedule: "毎週金・土曜日 21:00〜",
      description: "週末の夜は、心地よいジャズで特別な時間を。",
    },
    {
      title: "アニメトークナイト",
      schedule: "毎月第2・第4日曜日",
      description: "アニメ好きが集まって語り合う、カジュアルな集まりです。",
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">イベント情報</h1>
            <p className="text-lg text-muted-foreground">
              BAR Eightで開催される特別なイベントをご紹介
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="/cocktail_hero.jpg" 
              alt="Events" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Upcoming Events */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              開催予定のイベント
            </h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => {
                const IconComponent = event.icon;
                return (
                  <Card key={event.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{event.capacity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Regular Events */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              定期イベント
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularEvents.map((event, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                      <Calendar className="w-4 h-4" />
                      <span>{event.schedule}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Event Info */}
          <Card className="bg-muted/50 border-border">
            <CardHeader>
              <CardTitle>イベント参加について</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">参加方法</h3>
                <p className="text-muted-foreground">
                  基本的に予約不要でご参加いただけます。
                  ただし、定員が設定されているイベントについては、
                  当日先着順となりますので、お早めのご来店をおすすめします。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">料金</h3>
                <p className="text-muted-foreground">
                  イベント参加費は無料です。通常通りドリンク代のみお支払いください。
                  ワークショップなど一部のイベントでは別途参加費をいただく場合がございます。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">最新情報</h3>
                <p className="text-muted-foreground">
                  イベントの最新情報や追加開催については、店頭でお知らせしています。
                  ご来店の際にお気軽にお尋ねください。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-serif font-bold">イベントでお会いしましょう</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              BAR Eightのイベントは、新しい出会いや楽しい時間を提供します。
              お一人でも、お友達とご一緒でも、ぜひお気軽にご参加ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
