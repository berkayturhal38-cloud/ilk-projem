# 🏗 Mimari Notları — Turhal Smart Fibonacci PRO

TradingView tek `.pine` dosyası ister; bu nedenle kod tek dosyada, ama içeride
net mantıksal katmanlara bölünmüştür.

```
INPUT LAYER   → kullanıcı ayarları (gruplu input.*)
DATA LAYER    → ta.pivothigh / ta.pivotlow ile dalga algılama + ZigZag hafıza
LOGIC LAYER   → trend yönü (auto/ema/manual) + çapa (price0/price1) seçimi
RENDER LAYER  → line / label / box / linefill havuzları, sil-yeniden çiz motoru
MTF           → request.security ile üst zaman dilimi çapası → 0.5 / 0.618
UI LAYER      → table ile bilgi paneli (sadece son barda)
ALERT LAYER   → alert() (runtime) + alertcondition (compile-time)
```

## Tasarım kararları
- **Nesne havuzları:** `line[] / label[] / box[] / linefill[]` dizilerinde tutulur.
  Yeni dalga onaylanınca `f_clear()` hepsini siler, sonra yeniden çizilir →
  ekranda birikme olmaz, `max_*_count` sınırları aşılmaz.
- **Yeniden çizim tetiği:** `needRedraw`, yalnızca son tepe/dip barı veya yön
  değiştiğinde tetiklenir (her barda değil) → performans.
- **Çapa mantığı:** %0 hareketin en güncel ucu, %100 başlangıcı. Yön
  `curUp` ile belirlenir; uzantılar %100'ün ötesine yansıtılır.
- **MTF:** `f_swing()` aynı pivot mantığını üst zaman diliminde çalıştırır;
  yalnızca fiyatlar `request.security` ile çekilir, çizim mevcut grafikte yapılır.
  `lookahead_off` ile gelecek-bar sızıntısı (repaint riski) engellenir.
- **Tema:** seviye renkleri kullanıcı girdisidir; tema etiket metni, dolgu ve
  panel görünümü gibi "çevre" öğeleri etkiler.

## Bilinen sınırlar / gelecek fikirler
- Etiketler son bardan +3 bar offset ile sağda konumlanır.
- MTF şimdilik yalnızca 0.5 / 0.618 çizer (genişletilebilir).
- Olası eklemeler: otomatik tema-renk paleti, çoklu dalga hafızası, fib kanal,
  seans (session) filtreleri, fib zaman bölgeleri (time zones).
