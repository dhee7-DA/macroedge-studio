export interface Theme {
  name: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  lightBg: string;
  lightBorder: string;
  darkBg: string;
  darkText: string;
  darkGradient?: string;
  lightGradient?: string;
  isLightDefault?: boolean;
}

export const THEMES: Theme[] = [
  // --- ☀️ EDITORIAL LIGHT & LUXURY PAPER SERIES (FT, HARVARD, STRIPE, SWISS) ---
  {
    name: "☀️ Financial Times Editorial Peach",
    primary: "#0C2340", // London FT British Navy
    primaryLight: "#1E3A8A",
    primaryDark: "#061324",
    lightBg: "#FFF1E5", // Iconic Financial Times peach newsprint paper
    lightBorder: "rgba(12, 35, 64, 0.18)",
    darkBg: "#FFF1E5",
    darkText: "#0C2340",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #FFF7EE 0%, #FFF1E5 100%)",
    darkGradient: "linear-gradient(180deg, #FFF7EE 0%, #FFF1E5 100%)",
  },
  {
    name: "☀️ Harvard Business Review Minimalist",
    primary: "#A51C30", // Ivy League Harvard Crimson
    primaryLight: "#C53030",
    primaryDark: "#7E1523",
    lightBg: "#FAFAF9", // Warm stone porcelain paper
    lightBorder: "rgba(165, 28, 48, 0.20)",
    darkBg: "#FAFAF9",
    darkText: "#18181B",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #FFFFFF 0%, #FAFAF9 100%)",
    darkGradient: "linear-gradient(180deg, #FFFFFF 0%, #FAFAF9 100%)",
  },
  {
    name: "☀️ Stripe Pro Clean White & Violet",
    primary: "#6366F1", // Stripe Electric Indigo
    primaryLight: "#818CF8",
    primaryDark: "#4F46E5",
    lightBg: "#FFFFFF", // High-definition pure white
    lightBorder: "rgba(99, 102, 241, 0.22)",
    darkBg: "#FFFFFF",
    darkText: "#0F172A",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    darkGradient: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
  },
  {
    name: "☀️ Swiss Private Bank Champagne & Ivory",
    primary: "#B4881B", // Antique bullion gold
    primaryLight: "#D4AF37",
    primaryDark: "#8C6710",
    lightBg: "#FBF9F4", // Zurich private wealth linen
    lightBorder: "rgba(180, 136, 27, 0.22)",
    darkBg: "#FBF9F4",
    darkText: "#1A202C",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #FFFDF9 0%, #FBF9F4 100%)",
    darkGradient: "linear-gradient(180deg, #FFFDF9 0%, #FBF9F4 100%)",
  },
  {
    name: "☀️ Bloomberg Green / Clean Mint",
    primary: "#059669", // Crisp high-conviction emerald
    primaryLight: "#10B981",
    primaryDark: "#047857",
    lightBg: "#F2FBF7", // Clean mint cream
    lightBorder: "rgba(5, 150, 105, 0.22)",
    darkBg: "#F2FBF7",
    darkText: "#064E3B",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #F9FEFB 0%, #F2FBF7 100%)",
    darkGradient: "linear-gradient(180deg, #F9FEFB 0%, #F2FBF7 100%)",
  },
  {
    name: "☀️ Monocle Terracotta & Japanese Paper",
    primary: "#C2410C", // Terracotta editorial orange
    primaryLight: "#EA580C",
    primaryDark: "#9A3412",
    lightBg: "#F7F4EE", // Archival bookpaper
    lightBorder: "rgba(194, 65, 12, 0.20)",
    darkBg: "#F7F4EE",
    darkText: "#292524",
    isLightDefault: true,
    lightGradient: "linear-gradient(180deg, #FCFAF6 0%, #F7F4EE 100%)",
    darkGradient: "linear-gradient(180deg, #FCFAF6 0%, #F7F4EE 100%)",
  },

  // --- 🔥 VIRAL MARKET SIGNATURES (2026 HEDGE FUND / FINTECH) ---
  {
    name: "🔥 Bloomberg Terminal Amber",
    primary: "#FF9900", // Signature Bloomberg / Reuters Terminal orange
    primaryLight: "#FFB84D",
    primaryDark: "#CC7A00",
    lightBg: "#FFF8F0",
    lightBorder: "rgba(255, 153, 0, 0.35)",
    darkBg: "#050608",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #0F0E13 0%, #050608 100%)",
  },
  {
    name: "🔥 Tokyo Cyberpunk Horizon",
    primary: "#00F5FF", // Electric neon cyan with cyber magenta accents
    primaryLight: "#70FAFF",
    primaryDark: "#00A3B5",
    lightBg: "#F0FDFF",
    lightBorder: "rgba(0, 245, 255, 0.35)",
    darkBg: "#06070B",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #100B1A 0%, #06070B 100%)",
  },
  {
    name: "🔥 Swiss Platinum & Champagne Gold",
    primary: "#E6C687", // Luxury private banking champagne gold
    primaryLight: "#F5DEB3",
    primaryDark: "#B38F4E",
    lightBg: "#FAF7F0",
    lightBorder: "rgba(230, 198, 135, 0.35)",
    darkBg: "#080A0E",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #10141C 0%, #080A0E 100%)",
  },
  {
    name: "🔥 Volatility Crisis Crimson",
    primary: "#FF3366", // High-visibility market crash & warning crimson
    primaryLight: "#FF7096",
    primaryDark: "#D9043D",
    lightBg: "#FFF0F3",
    lightBorder: "rgba(255, 51, 102, 0.35)",
    darkBg: "#090406",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #17070B 0%, #090406 100%)",
  },
  {
    name: "🔥 Financial Times Salmon & Noir",
    primary: "#F46E56", // Iconic FT Salmon paired with modern obsidian
    primaryLight: "#F89885",
    primaryDark: "#C8432B",
    lightBg: "#FDF3F1",
    lightBorder: "rgba(244, 110, 86, 0.35)",
    darkBg: "#0B0E14",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #141A24 0%, #0B0E14 100%)",
  },

  // --- 👑 LUXURY QUANT & SOVEREIGN SERIES ---
  {
    name: "🟢 Citadel Quant Emerald",
    primary: "#00FF88", // Pure high-frequency quant lime/emerald
    primaryLight: "#70FFB8",
    primaryDark: "#00C462",
    lightBg: "#F0FDF4",
    lightBorder: "rgba(0, 255, 136, 0.35)",
    darkBg: "#030705",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #07150C 0%, #030705 100%)",
  },
  {
    name: "🟣 Frontier AI Violet",
    primary: "#C084FC", // Deep research lab ultraviolet
    primaryLight: "#E879F9",
    primaryDark: "#9333EA",
    lightBg: "#FAF5FF",
    lightBorder: "rgba(192, 132, 252, 0.35)",
    darkBg: "#080512",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #140926 0%, #080512 100%)",
  },
  {
    name: "🧊 Nordic Glacier Ice",
    primary: "#38BDF8", // Scandinavian family office icy titanium
    primaryLight: "#BAE6FD",
    primaryDark: "#0284C7",
    lightBg: "#F8FAFC",
    lightBorder: "rgba(56, 189, 248, 0.35)",
    darkBg: "#0A0E17",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #101828 0%, #0A0E17 100%)",
  },
  {
    name: "⚡ Gold Bullion & Vault Noir",
    primary: "#E5B842", // 24k physical gold bullion
    primaryLight: "#FDE68A",
    primaryDark: "#B4881B",
    lightBg: "#FFFDF5",
    lightBorder: "rgba(229, 184, 66, 0.35)",
    darkBg: "#070604",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #161207 0%, #070604 100%)",
  },
  {
    name: "🔴 Fed Crisis Scarlet",
    primary: "#FF2A55", // Emergency liquidity injection & crisis red
    primaryLight: "#FF7593",
    primaryDark: "#C7002B",
    lightBg: "#FFF1F2",
    lightBorder: "rgba(255, 42, 85, 0.35)",
    darkBg: "#0B0305",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #1C070D 0%, #0B0305 100%)",
  },

  // --- 💎 LIQUID GLASS PREMIUM SERIES ---
  {
    name: "💎 Liquid Glass: Cyber Emerald",
    primary: "#00F5A0", // Hyper-clean neon emerald
    primaryLight: "#5EEAD4",
    primaryDark: "#059669",
    lightBg: "#F0FDF4",
    lightBorder: "rgba(0, 245, 160, 0.3)",
    darkBg: "#060709",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #0A0D12 0%, #050608 100%)",
  },
  {
    name: "💎 Liquid Glass: Midnight Sapphire",
    primary: "#00E5FF", // Electric high-exposure cyan
    primaryLight: "#7DD3FC",
    primaryDark: "#0284C7",
    lightBg: "#F0F9FF",
    lightBorder: "rgba(0, 229, 255, 0.3)",
    darkBg: "#060709",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #0A0D14 0%, #050608 100%)",
  },
  {
    name: "💎 Liquid Glass: Electric Amethyst",
    primary: "#C084FC", // High-exposure neon purple
    primaryLight: "#E879F9",
    primaryDark: "#9333EA",
    lightBg: "#FAF5FF",
    lightBorder: "rgba(192, 132, 252, 0.3)",
    darkBg: "#060709",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #0C0A14 0%, #050608 100%)",
  },
  {
    name: "💎 Liquid Glass: Solar Amber",
    primary: "#FBBF24", // Radiant golden amber
    primaryLight: "#FDE047",
    primaryDark: "#D97706",
    lightBg: "#FFFBEB",
    lightBorder: "rgba(251, 191, 36, 0.3)",
    darkBg: "#060709",
    darkText: "#000000",
    darkGradient: "linear-gradient(180deg, #0E0B08 0%, #050608 100%)",
  },

  // --- FUNDAMENTAL ANALYSIS (FA) DEDICATED THEMES ---
  {
    name: "FA Series: Institutional Slate",
    primary: "#6B7280", // Slate Gray
    primaryLight: "#9CA3AF",
    primaryDark: "#374151",
    lightBg: "#F9FAFB",
    lightBorder: "#E5E7EB",
    darkBg: "#111827",
    darkText: "#000000",
    darkGradient: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
  },
  {
    name: "FA Series: Midnight Azure",
    primary: "#3B82F6", // Rich Blue
    primaryLight: "#60A5FA",
    primaryDark: "#1D4ED8",
    lightBg: "#EFF6FF",
    lightBorder: "#DBEAFE",
    darkBg: "#0F172A",
    darkText: "#000000",
    darkGradient: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
  },
  {
    name: "FA Series: Deep Crimson",
    primary: "#E11D48", // Rose/Crimson
    primaryLight: "#FB7185",
    primaryDark: "#BE123C",
    lightBg: "#FFF1F2",
    lightBorder: "#FFE4E6",
    darkBg: "#2A0A12",
    darkText: "#000000",
    darkGradient: "linear-gradient(135deg, #2A0A12 0%, #4C0519 100%)",
  },
  {
    name: "FA Series: Academic Indigo",
    primary: "#6366F1", // Indigo
    primaryLight: "#818CF8",
    primaryDark: "#4338CA",
    lightBg: "#EEF2FF",
    lightBorder: "#E0E7FF",
    darkBg: "#1E1B4B",
    darkText: "#000000",
    darkGradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
  },
  {
    name: "FA Series: Quant Green",
    primary: "#10B981", // Emerald
    primaryLight: "#34D399",
    primaryDark: "#047857",
    lightBg: "#ECFDF5",
    lightBorder: "#D1FAE5",
    darkBg: "#064E3B",
    darkText: "#000000",
    darkGradient: "linear-gradient(135deg, #022C22 0%, #064E3B 100%)",
  },

  // --- MACRO MEGA-TREND THEMES ---
  {
    name: "Macro: Industrial Rust",
    primary: "#D97706", // Amber/Rust
    primaryLight: "#FBBF24",
    primaryDark: "#B45309",
    lightBg: "#FFFBEB",
    lightBorder: "#FEF3C7",
    darkBg: "#171717",
    darkText: "#000000",
  },
  {
    name: "Macro: Uranium Green",
    primary: "#84CC16", // Lime/Uranium
    primaryLight: "#A3E635",
    primaryDark: "#4D7C0F",
    lightBg: "#F7FEE7",
    lightBorder: "#ECFCCB",
    darkBg: "#062817", // Very dark earthy green
    darkText: "#000000",
  },
  {
    name: "Macro: Hydro Blue",
    primary: "#06B6D4", // Cyan
    primaryLight: "#22D3EE",
    primaryDark: "#0E7490",
    lightBg: "#ECFEFF",
    lightBorder: "#CFFAFE",
    darkBg: "#082F49", // Deep oceanic blue
    darkText: "#000000",
  },

  // --- GENERAL PREMIUM THEMES ---
  {
    name: "🚨 Viral Alert (Neon Danger)",
    primary: "#FF0055",
    primaryLight: "#FF4D88",
    primaryDark: "#B3003B",
    lightBg: "#FFF0F5",
    lightBorder: "#FFC2D6",
    darkBg: "#0A0204",
    darkText: "#000000",
  },
  {
    name: "🌐 Tech Disruptor (Cyber Cyan)",
    primary: "#00E5FF",
    primaryLight: "#80F2FF",
    primaryDark: "#00A0B3",
    lightBg: "#F0FFFF",
    lightBorder: "#B3FFFF",
    darkBg: "#020A0B",
    darkText: "#000000",
  },
  {
    name: "📊 Bloomberg Matrix (Classic)",
    primary: "#FF8C00", // Dark Orange
    primaryLight: "#FFB34D",
    primaryDark: "#B36200",
    lightBg: "#FFF7F0",
    lightBorder: "#FFE0B3",
    darkBg: "#000000",
    darkText: "#000000",
  },
  {
    name: "🧠 Deep Analysis (Monochrome)",
    primary: "#E5E5E5",
    primaryLight: "#FFFFFF",
    primaryDark: "#A3A3A3",
    lightBg: "#FFFFFF",
    lightBorder: "#E6E6E6",
    darkBg: "#050505",
    darkText: "#000000",
  },
  {
    name: "🔮 Future Macro (Amethyst)",
    primary: "#A855F7",
    primaryLight: "#C084FC",
    primaryDark: "#7E22CE",
    lightBg: "#FAF5FF",
    lightBorder: "#F3E8FF",
    darkBg: "#2E1065",
    darkText: "#000000",
  }
];

export function getRandomTheme(): Theme {
  return THEMES[Math.floor(Math.random() * THEMES.length)];
}
