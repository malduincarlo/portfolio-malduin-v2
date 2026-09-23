export const gallerySections = [
  {
    title: "ui/ux designs",
    layout: "ui",
    items: [
      {
        label: "Cybersecurity overview dashboard",
        description:
          "A dark security operations dashboard focused on scan status, findings, and response efficiency.",
        meta: "dashboard design",
        className: "col-span-12 sm:col-span-6",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/Main%20Dashboard%20-%20Dark.png",
        imageClassName: "object-contain bg-[#11171a] p-2",
        background:
          "linear-gradient(135deg,#0f171a,#101416 45%,#242b2d), radial-gradient(circle at 38% 45%,#d9df22 0 11%,transparent 12%)",
      },
      {
        label: "Cybersecurity intelligence dashboard",
        description:
          "Incident detail view with modal workflows, response metrics, and investigation context.",
        meta: "cybersecurity ui",
        className: "col-span-12 sm:col-span-6",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/Cyber%20Response%20Efficiency%20Rabbit%20Hole%20-%20Modal%20Open%201.png",
        imageClassName: "object-contain bg-[#11171a] p-2",
        background:
          "linear-gradient(135deg,#090d10,#172022 52%,#0c0f11), radial-gradient(circle at 74% 36%,#345b34 0 15%,transparent 16%)",
      },
      {
        label: "ETCMF web app",
        description:
          "Clean login experience for a fundraising and member-facing web platform.",
        meta: "web app",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/etcmf-web-login.png",
        imageClassName: "object-contain bg-white",
        background:
          "linear-gradient(135deg,#e6e8e1,#a8aea8 52%,#f0f3ea), radial-gradient(circle at 22% 62%,#6fa134 0 15%,transparent 16%)",
      },
      {
        label: "ETCMF mobile app",
        description: "Home dashboard and login screens for the ETCMF mobile experience.",
        meta: "mobile ui",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        previewImages: [
          { imageSrc: "/etcmf-mobile-home.png", label: "ETCMF mobile home" },
          { imageSrc: "/etcmf-mobile-login.png", label: "ETCMF mobile login" },
        ],
        background:
          "linear-gradient(180deg,#f4f6ef,#e7ece3), linear-gradient(135deg,#9bc67f,#f5f5f2)",
      },
      {
        label: "travel landing page",
        description:
          "Hero-focused travel landing page with destination imagery and warm editorial spacing.",
        meta: "landing page",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/travel-landing-dubai-v2.png",
        imageClassName: "object-contain bg-[#f6f6f6]",
        background:
          "linear-gradient(135deg,#f4f1e8,#d7b07d 38%,#7497a6 39%,#cfd8d9 72%,#ece9df)",
      },
    ],
  },
  {
    title: "graphic design",
    layout: "graphic",
    items: [
      {
        label: "portrait collage",
        description:
          "Layered portrait composition with inset imagery and bold framing details.",
        meta: "photo collage",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/louiza%20cover%202.JPG",
        background: "linear-gradient(135deg,#061a20,#d0b7b5 54%,#080a0d)",
      },
      {
        label: "solace in the mountains",
        description:
          "Editorial cover pairing a mountain-road photograph with understated typography.",
        meta: "editorial design",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/cover_whole.jpg",
        background: "linear-gradient(135deg,#958a5a,#c8b382 40%,#7f2630)",
      },
      {
        label: "eriel editorial",
        description:
          "Portrait-led editorial layout with a soft palette and minimal branding.",
        meta: "editorial design",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/cover%20full.JPG",
        background: "linear-gradient(180deg,#f7f3ed,#fffaf5 52%,#e8e3dd)",
      },
      {
        label: "lumen",
        description:
          "A series of event and coffee shop graphics for Lumen.",
        meta: "lumen campaign",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-square",
        imageSrc: "/lumen-indie-pop-night.jpg",
        previewLayout: "single",
        previewImages: [
          { imageSrc: "/lumen-indie-pop-night.jpg", label: "Lumen indie pop night" },
          { imageSrc: "/lumen-resting-today.jpg", label: "Lumen resting today" },
          { imageSrc: "/lumen-freshly-brewed.jpg", label: "Lumen freshly brewed" },
        ],
        background: "#20392e",
      },
      {
        label: "RAKK DASIG X",
        description: "Gaming mouse graphic with layered typography and a dark product treatment.",
        meta: "product graphic",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-square",
        imageSrc: "/rakk-dasig-x.jpg",
        background: "#171d21",
      },
    ],
  },
  {
    title: "photography",
    layout: "photo",
    items: [
      {
        label: "night profile",
        description:
          "Profile composition with dramatic lighting and restrained green shadows.",
        meta: "creative portrait",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/image%2010.png",
        background: "linear-gradient(135deg,#041b12,#d8e1c7 55%,#07130e)",
      },
      {
        label: "smoke portrait",
        description:
          "Atmospheric portrait using smoke, hard contrast, and cinematic color balance.",
        meta: "photo treatment",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/image%2011.png",
        background:
          "linear-gradient(135deg,#020609,#1c2b2a 42%,#d8d9cf 43%,#0a1010 72%,#030607)",
      },
      {
        label: "forest stream",
        description:
          "Nature frame focused on texture, water movement, and a subdued earth palette.",
        meta: "nature",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/image%2012.png",
        background:
          "linear-gradient(135deg,#111908,#4c4b27 36%,#d9dec6 51%,#1c2511 78%,#0c1008)",
      },
      {
        label: "wedding under the rain",
        description: "A couple sharing a moment beneath a rain-covered umbrella.",
        meta: "wedding photography",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/wedding-umbrella.jpg",
        background: "#34443e",
      },
      {
        label: "team portrait",
        description: "Group portrait in a dramatic, low-light setting.",
        meta: "group portrait",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/team-portrait.jpg",
        background: "#171d23",
      },
      {
        label: "monochrome portrait",
        description: "Black-and-white portrait with layered close-up framing.",
        meta: "portrait",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/monochrome-portrait.jpg",
        imageClassName: "object-contain bg-[#171717]",
        background: "#171717",
      },
      {
        label: "night street portrait",
        description: "Blue-toned night portrait with direct flash and deep shadows.",
        meta: "portrait",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/night-street-portrait.jpg",
        imageClassName: "object-contain bg-[#1d1a25]",
        background: "#1d1a25",
      },
      {
        label: "garden venue",
        description: "Guests arriving at a garden venue surrounded by greenery.",
        meta: "event photography",
        className: "col-span-12 sm:col-span-4",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/garden-venue.jpg",
        background: "#667560",
      },
    ],
  },
  {
    title: "videography",
    layout: "video",
    items: [
      {
        label: "LAPS Manolo channel",
        description:
          "Channel visual system and thumbnail direction for a Manolo-focused video series.",
        meta: "video branding",
        className: "col-span-12 sm:col-span-6",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/image%2013.png",
        imageClassName: "object-contain bg-[#202326]",
        sampleUrl: "https://www.facebook.com/reel/401928294783743",
        background: "linear-gradient(180deg,#fafafa 0 31%,#202326 32% 100%)",
      },
      {
        label: "LAAG Manolo channel",
        description:
          "Travel and lifestyle video identity with bold title graphics and repeatable layouts.",
        meta: "content system",
        className: "col-span-12 sm:col-span-6",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/image%2014.png",
        imageClassName: "object-contain bg-[#202326]",
        sampleUrl: "https://www.facebook.com/reel/491150786087384",
        background: "linear-gradient(180deg,#fffaf5 0 31%,#202326 32% 100%)",
      },
      {
        label: "wedding coverage",
        description: "A wedding film capturing the atmosphere and moments of the day.",
        meta: "event videography",
        className: "col-span-12 sm:col-span-6",
        frameClassName: "aspect-[4/3]",
        imageSrc: "/wedding-coverage-preview.png",
        sampleUrl: "https://www.facebook.com/reel/425708439109177",
        background: "#0b2313",
      },
    ],
  },
];
