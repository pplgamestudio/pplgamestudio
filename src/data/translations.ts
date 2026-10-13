export type Lang = 'uk' | 'ru';

export interface TranslationData {
  nav: {
    home: string;
    services: string;
    platforms: string;
    diagnostics: string;
    about: string;
    businessCard: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    badge: string;
    titlePrimary: string;
    titleAccent: string;
    subtitle: string;
    description: string;
    motto: string;
    childhoodStory: string;
    ctaButton: string;
    textOnlyNotice: string;
    emailLabel: string;
    tradeInNote: string;
    openCardBtn: string;
  };
  pillars: {
    title: string;
    items: {
      id: string;
      title: string;
      desc: string;
      details: string;
      badge: string;
    }[];
  };
  repairSpecialties: {
    sectionTag: string;
    title: string;
    subtitle: string;
    gamepadTitle: string;
    gamepadDesc: string;
    gamepadPoints: string[];
    consoleTitle: string;
    consoleDesc: string;
    consolePoints: string[];
  };
  platforms: {
    sectionTitle: string;
    fullListLink: string;
    categories: {
      ps: string;
      xbox: string;
      pc: string;
    };
    description: string;
    items: {
      name: string;
      generation: string;
      tag: string;
      icon: 'ps' | 'xbox' | 'pc';
    }[];
  };
  diagnosticTool: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    selectDevicePrompt: string;
    selectIssuePrompt: string;
    contactDirectly: string;
    sendViaWhatsApp: string;
    sendViaViber: string;
    estimatedTime: string;
    warrantyBadge: string;
    devices: {
      id: string;
      name: string;
      category: string;
    }[];
    issues: {
      id: string;
      name: string;
      desc: string;
      typicalTime: string;
      recommendedSolution: string;
    }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    body: string;
    philosophyQuote: string;
    author: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  businessCardModal: {
    title: string;
    subtitle: string;
    brand: string;
    role: string;
    phoneNotice: string;
    saveVCard: string;
    copyPhone: string;
    copyEmail: string;
    copied: string;
    shareViber: string;
    shareWhatsApp: string;
    qrHint: string;
  };
  contactSection: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    phoneVal: string;
    phoneNotice: string;
    emailLabel: string;
    emailVal: string;
    hoursLabel: string;
    hoursVal: string;
    writeWhatsApp: string;
    writeViber: string;
    copySuccess: string;
  };
  keywordsBar: {
    label: string;
    keywordsText: string;
  };
  footer: {
    brand: string;
    motto: string;
    rights: string;
    allServicesText: string;
  };
}

export const translations: Record<Lang, TranslationData> = {
  uk: {
    nav: {
      home: 'Головна',
      services: 'Послуги',
      platforms: 'Платформи',
      diagnostics: 'Діагностика',
      about: 'Про нас',
      businessCard: 'Візитка',
      contact: 'Контакти',
      contactButton: "Зв'язатися",
    },
    hero: {
      badge: 'ПРОФЕСІЙНИЙ РЕМОНТ І ОБСЛУГОВУВАННЯ',
      titlePrimary: 'РЕМОНТ КОНСОЛЕЙ',
      titleAccent: 'ТА ДЖОЙСТИКІВ',
      subtitle: 'Sony PlayStation  |  Xbox  |  PC',
      description: 'Діагностика, ремонт, обслуговування. Повертаємо твої улюблені ігри до ідеального стану.',
      motto: 'Від гравця до гравців.',
      childhoodStory: 'Люблю ігри з дитинства — тому займаюся цим з любов’ю.',
      ctaButton: "Зв'язатися →",
      textOnlyNotice: 'Тільки текстові повідомлення на номер:',
      emailLabel: 'Email:',
      tradeInNote: 'Покупка, продаж, обмін, ремонт та обслуговування',
      openCardBtn: 'Відкрити візитку',
    },
    pillars: {
      title: 'Напрямки сервісу',
      items: [
        {
          id: 'diag',
          title: 'Діагностика',
          desc: 'Точне визначення проблеми',
          details: 'Комплексна перевірка апаратної частини, ланцюгів живлення, чіпів пам’яті та сенсорів контролера.',
          badge: 'Безкоштовно при ремонті',
        },
        {
          id: 'repair',
          title: 'Ремонт',
          desc: 'Професійне усунення несправностей',
          details: 'Заміна пошкоджених роз’ємів HDMI, ремонт блоків живлення, ребол та відновлення після падінь чи стрибків напруги.',
          badge: 'Оригінальні деталі',
        },
        {
          id: 'maintenance',
          title: 'Обслуговування',
          desc: 'Чистка, заміна термопасти, профілактика',
          details: 'Повне видалення пилу, нанесення якісної термопасти або рідкого металу (PlayStation 5), зниження шуму турбіни.',
          badge: 'Тиха та прохолодна робота',
        },
        {
          id: 'gamepads',
          title: 'Джойстики',
          desc: 'Заміна стіків, усунення дрифту, відновлення',
          details: 'Встановлення нових 3D-аналогів або магнітних датчиків Холла (Hall Effect без дрифту), заміна мембран, бамперів і курків.',
          badge: 'Hall Effect / Оригінал',
        },
        {
          id: 'parts',
          title: 'Запчастини & Трейд-ін',
          desc: 'Оригінальні комплектуючі та обмін',
          details: 'Якісні запчастини, продаж перевірених приставок, викуп несправних консолей та аксесуарів, обмін техніки.',
          badge: 'Покупка / Продаж / Обмін',
        },
      ],
    },
    repairSpecialties: {
      sectionTag: 'АКЦЕНТ НА ЯКОСТІ',
      title: 'Спеціалізований ремонт геймпадів та приставок',
      subtitle: 'Кожен джойстик і консоль тестуються на спеціальних стендах калібрування перед видачею.',
      gamepadTitle: 'Геймпади (DualSense, DualShock 4, Xbox Wireless, Elite)',
      gamepadDesc: 'Найпоширеніша проблема — дрифт аналогів. Ми вирішуємо її раз і надовго.',
      gamepadPoints: [
        'Усунення дрифту стіків (встановлення Hall Effect на датчиках Холла)',
        'Заміна механізмів 3D-аналогів (ALPS оригінал)',
        'Ремонт кнопок R1/L1, R2/L2, механізмів адаптивних тригерів DualSense',
        'Заміна акумуляторів, що втратили ємність',
        'Відновлення роз’ємів Type-C та Micro-USB після фізичного зносу',
        'Програмне калібрування мертвої зони та центру стіків',
      ],
      consoleTitle: 'Консолі PlayStation, Xbox та ПК',
      consoleDesc: 'Апаратний ремонт та термопрофілактика будь-якої складності.',
      consolePoints: [
        'Чистка від пилу та оновлення рідкого металу на PlayStation 5',
        'Заміна висохшої термопасти на якісну фазову або преміум-пасту на PS4 / Xbox',
        'Заміна виламаних портів HDMI (відновлення передачі зображення 4K/120Hz)',
        'Ремонт блоків живлення після стрибків мережі',
        'Заміна та апгрейд накопичувачів SSD / HDD, налаштування ПЗ',
        'Обслуговування ПК, ігрових системних блоків та ноутбуків',
      ],
    },
    platforms: {
      sectionTitle: 'Ігрові платформи',
      fullListLink: 'Повний список платформ →',
      categories: {
        ps: 'PlayStation (PS1, PS2, PS3, PS4, PS5)',
        xbox: 'Xbox (Original, 360, One, Series S/X)',
        pc: 'Комп’ютерні системи, ПК та ноутбуки',
      },
      description: 'Працюємо з усіма поколіннями ігрових консолей від класики до найсучасніших систем.',
      items: [
        { name: 'PlayStation', generation: 'PS1', tag: 'Ретро-класика', icon: 'ps' },
        { name: 'PlayStation 2', generation: 'PS2', tag: 'Легендарна 128-bit', icon: 'ps' },
        { name: 'PlayStation 3', generation: 'PS3', tag: 'Fat / Slim / Super Slim', icon: 'ps' },
        { name: 'PlayStation 4', generation: 'PS4', tag: 'Fat / Slim / Pro', icon: 'ps' },
        { name: 'PlayStation 5', generation: 'PS5', tag: 'Standard / Digital / Slim', icon: 'ps' },
        { name: 'Xbox', generation: 'Original', tag: 'Класичний Xbox', icon: 'xbox' },
        { name: 'Xbox 360', generation: 'X360', tag: 'Fat / Slim / E', icon: 'xbox' },
        { name: 'Xbox One', generation: 'XOne', tag: 'Fat / S / X', icon: 'xbox' },
        { name: 'Xbox Series S / X', generation: 'Series', tag: 'Сучасний Next-Gen', icon: 'xbox' },
        { name: 'PC / Ноутбуки', generation: 'PC', tag: 'Ігрові комп’ютери', icon: 'pc' },
      ],
    },
    diagnosticTool: {
      badge: 'ОНЛАЙН РОЗРАХУНОК ТА КОНСУЛЬТАЦІЯ',
      title: 'Що трапилося з вашим пристроєм?',
      subtitle: 'Оберіть платформу та проблему — отримайте миттєву рекомендацію та надішліть заявку в WhatsApp або Viber.',
      step1Title: '1. Оберіть пристрій',
      step2Title: '2. Яка несправність?',
      step3Title: '3. Рекомендація та швидкий зв’язок',
      selectDevicePrompt: 'Оберіть платформу або контролер:',
      selectIssuePrompt: 'Оберіть ознаку поломки:',
      contactDirectly: 'Надіслати майстру в чат:',
      sendViaWhatsApp: 'Написати у WhatsApp',
      sendViaViber: 'Написати у Viber',
      estimatedTime: 'Орієнтовний час:',
      warrantyBadge: 'Гарантія на ремонт та деталі',
      devices: [
        { id: 'ps5', name: 'PlayStation 5', category: 'Консоль' },
        { id: 'ps4', name: 'PlayStation 4 (Slim/Pro)', category: 'Консоль' },
        { id: 'ps3', name: 'PlayStation 3', category: 'Консоль' },
        { id: 'xbox_series', name: 'Xbox Series S / X', category: 'Консоль' },
        { id: 'xbox_one', name: 'Xbox One (S/X)', category: 'Консоль' },
        { id: 'dualsense', name: 'Джойстик DualSense (PS5)', category: 'Геймпад' },
        { id: 'dualshock4', name: 'Джойстик DualShock 4 (PS4)', category: 'Геймпад' },
        { id: 'xbox_controller', name: 'Джойстик Xbox Series / One', category: 'Геймпад' },
        { id: 'pc', name: 'Ігровий ПК / Ноутбук', category: 'Комп’ютер' },
      ],
      issues: [
        {
          id: 'drift',
          name: 'Дрифт стіка / персонаж іде сам',
          desc: 'Стік веде вбік або залипає під час гри. Найчастіша несправність геймпадів.',
          typicalTime: '1-2 години',
          recommendedSolution: 'Встановлення нових аналогових механізмів або безсмертних датчиків Холла (Hall Effect).',
        },
        {
          id: 'noise',
          name: 'Гуде як літак / перегрівається та вимикається',
          desc: 'Вентилятор шумить на максимальних обертах, консоль гаряча або видає повідомлення про перегрів.',
          typicalTime: '2-3 години',
          recommendedSolution: 'Глибока ультразвукова та ручна чистка від пилу, заміна термопасти або оновлення рідкого металу (PS5).',
        },
        {
          id: 'no_video',
          name: 'Немає зображення на ТБ / пошкоджений HDMI',
          desc: 'Консоль вмикається (світиться білим або синім), але телевізор пише «Немає сигналу» або роз’єм розхитаний.',
          typicalTime: '1 робочий день',
          recommendedSolution: 'Заміна порту HDMI на новий оригінальний за допомогою термоповітряної паяльної станції, перевірка фільтрів та чіпа енкодера.',
        },
        {
          id: 'power',
          name: 'Не вмикається взагалі / пищить і гасне',
          desc: 'Приставка не реагує на кнопку ввімкнення або одразу вимикається після короткого звукового сигналу.',
          typicalTime: '1-2 дні після діагностики',
          recommendedSolution: 'Діагностика первинних ланцюгів живлення 12V/5V, відновлення блоку живлення або компонентів плати.',
        },
        {
          id: 'buttons',
          name: 'Западають кнопки / зламався бампер чи курок',
          desc: 'Кнопки R1/L1, R2/L2 натискаються важко, застрягають або не реагують.',
          typicalTime: 'До 1 години',
          recommendedSolution: 'Заміна мембран, пружинок, механізмів мікроперемикачів або шлейфів.',
        },
        {
          id: 'trade',
          name: 'Покупка / Продаж / Обмін техніки (Трейд-ін)',
          desc: 'Хочете продати стару консоль, обміняти на новішу або придбати перевірену приставку з гарантією.',
          typicalTime: 'Миттєво',
          recommendedSolution: 'Оцінка стану, перевірка працездатності та чесні умови обміну або викупу.',
        },
      ],
    },
    trust: {
      eyebrow: 'ПРОФЕСІЙНИЙ СЕРВІС',
      title: 'ДОВІРА, ЯКУ ПІДТВЕРДЖУЮТЬ РЕЗУЛЬТАТИ',
      body: 'Ми спеціалізуємося на ремонті PlayStation, Xbox, геймпадів та комп’ютерних систем. Використовуємо професійне паяльне обладнання, оптику та якісні комплектуючі, щоб твоя техніка працювала як нова.',
      philosophyQuote: '«Від гравця до гравців. Люблю ігри з дитинства — тому займаюся цим з любов’ю.»',
      author: 'PPL Computer Entertainment Systems',
      items: [
        {
          title: 'Швидка діагностика та ремонт',
          desc: 'Більшість популярних процедур (заміна стіків, чистка) виконується оперативно.',
        },
        {
          title: 'Гарантія на роботи',
          desc: 'Надаємо чесну гарантію на всі виконані роботи та встановлені компоненти.',
        },
        {
          title: 'Досвід та любов до ігор з дитинства',
          desc: 'Бережне ставлення до вашої техніки, наче до власної колекційної консолі.',
        },
        {
          title: 'Індивідуальний підхід',
          desc: 'Детально пояснюємо причину поломки та узгоджуємо вартість до початку робіт.',
        },
      ],
    },
    businessCardModal: {
      title: 'Електронна Візитка',
      subtitle: 'Збережіть прямий контакт або поділіться з друзями-геймерами',
      brand: 'PPL GAME STUDIO',
      role: 'PPL Computer Entertainment Systems',
      phoneNotice: 'Тільки текстові повідомлення на номер:',
      saveVCard: 'Зберегти у контакти (.vcf)',
      copyPhone: 'Скопіювати номер',
      copyEmail: 'Скопіювати Email',
      copied: 'Скопійовано!',
      shareViber: 'Написати у Viber',
      shareWhatsApp: 'Написати у WhatsApp',
      qrHint: 'Наведіть камеру смартфона для швидкого переходу',
    },
    contactSection: {
      title: 'Контакти та зв’язок',
      subtitle: 'Напишіть нам у будь-який зручний месенджер для швидкої консультації',
      phoneLabel: 'WhatsApp / Viber',
      phoneVal: '+380 97 807 11 57',
      phoneNotice: 'Тільки текстові повідомлення на вказаний номер',
      emailLabel: 'Електронна пошта',
      emailVal: 'pplgamestudio@gmail.com',
      hoursLabel: 'Графік прийому повідомлень',
      hoursVal: 'Щоденно з 10:00 до 20:00',
      writeWhatsApp: 'Відкрити WhatsApp чат',
      writeViber: 'Відкрити Viber чат',
      copySuccess: 'Скопійовано в буфер обміну!',
    },
    keywordsBar: {
      label: 'Пошукові запити та напрямки:',
      keywordsText:
        'ремонт playstation, ремонт xbox, ремонт джойстиків, заміна стіків, усунення дрифту, чистка консолей, обслуговування консолей, запчастини для playstation, запчастини для xbox, ігрові приставки, геймпади, ремонт ps5, ремонт ps4, ремонт ps3, ремонт xbox series, xbox one, xbox 360, заміна термопасти, рідкий метал ps5, ремонт hdmi, продаж та обмін консолей',
    },
    footer: {
      brand: 'PPL GAME STUDIO',
      motto: 'Від гравця до гравців.',
      rights: '© 2026 PPL Computer Entertainment Systems. Всі права захищені.',
      allServicesText: 'Sony PlayStation / Xbox / PC — Комп’ютерні системи, ПК та ноутбуки. Покупка, продаж, обмін, ремонт та обслуговування.',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      platforms: 'Платформы',
      diagnostics: 'Диагностика',
      about: 'О нас',
      businessCard: 'Визитка',
      contact: 'Контакты',
      contactButton: 'Связаться',
    },
    hero: {
      badge: 'ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ И ОБСЛУЖИВАНИЕ',
      titlePrimary: 'РЕМОНТ КОНСОЛЕЙ',
      titleAccent: 'И ДЖОЙСТИКОВ',
      subtitle: 'Sony PlayStation  |  Xbox  |  PC',
      description: 'Диагностика, ремонт, обслуживание. Возвращаем твои любимые игры к идеальному состоянию.',
      motto: 'От игрока к игрокам.',
      childhoodStory: 'Люблю игры с детства — поэтому занимаюсь этим с любовью.',
      ctaButton: 'Связаться →',
      textOnlyNotice: 'Только текстовые сообщения на номер:',
      emailLabel: 'Email:',
      tradeInNote: 'Покупка, продажа, обмен, ремонт и обслуживание',
      openCardBtn: 'Открыть визитку',
    },
    pillars: {
      title: 'Направления сервиса',
      items: [
        {
          id: 'diag',
          title: 'Диагностика',
          desc: 'Точное определение проблемы',
          details: 'Комплексная проверка аппаратной части, цепей питания, чипов памяти и сенсоров контроллера.',
          badge: 'Бесплатно при ремонте',
        },
        {
          id: 'repair',
          title: 'Ремонт',
          desc: 'Профессиональное устранение неисправностей',
          details: 'Замена поврежденных разъемов HDMI, ремонт блоков питания, реболл и восстановление после падений или скачков сети.',
          badge: 'Оригинальные детали',
        },
        {
          id: 'maintenance',
          title: 'Обслуживание',
          desc: 'Чистка, замена термопасты, профилактика',
          details: 'Полное удаление пыли, нанесение качественной термопасты или жидкого металла (PlayStation 5), снижение шума турбины.',
          badge: 'Тихая и прохладная работа',
        },
        {
          id: 'gamepads',
          title: 'Джойстики',
          desc: 'Замена стиков, устранение дрифта, восстановление',
          details: 'Установка новых 3D-аналогов или магнитных датчиков Холла (Hall Effect без дрифта), замена мембран, бамперов и курков.',
          badge: 'Hall Effect / Оригинал',
        },
        {
          id: 'parts',
          title: 'Запчасти & Трейд-ин',
          desc: 'Оригинальные комплектующие и обмен',
          details: 'Качественные запчасти, продажа проверенных приставок, выкуп неисправных консолей и аксессуаров, обмен техники.',
          badge: 'Покупка / Продажа / Обмен',
        },
      ],
    },
    repairSpecialties: {
      sectionTag: 'АКЦЕНТ НА КАЧЕСТВЕ',
      title: 'Специализированный ремонт геймпадов и приставок',
      subtitle: 'Каждый джойстик и консоль тестируются на специальных стендах калибровки перед выдачей.',
      gamepadTitle: 'Геймпады (DualSense, DualShock 4, Xbox Wireless, Elite)',
      gamepadDesc: 'Самая распространенная проблема — дрифт аналогов. Мы решаем ее раз и навсегда.',
      gamepadPoints: [
        'Устранение дрифта стиков (установка датчиков Холла / Hall Effect)',
        'Замена механизмов 3D-аналогов (ALPS оригинал)',
        'Ремонт кнопок R1/L1, R2/L2, адаптивных триггеров DualSense',
        'Замена аккумуляторов, потерявших емкость',
        'Восстановление разъемов Type-C и Micro-USB после износа',
        'Программная калибровка мертвой зоны и центра стиков',
      ],
      consoleTitle: 'Консоли PlayStation, Xbox и ПК',
      consoleDesc: 'Аппаратный ремонт и термопрофилактика любой сложности.',
      consolePoints: [
        'Чистка от пыли и обновление жидкого металла на PlayStation 5',
        'Замена высохшей термопасты на качественную премиум-пасту на PS4 / Xbox',
        'Замена выломанных портов HDMI (восстановление передачи 4K/120Hz)',
        'Ремонт блоков питания после скачков напряжения',
        'Замена и апгрейд накопителей SSD / HDD, настройка ПО',
        'Обслуживание ПК, игровых системных блоков и ноутбуков',
      ],
    },
    platforms: {
      sectionTitle: 'Игровые платформы',
      fullListLink: 'Полный список платформ →',
      categories: {
        ps: 'PlayStation (PS1, PS2, PS3, PS4, PS5)',
        xbox: 'Xbox (Original, 360, One, Series S/X)',
        pc: 'Компьютерные системы, ПК и ноутбуки',
      },
      description: 'Работаем со всеми поколениями игровых консолей от классики до современных систем.',
      items: [
        { name: 'PlayStation', generation: 'PS1', tag: 'Ретро-классика', icon: 'ps' },
        { name: 'PlayStation 2', generation: 'PS2', tag: 'Легендарная 128-bit', icon: 'ps' },
        { name: 'PlayStation 3', generation: 'PS3', tag: 'Fat / Slim / Super Slim', icon: 'ps' },
        { name: 'PlayStation 4', generation: 'PS4', tag: 'Fat / Slim / Pro', icon: 'ps' },
        { name: 'PlayStation 5', generation: 'PS5', tag: 'Standard / Digital / Slim', icon: 'ps' },
        { name: 'Xbox', generation: 'Original', tag: 'Классический Xbox', icon: 'xbox' },
        { name: 'Xbox 360', generation: 'X360', tag: 'Fat / Slim / E', icon: 'xbox' },
        { name: 'Xbox One', generation: 'XOne', tag: 'Fat / S / X', icon: 'xbox' },
        { name: 'Xbox Series S / X', generation: 'Series', tag: 'Современный Next-Gen', icon: 'xbox' },
        { name: 'PC / Ноутбуки', generation: 'PC', tag: 'Игровые компьютеры', icon: 'pc' },
      ],
    },
    diagnosticTool: {
      badge: 'ОНЛАЙН РАСЧЕТ И КОНСУЛЬТАЦИЯ',
      title: 'Что случилось с вашим устройством?',
      subtitle: 'Выберите платформу и проблему — получите моментальную рекомендацию и отправьте заявку в WhatsApp или Viber.',
      step1Title: '1. Выберите устройство',
      step2Title: '2. Какая неисправность?',
      step3Title: '3. Рекомендация и быстрая связь',
      selectDevicePrompt: 'Выберите платформу или контроллер:',
      selectIssuePrompt: 'Выберите симптом поломки:',
      contactDirectly: 'Отправить мастеру в чат:',
      sendViaWhatsApp: 'Написать в WhatsApp',
      sendViaViber: 'Написать в Viber',
      estimatedTime: 'Ориентировочное время:',
      warrantyBadge: 'Гарантия на ремонт и детали',
      devices: [
        { id: 'ps5', name: 'PlayStation 5', category: 'Консоль' },
        { id: 'ps4', name: 'PlayStation 4 (Slim/Pro)', category: 'Консоль' },
        { id: 'ps3', name: 'PlayStation 3', category: 'Консоль' },
        { id: 'xbox_series', name: 'Xbox Series S / X', category: 'Консоль' },
        { id: 'xbox_one', name: 'Xbox One (S/X)', category: 'Консоль' },
        { id: 'dualsense', name: 'Джойстик DualSense (PS5)', category: 'Геймпад' },
        { id: 'dualshock4', name: 'Джойстик DualShock 4 (PS4)', category: 'Геймпад' },
        { id: 'xbox_controller', name: 'Джойстик Xbox Series / One', category: 'Геймпад' },
        { id: 'pc', name: 'Игровой ПК / Ноутбук', category: 'Компьютер' },
      ],
      issues: [
        {
          id: 'drift',
          name: 'Дрифт стика / персонаж идет сам',
          desc: 'Стик уводит в сторону или залипает во время игры. Самая частая поломка геймпадов.',
          typicalTime: '1-2 часа',
          recommendedSolution: 'Установка новых аналоговых механизмов или долговечных магнитных датчиков Холла (Hall Effect).',
        },
        {
          id: 'noise',
          name: 'Гудит как самолет / перегревается и тухнет',
          desc: 'Вентилятор шумит на полных оборотах, консоль горячая или пишет предупреждение о перегреве.',
          typicalTime: '2-3 часа',
          recommendedSolution: 'Глубокая ультразвуковая и ручная чистка от пыли, замена термопасты или обновление жидкого металла (PS5).',
        },
        {
          id: 'no_video',
          name: 'Нет изображения на ТВ / поврежден HDMI',
          desc: 'Консоль включается (горит белым или синим), но ТВ пишет «Нет сигнала» либо гнездо расшатано.',
          typicalTime: '1 рабочий день',
          recommendedSolution: 'Замена порта HDMI на новый оригинальный с помощью термовоздушной станции, проверка фильтров и микросхемы энкодера.',
        },
        {
          id: 'power',
          name: 'Не включается вообще / пищит и гаснет',
          desc: 'Приставка не реагирует на кнопку включения либо сразу отключается после короткого звукового сигнала.',
          typicalTime: '1-2 дня после диагностики',
          recommendedSolution: 'Диагностика первичных цепей питания 12V/5V, восстановление блока питания или компонентов системной платы.',
        },
        {
          id: 'buttons',
          name: 'Западают кнопки / сломался бампер или курок',
          desc: 'Кнопки R1/L1, R2/L2 нажимаются с трудом, залипают или не реагируют.',
          typicalTime: 'До 1 часа',
          recommendedSolution: 'Замена мембран, пружинок, микропереключателей или контактных шлейфов.',
        },
        {
          id: 'trade',
          name: 'Покупка / Продажа / Обмен техники (Трейд-ин)',
          desc: 'Хотите продать старую консоль, обменять на более новую или купить проверенную приставку с гарантией.',
          typicalTime: 'Моментально',
          recommendedSolution: 'Оценка состояния, проверка работоспособности и честные условия обмена или выкупа.',
        },
      ],
    },
    trust: {
      eyebrow: 'ПРОФЕССИОНАЛЬНЫЙ СЕРВИС',
      title: 'ДОВЕРИЕ, КОТОРОЕ ПОДТВЕРЖДАЮТ РЕЗУЛЬТАТЫ',
      body: 'Мы специализируемся на ремонте PlayStation, Xbox, геймпадов и компьютерных систем. Используем профессиональное паяльное оборудование, оптику и качественные комплектующие, чтобы твоя техника работала как новая.',
      philosophyQuote: '«От игрока к игрокам. Люблю игры с детства — поэтому занимаюсь этим с любовью.»',
      author: 'PPL Computer Entertainment Systems',
      items: [
        {
          title: 'Быстрая диагностика и ремонт',
          desc: 'Большинство популярных процедур (замена стиков, чистка) выполняется оперативно.',
        },
        {
          title: 'Гарантия на работы',
          desc: 'Предоставляем честную гарантию на все выполненные работы и установленные компоненты.',
        },
        {
          title: 'Опыт и любовь к играм с детства',
          desc: 'Бережное отношение к вашей технике, как к своей собственной коллекционной приставке.',
        },
        {
          title: 'Индивидуальный подход',
          desc: 'Подробно объясняем причину поломки и согласовываем стоимость до начала работ.',
        },
      ],
    },
    businessCardModal: {
      title: 'Электронная Визитка',
      subtitle: 'Сохраните прямой контакт или поделитесь с друзьями-геймерами',
      brand: 'PPL GAME STUDIO',
      role: 'PPL Computer Entertainment Systems',
      phoneNotice: 'Только текстовые сообщения на номер:',
      saveVCard: 'Сохранить в контакты (.vcf)',
      copyPhone: 'Скопировать номер',
      copyEmail: 'Скопировать Email',
      copied: 'Скопировано!',
      shareViber: 'Написать в Viber',
      shareWhatsApp: 'Написать в WhatsApp',
      qrHint: 'Наведите камеру смартфона для быстрого перехода',
    },
    contactSection: {
      title: 'Контакты и связь',
      subtitle: 'Напишите нам в любой удобный мессенджер для быстрой консультации',
      phoneLabel: 'WhatsApp / Viber',
      phoneVal: '+380 97 807 11 57',
      phoneNotice: 'Только текстовые сообщения на указанный номер',
      emailLabel: 'Электронная почта',
      emailVal: 'pplgamestudio@gmail.com',
      hoursLabel: 'График приема сообщений',
      hoursVal: 'Ежедневно с 10:00 до 20:00',
      writeWhatsApp: 'Открыть WhatsApp чат',
      writeViber: 'Открыть Viber чат',
      copySuccess: 'Скопировано в буфер обмена!',
    },
    keywordsBar: {
      label: 'Поисковые запросы и направления:',
      keywordsText:
        'ремонт playstation, ремонт xbox, ремонт джойстиков, замена стиков, устранение дрифта, чистка консолей, обслуживание консолей, запчасти для playstation, запчасти для xbox, игровые приставки, геймпады, ремонт ps5, ремонт ps4, ремонт ps3, ремонт xbox series, xbox one, xbox 360, замена термопасты, жидкий металл ps5, ремонт hdmi, продажа и обмен консолей',
    },
    footer: {
      brand: 'PPL GAME STUDIO',
      motto: 'От игрока к игрокам.',
      rights: '© 2026 PPL Computer Entertainment Systems. Все права защищены.',
      allServicesText: 'Sony PlayStation / Xbox / PC — Компьютерные системы, ПК и ноутбуки. Покупка, продажа, обмен, ремонт и обслуживание.',
    },
  },
};
