# ⚙️ Ayarlar Rehberi — Turhal Smart Fibonacci PRO

Tüm girdiler gruplara ayrılmıştır.

## 🌀 Swing Detection
| Girdi | Varsayılan | Açıklama |
|-------|-----------|----------|
| Swing Sensitivity (Pivot Length) | 15 | Pivot için sol/sağ bar sayısı. Yüksek = daha büyük ve seyrek dalgalar; düşük = daha tepkisel. |
| Direction Mode | Auto (Swing Structure) | Yön seçimi. **Auto**: en güncel pivot türüne göre. **EMA Filter**: fiyat EMA üstünde ise yukarı. **Manual Up/Down**: yönü zorla. |
| EMA Filter Length | 50 | Yalnızca "EMA Filter" modunda kullanılır. |

## 📐 Retracement Levels
- `Show Retracements`: tüm retracement çizimini aç/kapa.
- Her seviye (`0.0 … 1.0`) için ayrı **aç-kapa kutusu** ve **renk** seçimi.

## 🚀 Extension Levels
- `Show Extensions`: uzantı çizimini aç/kapa.
- Seviyeler: 1.272, 1.414, 1.618, 2.0, 2.618 (her biri aç-kapa + renk).
- Uzantılar, hareketin %100'ünün ötesine (devam/ölçülü hareket hedefleri) yansıtılır.

## ✨ Golden Zone
| Girdi | Varsayılan | Açıklama |
|-------|-----------|----------|
| Show Golden Zone | açık | Altın bölge kutusunu göster. |
| From / To | 0.618 / 0.786 | Bölge sınırları. |
| Color | altın | Kutu rengi (şeffaf dolgu). |

## 🎨 Visuals
| Girdi | Açıklama |
|-------|----------|
| Theme | Dark / Light / Neon — etiket metni, dolgu ve panel görünümünü etkiler. |
| Line Width | Çizgi kalınlığı (1–5). |
| Line Style | Solid / Dashed / Dotted. |
| Extend Lines Right | Çizgileri grafiğin sağ kenarına uzat. |
| Fill Between Retracements | Komşu seviyeler arası yumuşak dolgu. |
| Show Labels | Etiketleri göster. |
| Label: Ratio / Price | Etikette oran ve/veya fiyat göster. |
| Label Size | Tiny / Small / Normal / Large. |

## 📊 Dashboard
| Girdi | Açıklama |
|-------|----------|
| Show Info Table | Bilgi panelini göster. |
| Position | Panelin köşesi. |

Panel şunları gösterir: trend yönü, %0/tepe, %100/dip, aralık, golden zone sınırları,
fiyatın anlık geri çekilme yüzdesi.

## ⏱ Multi-Timeframe Confluence
| Girdi | Açıklama |
|-------|----------|
| Show HTF Fib | Üst zaman diliminin 0.5 ve 0.618 seviyelerini çiz. |
| Higher Timeframe | Kullanılacak üst zaman dilimi (örn. 240 = 4 saat). |

## 🔔 Alerts
| Girdi | Açıklama |
|-------|----------|
| Alert on level touch | Anahtar seviyeye (0.5 / 0.618) dokununca. |
| Alert on Golden Zone entry | Fiyat golden zone'a girince. |
| Alert on 0% / 100% break | %0 veya %100 seviyesi kırılınca. |
