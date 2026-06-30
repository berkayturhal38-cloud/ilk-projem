# 📐 Turhal Smart Fibonacci PRO

Profesyonel bir **TradingView (Pine Script v6)** Fibonacci göstergesi. Piyasadaki
tepe/dip dalgalarını otomatik algılar, trend yönüne göre Fibonacci geri çekilme
(retracement) ve uzantı (extension) seviyelerini çizer; altın bölge (golden zone),
etiketler, bilgi paneli, çoklu zaman dilimi uyumu ve alarmlar sunar.

> TradingView yalnızca tek `.pine` dosyasını kullanır:
> **`TurhalSmartFibonacciPRO.pine`**. Diğer dosyalar bakım ve doküman içindir.

---

## ✨ Özellikler

- **Otomatik dalga algılama** — ayarlanabilir pivot hassasiyeti (ZigZag tarzı hafıza)
- **Trend-duyarlı yön** — Auto (dalga yapısı) / EMA filtresi / Manuel Yukarı / Manuel Aşağı
- **Retracement seviyeleri** — 0, 0.236, 0.382, 0.5, 0.618, 0.786, 1.0 (her biri aç/kapa + renk)
- **Uzantı seviyeleri** — 1.272, 1.414, 1.618, 2.0, 2.618
- **Golden Zone** — 0.618–0.786 arası vurgulu kutu + alarm
- **Etiketler** — oran ve/veya fiyat gösterimi
- **Dolgular** — retracement seviyeleri arası yumuşak gölgeleme
- **Temalar** — Dark / Light / Neon
- **Bilgi paneli** — trend, tepe/dip, aralık, golden zone, anlık geri çekilme %
- **Çoklu zaman dilimi (MTF)** — üst zaman diliminin 0.5 / 0.618 seviyeleri
- **Alarmlar** — seviye dokunma, golden zone girişi, %0/%100 kırılımı

---

## 🚀 Kurulum

1. TradingView'da bir grafik açın.
2. Alttaki **Pine Editor** sekmesine geçin.
3. `TurhalSmartFibonacciPRO.pine` içeriğini kopyalayıp yapıştırın.
4. **Save** → **Add to chart** deyin.
5. Gösterge başlığındaki ⚙️ ayar ikonundan girdileri özelleştirin.

---

## ⚙️ Hızlı Ayar Rehberi

| Girdi | Açıklama |
|-------|----------|
| **Swing Sensitivity** | Yüksek = daha büyük/az dalga, düşük = daha tepkisel |
| **Direction Mode** | Yön seçimi (otomatik / EMA / manuel) |
| **Retracement / Extension** | Her seviyeyi tek tek aç-kapa ve renklendir |
| **Golden Zone** | Altın bölge sınırları ve rengi |
| **Theme** | Dark / Light / Neon |
| **Multi-Timeframe** | Üst zaman dilimi fib seviyelerini göster |
| **Alerts** | Hangi olaylarda alarm üretileceği |

Ayrıntılar için: [`docs/settings.md`](docs/settings.md) ve [`docs/alerts.md`](docs/alerts.md).

---

## 🧠 Nasıl Çalışır?

`ta.pivothigh` / `ta.pivotlow` ile onaylı tepe ve dipler tespit edilir. En güncel
tepe ve dip, Fibonacci'nin çapasını oluşturur. **%0 seviyesi hareketin en güncel
ucuna, %100 başlangıcına** yerleştirilir; böylece yükselişte geri çekilmeler
aşağıya, düşüşte yukarıya doğru golden zone'a denk gelir. Yeni bir dalga
onaylandığında tüm çizimler silinip yeniden çizilir (ekranda birikme olmaz).

---

## 📄 Lisans

Mozilla Public License 2.0 (MPL-2.0).
