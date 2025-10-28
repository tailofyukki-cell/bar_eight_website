import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Train, Car, Clock } from "lucide-react";

export default function Access() {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">アクセス</h1>
            <p className="text-lg text-muted-foreground">
              BAR Eightへのアクセス方法と周辺情報
            </p>
          </div>

          {/* Google Map */}
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                地図
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.9167891234567!2d133.9410939!3d34.6088307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553f90027d3ee5f%3A0xc11033c50d9addda!2sEight!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BAR Eight Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Address Info */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                住所・連絡先
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">所在地</h3>
                <p className="text-muted-foreground">
                  〒702-8058<br />
                  岡山県岡山市南区並木町1丁目17-17 日万アパート
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">目印</h3>
                <p className="text-muted-foreground">
                  NEXUS BOWL（ボウリング場）の目の前
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Googleマップ</h3>
                <a 
                  href="https://maps.app.goo.gl/1YTJra5fyB1auYSG9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Googleマップで開く →
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Access Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="w-5 h-5 text-primary" />
                  公共交通機関でお越しの方
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">JR岡山駅から</h4>
                  <p className="text-sm text-muted-foreground">
                    岡山駅からバスで約20分<br />
                    「並木町」バス停下車、徒歩3分
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">路面電車</h4>
                  <p className="text-sm text-muted-foreground">
                    東山線「東山」行き終点下車<br />
                    徒歩約15分
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" />
                  お車でお越しの方
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">岡山ICから</h4>
                  <p className="text-sm text-muted-foreground">
                    山陽自動車道 岡山ICより約15分
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">駐車場</h4>
                  <p className="text-sm text-muted-foreground">
                    専用駐車場はございません。<br />
                    近隣のコインパーキングをご利用ください。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                営業時間
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">営業日時</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">木曜日〜日曜日</span>
                      <span className="font-medium">20:00 - 深夜</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">定休日</span>
                      <span className="font-medium">月曜日〜水曜日</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">ご来店について</h3>
                  <p className="text-sm text-muted-foreground">
                    予約は不要です。お気軽にお越しください。<br />
                    満席の場合はお待ちいただくこともございます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nearby Info */}
          <Card className="bg-muted/50 border-border">
            <CardHeader>
              <CardTitle>周辺情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">近隣施設</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• NEXUS BOWL（ボウリング場） - 目の前</li>
                  <li>• 根本商店 - 徒歩2分（お持ち込み用の食材購入に便利）</li>
                  <li>• コンビニエンスストア - 徒歩5分</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">お持ち込みについて</h3>
                <p className="text-sm text-muted-foreground">
                  フードメニューはございませんが、お食事のお持ち込みは自由です。
                  近くの根本商店で食材を購入してお持ち込みいただくお客様も多くいらっしゃいます。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4 p-8 bg-card rounded-lg border border-border">
            <h2 className="text-2xl font-serif font-bold">お待ちしております</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              初めてのお客様も、常連のお客様も、心よりお待ちしております。
              落ち着いた雰囲気の中で、美味しいカクテルと楽しい時間をお過ごしください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
