# 🔔 Alarm Kurulum Rehberi

Turhal Smart Fibonacci PRO iki tür alarm sunar:

## 1) Hazır Alarm Koşulları (`alertcondition`)
TradingView'ın **Create Alert** penceresinde, "Condition" olarak göstergeyi
seçtiğinizde aşağıdaki hazır olaylar listede çıkar:

- **Golden Zone Entry** — fiyat altın bölgeye girdiğinde.
- **Broke 0% Level** — fiyat %0 (en güncel uç) seviyesini kırdığında.
- **Broke 100% Level** — fiyat %100 (hareketin başlangıcı) seviyesini kırdığında.

### Kurulum
1. Grafikte göstergeyi ekleyin.
2. Üst menüden **Alarm (saat ikonu) → Create Alert**.
3. **Condition** → *Turhal Smart Fibonacci PRO* → istediğiniz olayı seçin.
4. Bildirim türünü (popup, e-posta, webhook) ayarlayın → **Create**.

## 2) Dinamik Alarmlar (`alert()`)
Gösterge ayarlarındaki **Alerts** grubundan açtığınız olaylar, çalışma anında
`alert()` ile tetiklenir. Bunlar için alarm oluştururken **"Any alert() function call"**
koşulunu seçmeniz yeterlidir; mesaj metni göstergeden otomatik gelir:

- `✨ Price entered the Golden Zone (…)`
- `🚀 Price broke the 0% Fib level`
- `🔻 Price broke the 100% Fib level`
- `🎯 Price touched a key Fibonacci level`

> Tüm dinamik alarmlar `alert.freq_once_per_bar` ile sınırlandırılmıştır
> (bar başına en fazla bir kez), gürültüyü azaltmak için.

## İpuçları
- Webhook ile otomasyon (bot) için "Any alert() function call" mesaj gövdesini kullanın.
- Çok sık alarm alıyorsanız **Swing Sensitivity** değerini artırın.
