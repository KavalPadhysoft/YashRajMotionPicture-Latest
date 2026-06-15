import { Service, PortfolioItem, PricingPackage, Testimonial, InstagramPost } from "./types";

export const services: Service[] = [
  {
    id: "wedding-photography",
    title: "Wedding Films & Photography",
    subtitle: "Timeless moments, beautifully captured",
    shortDescription: "Timeless moments, beautifully captured. Flagship royal Gujarati heritage scale coverings near Sindhu Bhavan Road.",
    longDescription: "Our Wedding Film signature suite is meticulously designed for couples who seek a cinematic masterwork. We blend art-tier cinematography with state-of-the-art soundscapes and custom color adjustments to turn your grand celebrations into a majestic heritage relic. Filmed using native cinema cameras with anamorphic optics, every shot looks like a high-end dramatic movie frame.",
    bannerImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹85,000 - ₹1,50,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-through-vines-in-sunlight-41604-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Principal Cinematic Director Yash Raj coverage",
      "Symmetrical architectural master frames positioning",
      "Dual-operator setup with Cine prime lenses",
      "Exclusive midnight-gold color profiling",
      "Fully soundscaped non-linear narratives"
    ],
    deliverables: [
      "1x Feature Cinematic Film (25 - 45 minutes)",
      "1x High-Energy Visual Teaser (3 - 5 minutes)",
      "350+ fully graded high-res digital stills",
      "Leather-Bound Handcrafted Matte Photo Book"
    ]
  },
  {
    id: "pre-wedding-shoots",
    title: "The Cinematic Pre-Wedding",
    subtitle: "Romantic stories before the big day",
    shortDescription: "Romantic stories before the big day. Choreographed cinematic narratives weaving through Adalaj Stepwell or GIFT high-rises.",
    longDescription: "Tell your unique story before the wedding. We construct a bespoke script and screenwrite custom frame sequences based on how you met, set against the breathtaking backdrops of Ahmedabad's historic stepwells or modern high-technology hubs. Directed with natural motion and high-fashion aesthetics.",
    bannerImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹35,000 - ₹50,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Bespoke storyline & narrative drafting",
      "Location scout coordination (Adalaj & Sabarmati)",
      "Slow-motion cinematic tracking techniques",
      "Stylist & couture consultation pre-shoot"
    ],
    deliverables: [
      "1x Cinematic Narrative Trailer (2 - 3 minutes)",
      "75+ fully graded digital high-stakes portraits",
      "Online visual showcase delivery portal"
    ]
  },
  {
    id: "corporate-visuals",
    title: "Corporate Films & Visuals",
    subtitle: "Professional visuals for your brand",
    shortDescription: "Professional visuals for your brand. Pristine brand communication films, executive profiles, and commercial assets.",
    longDescription: "Elevate your brand with cutting-edge visual marketing and executive messaging. Our corporate division films on-site in GIFT City, Sabarmati Riverfront, and corporate offices across India, utilizing pristine camera movements, dynamic infographics, and clear high-contrast audio layers.",
    bannerImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹50,000 - ₹95,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Multi-camera interview lighting coordination",
      "Professional non-linear commercial drafting",
      "High-fidelity crystal podcast audio recording",
      "Licensed corporate broadcast scoring"
    ],
    deliverables: [
      "1x High-impact brand profile documentary (5-8 mins)",
      "2x Dynamic commercial teaser outputs (60s / 30s)",
      "Premium digital corporate headshots library"
    ]
  },
  {
    id: "events-coverage",
    title: "Premium Events Coverage",
    subtitle: "Every milestone, every memory",
    shortDescription: "Every milestone, every memory. High-end cultural celebrations, luxury brand rollouts, and multi-day conferences.",
    longDescription: "Capture the raw energy and premium atmosphere of your milestones. From grand scale social launch galas on Sindhu Bhavan Road to historic cultural spectacles, we provide discrete, razor-sharp active coverage ensuring every key handshake and emotional highlight is preserved forever.",
    bannerImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹30,000 - ₹60,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-through-vines-in-sunlight-41604-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "High-speed event strobe tracking alignment",
      "Ambient candelabra lighting enhancements",
      "Real-time event coverage dispatch team"
    ],
    deliverables: [
      "1x Comprehensive Event Aftermovie film (3-5 mins)",
      "200+ fully-graded digital lifestyle capture stills",
      "Instant social-media live-share picture set"
    ]
  },
  {
    id: "fashion-editorial",
    title: "High Fashion Editorial",
    subtitle: "Editorial shoots that define style",
    shortDescription: "Editorial shoots that define style. Couture styling, lookbook publication shoots, and high-stakes campaigns matching SBR elite boutiques.",
    longDescription: "High-fashion commercial photography and styling campaigns designed to elevate local and prestigious national brands. Featuring deep shadows and heavy gold accents mapping.",
    bannerImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹45,000 - ₹75,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "High-speed strobe lighting synchronization",
      "E-commerce metadata & standard ratios sizing",
      "On-set fashion creative director assistance"
    ],
    deliverables: [
      "Digital Lookbook ready for cataloging",
      "15x Retouched editorial poster shots",
      "Social media active aspect ratio cuts"
    ]
  },
  {
    id: "product-photography",
    title: "Product Shoots & Design",
    subtitle: "Clean, compelling product imagery",
    shortDescription: "Clean, compelling product imagery. Symmetrical compositions framing luxury items, crafts, and high-stakes jewelry collections.",
    longDescription: "We craft beautiful product stories. Utilizing premium studio glass layouts, rich velvet drapes, and pinpoint spotlight setups, we transform commercial goods into luxurious visual objects of desire.",
    bannerImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹20,000 - ₹38,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-in-the-forest-41600-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Macro lens polarization details tracking",
      "Studio ambient smoke & particle creation",
      "Gold and metallic reflection controls"
    ],
    deliverables: [
      "30+ ultra-high fidelity product cutouts",
      "High-contrast commercial advertising stills set",
      "1x Product rotation high-definition showcase clip"
    ]
  },
  {
    id: "drone-cinematography",
    title: "Drone Cinematography",
    subtitle: "Cinematic aerial perspectives",
    shortDescription: "Cinematic aerial perspectives. Panoramic vistas and soaring transitions captured by certified dual-operators.",
    longDescription: "Adding unparalleled scale and grand theatricality to your campaigns. Sweeping aerial shots scaling historic architecture, sweeping landscapes, or premium corporate campuses in full 4K UHD resolutions.",
    bannerImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹25,000 - ₹45,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "UHD 4K certified professional pilot crew",
      "GPS tracking and precise orbital pathings",
      "Indoor cine-whoop dynamic fpv operations"
    ],
    deliverables: [
      "10x Fully stabilized and graded cinematic clips",
      "Raw uncut drone sequence cache backup",
      "High-res premium aerial master prints"
    ]
  },
  {
    id: "reels-short-form",
    title: "Reels & Short-Form Films",
    subtitle: "Short-form content that stops the scroll",
    shortDescription: "Short-form content that stops the scroll. Sizzling edits, cinematic pacing, and pristine storytelling designed for mobile viewing.",
    longDescription: "Maximize engagement with cinematic shorts designed specifically for high-stakes digital reach. Choreographed to trending audio with bespoke typography sound design, color grades, and premium edits.",
    bannerImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200",
    pricing: "₹15,000 - ₹30,000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-strolling-on-a-sandy-beach-during-sunset-5310-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Vertical full-sensor cinema-grade captures",
      "Sound design transitions & royalty-free music sync",
      "Signature high-fashion rapid color grades"
    ],
    deliverables: [
      "3x High-energy Reels ready for platform deployment",
      "Bespoke static thumbnail cover asset set",
      "Interactive analytics caption narrative draft"
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pt-1",
    category: "wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    title: "The Palace Splendor",
    location: "Heritage Palace, Adalaj",
    type: "image",
    description: "Gujarati Royal Wedding coupling symmetrical palace architecture with deep matte shadows and rich candle lighting.",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: "pt-2",
    category: "pre-wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    title: "Adalaj Whispers",
    location: "Adalaj Stepwell Site",
    type: "image",
    description: "A slow-tracking romantic cinema shot highlighting the intricate columns of Adalaj stepwell with dynamic daylight flares.",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: "pt-3",
    category: "fashion",
    thumbnailUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    title: "The Midnight Silk",
    location: "Bodakdev Studio",
    type: "image",
    description: "Couture editorial campaign framing gold jewelry against deep velvet charcoal fabrics and extreme contrast shadow structures.",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: "pt-4",
    category: "corporate",
    thumbnailUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    title: "Tech Horizon Summit",
    location: "GIFT City Club, Gandhinagar",
    type: "image",
    description: "Symmetrical visual coverage of Ahmedabad's leading business summit featuring sharp-light layouts and glass textures.",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: "pt-5",
    category: "wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
    title: "Candlelight Vows",
    location: "Sindhu Bhavan Road, Ahmedabad",
    type: "image",
    description: "Tender embrace during a night ritual in a forest garden setup on SBR, completely lit by custom chandeliers and warm embers.",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1920"
  },
  {
    id: "pt-6",
    category: "pre-wedding",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    title: "GIFT City Monoliths",
    location: "GIFT City, Gandhinagar",
    type: "image",
    description: "Modern romantic pre-wedding narrative contrasting futuristic architectural glass with warm, natural handholding details.",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920"
  }
];

export const packages: PricingPackage[] = [
  {
    id: "pkg-1",
    title: "Heritage Masterpackage",
    subtitle: "THE PLATINUM SUITE",
    price: "₹1,45,000",
    features: [
      "Yash Raj as Principal Director throughout",
      "Full 3-Day Wedding and pre-wedding coverage",
      "Cinematic prime lenses and sound setup",
      "1x Feature Film + 1x High-Energy Teaser",
      "Royal Handcrafted Leather Album + Box set",
      "Dual Cine drones capturing aerial graphics",
      "Complete 4K raw archive storage supply"
    ],
    popular: true
  },
  {
    id: "pkg-2",
    title: "Classic Cinematic",
    subtitle: "THE GOLD COLLECTION",
    price: "₹85,000",
    features: [
      "Full 2-Day Wedding and main rituals coverage",
      "Premium Cinematic Director Team",
      "1x Narrative Highlights Film (15 minutes)",
      "1x Aesthetic Teaser Film (3 minutes)",
      "Fine Art Premium Photo Matte Album",
      "UHD Digital files delivery within 4 weeks"
    ]
  },
  {
    id: "pkg-3",
    title: "Aesthetic Baseline",
    subtitle: "THE ESSENTIALS SELECTION",
    price: "₹35,000",
    features: [
      "Single-Day comprehensive shoot coverage",
      "1x Traditional teaser & cinematic highlights film",
      "75+ Color corrected high-definition stills",
      "Online visual portal secured backup",
      "Ideal for pre-weddings or intimate rituals"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Yash Raj turned our Ahmedabad heritage wedding into an absolute visual legacy. The framing when we entered the lit mandap on SBR felt like a high-budget Bollywood scene. Worth every single rupee.",
    coupleImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=150",
    name: "Rajveer & Anjali",
    role: "GRAND PALACE WEDDING"
  },
  {
    id: 2,
    rating: 5,
    text: "For our pre-wedding shoot at Adalaj Stepwell, Yash Raj spent hours calculating correct shadows and sun angles. The end output got thousands of views and is a literal work of art we watch weekly.",
    coupleImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=150",
    name: "Devvrat & Vaishali",
    role: "ADALAJ HERITAGE SESSION"
  },
  {
    id: 3,
    rating: 5,
    text: "The lookbook photography they did for our boutique couture brand on Sindhu Bhavan Road was phenomenal. Extremely sharp edge frames, beautiful depth, and lightning fast delivery.",
    coupleImage: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=150",
    name: "Meera Shah",
    role: "HAUTE FASHION CAMPAIGN"
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    caption: "Midnight joy. Outdoor wedding entrance with balloons and boundless love. #WeddingCelebration #PureHappiness",
    likes: "1,842",
    comments: "56"
  },
  {
    id: "ig-2",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    caption: "Soft golden backlight filtering through the lace. Capturing rare romantic chemistry. #SunsetPortraits #BespokeFilm",
    likes: "2,110",
    comments: "84"
  },
  {
    id: "ig-3",
    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
    caption: "Handcrafted artisan desserts styled for a grand culinary experience. #WeddingDetails #BoutiquePatisserie",
    likes: "743",
    comments: "19"
  },
  {
    id: "ig-4",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
    caption: "The elegant bond. Platinum bands resting elegantly within winter orchid blooms. #WeddingRings #ForeverVows",
    likes: "1,659",
    comments: "41"
  },
  {
    id: "ig-5",
    imageUrl: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=600",
    caption: "A panoramic triumph. Elevating custom lace couture against deep forest greens. #BridalLandscape #NatureWedding",
    likes: "1,420",
    comments: "33"
  },
  {
    id: "ig-6",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600",
    caption: "Coastal horizons. When the breeze carries the sheer weight of a breathtaking veil. #BeachShoot #WeddingVeil",
    likes: "1,956",
    comments: "72"
  },
  {
    id: "ig-7",
    imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600",
    caption: "A magnificent shower of petals. Love celebrated with open confetti. #WeddingExit #ConfettiJoy",
    likes: "2,390",
    comments: "108"
  },
  {
    id: "ig-8",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    caption: "Under the golden woods. Deep romantic walk together as the river matches our path. #RomanticSession #GoldenHour",
    likes: "1,215",
    comments: "28"
  },
  {
    id: "ig-9",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600",
    caption: "Perfect symmetry in styling. Fine rose garden chairs awaiting the ceremony. #ElegantDecor #OutdoorWows",
    likes: "890",
    comments: "15"
  },
  {
    id: "ig-10",
    imageUrl: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=600",
    caption: "Veiled whispers. A cinematic high-contrast close portrait echoing timeless devotion. #MonochromeStills #FineArtVantage",
    likes: "3,110",
    comments: "145"
  }
];
