import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Phone, MapPin, Info as InfoIcon } from "lucide-react";

export default function Info() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">店舗情報</h1>
            <p className="text-lg text-muted-foreground">
              BAR Eightの営業時間や料金などの詳細情報
            </p>
          </div>

          {/* Store Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/bar_exterior.webp" 
              alt="BAR Eight Exterior" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  営業時間
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">営業日</span>
                  <span className="font-medium">木曜日〜日曜日</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">開店時間</span>
                  <span className="font-medium">20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">閉店時間</span>
                  <span className="font-medium">深夜まで</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">定休日</span>
                  <span className="font-medium">月曜日〜水曜日</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  料金目安
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">予算（一人あたり）</span>
                  <span className="font-medium">¥2,000〜¥3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">カクテル平均</span>
                  <span className="font-medium">¥700〜¥950</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">支払い方法</span>
                  <span className="font-medium">現金・カード可</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">チャージ</span>
                  <span className="font-medium">なし</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  所在地
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">住所</p>
                  <p className="font-medium">
                    〒702-8058<br />
                    岡山県岡山市南区並木町1丁目17-17<br />
                    日万アパート
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">目印</p>
                  <p className="font-medium">NEXUS BOWL（ボウリング場）の目の前</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <InfoIcon className="w-5 h-5 text-primary" />
                  サービス
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>店内飲食可</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>デリバリー対応</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>フード持ち込み可</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>カウンター席あり</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-muted/50 border-border">
            <CardHeader>
              <CardTitle>店舗の特徴</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">雰囲気</h3>
                <p className="text-muted-foreground">
                  昭和レトロな雰囲気とモダンな要素が融合した、落ち着いた大人の空間です。
                  ジャズミュージックが流れる中、ゆったりとお酒を楽しめます。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">お持ち込みについて</h3>
                <p className="text-muted-foreground">
                  フードメニューはございませんが、お食事のお持ち込みは自由です。
                  近くの根本商店からお持ち込みいただくお客様も多くいらっしゃいます。
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ご予約について</h3>
                <p className="text-muted-foreground">
                  ご予約は承っておりませんが、お気軽にお越しください。
                  満席の場合はお待ちいただくこともございますので、ご了承ください。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
