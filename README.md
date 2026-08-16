# Restaurant KARIMBEK — Samarkand

Restaurant KARIMBEK uchun bir sahifali veb-sayt. Samarqand, Gagarin St 194.

## Xususiyatlar

- UZ / EN / RU tillarida to'liq tarjima (i18n)
- Ommabop taomlar bo'limi (Google Maps sharhlari asosida)
- Restoran menyusi narxlar bilan
- Stol band qilish (telefon / WhatsApp)
- Google Maps xaritasi va yo'l ko'rsatish havolasi
- Mobil moslashuvchan (responsive) dizayn
- Rasm yo'q bo'lsa chiroyli placeholder ko'rsatadi

## Ishga tushirish

Sayt statik — hech qanday build kerak emas. `index.html` ni brauzerda oching
yoki istalgan statik server bilan ishga tushiring:

```bash
python -m http.server 8000
# yoki
npx serve .
```

## Tuzilishi

```
index.html     — sahifa strukturasi
style.css      — uslublar
script.js      — i18n, menyu, xaritalash, interaktivlik
images/        — rasmlar (Hero.png va boshqalar)
```

## Rasmlar

`images/` papkasiga quyidagi nomlar bilan rasm tashlasangiz sayt avtomatik ulaydi:

- `hero.jpg` — hero section foni (keng, ~1920×1080)
- `interior.jpg` — restoran interyeri
- `shashlik.jpg`, `manti.jpg`, `lagman.jpg`, `plov.jpg`, `salad.jpg` — ommabop taomlar
- `logo.jpg` — restoran logotipi

Rasm mavjud bo'lmasa, sayt chiroyli placeholder ko'rsatadi (buzilgan rasm emas).

## Menyu (Google Sheet)

`script.js` dagi `CONFIG.menuSheetId` ga Google Sheet ID qo'ysangiz, menyu
avtomatik Sheet'dan yuklanadi (ustunlar: `name | nameUz | category | meta | price`).
Sheet ID bo'lmasa, o'rnatilgan menyu ma'lumotlari ishlatiladi.

## Deploy (GitHub Pages)

Repo'ni GitHub'ga push qilib, Settings → Pages bo'limida `main` branch'ni
`/ (root)` dan deploy qiling. Sayt quyidagi manzilda ochiladi:

```
https://ZTech-com.github.io/KARIMBEK/
```
