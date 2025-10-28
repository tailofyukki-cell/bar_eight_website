import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Menu() {
  const cocktails = [
    { name: "マティーニ", price: "¥900", description: "ジンとベルモットの完璧なバランス" },
    { name: "マンハッタン", price: "¥900", description: "ウイスキーベースの定番カクテル" },
    { name: "モヒート", price: "¥850", description: "ミントとライムの爽やかな一杯" },
    { name: "オールドファッションド", price: "¥950", description: "クラシックなウイスキーカクテル" },
    { name: "ネグローニ", price: "¥900", description: "ビターな大人の味わい" },
    { name: "ダイキリ", price: "¥850", description: "ラムベースのシンプルな美味しさ" },
  ];

  const classics = [
    { name: "ジントニック", price: "¥750" },
    { name: "モスコミュール", price: "¥750" },
    { name: "カシスソーダ", price: "¥700" },
    { name: "カンパリソーダ", price: "¥700" },
    { name: "ウイスキーソーダ", price: "¥800" },
    { name: "ラムコーク", price: "¥750" },
  ];

  const spirits = [
    { name: "ウイスキー", price: "¥800〜" },
    { name: "ジン", price: "¥700〜" },
    { name: "ウォッカ", price: "¥700〜" },
    { name: "ラム", price: "¥700〜" },
    { name: "テキーラ", price: "¥700〜" },
    { name: "ブランデー", price: "¥900〜" },
  ];

  const nonAlcoholic = [
    { name: "ソフトドリンク各種", price: "¥500" },
    { name: "ノンアルコールカクテル", price: "¥600" },
    { name: "コーヒー", price: "¥500" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">メニュー</h1>
            <p className="text-lg text-muted-foreground">
              マスターが丁寧に作る、こだわりのカクテルをお楽しみください
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src="/cocktail_menu_bg.jpg" 
              alt="Cocktails" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Signature Cocktails */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              シグネチャーカクテル
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cocktails.map((item) => (
                <Card key={item.name} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Classic Cocktails */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              定番カクテル
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {classics.map((item) => (
                <Card key={item.name} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Spirits */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              スピリッツ
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {spirits.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Non-Alcoholic */}
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">
              ノンアルコール
            </h2>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {nonAlcoholic.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Note */}
          <Card className="bg-muted/50 border-border">
            <CardHeader>
              <CardTitle className="text-lg">ご注意</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• 価格は税込表示です</p>
              <p>• メニューにないカクテルもお作りできます。お気軽にご相談ください</p>
              <p>• フードメニューはございませんが、お持ち込みは可能です</p>
              <p>• 近くの根本商店からお持ち込みいただけます</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
