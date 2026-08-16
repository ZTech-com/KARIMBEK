"use strict"

/* ==================================================
	 CONFIG — Restaurant KARIMBEK
	 [YETISHMAYDI] = ma'lumot hozircha mavjud emas.
	 CONFIG.portfolioLink qiymatini o'zgartirmang.
================================================== */
const CONFIG = {
	brand: "Restaurant KARIMBEK",
	tagline: "Samarqandda an'anaviy taomlar, keng tanlov va unutilmas muhit",
	city: "Samarkand",
	phone: "+998 66 237 77 39",
	phoneAction: "+998662377739",
	whatsappText: "Salom, menyu bilan qiziqaman",
	address: "Gagarin St 194, Samarkand, Samarqand Region, Uzbekistan",
	hours: "[YETISHMAYDI]", // Google Maps: ochiq, yopilish 23:00. To'liq ochilish vaqti berilmagan.
	rating: "4.3",
	reviewsCount: "1,368",
	instagram: "",
	telegram: "",
	mapEmbedSrc: "https://www.google.com/maps?q=Gagarin%20St%20194%2C%20Samarkand%2C%20Samarqand%20Region%2C%20Uzbekistan&z=15&output=embed",
	menuSheetId: "SHEET_ID_shu_yerga",
	portfolioLink: "" // o'zgartirmang
}

/* ==================================================
	 I18N — uz / en / ru
================================================== */
let currentLang = "uz"

const LANGUAGES = {
	// SEO
	seo_title: {
		uz: "Restaurant KARIMBEK — Samarkand",
		en: "Restaurant KARIMBEK — Samarkand",
		ru: "Ресторан KARIMBEK — Самарканд"
	},
	seo_desc: {
		uz: "Restaurant KARIMBEK — Samarqand, Gagarin St 194. An'anaviy taomlar, shashlik, keng tanlov, katta guruhlar uchun qulay muhit. 4.3 reyting, 1,368 ta Google Maps sharhi.",
		en: "Restaurant KARIMBEK — Samarkand, Gagarin St 194. Traditional dishes, shashlik, wide selection, comfortable setting for large groups. 4.3 rating, 1,368 Google Maps reviews.",
		ru: "Ресторан KARIMBEK — Самарканд, Gagarin St 194. Традиционные блюда, шашлык, широкий выбор, уютная атмосфера для больших компаний. Рейтинг 4.3, 1,368 отзывов Google Maps."
	},
	// A11y
	skip: { uz: "Asosiy kontentga o'tish", en: "Skip to main content", ru: "Перейти к основному содержимому" },
	nav_aria: { uz: "Asosiy navigatsiya", en: "Main navigation", ru: "Основная навигация" },
	lang_aria: { uz: "Tilni tanlash", en: "Select language", ru: "Выбор языка" },
	brand_aria: { uz: "Restaurant KARIMBEK — bosh sahifa", en: "Restaurant KARIMBEK — homepage", ru: "Ресторан KARIMBEK — главная" },
	nav_toggle_open: { uz: "Menyuni ochish", en: "Open menu", ru: "Открыть меню" },
	nav_toggle_close: { uz: "Menyuni yopish", en: "Close menu", ru: "Закрыть меню" },
	menu_tabs_aria: { uz: "Menyu kategoriyalari", en: "Menu categories", ru: "Категории меню" },
	rev_stars: { uz: "5 yulduz", en: "5 stars", ru: "5 звёзд" },
	map_title: {
		uz: "Restaurant KARIMBEK xaritasi — Gagarin St 194, Samarkand",
		en: "Restaurant KARIMBEK map — Gagarin St 194, Samarkand",
		ru: "Карта ресторана KARIMBEK — Gagarin St 194, Самарканд"
	},
	brand_logo_alt: { uz: "Restaurant KARIMBEK logotipi", en: "Restaurant KARIMBEK logo", ru: "Логотип ресторана KARIMBEK" },
	hero_img_alt: {
		uz: "Restaurant KARIMBEK Samarqand restorani",
		en: "Restaurant KARIMBEK Samarkand restaurant",
		ru: "Ресторан KARIMBEK в Самарканде"
	},
	about_img_alt: {
		uz: "Restaurant KARIMBEK interyeri — katta zal",
		en: "Restaurant KARIMBEK interior — large hall",
		ru: "Интерьер ресторана KARIMBEK — большой зал"
	},
	// Nav
	nav_home: { uz: "Bosh sahifa", en: "Home", ru: "Главная" },
	nav_menu: { uz: "Menyu", en: "Menu", ru: "Меню" },
	nav_reviews: { uz: "Sharhlar", en: "Reviews", ru: "Отзывы" },
	nav_services: { uz: "Xizmatlar", en: "Services", ru: "Услуги" },
	nav_contact: { uz: "Manzil", en: "Location", ru: "Адрес" },
	nav_reserve: { uz: "Stol band qilish", en: "Book a table", ru: "Забронировать стол" },
	// Hero
	hero_eyebrow: {
		uz: "Samarkand · An'anaviy restoran",
		en: "Samarkand · Traditional restaurant",
		ru: "Самарканд · Традиционный ресторан"
	},
	hero_h1: {
		uz: "Samarqandda an'anaviy taomlar va keng tanlov",
		en: "Traditional dishes and a wide selection in Samarkand",
		ru: "Традиционные блюда и широкий выбор в Самарканде"
	},
	hero_sub: {
		uz: "Katta guruhlar uchun qulay muhit, jonli atmosfera, saxiy porsiyalar va do'stona xizmat — Restaurant KARIMBEK'da.",
		en: "A comfortable setting for large groups, lively atmosphere, generous portions and friendly service — at Restaurant KARIMBEK.",
		ru: "Уютная атмосфера для больших компаний, живая музыка, щедрые порции и дружелюбный сервис — в ресторане KARIMBEK."
	},
	hero_proof: { uz: "4.3 · 1,368 ta sharh", en: "4.3 · 1,368 reviews", ru: "4.3 · 1,368 отзывов" },
	cta_reserve: { uz: "Stol band qilish", en: "Book a table", ru: "Забронировать стол" },
	cta_menu: { uz: "Menyuni ko'rish", en: "View menu", ru: "Посмотреть меню" },
	// About
	about_h2: {
		uz: "Katta restoran, katta guruhlar uchun qulay",
		en: "A large restaurant, comfortable for big groups",
		ru: "Большой ресторан, удобный для больших компаний"
	},
	about_p: {
		uz: "Restoranning Google Maps sharhlarida tilga olingan kuchli tomonlari.",
		en: "Highlights mentioned in the restaurant's Google Maps reviews.",
		ru: "Сильные стороны, отмеченные в отзывах Google Maps."
	},
	feat_big_title: { uz: "Katta restoran", en: "Large restaurant", ru: "Большой ресторан" },
	feat_big_p: { uz: "Keng maydon va ko'p o'tirish joylari.", en: "Spacious hall with plenty of seating.", ru: "Просторный зал и много посадочных мест." },
	feat_groups_title: { uz: "Katta guruhlar uchun qulay", en: "Great for large groups", ru: "Удобно для больших компаний" },
	feat_groups_p: { uz: "Katta kompaniya bilan ham joy topish mumkin.", en: "There is room even for a large company.", ru: "Место найдётся даже для большой компании." },
	feat_trad_title: { uz: "An'anaviy taomlar", en: "Traditional dishes", ru: "Традиционные блюда" },
	feat_trad_p: {
		uz: "Shashlik, kebab, lagman, manti va palov kabi taomlar.",
		en: "Dishes such as shashlik, kebab, lagman, manti and plov.",
		ru: "Такие блюда, как шашлык, кебаб, лагман, манты и плов."
	},
	feat_portions_title: { uz: "Saxiy porsiyalar", en: "Generous portions", ru: "Щедрые порции" },
	feat_portions_p: { uz: "Sharhlarda porsiyalar saxiy deb baholangan.", en: "Reviews describe the portions as generous.", ru: "В отзывах порции отмечают как щедрые." },
	feat_service_title: { uz: "Do'stona xizmat", en: "Friendly service", ru: "Дружелюбный сервис" },
	feat_service_p: { uz: "Xodimlar do'stona xizmat ko'rsatishi ta'kidlangan.", en: "The staff are noted for their friendly service.", ru: "Отмечают дружелюбное обслуживание персонала." },
	feat_atmo_title: { uz: "Jonli atmosfera", en: "Lively atmosphere", ru: "Живая атмосфера" },
	feat_atmo_p: { uz: "Musiqa va turli muhit hamda seating zonalari.", en: "Music and a variety of ambiences and seating zones.", ru: "Музыка, разнообразная атмосфера и зоны отдыха." },
	about_h2b: { uz: "Restaurant KARIMBEK haqida", en: "About Restaurant KARIMBEK", ru: "О ресторане KARIMBEK" },
	about_p1: {
		uz: "Restaurant KARIMBEK — Samarqand, Gagarin ko'chasida joylashgan keng restoran. Ko'p o'tirish joylari va turli muhit hamda seating zonalari bilan katta guruhlar uchun ham qulay.",
		en: "Restaurant KARIMBEK is a spacious restaurant located on Gagarin Street in Samarkand. With plenty of seating and various ambiences and seating zones, it is comfortable for large groups too.",
		ru: "Ресторан KARIMBEK — просторный ресторан на улице Гагарина в Самарканде. Благодаря множеству посадочных мест и разнообразным зонам он удобен и для больших компаний."
	},
	about_p2: {
		uz: "Google Maps sharhlari va menyu ma'lumotlarida o'zbek va an'anaviy Markaziy Osiyo taomlari, shashlik, kebab, lagman, manti va palov kabi taomlar tilga olinadi.",
		en: "Google Maps reviews and menu information mention Uzbek and traditional Central Asian dishes such as shashlik, kebab, lagman, manti and plov.",
		ru: "В отзывах Google Maps и в меню упоминаются узбекские и традиционные блюда Центральной Азии: шашлык, кебаб, лагман, манты и плов."
	},
	about_p3: {
		uz: "Saxiy porsiyalar, do'stona xizmat va jonli atmosfera. Restoranda ovqatlanish (dine-in), olib ketish (takeout) va yetkazib berish (delivery) xizmatlari mavjud.",
		en: "Generous portions, friendly service and a lively atmosphere. Dine-in, takeout and delivery are available.",
		ru: "Щедрые порции, дружелюбный сервис и живая атмосфера. Доступны обслуживание в зале (dine-in), еда на вынос (takeout) и доставка (delivery)."
	},
	about_note: {
		uz: "Ma'lumotlar Google Maps sharhlari va restoran menyusi asosida tayyorlangan.",
		en: "Information prepared based on Google Maps reviews and the restaurant menu.",
		ru: "Информация подготовлена на основе отзывов Google Maps и меню ресторана."
	},
	// Popular
	pop_eyebrow: { uz: "Ko'p tilga olinadi", en: "Often mentioned", ru: "Часто упоминаются" },
	pop_h2: { uz: "Ommabop taomlar", en: "Popular dishes", ru: "Популярные блюда" },
	pop_p1: {
		uz: "Ushbu taomlar Google Maps sharhlari va qidiruv kalit so'zlarida ko'p tilga olinadi. Aniq narxlar",
		en: "These dishes are frequently mentioned in Google Maps reviews and search keywords. Exact prices are listed in the",
		ru: "Эти блюда часто упоминаются в отзывах Google Maps и поисковых запросах. Точные цены указаны в разделе"
	},
	pop_p2: { uz: "bo'limida keltirilgan.", en: "section.", ru: "." },
	pop_dish_src: {
		uz: "Google Maps sharhlari va qidiruv kalit so'zlarida tilga olinadi.",
		en: "Mentioned in Google Maps reviews and search keywords.",
		ru: "Упоминается в отзывах Google Maps и поисковых запросах."
	},
	// Menu
	menu_eyebrow: { uz: "Menyu", en: "Menu", ru: "Меню" },
	menu_h2: { uz: "Restoran menyusi", en: "Restaurant menu", ru: "Меню ресторана" },
	menu_p: { uz: "Narxlar restoran menyusidagi so'm narxlaridir.", en: "Prices are in sums as shown on the restaurant menu.", ru: "Цены в сумах указаны по меню ресторана." },
	menu_note_menu: { uz: "Narxlar: restoran menyusi asosida.", en: "Prices: based on the restaurant menu.", ru: "Цены: по меню ресторана." },
	menu_note_sheet: { uz: "Narxlar: Google Sheet menyusi asosida.", en: "Prices: based on the Google Sheet menu.", ru: "Цены: по меню Google Sheet." },
	// Reservation
	res_eyebrow: { uz: "Band qilish", en: "Reservation", ru: "Бронирование" },
	res_h2: { uz: "Stol band qilish", en: "Book a table", ru: "Забронировать стол" },
	res_p: {
		uz: "Stol band qilish uchun telefon qiling yoki WhatsApp orqali yozing. Restoran xodimlari sizga yordam berishadi.",
		en: "Call or write on WhatsApp to book a table. The restaurant staff will help you.",
		ru: "Чтобы забронировать стол, позвоните или напишите в WhatsApp. Сотрудники ресторана помогут вам."
	},
	res_phone_title: { uz: "Telefon orqali", en: "By phone", ru: "По телефону" },
	res_phone_p: { uz: "Qo'ng'iroq qiling — stolingizni band qilib qo'yishadi.", en: "Give us a call — we'll hold your table.", ru: "Позвоните — стол для вас забронируют." },
	res_wa_title: { uz: "WhatsApp orqali", en: "Via WhatsApp", ru: "Через WhatsApp" },
	res_wa_p: { uz: "Yozma ravishda band qiling — tez va qulay.", en: "Book in writing — quick and convenient.", ru: "Забронируйте в письменном виде — быстро и удобно." },
	res_wa_cta: { uz: "WhatsApp orqali yozish", en: "Write on WhatsApp", ru: "Написать в WhatsApp" },
	wa_text: { uz: "Salom, menyu bilan qiziqaman", en: "Hello, I'm interested in the menu", ru: "Здравствуйте, меня интересует меню" },
	res_hours: {
		uz: "Google Maps holati: ochiq · yopilish 23:00 · To'liq ish vaqti: [YETISHMAYDI]",
		en: "Google Maps status: open · closes 23:00 · Full opening hours: [YETISHMAYDI]",
		ru: "Статус Google Maps: открыто · закрытие в 23:00 · Полное время работы: [YETISHMAYDI]"
	},
	// Reviews
	rev_eyebrow: { uz: "Sharhlar", en: "Reviews", ru: "Отзывы" },
	rev_h2: { uz: "Mijozlar nima deydi", en: "What customers say", ru: "Что говорят клиенты" },
	rev_count: { uz: "1,368 ta sharh", en: "1,368 reviews", ru: "1,368 отзывов" },
	rev_source: { uz: "Google Maps sharhi", en: "Google Maps review", ru: "Отзыв Google Maps" },
	rev1: {
		uz: "\"Restoran juda katta, o'tirish uchun joylar ko'p. An'anaviy taomlar mazali va xodimlar do'stona xizmat ko'rsatgani ta'kidlangan.\"",
		en: "\"The restaurant is very large with plenty of seating. Traditional dishes are tasty and the staff are noted for their friendly service.\"",
		ru: "\"Ресторан очень большой, много посадочных мест. Отмечают вкусные традиционные блюда и дружелюбное обслуживание персонала.\""
	},
	rev2: {
		uz: "\"Restoran chiroyli, taomlari mazali va porsiyalari saxiy ekani aytilgan. Menyu katta guruh bilan birga ovqatlanish uchun qulay deb baholangan.\"",
		en: "\"The restaurant is beautiful, the food is tasty and portions are said to be generous. The menu is rated as convenient for dining with a large group.\"",
		ru: "\"Ресторан красивый, еда вкусная, порции, по отзывам, щедрые. Меню оценивают как удобное для обеда большой компанией.\""
	},
	rev3: {
		uz: "\"Juda katta restoran bo'lib, turli joylari va muhitlari mavjudligi aytilgan. Katta guruh bilan ham joy topish mumkinligi, musiqa va jonli atmosfera ijobiy baholangan.\"",
		en: "\"A very large restaurant with different areas and ambiences. Finding room even for a large group, the music and the lively atmosphere are praised.\"",
		ru: "\"Очень большой ресторан с разными зонами и атмосферой. Положительно оценивают возможность разместить большую компанию, музыку и живую атмосферу.\""
	},
	rev_disclaimer: {
		uz: "Ushbu sharhlar Google Maps'dagi mijozlar fikrlarining qisqartirilgan/parafraz qilingan mazmunidir — so'zma-so'z iqtibos emas. Reyting 4.3 va 1,368 sharh Google Maps ma'lumotlaridir.",
		en: "These reviews are shortened/paraphrased summaries of customer opinions on Google Maps — not verbatim quotes. The 4.3 rating and 1,368 reviews are Google Maps data.",
		ru: "Эти отзывы — сокращённые/перефразированные пересказы мнений клиентов на Google Maps, а не дословные цитаты. Рейтинг 4.3 и 1,368 отзывов — данные Google Maps."
	},
	// Services
	ser_eyebrow: { uz: "Xizmatlar", en: "Services", ru: "Услуги" },
	ser_h2: { uz: "Xizmat turlari", en: "Types of service", ru: "Виды обслуживания" },
	ser_p: { uz: "Google Maps'da tasdiqlangan xizmatlar.", en: "Services confirmed on Google Maps.", ru: "Услуги, подтверждённые в Google Maps." },
	ser_dine_title: { uz: "Restoranda ovqatlanish", en: "Dine in the restaurant", ru: "Обслуживание в зале" },
	ser_dine_p: { uz: "Restoranda o'tirib, keng zal va turli seating zonalarida ovqatlaning.", en: "Dine in the spacious hall and various seating zones.", ru: "Питание в просторном зале и разных зонах ресторана." },
	ser_take_title: { uz: "Olib ketish", en: "Takeout", ru: "Еда на вынос" },
	ser_take_p: { uz: "Buyurtmani tayyorlab qo'yishadi — o'zingiz olib keting.", en: "Your order will be prepared — come and pick it up.", ru: "Заказ приготовят — вы сможете забрать его сами." },
	ser_del_title: { uz: "Yetkazib berish", en: "Delivery", ru: "Доставка" },
	ser_del_p: { uz: "Buyurtmani manzilingizga yetkazib berish xizmati mavjud.", en: "Your order can be delivered to your address.", ru: "Заказ можно доставить по вашему адресу." },
	// Contact
	con_eyebrow: { uz: "Manzil", en: "Location", ru: "Адрес" },
	con_h2: { uz: "Bizni toping", en: "Find us", ru: "Как нас найти" },
	con_addr_title: { uz: "Manzil", en: "Address", ru: "Адрес" },
	con_phone_title: { uz: "Telefon", en: "Phone", ru: "Телефон" },
	con_hours_title: { uz: "Ish vaqti", en: "Opening hours", ru: "Время работы" },
	con_hours_p: { uz: "Google Maps holati: ochiq · yopilish 23:00", en: "Google Maps status: open · closes 23:00", ru: "Статус Google Maps: открыто · закрытие в 23:00" },
	con_hours_full: { uz: "To'liq ish vaqti: [YETISHMAYDI]", en: "Full opening hours: [YETISHMAYDI]", ru: "Полное время работы: [YETISHMAYDI]" },
	con_directions: { uz: "Yo'l ko'rsatish (Directions)", en: "Get directions", ru: "Проложить маршрут" },
	// Footer
	foot_tagline: {
		uz: "Samarqandda an'anaviy taomlar, keng tanlov va unutilmas muhit.",
		en: "Traditional dishes, a wide selection and an unforgettable atmosphere in Samarkand.",
		ru: "Традиционные блюда, широкий выбор и незабываемая атмосфера в Самарканде."
	},
	foot_links_h: { uz: "Havolalar", en: "Links", ru: "Ссылки" },
	foot_contact_h: { uz: "Aloqa", en: "Contact", ru: "Контакты" },
	foot_note: {
		uz: "Restaurant KARIMBEK · Samarkand. Ma'lumotlar Google Maps va restoran menyusi asosida.",
		en: "Restaurant KARIMBEK · Samarkand. Information based on Google Maps and the restaurant menu.",
		ru: "Ресторан KARIMBEK · Самарканд. Информация на основе Google Maps и меню ресторана."
	}
}

function t(key) {
	var entry = LANGUAGES[key]
	if (!entry) return key
	return entry[currentLang] != null ? entry[currentLang] : (entry.uz != null ? entry.uz : key)
}

/* Kategoriya nomlari har bir tilda */
const CATEGORY_LABELS = {
	steaks: { uz: "Steaks", en: "Steaks", ru: "Стейки" },
	milliy: { uz: "Milliy taomlar", en: "National dishes", ru: "Национальные блюда" },
	shashlik: { uz: "Shashlik", en: "Shashlik", ru: "Шашлыки" },
	boshqa: { uz: "Boshqa", en: "Other", ru: "Другое" }
}

/* ==================================================
	 MENU DATA — restoran menyu rasmlaridagi haqiqiy narxlar (so'm)
	 Categorylar (UI): Steaks, Milliy taomlar, Shashlik, Boshqa
================================================== */
let MENU_DATA = [
	{
		id: "steaks",
		label: "Steaks",
		items: [
			{ name: "Стейк Тибон", nameUz: "T-Bone steak", nameEn: "T-Bone steak", meta: { uz: "400 g", en: "400 g", ru: "400 g" }, price: "94 000 сум" },
			{ name: "Стейк Рибай", nameUz: "Ribeye steak", nameEn: "Ribeye steak", meta: { uz: "400 g", en: "400 g", ru: "400 g" }, price: "94 000 сум" },
			{ name: "Стейк из бараньи ребрышки", nameUz: "Qo'y qovurg'asi steyki", nameEn: "Lamb rib steak", meta: { uz: "400 g", en: "400 g", ru: "400 g" }, price: "97 000 сум" },
			{ name: "Стейк из Говядина", nameUz: "Mol go'shti steyki", nameEn: "Beef steak", meta: { uz: "300 g", en: "300 g", ru: "300 g" }, price: "97 000 сум" },
			{ name: "Стейк из Лосося", nameUz: "Losos steyki", nameEn: "Salmon steak", meta: { uz: "250 g", en: "250 g", ru: "250 g" }, price: "145 000 сум" },
			{ name: "Куриный стейк", nameUz: "Tovuq steyki", nameEn: "Chicken steak", meta: { uz: "300 g", en: "300 g", ru: "300 g" }, price: "63 000 сум" },
			{ name: "Стейк от шефа", nameUz: "Shef steyki", nameEn: "Chef's steak", meta: { uz: "300 g", en: "300 g", ru: "300 g" }, price: "76 000 сум" },
			{ name: "Колбаски", nameUz: "Kolbasalar", nameEn: "Sausages", meta: { uz: "360 g", en: "360 g", ru: "360 g" }, price: "72 000 сум" }
		]
	},
	{
		id: "milliy",
		label: "Milliy taomlar",
		items: [
			{ name: "Шохона кебаб", nameUz: "Shoxona kebab", nameEn: "Shoxona kebab", meta: { uz: "5 kishi uchun", en: "Serves 5", ru: "На 5 персон" }, price: "243 000 сум" },
			{ name: "Антика лаваш", nameUz: "Antika lavash", nameEn: "Antika lavash", meta: { uz: "260 g", en: "260 g", ru: "260 g" }, price: "42 000 сум" },
			{ name: "Котлет Каримбек", nameUz: "Karimbek kotlet", nameEn: "Karimbek cutlet", meta: { uz: "5 dona", en: "5 pcs", ru: "5 шт" }, price: "56 000 сум" },
			{ name: "Новинки блюда от шефа", nameUz: "Shefdan yangi taom", nameEn: "Chef's new dish", meta: { uz: "320 g", en: "320 g", ru: "320 g" }, price: "69 000 сум" },
			{ name: "Илик кебаб", nameUz: "Ilik kebab", nameEn: "Ilik kebab", meta: { uz: "500 g", en: "500 g", ru: "500 g" }, price: "55 000 сум" },
			{ name: "Стейк из говядины", nameUz: "Mol go'shti steyki", nameEn: "Beef steak", meta: { uz: "300 g", en: "300 g", ru: "300 g" }, price: "90 000 сум" }
		]
	},
	{
		id: "shashlik",
		label: "Shashlik",
		items: [
			{ name: "Шашлык «Наполеон»", nameUz: "Napoleon shashlik", nameEn: "Napoleon shashlik", meta: { uz: "200 g · 1 dona", en: "200 g · 1 pc", ru: "200 g · 1 шт" }, price: "48 700 сум" },
			{ name: "Шашлык «Кавказский» из баранины", nameUz: "Kavkazcha qo'y shashligi", nameEn: "Caucasian lamb shashlik", meta: { uz: "330 g · 1 dona", en: "330 g · 1 pc", ru: "330 g · 1 шт" }, price: "63 400 сум" },
			{ name: "Ребрышки бараньи", nameUz: "Qo'y qovurg'asi", nameEn: "Lamb ribs", meta: { uz: "400 g · 1 dona", en: "400 g · 1 pc", ru: "400 g · 1 шт" }, price: "78 000 сум" },
			{ name: "Печень шашлык", nameUz: "Jigar shashlik", nameEn: "Liver shashlik", meta: { uz: "200 g · 1 dona", en: "200 g · 1 pc", ru: "200 g · 1 шт" }, price: "33 500 сум" },
			{ name: "Шашлыки ассорти 5-6 персон", nameUz: "Shashlik assorti", nameEn: "Shashlik assortment", meta: { uz: "2 kg · 5–6 kishi", en: "2 kg · 5–6 people", ru: "2 кг · 5–6 персон" }, price: "608 000 сум" }
		]
	},
	{
		id: "boshqa",
		label: "Boshqa",
		items: [
			{ name: "Сомса бургер", nameUz: "Somsa burger", nameEn: "Somsa burger", meta: { uz: "1 dona", en: "1 pc", ru: "1 шт" }, price: "15 500 сум" },
			{ name: "Буглама", nameUz: "Bug'lama", nameEn: "Buglama (steamed dish)", meta: { uz: "1 kg", en: "1 kg", ru: "1 kg" }, price: "232 000 сум" },
			{ name: "Фантазия от шефа", nameUz: "Shef fantaziyasi", nameEn: "Chef's fantasy", meta: { uz: "280 g", en: "280 g", ru: "280 g" }, price: "49 900 сум" },
			{ name: "Барбекю котлет", nameUz: "Barbekyu kotlet", nameEn: "BBQ cutlet", meta: { uz: "2 dona", en: "2 pcs", ru: "2 шт" }, price: "53 000 сум" },
			{ name: "Жиз ассорти", nameUz: "Jiz assorti", nameEn: "Jiz assortment", meta: { uz: "2.9 kg", en: "2.9 kg", ru: "2.9 kg" }, price: "579 000 сум" }
		]
	}
]

/* Google Maps sharhlari / qidiruv kalit so'zlari asosidagi ommabop taomlar.
	 Aniq menyu kartasida narx yo'q — narx o'ylab topilmaydi. */
const POPULAR_DISHES = [
	{ name: { uz: "Shashlik", en: "Shashlik", ru: "Шашлык" }, image: "images/shashlik.jpg", ph: "🍖" },
	{ name: { uz: "Kebab", en: "Kebab", ru: "Кебаб" }, image: "images/shashlik.jpg", ph: "🍢" },
	{ name: { uz: "Manti", en: "Manti", ru: "Манты" }, image: "images/manti.jpg", ph: "🥟" },
	{ name: { uz: "Lagman", en: "Lagman", ru: "Лагман" }, image: "images/lagman.jpg", ph: "🍜" },
	{ name: { uz: "Plov", en: "Plov", ru: "Плов" }, image: "images/plov.jpg", ph: "🍛" },
	{ name: { uz: "Salatlar", en: "Salads", ru: "Салаты" }, image: "images/salad.jpg", ph: "🥗" }
]

let activeCat = MENU_DATA[0] ? MENU_DATA[0].id : ""
let usingSheet = false

function esc(s) {
	return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
		return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]
	})
}

/* ---------- Tilga qarab nomlar ---------- */
function itemMain(item) {
	var main
	if (currentLang === "uz") main = item.nameUz || item.name
	else if (currentLang === "ru") main = item.name
	else main = item.nameEn || item.name
	return main
}

function itemSub(item) {
	if (currentLang === "ru") return item.nameUz || ""
	return item.name
}

function itemMeta(item) {
	var m = item.meta
	if (!m) return ""
	if (typeof m === "string") return m
	return m[currentLang] || m.uz || ""
}

function catLabel(c) {
	var l = CATEGORY_LABELS[c.id]
	return l ? (l[currentLang] || l.uz || c.label || "") : (c.label || "")
}

function updateMenuNote() {
	var note = document.getElementById("menu-source-note")
	if (!note) return
	note.textContent = usingSheet ? t("menu_note_sheet") : t("menu_note_menu")
}

/* ---------- Menu render ---------- */
function renderMenu() {
	var tabs = document.getElementById("menu-tabs")
	var grid = document.getElementById("menu-grid")
	if (!tabs || !grid) return

	tabs.innerHTML = MENU_DATA.map(function (c) {
		return '<button type="button" class="tab' + (c.id === activeCat ? " active" : "") +
			'" data-cat="' + esc(c.id) + '" role="tab" aria-selected="' + (c.id === activeCat) + '">' + esc(catLabel(c)) + "</button>"
	}).join("")

	var cat = MENU_DATA.filter(function (c) { return c.id === activeCat })[0] || MENU_DATA[0]
	if (!cat) { grid.innerHTML = ""; updateMenuNote(); return }

	grid.innerHTML = cat.items.map(function (item) {
		var sub = itemSub(item)
		return '<article class="menu-item">' +
			'<div class="menu-item-head">' +
			'<div>' +
			'<h3 class="menu-item-name">' + esc(itemMain(item)) + "</h3>" +
			(sub ? '<p class="menu-item-sub">' + esc(sub) + "</p>" : "") +
			"</div>" +
			'<div class="menu-item-price">' + esc(item.price) + "</div>" +
			"</div>" +
			(itemMeta(item) ? '<span class="menu-item-meta">' + esc(itemMeta(item)) + "</span>" : "") +
			"</article>"
	}).join("")

	Array.prototype.forEach.call(tabs.querySelectorAll(".tab"), function (btn) {
		btn.addEventListener("click", function () {
			activeCat = btn.getAttribute("data-cat")
			renderMenu()
		})
	})

	updateMenuNote()
}

/* ---------- Popular dishes render ---------- */
function renderPopular() {
	var grid = document.getElementById("popular-grid")
	if (!grid) return
	grid.innerHTML = POPULAR_DISHES.map(function (d) {
		var name = d.name[currentLang] || d.name.uz || ""
		return '<article class="dish-card">' +
			'<figure class="ph-figure dish-figure" data-ph="' + esc(d.ph) + '">' +
			'<img src="' + esc(d.image) + '" alt="Restaurant KARIMBEK ' + esc(name.toLowerCase()) + '" loading="lazy" ' +
			"onerror=\"this.classList.add('err'); var f=this.closest('.ph-figure'); if(f) f.classList.add('noimg');\"" +
			"</figure>" +
			'<div class="dish-body">' +
			"<h3>" + esc(name) + "</h3>" +
			'<p class="dish-src">' + esc(t("pop_dish_src")) + "</p>" +
			'<div class="dish-price price-missing">[YETISHMAYDI]</div>' +
			'<span class="taxmin">[TAXMIN — TEKSHIRING]</span>' +
			"</div>" +
			"</article>"
	}).join("")
}

/* ---------- Tilni qo'llash ---------- */
function applyLang() {
	var lang = currentLang
	document.documentElement.setAttribute("lang", lang)

	Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
		el.textContent = t(el.getAttribute("data-i18n"))
	})
	Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria]"), function (el) {
		el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")))
	})
	Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-alt]"), function (el) {
		el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")))
	})
	Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-title]"), function (el) {
		el.setAttribute("title", t(el.getAttribute("data-i18n-title")))
	})

	Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
		var on = b.getAttribute("data-lang") === lang
		b.classList.toggle("active", on)
		b.setAttribute("aria-pressed", String(on))
	})

	Array.prototype.forEach.call(document.querySelectorAll("a[data-wa]"), function (a) {
		a.setAttribute("href", "https://wa.me/998662377739?text=" + encodeURIComponent(t("wa_text")))
	})

	document.title = t("seo_title")
	var md = document.querySelector('meta[name="description"]')
	if (md) md.setAttribute("content", t("seo_desc"))

	renderMenu()
	renderPopular()

	try { localStorage.setItem("karimbek-lang", lang) } catch (e) { }
}

/* ==================================================
	 GOOGLE SHEET MENU (ustuvor)
	 menuSheetId haqiqiy ID bo'lsa — Sheet ma'lumotlari
	 local fallback'dan ustun turadi. Hozirgi qiymat
	 "SHEET_ID_shu_yerga" placeholder — ishlamaydi.
	 Kutilayotgan ustunlar (1-qator sarlavha):
	 name | nameUz | category | meta | price
================================================== */
async function loadSheetMenu() {
	var id = CONFIG.menuSheetId || ""
	if (!id || id === "SHEET_ID_shu_yerga") return null
	try {
		var res = await fetch("https://docs.google.com/spreadsheets/d/" + encodeURIComponent(id) + "/gviz/tq?tqx=out:json")
		if (!res.ok) return null
		var text = await res.text()
		var json = JSON.parse(text.slice(text.indexOf("(") + 1, text.lastIndexOf(")")))
		var rows = (json.table && json.table.rows) || []
		if (rows.length < 2) return null

		var header = rows[0].c.map(function (c) {
			return c && c.v != null ? String(c.v).toLowerCase().replace(/[^a-z_]/g, "") : ""
		})
		function idx(name) { return header.indexOf(name) }

		var cats = {}
		rows.slice(1).forEach(function (r) {
			var cells = (r.c || []).map(function (c) { return c && c.v != null ? String(c.v).trim() : "" })
			var name = cells[idx("name")]
			var price = cells[idx("price")]
			if (!name || !price) return
			var cat = cells[idx("category")] || "Boshqa";
			(cats[cat] = cats[cat] || []).push({
				name: name,
				nameUz: idx("nameuz") !== -1 ? cells[idx("nameuz")] : (cells[idx("name_uz")] || ""),
				meta: cells[idx("meta")] || "",
				price: price
			})
		})

		var ordered = [
			{ id: "steaks", label: "Steaks", key: "Steaks" },
			{ id: "shashlik", label: "Shashlik", key: "Shashlik" },
			{ id: "milliy", label: "Milliy taomlar", key: "Milliy taomlar" },
			{ id: "boshqa", label: "Boshqa", key: "Boshqa" }
		]
		var out = ordered.map(function (o) {
			return { id: o.id, label: o.label, items: cats[o.key] || [] }
		}).filter(function (o) { return o.items.length > 0 })
		return out.length ? out : null
	} catch (e) {
		return null
	}
}

/* ---------- Social (Instagram/Telegram conditional) ---------- */
function initSocial() {
	var anyVisible = false
	Array.prototype.forEach.call(document.querySelectorAll("[data-social]"), function (el) {
		var key = el.getAttribute("data-social")
		var val = CONFIG[key]
		if (!val) {
			el.classList.add("is-hidden")
			return
		}
		el.classList.remove("is-hidden")
		anyVisible = true
		var clean = val.replace(/^@/, "")
		el.setAttribute("href", key === "instagram"
			? "https://instagram.com/" + clean
			: "https://t.me/" + clean)
	})
	if (!anyVisible) {
		var row = document.getElementById("social-row")
		if (row) row.classList.add("is-hidden")
		var foot = document.getElementById("social-footer")
		if (foot) foot.classList.add("is-hidden")
	}
}

/* ---------- Mobile nav ---------- */
function initNav() {
	var btn = document.getElementById("nav-toggle")
	var menu = document.getElementById("nav-menu")
	if (!btn || !menu) return
	btn.addEventListener("click", function () {
		var open = menu.classList.toggle("open")
		btn.setAttribute("aria-expanded", String(open))
		btn.setAttribute("aria-label", open ? t("nav_toggle_close") : t("nav_toggle_open"))
	})
	Array.prototype.forEach.call(menu.querySelectorAll("a"), function (a) {
		a.addEventListener("click", function () {
			menu.classList.remove("open")
			btn.setAttribute("aria-expanded", "false")
			btn.setAttribute("aria-label", t("nav_toggle_open"))
		})
	})
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", async function () {
	var saved = null
	try { saved = localStorage.getItem("karimbek-lang") } catch (e) { }
	if (saved === "en" || saved === "ru" || saved === "uz") currentLang = saved

	applyLang()
	initNav()
	initSocial()

	var y = document.getElementById("year")
	if (y) y.textContent = new Date().getFullYear()

	Array.prototype.forEach.call(document.querySelectorAll(".lang-btn"), function (b) {
		b.addEventListener("click", function () {
			currentLang = b.getAttribute("data-lang")
			applyLang()
		})
	})

	var sheetMenu = await loadSheetMenu()
	if (sheetMenu && sheetMenu.length) {
		usingSheet = true
		MENU_DATA.length = 0
		MENU_DATA.push.apply(MENU_DATA, sheetMenu)
		activeCat = MENU_DATA[0] ? MENU_DATA[0].id : ""
		renderMenu()
	}
})
