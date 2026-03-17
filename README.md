# 🎵 LyricsFinder

Basit bir web uygulaması ile sanatçı ve şarkı adı yazarak şarkı sözlerini bulmanızı sağlar. Arkaplanda [lyrics.ovh](https://lyricsovh.docs.apiary.io/) API’sini kullanır.

## İçindekiler
- [Özellikler](#özellikler)
- [Canlı Demo](#canlı-demo)
- [Ekran Görüntüsü](#ekran-görüntüsü)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Teknolojiler](#teknolojiler)
- [API ve Sınırlamalar](#api-ve-sınırlamalar)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## Özellikler
- Sanatçı ve şarkı adına göre söz arama
- Sonuçlar bulunamazsa bilgilendirici mesaj
- Hata durumunda kullanıcıya bildirim
- Mobil uyumlu, tek sayfalık arayüz
- Kaydırılabilir söz alanı

## Canlı Demo
GitHub Pages üzerinden: **https://ipeksavass.github.io/LyricsFinder/**

## Kurulum
```bash
git clone https://github.com/ipeksavass/LyricsFinder.git
cd LyricsFinder
```
Ek bağımlılık yoktur; statik dosyalarla çalışır.

## Kullanım
1. `index.html` dosyasını tarayıcınızda açın (veya VS Code Live Server vb. ile çalıştırın).
2. **Artist name** alanına sanatçı, **Song title** alanına şarkı adını yazın.
3. **Search** butonuna tıklayın; sonuçlar alttaki mor panelde görüntülenir.

## Teknolojiler
- HTML (tek sayfa)
- CSS (stil ve arkaplan görseli)
- JavaScript `fetch` API ile REST çağrısı
- Google Fonts (Dancing Script)

## API ve Sınırlamalar
- Endpoint: `https://api.lyrics.ovh/v1/{artist}/{title}`
- Ücretsiz, kimlik doğrulama gerektirmez.
- Yanıt bulunamazsa `Lyrics not found!` mesajı gösterilir.
- Ağ hatalarında kullanıcıya hata mesajı verilir.
- Genel bir rate-limit uygulanabilir; sık isteklerde geçici hatalar oluşabilir.

## Katkıda Bulunma
1. Fork’layın ve yeni bir branch açın (`feature/…`).
2. Değişikliklerinizi yapıp test edin.
3. Açıklayıcı bir başlık ve özetle PR açın.
