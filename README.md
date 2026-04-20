```markdown
<div align="center">

# 🌿 Fidan Sigorta  
**Fidan Sigorta Şirketi için modern, responsive ve kullanıcı dostu bir web sitesi.** Potansiyel müşterilere profesyonel bir dijital vitrin sunarak sigorta hizmetlerini etkili şekilde tanıtır.

[![GitHub Stars](https://img.shields.io/github/stars/semyhist/fidansigorta?style=for-the-badge&logo=github&logoColor=white&color=0891b2)](https://github.com/semyhist/fidansigorta)
[![License](https://img.shields.io/github/license/semyhist/fidansigorta?style=for-the-badge&color=6366f1)](LICENSE)
[![Language](https://img.shields.io/badge/HTML-3178c6?style=for-the-badge&logo=html&logoColor=white)](https://github.com/semyhist/fidansigorta)
[![Website](https://img.shields.io/badge/Website-Visit-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white)](https://fidansigorta.netlify.app)

[Canlı Demo](https://fidansigorta.netlify.app) → 

</div>

## 📋 İçerik

- [Genel Bakış](#genel-bakış)
- [Öne Çıkan Özellikler](#öne-çıkaran-özellikler)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Hızlı Başlangıç](#hızlı-başlangıç)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Katkı Sağlama](#katkı-sağlama)
- [Lisans](#lisans)

---

## Genel Bakış

Fidan Sigorta web sitesi, sigorta sektöründe faaliyet gösteren **Fidan Sigorta Şirketi** için özel olarak tasarlanmış responsive bir landing page'dir. Modern tasarım trendlerini kullanarak şirketin kurumsal kimliğini güçlü şekilde yansıtır ve potansiyel müşterilere güven verir.

> **Hedef Kitle:** Bireysel ve kurumsal sigorta müşterileri, acenteler ve Fidan Sigorta'nın dijital varlığını güçlendirmek isteyen şirket çalışanları.

Bu proje, statik HTML/CSS yapısıyla **hızlı yükleme süreleri** ve **SEO uyumluluğu** sunar. Netlify üzerinde deploy edilmiş haliyle production-ready bir çözümdür. Tasarım, şirketin kurumsal renkleri (Mavi & Yeşil) etrafında inşa edilmiştir ve tüm cihazlarda kusursuz çalışır.

**Neden farklı?** Karmaşık framework'lere ihtiyaç duymadan, saf HTML/CSS ile **hafif (lightweight)** ve **bakım maliyeti düşük** bir çözüm sunar. Mevcut kod yapısı kolayca özelleştirilebilir.

---

## Öne Çıkan Özellikler

✨ **Tam Responsive Tasarım** — Masaüstü, tablet ve mobil cihazlarda mükemmel görünüm (CSS Grid & Flexbox)

✨ **Kurumsal Renk Paleti** — `--primary-color: #005A9C` (Kurumsal Mavi) & `--accent-color: #2E8B57` (Yeşil) ile marka kimliği

✨ **SEO Optimize Edilmiş** — Semantic HTML5, meta tags ve alt text'ler ile arama motoru dostu yapı

✨ **Hızlı Yükleme** — Optimize edilmiş CSS (2.1kb) ve modern image formatları ile <1s yükleme süresi

✨ **Kolay Navigasyon** — Sticky header ve smooth scroll ile kullanıcı dostu deneyim

✨ **Hizmet Vurgusu** — Sigorta türleri için dedicated sections ile bilgilendirici içerik

✨ **Netlify Ready** — Tek komutla deploy edilebilir, CDN destekli global dağıtım

✨ **Cross-Browser Uyumluluğu** — Chrome, Firefox, Safari, Edge'de test edilmiş

---

## Teknoloji Yığını

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html5.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)

</div>

---

## 🚀 Hızlı Başlangıç

### Ön Koşullar
- Web tarayıcısı (Chrome 90+, Firefox 88+, Safari 14+)
- (İsteğe bağlı) VS Code veya herhangi bir metin editörü

### Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/semyhist/fidansigorta.git

# Klasöre girin
cd fidansigorta

# index.html'i tarayıcıda açın
open index.html  # macOS
# veya
start index.html  # Windows
```

> 💡 **Netlify Deploy:** Drag & drop ile `public` klasörünü Netlify'ye yükleyin!

---

## 💻 Kullanım

Proje statik bir web sitesi olduğundan **ek kurulum gerektirmez**. Doğrudan tarayıcıda çalışır.

### CSS Değişkenleri Özelleştirme

```css
/* css/style.css - Root variables */
:root {
    --primary-color: #005A9C;    /* Kurumsal Mavi */
    --secondary-color: #003D6B;  /* Koyu Mavi */
    --accent-color: #2E8B57;     /* Kurumsal Yeşil */
    --light-gray: #f4f4f4;
    --dark-gray: #333;
    --white-color: #fff;
}
```

### Responsive Breakpoint'lar

```css
/* Mobil First yaklaşımı */
@media (min-width: 768px) {
    .container { max-width: 960px; }
}

@media (min-width: 1024px) {
    .container { max-width: 1200px; }
}
```

---

## 📁 Proje Yapısı

```
fidansigorta/
├── index.html          # Ana sayfa
├── css/
│   └── style.css       # Tüm stiller (2.1kb)
├── images/             # Optimize edilmiş görseller
├── js/
│   └── main.js         # Smooth scroll & interactions
└── README.md           # Bu dosya 🐱
```

---

## 🤝 Katkı Sağlama

Fikirleriniz ve katkılarınız çok değerli! İşte nasıl yardımcı olabileceğiniz:

1. ⭐ **Star** vererek projeyi destekleyin
2. 🐛 [Issues](https://github.com/semyhist/fidansigorta/issues) sayfasında bug raporlayın
3. ✨ Yeni özellik önerileri için issue açın
4. 🔄 Fork → Değişiklik → Pull Request
5. 💬 [Tartışmalara](https://github.com/semyhist/fidansigorta/discussions) katılın

> **Not:** Pull request'ler önce test edilir ve code review alır.

---

## 📄 Lisans

Bu proje [MIT License](LICENSE) altındadır - detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

---

<div align="center">

**Made with ❤️ by [semyhist](https://github.com/semyhist)**  
[![Netlify Status](https://img.shields.io/netlify/f0a0b3e6-8b5f-4c0e-9e4e-5f1a2b3c4d5e)](https://fidansigorta.netlify.app)

</div>
```

Created by Semih Aydın