export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-primary mb-3">BAR Eight</h3>
            <p className="text-sm text-muted-foreground">
              岡山市南区並木町にある、落ち着いた雰囲気のバーです。
              豊富な種類のカクテルと、心地よい音楽でお迎えします。
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">営業時間</h4>
            <p className="text-sm text-muted-foreground">
              木曜日〜日曜日<br />
              20:00 - 深夜
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">アクセス</h4>
            <p className="text-sm text-muted-foreground">
              〒702-8058<br />
              岡山県岡山市南区並木町1丁目17-17<br />
              日万アパート
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BAR Eight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
