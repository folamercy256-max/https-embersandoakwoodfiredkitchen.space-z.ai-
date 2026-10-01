// Central brand, copy and data for the Ember & Oak site

export const BRAND = {
  name: "Ember & Oak",
  tagline: "Wood Fired Kitchen",
  city: "Austin, Texas",
  phone: "(512) 476 8220",
  phoneHref: "tel:+15124768220",
  email: "hello@emberandoak.com",
  address: "214 Rio Grande Street, Austin, TX 78701",
  shortAddress: "214 Rio Grande St, Austin",
  credit: {
    label: "Designed By Bestbeny Digital Brand",
    url: "https://bestbenydigitalbrand.space-z.ai/",
  },
};

export const HOURS = [
  { days: "Tuesday to Thursday", time: "5pm to 10pm" },
  { days: "Friday & Saturday", time: "5pm to 11pm" },
  { days: "Sunday Brunch", time: "11am to 3pm" },
  { days: "Sunday Dinner", time: "5pm to 9pm" },
  { days: "Monday", time: "Closed" },
];

export type ViewKey = "home" | "about" | "menu" | "gallery" | "reserve" | "contact";

export const NAV_ITEMS: { key: ViewKey; label: string; hash: string }[] = [
  { key: "home", label: "Home", hash: "#/" },
  { key: "about", label: "About", hash: "#/about" },
  { key: "menu", label: "Menu", hash: "#/menu" },
  { key: "gallery", label: "Gallery", hash: "#/gallery" },
  { key: "reserve", label: "Reservations", hash: "#/reserve" },
  { key: "contact", label: "Contact", hash: "#/contact" },
];

export const VIEW_TITLES: Record<ViewKey, string> = {
  home: "Ember & Oak | Wood Fired Kitchen in Austin, TX",
  about: "Our Story | Ember & Oak",
  menu: "Menu | Ember & Oak",
  gallery: "Gallery | Ember & Oak",
  reserve: "Book a Table | Ember & Oak",
  contact: "Contact | Ember & Oak",
};

const IMG = (hash: string) => `https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/${hash}`;

export const HERO_SLIDES = [
  {
    img: IMG("a439ab8b657d.jpg"),
    eyebrow: "Welcome to Ember & Oak",
    title: "Honest Food, Cooked Over Real Fire",
    text: "Every dish on our menu spends time over oak and mesquite. No shortcuts, no fuss. Just good ingredients handled with care.",
    cta: "Book a Table",
    view: "reserve" as ViewKey,
  },
  {
    img: IMG("900b59665e35.jpg"),
    eyebrow: "Straight From The Oven",
    title: "Pizza, Bread And Steaks With Real Char",
    text: "Our stone oven runs at 700 degrees all night. That is where the flavor starts, and it shows up in everything we serve.",
    cta: "Taste It Tonight",
    view: "reserve" as ViewKey,
  },
  {
    img: IMG("d5666ae97515.jpg"),
    eyebrow: "Good Wine, Good Company",
    title: "The Kind Of Room You Never Want To Leave",
    text: "Low light, warm wood, and a bar that takes its cocktails seriously. Come sit awhile. We will take care of the rest.",
    cta: "Plan Your Visit",
    view: "contact" as ViewKey,
  },
];

export const FEATURES = [
  {
    icon: "flame",
    title: "Real Wood Fire",
    text: "We cook over oak and mesquite, never gas. It takes longer and it asks more of our cooks, and you can taste the difference in every plate.",
  },
  {
    icon: "leaf",
    title: "Local First",
    text: "Our produce comes from farms within a hundred miles of the kitchen. The menu shifts with the seasons because that is how good ingredients work.",
  },
  {
    icon: "heart",
    title: "Hospitality That Feels Human",
    text: "No scripts, no stiff formality. Just a team that knows the menu, remembers your favorite table, and wants you to have a good night.",
  },
];

export const STORY_IMAGES = {
  main: IMG("fc36968b8855.jpeg"),
  top: IMG("36f1c06e6093.jpg"),
  bottom: IMG("74fa32689d65.jpeg"),
};

export const SPECIALS = [
  {
    img: IMG("890950f5c084.jpg"),
    name: "Bone In Ribeye",
    price: "$46",
    desc: "Dry aged for 28 days, finished with smoked butter and flaked salt. The steak that built our reputation.",
  },
  {
    img: IMG("478f5f19d779.jpg"),
    name: "Cedar Plank Salmon",
    price: "$32",
    desc: "Faroe Island salmon roasted on cedar with charred lemon, spring peas and a brown butter vinaigrette.",
  },
  {
    img: IMG("2666e20bd778.jpg"),
    name: "Chocolate Ember Cake",
    price: "$12",
    desc: "Warm dark chocolate cake with a molten center, vanilla bean ice cream and salted oak caramel.",
  },
];

export type MenuItem = { name: string; desc?: string; price: string; tag?: string };

export const MENU: { id: string; label: string; note: string; items: MenuItem[] }[] = [
  {
    id: "starters",
    label: "Starters",
    note: "Made to share, or not. We will not judge.",
    items: [
      { name: "Charred Sourdough & Whipped Butter", desc: "Baked in the oven every afternoon, with smoked sea salt.", price: "$8" },
      { name: "Crispy Calamari", desc: "Lemon aioli, pickled fresno chiles, plenty of crunch.", price: "$14" },
      { name: "Burrata & Heirloom Tomato", desc: "Basil oil, grilled bread, aged balsamic.", price: "$16" },
      { name: "Wood Fired Wings", desc: "Honey chipotle glaze, blue cheese, celery.", price: "$15", tag: "Guest favorite" },
      { name: "Charred Octopus", desc: "Fingerling potatoes, salsa verde, olive crumb.", price: "$18" },
      { name: "Ember House Salad", desc: "Little gem, shaved fennel, parmesan, toasted seeds.", price: "$12" },
    ],
  },
  {
    id: "mains",
    label: "Wood Fired Mains",
    note: "Everything here has been over the coals.",
    items: [
      { name: "Bone In Ribeye", desc: "28 day dry age, smoked butter, flaked salt. 16oz.", price: "$46", tag: "Signature" },
      { name: "Oak Roasted Half Chicken", desc: "Pan jus, whipped potatoes, charred greens.", price: "$28" },
      { name: "Cedar Plank Salmon", desc: "Faroe Island, charred lemon, brown butter vinaigrette.", price: "$32" },
      { name: "Wild Mushroom Tagliatelle", desc: "Hand cut pasta, truffle cream, pecorino.", price: "$24" },
      { name: "Smoked Short Rib", desc: "Ten hours over mesquite, burnt end rub, pickled onion.", price: "$38" },
      { name: "Margherita Pizza", desc: "San Marzano, fior di latte, basil, our 700 degree oven.", price: "$18" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "The pastry team works the morning shift so you get the good stuff at night.",
    items: [
      { name: "Chocolate Ember Cake", desc: "Molten center, vanilla bean ice cream, salted oak caramel.", price: "$12", tag: "Save room" },
      { name: "Cast Iron Berry Crumble", desc: "Baked to order, takes 15 minutes. Worth the wait.", price: "$11" },
      { name: "Basque Cheesecake", desc: "Burnt on purpose, served at room temperature.", price: "$11" },
      { name: "Affogato", desc: "Espresso poured over house vanilla gelato.", price: "$9" },
      { name: "Roasted Pear & Gelato", desc: "Cinnamon, honey, candied walnuts.", price: "$10" },
      { name: "Cheese Board", desc: "Three Texas cheeses, preserves, charred bread.", price: "$19" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    note: "The bar takes its job as seriously as the kitchen takes its fire.",
    items: [
      { name: "Smoked Old Fashioned", desc: "Rye, demerara, smoked orange, oak smoke under glass.", price: "$15", tag: "House classic" },
      { name: "Ember Margarita", desc: "Mezcal, lime, agave, smoked salt rim.", price: "$13" },
      { name: "Espresso Martini", desc: "Cold brew from our neighbors at Third Coast Coffee.", price: "$14" },
      { name: "House Red Blend", desc: "Glass. Tempranillo from the Texas High Plains.", price: "$11" },
      { name: "Local Draft", desc: "Rotating taps, always two Texas breweries on deck.", price: "$8" },
      { name: "Sparkling Water & Sodas", desc: "House made syrups, none of the usual suspects.", price: "$5" },
    ],
  },
];

export const GALLERY = [
  { img: IMG("a439ab8b657d.jpg"), cat: "food", label: "Grilled branzino for the table" },
  { img: IMG("890950f5c084.jpg"), cat: "food", label: "Ribeye, sliced and ready" },
  { img: IMG("900b59665e35.jpg"), cat: "food", label: "Pizza straight from the oven" },
  { img: IMG("1a833b28ff71.jpg"), cat: "food", label: "Wild mushroom tagliatelle" },
  { img: IMG("0def502a7c9b.jpg"), cat: "food", label: "Burrata and heirloom tomato" },
  { img: IMG("2666e20bd778.jpg"), cat: "food", label: "Chocolate ember cake" },
  { img: IMG("58ed2c4d01cb.jpg"), cat: "food", label: "Smoked old fashioned at the bar" },
  { img: IMG("9bfdad51f96f.jpg"), cat: "place", label: "The main dining room" },
  { img: IMG("85a5b982565d.jpeg"), cat: "place", label: "Evening light in the annex" },
  { img: IMG("1465fa2fbead.jpg"), cat: "place", label: "The garden patio" },
  { img: IMG("74fa32689d65.jpeg"), cat: "people", label: "Chef Marco working the live fire" },
  { img: IMG("bfbf83558e20.jpg"), cat: "people", label: "Saturday night, table nine" },
  { img: IMG("c9d504447db9.webp"), cat: "people", label: "First date, corner table" },
  { img: IMG("74d7edcab9be.jpg"), cat: "people", label: "A long table with friends" },
  { img: IMG("e011c116784b.jpg"), cat: "people", label: "Elena running the pass" },
  { img: IMG("36f1c06e6093.jpg"), cat: "place", label: "Prep counter, morning shift" },
];

export const TESTIMONIALS = [
  {
    quote:
      "We came for a birthday and ended up closing the place down. The short rib is the best thing I have eaten all year, and our server never once made us feel rushed. Already planning the next visit.",
    name: "Danielle R.",
    role: "Regular since 2019",
    avatar: IMG("e15583768272.jpg"),
  },
  {
    quote:
      "I sit at the bar with an old fashioned every other Friday and watch the guys work the fire. There is nothing staged about this place. The food is serious and the people are warm.",
    name: "Marcus T.",
    role: "Bar regular",
    avatar: IMG("4bee3a6202b0.jpg"),
  },
  {
    quote:
      "Booked the patio for a work dinner of fourteen people and the team handled everything without breaking a stride. The salmon got compliments from the two pickiest eaters in the company.",
    name: "Priya S.",
    role: "Hosted a private dinner",
    avatar: IMG("fa3cb0964c20.jpg"),
  },
];

export const TEAM = [
  {
    img: IMG("8fc0f0c0c7f2.jpg"),
    name: "Marco Alvarez",
    role: "Chef & Co Founder",
    bio: "Grew up in his grandmother's kitchen in San Antonio. Spent nine years in Chicago kitchens before coming home to build a room around a wood fire.",
  },
  {
    img: IMG("e011c116784b.jpg"),
    name: "Elena Alvarez",
    role: "Chef & Co Founder",
    bio: "Runs the pastry program and the morning prep. Her Basque cheesecake has its own following, which she pretends not to be proud of.",
  },
  {
    img: IMG("c0ea101aa796.jpg"),
    name: "Tommy Nguyen",
    role: "Bar Manager",
    bio: "Collects Texas whiskeys the way other people collect records. Ask him for something off menu and you will get a story with your drink.",
  },
];

export const TIME_SLOTS = [
  "5:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm",
  "8:00pm", "8:30pm", "9:00pm", "9:30pm",
];

export const STATS = [
  { value: "2016", label: "The year we opened" },
  { value: "2", label: "Ovens, both wood burning" },
  { value: "48", label: "Seats inside, 20 on the patio" },
  { value: "100%", label: "Cooked over real fire" },
];
