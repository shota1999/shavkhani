export type Language = 'ka' | 'en'

export interface LocalizedText {
  ka: string
  en: string
}

export function getLocalizedText(text: LocalizedText, language: Language): string {
  return text[language] ?? text.ka ?? text.en
}

export function formatPrice(price: number, language: Language, forceDecimals = false): string {
  const locale = language === 'ka' ? 'ka-GE' : 'en-US'
  const minimumFractionDigits = forceDecimals ? 2 : Number.isInteger(price) ? 0 : 2

  return `${new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits: 2,
  }).format(price)} GEL`
}

export const translations = {
  ka: {
    language: {
      ka: 'ქართული',
      en: 'English',
    },
    navbar: {
      shop: 'მთავარი',
      knives: 'დანები',
      wallets: 'საფულეები',
      sheaths: 'ქარქაშები',
      cart: 'კალათა',
      openMenu: 'მთავარი მენიუს გახსნა',
      closeMenu: 'მენიუს დახურვა',
      shoppingCart: 'საყიდლების კალათა',
    },
    hero: {
      tagline: 'ადამიანის ხელით შექმნილი, ბუნებით გამოცდილი',
      description:
        'ყოველი დანა, საფულე და ქარქაში ხელით მზადდება ტრადიციული ტექნიკითა და შერჩეული მასალებით. ნივთები მათთვის, ვინც აფასებს ხარისხს, გამძლეობასა და ნამდვილ ხელობას.',
      shopCollection: 'კოლექციის ნახვა',
      ourCraft: 'ჩვენი ხელობა',
    },
    categories: {
      title: 'კოლექციები',
      description: 'თითოეული ნამუშევარი იქმნება ხარისხზე და დეტალებზე მაქსიმალური ყურადღებით',
      knivesName: 'დანები',
      knivesDescription: 'ხელით დამუშავებული პირები გამორჩეული ჭრითა და გამძლეობით',
      walletsName: 'ტყავის საფულეები',
      walletsDescription: 'ნატურალური ტყავის ნივთები, რომლებიც დროსთან ერთად უფრო ლამაზდება',
      sheathsName: 'ქარქაშები',
      sheathsDescription: 'თქვენს დანაზე მორგებული საიმედო დაცვა',
    },
    product: {
      addToCart: 'კალათაში დამატება',
      description: 'აღწერა',
      materials: 'მასალები',
      specifications: 'მახასიათებლები',
      quantity: 'რაოდენობა',
      decreaseQuantity: 'რაოდენობის შემცირება',
      increaseQuantity: 'რაოდენობის გაზრდა',
      relatedTitle: 'შეიძლება ესეც დაგაინტერესოთ',
      relatedDescription: 'დაათვალიერეთ ჩვენი კოლექციის სხვა ხელნაკეთი ნამუშევრები',
      priceOnRequest: 'ფასი მოთხოვნით',
      contactForOrder: 'ამ პროდუქტის შესაკვეთად დაგვიკავშირდით.',
      details: 'დეტალების ნახვა',
      image: 'სურათი',
      thumbnail: 'მინიატურა',
    },
    cart: {
      title: 'თქვენი კალათა',
      empty: 'კალათა ცარიელია',
      continueShopping: 'გაგრძელება',
      remove: 'წაშლა',
      subtotal: 'ჯამი',
      shippingAndTaxes: 'მიწოდება და გადასახადები გამოითვლება შეკვეთის გაფორმებისას.',
      checkout: 'შეკვეთის გაფორმება',
    },
    checkout: {
      title: 'შეკვეთის გაფორმება',
      contactInformation: 'საკონტაქტო ინფორმაცია',
      email: 'ელფოსტა',
      phone: 'ტელეფონი',
      shippingAddress: 'მისამართი',
      firstName: 'სახელი',
      lastName: 'გვარი',
      address: 'მისამართი',
      apartment: 'ბინა, ოფისი და სხვა (არასავალდებულო)',
      city: 'ქალაქი',
      state: 'რაიონი / რეგიონი',
      zip: 'საფოსტო ინდექსი',
      processing: 'მუშავდება...',
      placeOrder: 'შეკვეთის დასრულება',
      emailPlaceholder: 'example@mail.com',
      phonePlaceholder: '599 00 00 00',
      addressPlaceholder: 'მაგ: რუსთაველის გამზირი 10',
      apartmentPlaceholder: 'მაგ: ბინა 4B',
      metaTitle: 'შეკვეთის გაფორმება | SHAVKHANI',
      metaDescription: 'დაასრულეთ შეკვეთა',
    },
    orderSummary: {
      title: 'შეკვეთის შეჯამება',
      quantity: 'რაოდ.',
      subtotal: 'ჯამი',
      shipping: 'მიწოდება',
      free: 'უფასო',
      tax: 'გადასახადი',
      total: 'სულ',
    },
    orderConfirmation: {
      title: 'შეკვეთა დადასტურებულია',
      description:
        'გმადლობთ შეკვეთისთვის. თქვენი მოთხოვნა მიღებულია და დამუშავება მალე დაიწყება. გაგზავნის შემდეგ მიიღებთ ელფოსტას ტრეკინგის ინფორმაციით.',
      continueShopping: 'კოლექციის დაბრუნება',
      orderNumber: 'შეკვეთის ნომერი',
      metaTitle: 'შეკვეთა მიღებულია | SHAVKHANI',
      metaDescription: 'თქვენი შეკვეთა წარმატებით დაფიქსირდა',
    },
    footer: {
      description:
        'ადამიანის ხელით შექმნილი, ბუნებით გამოცდილი. თითოეული ნამუშევარი ჩვენს სახელოსნოში სიზუსტითა და ყურადღებით მზადდება.',
      shop: 'კატალოგი',
      company: 'ინფორმაცია',
      legal: 'პირობები',
      about: 'ჩვენ შესახებ',
      contact: 'კონტაქტი',
      shipping: 'მიწოდება',
      privacy: 'კონფიდენციალურობა',
      terms: 'წესები',
      returns: 'დაბრუნება',
      copyright: 'ადამიანის ხელით შექმნილი, ბუნებით გამოცდილი.',
    },
    common: {
      home: 'მთავარი',
      featuredProducts: 'რჩეული ნამუშევრები',
      featuredDescription: 'ყველაზე მოთხოვნადი ხელნაკეთი პროდუქცია',
      knives: 'დანები',
      knivesDescription: 'ხელით დამუშავებული პირები გამორჩეული ჭრითა და კლასიკური ფორმით',
      wallets: 'ტყავის საფულეები',
      walletsDescription: 'ნატურალური ტყავის საფულეები, რომლებიც დროსთან ერთად იძენს ხასიათს',
      sheaths: 'ქარქაშები',
      sheathsDescription: 'თქვენს დანებზე მორგებული საიმედო ქარქაშები',
      productNotFound: 'პროდუქტი ვერ მოიძებნა | SHAVKHANI',
      siteTitle: 'SHAVKHANI | ადამიანის ხელით შექმნილი, ბუნებით გამოცდილი',
      siteDescription:
        'ხელნაკეთი დანები, ტყავის საფულეები და ქარქაშები. თითოეული ნივთი იქმნება ტრადიციული ტექნიკითა და ხარისხიან მასალებით.',
    },
  },
  en: {
    language: {
      ka: 'Georgian',
      en: 'English',
    },
    navbar: {
      shop: 'Home',
      knives: 'Knives',
      wallets: 'Wallets',
      sheaths: 'Sheaths',
      cart: 'Cart',
      openMenu: 'Open main menu',
      closeMenu: 'Close menu',
      shoppingCart: 'Shopping cart',
    },
    hero: {
      tagline: 'Forged by Man, Tested by Nature',
      description:
        'Every knife, wallet, and sheath is handcrafted with traditional methods and carefully selected materials. Made for people who value quality, durability, and real craftsmanship.',
      shopCollection: 'Shop Collection',
      ourCraft: 'Our Craft',
    },
    categories: {
      title: 'Collections',
      description: 'Each piece is crafted with dedication to quality and attention to detail',
      knivesName: 'Knives',
      knivesDescription: 'Hand-finished blades with excellent cutting performance and durability',
      walletsName: 'Leather Wallets',
      walletsDescription: 'Full-grain leather goods that age beautifully over time',
      sheathsName: 'Sheaths',
      sheathsDescription: 'Reliable custom-fit protection for your blades',
    },
    product: {
      addToCart: 'Add to Cart',
      description: 'Description',
      materials: 'Materials',
      specifications: 'Specifications',
      quantity: 'Quantity',
      decreaseQuantity: 'Decrease quantity',
      increaseQuantity: 'Increase quantity',
      relatedTitle: 'You May Also Like',
      relatedDescription: 'Explore more handcrafted pieces from our collection',
      priceOnRequest: 'Price on request',
      contactForOrder: 'Please contact us to order this product.',
      details: 'View Details',
      image: 'Image',
      thumbnail: 'Thumbnail',
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty',
      continueShopping: 'Continue Shopping',
      remove: 'Remove',
      subtotal: 'Subtotal',
      shippingAndTaxes: 'Shipping and taxes calculated at checkout.',
      checkout: 'Proceed to Checkout',
    },
    checkout: {
      title: 'Checkout',
      contactInformation: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      shippingAddress: 'Shipping Address',
      firstName: 'First Name',
      lastName: 'Last Name',
      address: 'Address',
      apartment: 'Apartment, suite, etc. (optional)',
      city: 'City',
      state: 'State / Region',
      zip: 'ZIP Code',
      processing: 'Processing...',
      placeOrder: 'Place Order',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '(555) 123-4567',
      addressPlaceholder: '123 Main St',
      apartmentPlaceholder: 'Apt 4B',
      metaTitle: 'Checkout | SHAVKHANI',
      metaDescription: 'Complete your order',
    },
    orderSummary: {
      title: 'Order Summary',
      quantity: 'Qty',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      free: 'Free',
      tax: 'Tax',
      total: 'Total',
    },
    orderConfirmation: {
      title: 'Order Confirmed',
      description:
        'Thank you for your order. We have received your request and will begin processing it shortly. You will receive an email with tracking information once your order ships.',
      continueShopping: 'Continue Shopping',
      orderNumber: 'Order number',
      metaTitle: 'Order Confirmed | SHAVKHANI',
      metaDescription: 'Your order has been placed successfully',
    },
    footer: {
      description:
        'Forged by man, tested by nature. Each piece is crafted with dedication and precision in our workshop.',
      shop: 'Shop',
      company: 'Company',
      legal: 'Legal',
      about: 'About',
      contact: 'Contact',
      shipping: 'Shipping',
      privacy: 'Privacy',
      terms: 'Terms',
      returns: 'Returns',
      copyright: 'Forged by Man, Tested by Nature.',
    },
    common: {
      home: 'Home',
      featuredProducts: 'Featured Products',
      featuredDescription: 'Our most popular handcrafted pieces',
      knives: 'Knives',
      knivesDescription: 'Hand-finished blades with excellent cutting performance and timeless design',
      wallets: 'Leather Wallets',
      walletsDescription: 'Full-grain leather wallets that develop character with age',
      sheaths: 'Knife Sheaths',
      sheathsDescription: 'Custom-fit sheaths designed to protect your blades',
      productNotFound: 'Product Not Found | SHAVKHANI',
      siteTitle: 'SHAVKHANI | Forged by Man, Tested by Nature',
      siteDescription:
        'Premium handcrafted knives, leather wallets, and knife sheaths made with traditional techniques and the finest materials.',
    },
  },
} as const

export type TranslationCopy = (typeof translations)['ka']
