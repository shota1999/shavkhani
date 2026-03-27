import type { LocalizedText } from '@/lib/i18n'

export interface ProductSpecification {
  label: LocalizedText
  value: LocalizedText
}

export interface Product {
  id: string
  name: LocalizedText
  price: number | null
  category: 'knives' | 'wallets' | 'sheaths'
  description: LocalizedText
  materials: LocalizedText[]
  specifications: ProductSpecification[]
  images: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'damascus-chef-knife',
    name: {
      ka: 'დამასკოს შეფის დანა',
      en: 'Damascus Chef Knife',
    },
    price: 289,
    category: 'knives',
    description: {
      ka: 'შთამბეჭდავი შეფის დანა 67-ფენიანი დამასკოს პირით. ტალღოვანი ტექსტურა თითოეულ ნამუშევარს უნიკალურს ხდის, ხოლო ბალანსი და მჭრელობა პროფესიონალური დონის მუშაობისთვის არის გათვლილი.',
      en: 'A striking chef knife with a 67-layer Damascus blade. The wave pattern makes each piece unique, while the balance and edge are tuned for professional kitchen work.',
    },
    materials: [
      { ka: '67-ფენიანი დამასკოს ფოლადი', en: '67-layer Damascus steel' },
      { ka: 'აფრიკული შავი ხის ტარი', en: 'African blackwood handle' },
      { ka: 'სპილენძის გამამაგრებელი ნაწილი', en: 'Brass bolster' },
    ],
    specifications: [
      {
        label: { ka: 'პირის სიგრძე', en: 'Blade Length' },
        value: { ka: '8 დუიმი', en: '8 inches' },
      },
      {
        label: { ka: 'სრული სიგრძე', en: 'Overall Length' },
        value: { ka: '13.5 დუიმი', en: '13.5 inches' },
      },
      {
        label: { ka: 'პირის სისქე', en: 'Blade Thickness' },
        value: { ka: '2,5 მმ', en: '2.5mm' },
      },
      {
        label: { ka: 'წონა', en: 'Weight' },
        value: { ka: '8.2 უნცია', en: '8.2 oz' },
      },
      {
        label: { ka: 'სიმტკიცე', en: 'Hardness' },
        value: { ka: '60-62 HRC', en: '60-62 HRC' },
      },
    ],
    images: ['/images/damascus-chef-1.jpg', '/images/damascus-chef-2.jpg', '/images/damascus-chef-3.jpg'],
    featured: true,
  },
  {
    id: 'hunting-knife-oak',
    name: {
      ka: 'კლასიკური სანადირო დანა',
      en: 'Classic Hunting Knife',
    },
    price: 195,
    category: 'knives',
    description: {
      ka: 'მრავალმხრივი ფიქსირებული დანა მაღალი ნახშირბადოვანი 1095 ფოლადით და სტაბილიზებული მუხის ტარით. პირის გეომეტრია კარგად მუშაობს როგორც ტყავზე, ისე საველე სამუშაოებზე.',
      en: 'A versatile fixed-blade hunting knife made from 1095 high-carbon steel with a stabilized oak burl handle. The edge geometry performs well in field use and detailed cutting.',
    },
    materials: [
      { ka: '1095 მაღალი ნახშირბადოვანი ფოლადი', en: '1095 high-carbon steel' },
      { ka: 'სტაბილიზებული მუხის ტარი', en: 'Stabilized oak burl' },
      { ka: 'ნიკელ-ვერცხლის პინები', en: 'Nickel silver pins' },
    ],
    specifications: [
      {
        label: { ka: 'პირის სიგრძე', en: 'Blade Length' },
        value: { ka: '4.5 დუიმი', en: '4.5 inches' },
      },
      {
        label: { ka: 'სრული სიგრძე', en: 'Overall Length' },
        value: { ka: '9 დუიმი', en: '9 inches' },
      },
      {
        label: { ka: 'პირის სისქე', en: 'Blade Thickness' },
        value: { ka: '4 მმ', en: '4mm' },
      },
      {
        label: { ka: 'წონა', en: 'Weight' },
        value: { ka: '6.5 უნცია', en: '6.5 oz' },
      },
      {
        label: { ka: 'სიმტკიცე', en: 'Hardness' },
        value: { ka: '58-60 HRC', en: '58-60 HRC' },
      },
    ],
    images: [
      '/images/hunting-knife-oak.jfif',
      '/images/hunting-knife-1.jpg',
      '/images/hunting-knife-2.jpg',
      '/images/hunting-knife-3.jpg',
    ],
    featured: true,
  },
  {
    id: 'edc-folder',
    name: {
      ka: 'EDC დასაკეცი დანა',
      en: 'EDC Folding Knife',
    },
    price: 165,
    category: 'knives',
    description: {
      ka: 'ყოველდღიური ტარებისთვის შექმნილი დასაკეცი დანა, რბილი გახსნითა და გამძლე ჩამკეტით. CPM-S35VN ფოლადი გამოირჩევა ჭრის ხანგრძლივი შენარჩუნებითა და კოროზიისადმი მედეგობით.',
      en: 'An everyday carry folding knife with smooth deployment and a robust lock. CPM-S35VN steel offers strong edge retention and corrosion resistance.',
    },
    materials: [
      { ka: 'CPM-S35VN ფოლადი', en: 'CPM-S35VN steel' },
      { ka: 'G10 ტარის ფირფიტები', en: 'G10 scales' },
      { ka: 'ტიტანის კომპონენტები', en: 'Titanium hardware' },
    ],
    specifications: [
      {
        label: { ka: 'პირის სიგრძე', en: 'Blade Length' },
        value: { ka: '3.25 დუიმი', en: '3.25 inches' },
      },
      {
        label: { ka: 'დაკეცილი სიგრძე', en: 'Closed Length' },
        value: { ka: '4.25 დუიმი', en: '4.25 inches' },
      },
      {
        label: { ka: 'წონა', en: 'Weight' },
        value: { ka: '3.8 უნცია', en: '3.8 oz' },
      },
      {
        label: { ka: 'ჩამკეტის ტიპი', en: 'Lock Type' },
        value: { ka: 'ლაინერ-ლოქი', en: 'Liner lock' },
      },
      {
        label: { ka: 'სიმტკიცე', en: 'Hardness' },
        value: { ka: '59-61 HRC', en: '59-61 HRC' },
      },
    ],
    images: ['/images/edc-folder-1.jpg', '/images/edc-folder-2.jpg', '/images/edc-folder-3.jpg'],
    featured: true,
  },
  {
    id: 'utility-knife',
    name: {
      ka: 'უნივერსალური ფიქსირებული დანა',
      en: 'Utility Fixed Blade',
    },
    price: 145,
    category: 'knives',
    description: {
      ka: 'პრაქტიკული დანა ყოველდღიური ამოცანებისთვის. სრულტანიანი კონსტრუქცია და კომფორტული მიკარტის ტარი მას საიმედო არჩევანად აქცევს ზუსტ და მრავალფეროვან სამუშაოებზე.',
      en: 'A practical fixed blade designed for daily tasks. The full-tang construction and comfortable Micarta handle make it reliable for detailed and varied work.',
    },
    materials: [
      { ka: 'O1 ინსტრუმენტული ფოლადი', en: 'O1 tool steel' },
      { ka: 'კანვას მიკარტა', en: 'Canvas Micarta' },
      { ka: 'სპილენძის პინები', en: 'Brass pins' },
    ],
    specifications: [
      {
        label: { ka: 'პირის სიგრძე', en: 'Blade Length' },
        value: { ka: '3.75 დუიმი', en: '3.75 inches' },
      },
      {
        label: { ka: 'სრული სიგრძე', en: 'Overall Length' },
        value: { ka: '8 დუიმი', en: '8 inches' },
      },
      {
        label: { ka: 'პირის სისქე', en: 'Blade Thickness' },
        value: { ka: '3 მმ', en: '3mm' },
      },
      {
        label: { ka: 'წონა', en: 'Weight' },
        value: { ka: '4.5 უნცია', en: '4.5 oz' },
      },
      {
        label: { ka: 'სიმტკიცე', en: 'Hardness' },
        value: { ka: '59-60 HRC', en: '59-60 HRC' },
      },
    ],
    images: ['/images/utility-knife-1.jpg', '/images/utility-knife-2.jpg', '/images/utility-knife-3.jpg'],
    featured: false,
  },
  {
    id: 'camping-knife-9xc',
    name: {
      ka: 'სალაშქრო დანა',
      en: 'Camping Knife',
    },
    price: 150,
    category: 'knives',
    description: {
      ka: 'სალაშქრო და ბანაკური გამოყენებისთვის გამზადებული ფიქსირებული დანა 9XC ფოლადით. კომპაქტური, თუმცა ძლიერი ფორმა კარგად ერგება ყოველდღიურ გარე გამოყენებას, ხოლო ტექსტოლიტის ტარი და კაიდექსის ქარქაში პრაქტიკულობასა და გამძლეობას აერთიანებს.',
      en: 'A fixed blade built for camping and outdoor use with 9XC steel. Its compact yet capable profile suits everyday field tasks, while the Textolite handle and Kydex sheath keep it practical and durable.',
    },
    materials: [
      { ka: '9XC ფოლადი', en: '9XC steel' },
      { ka: 'ტექსტოლიტის ტარი', en: 'Textolite handle' },
      { ka: 'კაიდექსის ქარქაში', en: 'Kydex sheath' },
    ],
    specifications: [
      {
        label: { ka: 'ფოლადი', en: 'Steel' },
        value: { ka: '9XC', en: '9XC' },
      },
      {
        label: { ka: 'სრული სიგრძე', en: 'Overall Length' },
        value: { ka: '25 სმ', en: '25 cm' },
      },
      {
        label: { ka: 'მჭრელი პირი', en: 'Cutting Edge' },
        value: { ka: '13 სმ', en: '13 cm' },
      },
      {
        label: { ka: 'სისქე', en: 'Thickness' },
        value: { ka: '4,5 მმ', en: '4.5 mm' },
      },
      {
        label: { ka: 'დაშვების სისქე', en: 'Edge Thickness' },
        value: { ka: '0,8 მმ', en: '0.8 mm' },
      },
      {
        label: { ka: 'ტარი', en: 'Handle' },
        value: { ka: 'ტექსტოლიტი', en: 'Textolite' },
      },
      {
        label: { ka: 'ქარქაში', en: 'Sheath' },
        value: { ka: 'კაიდექსი', en: 'Kydex' },
      },
    ],
    images: [
      '/images/557b65ca-3e7c-4317-b42c-9962e5c14d66.jpg',
      '/images/6406dd34-236b-4f14-9df8-3e6eb12d6694.jpg',
    ],
    featured: true,
  },
  {
    id: 'bifold-wallet-cognac',
    name: {
      ka: 'კლასიკური ორკეცი საფულე',
      en: 'Classic Bifold Wallet',
    },
    price: 89,
    category: 'wallets',
    description: {
      ka: 'დროისგან დამოუკიდებელი ორკეცი საფულე სრულმარცვლოვანი ვეგეტაბელური ტყავით. აქვს ექვსი ბარათის სლოტი, ორი ფარული ჯიბე და სრული სიგრძის კუპიურების განყოფილება.',
      en: 'A timeless bifold wallet handcrafted from full-grain vegetable-tanned leather. It includes six card slots, two hidden pockets, and a full-length bill compartment.',
    },
    materials: [
      { ka: 'სრულმარცვლოვანი ვეგეტაბელური ტყავი', en: 'Full-grain vegetable-tanned leather' },
      { ka: 'ცვილით დამუშავებული სელის ძაფი', en: 'Waxed linen thread' },
    ],
    specifications: [
      {
        label: { ka: 'ზომები', en: 'Dimensions' },
        value: { ka: '4.5" x 3.5" (დაკეცილი)', en: '4.5" x 3.5" (folded)' },
      },
      {
        label: { ka: 'ბარათების სლოტები', en: 'Card Slots' },
        value: { ka: '6', en: '6' },
      },
      {
        label: { ka: 'კუპიურების განყოფილება', en: 'Bill Compartments' },
        value: { ka: '1', en: '1' },
      },
      {
        label: { ka: 'ფარული ჯიბეები', en: 'Hidden Pockets' },
        value: { ka: '2', en: '2' },
      },
      {
        label: { ka: 'ტყავის სისქე', en: 'Leather Thickness' },
        value: { ka: '1.2 მმ', en: '1.2mm' },
      },
    ],
    images: ['/images/bifold-cognac-1.jpg', '/images/bifold-cognac-2.jpg', '/images/bifold-cognac-3.jpg'],
    featured: true,
  },
  {
    id: 'slim-cardholder',
    name: {
      ka: 'მინიმალისტური ბარათების ქეისი',
      en: 'Minimalist Card Holder',
    },
    price: 55,
    category: 'wallets',
    description: {
      ka: 'თხელი და პრაქტიკული ბარათების ქეისი მათთვის, ვისაც მინიმალური ტარება ურჩევნია. იტევს 6-8 ბარათს და შუაში აქვს დაკეცილი კუპიურებისთვის განკუთვნილი ჯიბე.',
      en: 'A slim and practical card holder for minimal carry. It holds 6-8 cards and includes a center pocket for folded bills.',
    },
    materials: [
      { ka: 'Horween Chromexcel ტყავი', en: 'Horween Chromexcel leather' },
      { ka: 'Tiger ძაფი', en: 'Tiger thread' },
    ],
    specifications: [
      {
        label: { ka: 'ზომები', en: 'Dimensions' },
        value: { ka: '4" x 2.75"', en: '4" x 2.75"' },
      },
      {
        label: { ka: 'ტევადობა', en: 'Card Capacity' },
        value: { ka: '6-8 ბარათი', en: '6-8 cards' },
      },
      {
        label: { ka: 'კუპიურების ჯიბე', en: 'Bill Pocket' },
        value: { ka: '1 (ცენტრში)', en: '1 (center)' },
      },
      {
        label: { ka: 'ტყავის სისქე', en: 'Leather Thickness' },
        value: { ka: '1.0 მმ', en: '1.0mm' },
      },
    ],
    images: ['/images/cardholder-1.jpg', '/images/cardholder-2.jpg', '/images/cardholder-3.jpg'],
    featured: true,
  },
  {
    id: 'long-wallet',
    name: {
      ka: 'გრძელი საფულე',
      en: 'Long Wallet',
    },
    price: 125,
    category: 'wallets',
    description: {
      ka: 'ელეგანტური გრძელი საფულე დიდი მოცულობით. აქვს 12 ბარათის სლოტი, რამდენიმე კუპიურების განყოფილება და ელვიანი ჯიბე მონეტებისთვის.',
      en: 'An elegant long wallet with generous capacity. It features 12 card slots, multiple bill compartments, and a zip pocket for coins.',
    },
    materials: [
      { ka: 'იტალიური Buttero ტყავი', en: 'Italian Buttero leather' },
      { ka: 'YKK ელვა', en: 'YKK zipper' },
      { ka: 'ცვილით დამუშავებული სელის ძაფი', en: 'Waxed linen thread' },
    ],
    specifications: [
      {
        label: { ka: 'ზომები', en: 'Dimensions' },
        value: { ka: '7.5" x 3.75"', en: '7.5" x 3.75"' },
      },
      {
        label: { ka: 'ბარათების სლოტები', en: 'Card Slots' },
        value: { ka: '12', en: '12' },
      },
      {
        label: { ka: 'კუპიურების განყოფილება', en: 'Bill Compartments' },
        value: { ka: '2', en: '2' },
      },
      {
        label: { ka: 'ელვიანი ჯიბე', en: 'Zip Pocket' },
        value: { ka: '1', en: '1' },
      },
      {
        label: { ka: 'ტყავის სისქე', en: 'Leather Thickness' },
        value: { ka: '1.4 მმ', en: '1.4mm' },
      },
    ],
    images: ['/images/long-wallet-1.jpg', '/images/long-wallet-2.jpg', '/images/long-wallet-3.jpg'],
    featured: false,
  },
  {
    id: 'knife-sheath-vertical',
    name: {
      ka: 'ვერტიკალური ქამრის ქარქაში',
      en: 'Vertical Belt Sheath',
    },
    price: 65,
    category: 'sheaths',
    description: {
      ka: 'კლასიკური ვერტიკალური ქარქაში ფიქსირებული დანებისთვის. აქვს უსაფრთხო სამაგრი და ქამარზე კომფორტულად ჯდება.',
      en: 'A classic vertical carry sheath for fixed-blade knives, designed with secure retention and comfortable belt carry.',
    },
    materials: [
      { ka: '8-9 უნცია ვეგეტაბელური ტყავი', en: '8-9 oz vegetable-tanned leather' },
      { ka: 'მასიური სპილენძის სამაგრი', en: 'Solid brass snap' },
      { ka: 'ცვილის ძაფი', en: 'Waxed thread' },
    ],
    specifications: [
      {
        label: { ka: 'თავსებადი პირის სიგრძე', en: 'Fits Blade Length' },
        value: { ka: '5 დუიმამდე', en: 'Up to 5 inches' },
      },
      {
        label: { ka: 'ქამრის სიგანე', en: 'Belt Width' },
        value: { ka: '1.75 დუიმამდე', en: 'Up to 1.75 inches' },
      },
      {
        label: { ka: 'ტარების სტილი', en: 'Carry Style' },
        value: { ka: 'ვერტიკალური', en: 'Vertical' },
      },
      {
        label: { ka: 'ფიქსაცია', en: 'Retention' },
        value: { ka: 'ღილაკიანი', en: 'Snap closure' },
      },
    ],
    images: ['/images/sheath-vertical-1.jpg', '/images/sheath-vertical-2.jpg', '/images/sheath-vertical-3.jpg'],
    featured: true,
  },
  {
    id: 'knife-sheath-horizontal',
    name: {
      ka: 'ჰორიზონტალური სკაუტ-ქარქაში',
      en: 'Horizontal Scout Sheath',
    },
    price: 75,
    category: 'sheaths',
    description: {
      ka: 'ჰორიზონტალური ტარებისთვის შექმნილი ქარქაში, რომელიც სხეულზე დაბლა ზის და მოძრაობისას ხელს არ გიშლით. უზრუნველყოფს მყარ და ზუსტ დაჭერას.',
      en: 'A horizontal carry sheath that rides low and stays out of the way while keeping the knife secure and accessible.',
    },
    materials: [
      { ka: '9-10 უნცია bridle ტყავი', en: '9-10 oz bridle leather' },
      { ka: 'სპილენძის Chicago ჭანჭიკები', en: 'Brass Chicago screws' },
      { ka: 'Neatsfoot ზეთის დამუშავება', en: 'Neatsfoot oil finish' },
    ],
    specifications: [
      {
        label: { ka: 'თავსებადი პირის სიგრძე', en: 'Fits Blade Length' },
        value: { ka: '4.5 დუიმამდე', en: 'Up to 4.5 inches' },
      },
      {
        label: { ka: 'ქამრის სიგანე', en: 'Belt Width' },
        value: { ka: '1.5 დუიმამდე', en: 'Up to 1.5 inches' },
      },
      {
        label: { ka: 'ტარების სტილი', en: 'Carry Style' },
        value: { ka: 'ჰორიზონტალური', en: 'Horizontal' },
      },
      {
        label: { ka: 'ფიქსაცია', en: 'Retention' },
        value: { ka: 'ფრიქციული დაჭერა', en: 'Friction fit' },
      },
    ],
    images: ['/images/sheath-horizontal-1.jpg', '/images/sheath-horizontal-2.jpg', '/images/sheath-horizontal-3.jpg'],
    featured: true,
  },
  {
    id: 'knife-sheath-dangler',
    name: {
      ka: 'დანგლერ ქარქაშის სისტემა',
      en: 'Dangler Sheath System',
    },
    price: 85,
    category: 'sheaths',
    description: {
      ka: 'მოქნილი სისტემა, რომელიც დანას ჯდომისას ან ჩაჯდომისას თავისუფლად ამოძრავებს. შესაძლებელია როგორც სტანდარტული, ისე dangling ტარების კონფიგურაცია.',
      en: 'A versatile sheath system that lets the knife move freely while sitting or crouching, with both standard and dangler carry options.',
    },
    materials: [
      { ka: 'გამძლე ტყავი', en: 'Heavy-duty leather' },
      { ka: 'უჟანგავი D-რგოლი', en: 'Stainless steel D-ring' },
      { ka: 'კაიდექსის შიდა ნაწილი', en: 'Kydex liner' },
    ],
    specifications: [
      {
        label: { ka: 'თავსებადი პირის სიგრძე', en: 'Fits Blade Length' },
        value: { ka: '5.5 დუიმამდე', en: 'Up to 5.5 inches' },
      },
      {
        label: { ka: 'ქამრის სიგანე', en: 'Belt Width' },
        value: { ka: '2 დუიმამდე', en: 'Up to 2 inches' },
      },
      {
        label: { ka: 'ტარების სტილი', en: 'Carry Style' },
        value: { ka: 'სტანდარტული / დანგლერი', en: 'Dangler / standard' },
      },
      {
        label: { ka: 'ფიქსაცია', en: 'Retention' },
        value: { ka: 'კაიდექსის ჩანართი', en: 'Kydex insert' },
      },
    ],
    images: ['/images/sheath-dangler-1.jpg', '/images/sheath-dangler-2.jpg', '/images/sheath-dangler-3.jpg'],
    featured: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}
