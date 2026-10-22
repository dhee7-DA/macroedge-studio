import type { SlideData } from "@workspace/carousel-engine";
import { HORMUZ_CRISIS } from "./geo-topics/hormuz";
import { DISRUPTORS_MEGA_REPORT } from "./innov-topics/disruptors_megareport";
import { CEASEFIRE_PARADOX } from "./geo-topics/ceasefire";
import { MASTERING_CYCLES_PT1 } from "./book-topics/mastering-cycles-pt1";
import { MASTERING_CYCLES_PT2 } from "./book-topics/mastering-cycles-pt2";
import { MASTERING_CYCLES_PT3 } from "./book-topics/mastering-cycles-pt3";
import { BOGLE_INVESTING_PT1 } from "./book-topics/bogle-investing-pt1";
import { BOGLE_INVESTING_PT2 } from "./book-topics/bogle-investing-pt2";
import { BOGLE_INVESTING_PT3 } from "./book-topics/bogle-investing-pt3";
import { NVDA_TEARDOWN } from "./stock-topics/nvda";
import { TSLA_TEARDOWN } from "./stock-topics/tsla";
import { RTX_TEARDOWN } from "./stock-topics/rtx";
import { CHINA_MOAT } from "./macro-topics/china_gdp";
import { INDIA_NUCLEAR } from "./macro-topics/india_nuclear";
import { SUPERCYCLE_PT1 } from "./macro-topics/supercycle_pt1";
import { SUPERCYCLE_PT2 } from "./macro-topics/supercycle_pt2";
import { DEBT_CLIFF } from "./macro-topics/debt_cliff";
import { IMF_PIVOT } from "./macro-topics/imf_pivot";
import { SANCTION_TRAP } from "./macro-topics/sanction_trap";
import { SPIRIT_AVIATION_CRISIS } from "./macro-topics/spirit_aviation";
import { FII_EXODUS } from "./macro-topics/fii_exodus";
import { PHOTONICS_PT1 } from "./stock-topics/photonics_pt1";
import { PHOTONICS_PT2 } from "./stock-topics/photonics_pt2";
import { CLAUDE_PT1 } from "./stock-topics/claude_pt1";
import { CLAUDE_PT2 } from "./stock-topics/claude_pt2";
import { MA_INTELLIGENCE_PT1 } from "./stock-topics/ma_intelligence_pt1";
import { MA_INTELLIGENCE_PT2 } from "./stock-topics/ma_intelligence_pt2";
import { HBM_SCARCITY } from "./stock-topics/hbm_scarcity";
import { GAMERS_VS_AI } from "./stock-topics/gamers_vs_ai";
import { AI_WATER_CRISIS } from "./stock-topics/ai_water_crisis";
import { KEVIN_WARSH_FED } from "./stock-topics/kevin_warsh_fed";
import { INTEL_SURGE } from "./stock-topics/intel_surge";
import { FOUNDRY_WARS } from "./stock-topics/foundry_wars";
import { BIOLOGICAL_COMPUTING } from "./stock-topics/biological_computing";
import { JUDGMENT_DAY } from "./stock-topics/judgment_day";
import { VALUATION_MATRIX } from "./fundamental-topics/valuation_matrix";
import { UAE_OPEC_EXIT } from "./geo-topics/uae_opec_exit";
import { PAKISTAN_IMF_TRAP } from "./geo-topics/pakistan_imf_trap";
import { RUPEE_COLLAPSE } from "./geo-topics/rupee_collapse";
import { SP500_PARADOX } from "./geo-topics/sp500_paradox";
import { FA_PE_RATIO } from "./fundamental-topics/fa_pe_ratio";
import { FA_EPS } from "./fundamental-topics/fa_eps";
import { SPACEX_IPO } from "./stock-topics/spacex_ipo";
import { BOJ_RATE_HIKE } from "./macro-topics/boj_rate_hike";
import { INDIA_MEGA_IPOS } from "./macro-topics/india_mega_ipos";
import { COINBASE_TOKENIZATION } from "./crypto-topics/coinbase_tokenization";
import { TECH_SELLOFF_JUNE26 } from "./macro-topics/tech_selloff_june26";
import { AI_ENERGY_CRISIS } from "./macro-topics/ai_energy_crisis";
import { CORPORATE_BITCOIN_STANDARD } from "./macro-topics/corporate_bitcoin_standard";
import { INSTITUTIONAL_SHOWCASE } from "./macro-topics/institutional_showcase";
import { RAMAGEDDON_APPLE } from "./tech-topics/ramageddon_apple";
import { AI_REVENUE_TRAP } from "./tech-topics/ai_revenue_trap";
import { RAM_CARTEL_LAWSUIT } from "./tech-topics/ram_cartel_lawsuit";
import { QUANTUM_IPO } from "./tech-topics/quantum_ipo";
import { MICROSOFT_FRONTIER } from "./tech-topics/microsoft_frontier";
import { WASTE_MANAGEMENT_PT1 } from "./macro-topics/waste_management_pt1";
import { WASTE_MANAGEMENT_PT2 } from "./macro-topics/waste_management_pt2";
import { INDIA_REAL_ESTATE } from "./macro-topics/india_real_estate";
import { HELIUM_EXPORT_BAN } from "./geo-topics/helium_export_ban";
import { INDIA_MARKET_FLUSH } from "./macro-topics/india_market_flush";
import { ASIAN_CHIP_CARNAGE } from "./stock-topics/asian_chip_carnage";
import { RBI_FOREX_FIREWALL } from "./macro-topics/rbi_forex_firewall";
import { INDIA_RELIEF_RALLY } from "./macro-topics/india_relief_rally";
import { AI_VALUATION_SELLOFF } from "./macro-topics/ai_valuation_selloff";
import { FA_PB_RATIO } from "./fundamental-topics/fa_pb_ratio";
import { FA_PS_RATIO } from "./fundamental-topics/fa_ps_ratio";
import { FA_PEG_RATIO } from "./fundamental-topics/fa_peg_ratio";
import { FA_EV_EBITDA } from "./fundamental-topics/fa_ev_ebitda";
import { FA_EV_FCF } from "./fundamental-topics/fa_ev_fcf";
import { FA_DIVIDEND_YIELD } from "./fundamental-topics/fa_dividend_yield";
import { FA_REVENUE_GROWTH } from "./fundamental-topics/fa_revenue_growth";
import { FA_GROSS_MARGIN } from "./fundamental-topics/fa_gross_margin";
import { FA_OPERATING_MARGIN } from "./fundamental-topics/fa_operating_margin";
import { FA_NET_MARGIN } from "./fundamental-topics/fa_net_margin";
import { FA_ROE_ROIC } from "./fundamental-topics/fa_roe_roic";
import { FA_ROA } from "./fundamental-topics/fa_roa";
import { FA_EBITDA_MARGIN } from "./fundamental-topics/fa_ebitda_margin";
import { FA_OPERATING_CASHFLOW } from "./fundamental-topics/fa_operating_cashflow";
import { FA_FCF_VS_INCOME } from "./fundamental-topics/fa_fcf_vs_income";
import { FA_FCF_YIELD } from "./fundamental-topics/fa_fcf_yield";
import { FA_CAPEX } from "./fundamental-topics/fa_capex";
import { FA_OWNER_EARNINGS } from "./fundamental-topics/fa_owner_earnings";
import { FA_DEBT_EQUITY } from "./fundamental-topics/fa_debt_equity";
import { FA_INTEREST_COVERAGE } from "./fundamental-topics/fa_interest_coverage";
import { FA_LIQUIDITY_RATIOS } from "./fundamental-topics/fa_liquidity_ratios";
import { FA_GOODWILL_INTANGIBLES } from "./fundamental-topics/fa_goodwill_intangibles";
import { FA_TANGIBLE_BOOK } from "./fundamental-topics/fa_tangible_book";
import { FA_TAM_MARKET_SHARE } from "./fundamental-topics/fa_tam_market_share";
import { FA_EPS_DILUTION } from "./fundamental-topics/fa_eps_dilution";
import { FA_BUYBACKS_DIVIDENDS } from "./fundamental-topics/fa_buybacks_dividends";
import { FA_MOAT } from "./fundamental-topics/fa_moat";
import { FA_PRICING_POWER } from "./fundamental-topics/fa_pricing_power";
import { FA_NETWORK_EFFECTS } from "./fundamental-topics/fa_network_effects";
import { FA_PORTERS_FIVE_FORCES } from "./fundamental-topics/fa_porters_five_forces";
import { FA_INCOME_STATEMENT } from "./fundamental-topics/fa_income_statement";
import { FA_BALANCE_SHEET_WALKTHROUGH } from "./fundamental-topics/fa_balance_sheet_walkthrough";
import { FA_CASHFLOW_STATEMENT } from "./fundamental-topics/fa_cashflow_statement";
import { FA_RED_FLAGS } from "./fundamental-topics/fa_red_flags";
import { FA_BANKING_METRICS } from "./fundamental-topics/fa_banking_metrics";
import { FA_SAAS_METRICS } from "./fundamental-topics/fa_saas_metrics";
import { FA_ENERGY_METRICS } from "./fundamental-topics/fa_energy_metrics";
import { FA_REITS } from "./fundamental-topics/fa_reits";
import { FA_DCF_PT1 } from "./fundamental-topics/fa_dcf_pt1";
import { FA_DCF_WACC } from "./fundamental-topics/fa_dcf_wacc";
import { FA_DCF_TERMINAL } from "./fundamental-topics/fa_dcf_terminal";
import { FA_MARGIN_OF_SAFETY } from "./fundamental-topics/fa_margin_of_safety";
import { FA_SOTP } from "./fundamental-topics/fa_sotp";
import { ECON_GDP, ECON_REAL_VS_NOMINAL, ECON_INFLATION_METRICS, ECON_PPI, ECON_INFLATION_TYPES, ECON_MONEY_VELOCITY, ECON_UNEMPLOYMENT, ECON_BUSINESS_CYCLE } from "./econ-topics/phase1_basics";
import { ECON_CENTRAL_BANKS, ECON_FED_FUNDS_RATE, ECON_QE, ECON_QT, ECON_YIELD_CURVE, ECON_FRACTIONAL_RESERVE, ECON_REPO_MARKET, ECON_REVERSE_REPO } from "./econ-topics/phase2_monetary";
import { ECON_TAX_REVENUE, ECON_GOV_SPENDING, ECON_DEFICIT_VS_DEBT, ECON_DEBT_CEILING, ECON_TREASURIES, ECON_CROWDING_OUT, ECON_MMT, ECON_WEALTH_GAP } from "./econ-topics/phase3_fiscal";
import { ECON_FOREX, ECON_TRADE_BALANCE, ECON_CURRENT_CAPITAL, ECON_TARIFFS, ECON_GLOBALIZATION, ECON_EMERGING_MARKETS, ECON_DOLLAR_HEGEMONY, ECON_CBDC } from "./econ-topics/phase4_international";
import { ECON_PETRODOLLAR, ECON_DE_DOLLARIZATION, ECON_HYPERINFLATION, ECON_LIQUIDITY_TRAP, ECON_CANTILLON_EFFECT, ECON_TRIFFIN_DILEMMA, ECON_CONTAGION, ECON_BRETTON_WOODS } from "./econ-topics/phase5_advanced";
import { ECON_SUPPLY_DEMAND, ECON_ELASTICITY, ECON_MARGINAL_UTILITY, ECON_OPPORTUNITY_COST, ECON_MARKET_STRUCTURES } from "./econ-topics/phase6_micro";
import { ECON_EMH_VS_BEHAVIORAL, ECON_PROSPECT_THEORY, ECON_GREATER_FOOL, ECON_INFO_ASYMMETRY, ECON_MORAL_HAZARD } from "./econ-topics/phase7_behavioral";
import { ECON_GREAT_DEPRESSION, ECON_STAGFLATION_1970S, ECON_VOLCKER_SHOCK, ECON_DOT_COM, ECON_GFC } from "./econ-topics/phase8_crises";
import { INDIA_SUPERCYCLE, INDIA_STACK, INDIA_DEFENSE, INDIA_ENERGY, INDIA_BANKING } from "./econ-topics/india_masterclass";
import { SILICON_HEGEMONY } from "./stock-topics/silicon_hegemony";
import { JPY_INTERVENTION } from "./macro-topics/jpy_intervention";
import { ARM_AGI_TEARDOWN } from "./stock-topics/arm_agi_teardown";
import { SPACEX_IPO_TEARDOWN } from "./stock-topics/spacex_ipo_teardown";
import { HANTAVIRUS_OUTBREAK } from "./macro-topics/hantavirus_outbreak";
import { FOOD_COSTS_SPIKE } from "./macro-topics/food_costs_spike";
import { RUSSIA_GOLD_PIVOT } from "./macro-topics/russia_gold_pivot";
import { INDIA_ENERGY_LOCKDOWN } from "./macro-topics/india_energy_lockdown";
import { GLOBAL_MARKET_RETREAT } from "./macro-topics/global_market_retreat";
import { INTEREST_RATES_MASTERCLASS } from "./macro-topics/interest_rates_masterclass";
import { DOW_50K_ILLUSION } from "./macro-topics/dow_50k_illusion";
import { TOP_ETFS_2026 } from "./stock-topics/top_etfs_2026";
import { PHM_HOUSING_WARNING } from "./stock-topics/phm_housing_warning";
import { THEMATIC_ROTATION } from "./stock-topics/thematic_rotation";
import { SNOW_AI_LAYER } from "./stock-topics/snow_ai_layer";
import { NVDA_VERA_RUBIN } from "./stock-topics/nvda_vera_rubin";
import { RBI_POLICY_JUNE } from "./stock-topics/rbi_policy_june_2026";

export interface TopicContent {
  topic: string;
  slides: SlideData[];
}

export const SQL_TOPICS: Record<string, SlideData[]> = {
  "51-nvda-vera-rubin": NVDA_VERA_RUBIN,
  "50-snow-ai-layer": SNOW_AI_LAYER,
  "49-thematic-rotation": THEMATIC_ROTATION,
  "48-dow-50k-illusion": DOW_50K_ILLUSION,
  "47-phm-housing-warning": PHM_HOUSING_WARNING,
  "46-top-etfs-2026": TOP_ETFS_2026,
  "45-interest-rates-masterclass": INTEREST_RATES_MASTERCLASS,
  "44-global-market-retreat": GLOBAL_MARKET_RETREAT,
  "43-india-energy-lockdown": INDIA_ENERGY_LOCKDOWN,
  "42-russia-gold-pivot": RUSSIA_GOLD_PIVOT,
  "41-food-costs-spike": FOOD_COSTS_SPIKE,
  "40-hantavirus-outbreak": HANTAVIRUS_OUTBREAK,
  "39-spacex-ipo": SPACEX_IPO_TEARDOWN,
  "38-arm-agi": ARM_AGI_TEARDOWN,
  "36-silicon-hegemony": SILICON_HEGEMONY,
  "37-jpy-intervention": JPY_INTERVENTION,
  "groundbreaking-innovations": DISRUPTORS_MEGA_REPORT,
  "01-hormuz-closure-effect": HORMUZ_CRISIS,
  "04-mastering-cycles-pt1": MASTERING_CYCLES_PT1,
  "05-mastering-cycles-pt2": MASTERING_CYCLES_PT2,
  "06-mastering-cycles-pt3": MASTERING_CYCLES_PT3,
  "07-bogle-investing-pt1": BOGLE_INVESTING_PT1,
  "08-bogle-investing-pt2": BOGLE_INVESTING_PT2,
  "09-bogle-investing-pt3": BOGLE_INVESTING_PT3,
  "10-nvda-teardown": NVDA_TEARDOWN,
  "11-tsla-teardown": TSLA_TEARDOWN,
  "85-rtx-teardown": RTX_TEARDOWN,
  "12-ceasefire-paradox": CEASEFIRE_PARADOX,
  "13-china-gdp-moat": CHINA_MOAT,
  "14-india-nuclear-renaissance": INDIA_NUCLEAR,
  "15-supercycle-pt1": SUPERCYCLE_PT1,
  "16-supercycle-pt2": SUPERCYCLE_PT2,
  "17-sovereign-debt-cliff": DEBT_CLIFF,
  "18-imf-pivot-darkened": IMF_PIVOT,
  "19-sanction-trap": SANCTION_TRAP,
  "86-spirit-aviation-crisis": SPIRIT_AVIATION_CRISIS,
  "87-fii-exodus": FII_EXODUS,
  "20-photonics-pt1": PHOTONICS_PT1,
  "21-photonics-pt2": PHOTONICS_PT2,
  "22-claude-pt1": CLAUDE_PT1,
  "23-claude-pt2": CLAUDE_PT2,
  "24-ma-intel-pt1": MA_INTELLIGENCE_PT1,
  "25-ma-intel-pt2": MA_INTELLIGENCE_PT2,
  "26-hbm-scarcity": HBM_SCARCITY,
  "27-gamers-vs-ai": GAMERS_VS_AI,
  "28-ai-water-crisis": AI_WATER_CRISIS,
  "29-kevin-warsh-fed": KEVIN_WARSH_FED,
  "30-intel-resurgence": INTEL_SURGE,
  "31-foundry-wars": FOUNDRY_WARS,
  "32-ma-intel-pt1": MA_INTELLIGENCE_PT1,
  "33-biological-computing": BIOLOGICAL_COMPUTING,
  "34-judgment-day": JUDGMENT_DAY,
  "35-valuation-matrix": VALUATION_MATRIX,
  "36-uae-opec-exit": UAE_OPEC_EXIT,
  "37-pakistan-imf-trap": PAKISTAN_IMF_TRAP,
  "38-rupee-collapse": RUPEE_COLLAPSE,
  "39-sp500-paradox": SP500_PARADOX,
  "40-fa-pe-ratio": FA_PE_RATIO,
  "41-fa-eps": FA_EPS,
  "42-fa-pb-ratio": FA_PB_RATIO,
  "43-fa-ps-ratio": FA_PS_RATIO,
  "44-fa-peg-ratio": FA_PEG_RATIO,
  "45-fa-ev-ebitda": FA_EV_EBITDA,
  "46-fa-ev-fcf": FA_EV_FCF,
  "47-fa-dividend-yield": FA_DIVIDEND_YIELD,
  "48-fa-revenue-growth": FA_REVENUE_GROWTH,
  "49-fa-gross-margin": FA_GROSS_MARGIN,
  "50-fa-operating-margin": FA_OPERATING_MARGIN,
  "51-fa-net-margin": FA_NET_MARGIN,
  "52-fa-roe-roic": FA_ROE_ROIC,
  "53-fa-roa": FA_ROA,
  "54-fa-ebitda-margin": FA_EBITDA_MARGIN,
  "55-fa-operating-cashflow": FA_OPERATING_CASHFLOW,
  "56-fa-fcf-vs-income": FA_FCF_VS_INCOME,
  "57-fa-fcf-yield": FA_FCF_YIELD,
  "58-fa-capex": FA_CAPEX,
  "59-fa-owner-earnings": FA_OWNER_EARNINGS,
  "60-fa-debt-equity": FA_DEBT_EQUITY,
  "61-fa-interest-coverage": FA_INTEREST_COVERAGE,
  "62-fa-liquidity-ratios": FA_LIQUIDITY_RATIOS,
  "63-fa-goodwill-intangibles": FA_GOODWILL_INTANGIBLES,
  "64-fa-tangible-book": FA_TANGIBLE_BOOK,
  "65-fa-tam-market-share": FA_TAM_MARKET_SHARE,
  "66-fa-eps-dilution": FA_EPS_DILUTION,
  "67-fa-buybacks-dividends": FA_BUYBACKS_DIVIDENDS,
  "68-fa-moat": FA_MOAT,
  "69-fa-pricing-power": FA_PRICING_POWER,
  "70-fa-network-effects": FA_NETWORK_EFFECTS,
  "71-fa-porters-five-forces": FA_PORTERS_FIVE_FORCES,
  "72-fa-income-statement": FA_INCOME_STATEMENT,
  "73-fa-balance-sheet-walkthrough": FA_BALANCE_SHEET_WALKTHROUGH,
  "74-fa-cashflow-statement": FA_CASHFLOW_STATEMENT,
  "75-fa-red-flags": FA_RED_FLAGS,
  "76-fa-banking-metrics": FA_BANKING_METRICS,
  "77-fa-saas-metrics": FA_SAAS_METRICS,
  "78-fa-energy-metrics": FA_ENERGY_METRICS,
  "79-fa-reits": FA_REITS,
  "80-fa-dcf-pt1": FA_DCF_PT1,
  "81-fa-dcf-wacc": FA_DCF_WACC,
  "82-fa-dcf-terminal": FA_DCF_TERMINAL,
  "83-fa-margin-of-safety": FA_MARGIN_OF_SAFETY,
  "84-fa-sotp": FA_SOTP,
  "econ-01": ECON_GDP,
  "econ-02": ECON_REAL_VS_NOMINAL,
  "econ-03": ECON_INFLATION_METRICS,
  "econ-04": ECON_PPI,
  "econ-05": ECON_INFLATION_TYPES,
  "econ-06": ECON_MONEY_VELOCITY,
  "econ-07": ECON_UNEMPLOYMENT,
  "econ-08": ECON_BUSINESS_CYCLE,
  "econ-09": ECON_CENTRAL_BANKS,
  "econ-10": ECON_FED_FUNDS_RATE,
  "econ-11": ECON_QE,
  "econ-12": ECON_QT,
  "econ-13": ECON_YIELD_CURVE,
  "econ-14": ECON_FRACTIONAL_RESERVE,
  "econ-15": ECON_REPO_MARKET,
  "econ-16": ECON_REVERSE_REPO,
  "econ-17": ECON_TAX_REVENUE,
  "econ-18": ECON_GOV_SPENDING,
  "econ-19": ECON_DEFICIT_VS_DEBT,
  "econ-20": ECON_DEBT_CEILING,
  "econ-21": ECON_TREASURIES,
  "econ-22": ECON_CROWDING_OUT,
  "econ-23": ECON_MMT,
  "econ-24": ECON_WEALTH_GAP,
  "econ-25": ECON_FOREX,
  "econ-26": ECON_TRADE_BALANCE,
  "econ-27": ECON_CURRENT_CAPITAL,
  "econ-28": ECON_TARIFFS,
  "econ-29": ECON_GLOBALIZATION,
  "econ-30": ECON_EMERGING_MARKETS,
  "econ-31": ECON_DOLLAR_HEGEMONY,
  "econ-32": ECON_CBDC,
  "econ-33": ECON_PETRODOLLAR,
  "econ-34": ECON_DE_DOLLARIZATION,
  "econ-35": ECON_HYPERINFLATION,
  "econ-36": ECON_LIQUIDITY_TRAP,
  "econ-37": ECON_CANTILLON_EFFECT,
  "econ-38": ECON_TRIFFIN_DILEMMA,
  "econ-39": ECON_CONTAGION,
  "econ-40": ECON_BRETTON_WOODS,
  "econ-41": ECON_SUPPLY_DEMAND,
  "econ-42": ECON_ELASTICITY,
  "econ-43": ECON_MARGINAL_UTILITY,
  "econ-44": ECON_OPPORTUNITY_COST,
  "econ-45": ECON_MARKET_STRUCTURES,
  "econ-46": ECON_EMH_VS_BEHAVIORAL,
  "econ-47": ECON_PROSPECT_THEORY,
  "econ-48": ECON_GREATER_FOOL,
  "econ-49": ECON_INFO_ASYMMETRY,
  "econ-50": ECON_MORAL_HAZARD,
  "econ-51": ECON_GREAT_DEPRESSION,
  "econ-52": ECON_STAGFLATION_1970S,
  "econ-53": ECON_VOLCKER_SHOCK,
  "econ-54": ECON_DOT_COM,
  "econ-55": ECON_GFC,
  "india-01": INDIA_SUPERCYCLE,
  "india-02": INDIA_STACK,
  "india-03": INDIA_DEFENSE,
  "india-04": INDIA_ENERGY,
  "india-05": INDIA_BANKING,
  "india-06": RBI_POLICY_JUNE,
  "spacex-ipo": SPACEX_IPO,
  "boj-rate-hike": BOJ_RATE_HIKE,
  "india-mega-ipos": INDIA_MEGA_IPOS,
  "coinbase-tokenization": COINBASE_TOKENIZATION,
  "tech-selloff-june26": TECH_SELLOFF_JUNE26,
  "ai-energy-crisis": AI_ENERGY_CRISIS,
  "corporate-bitcoin-standard": CORPORATE_BITCOIN_STANDARD,
  "institutional-showcase": INSTITUTIONAL_SHOWCASE,
  "ramageddon-apple": RAMAGEDDON_APPLE,
  "ai-revenue-trap": AI_REVENUE_TRAP,
  "ram-cartel-lawsuit": RAM_CARTEL_LAWSUIT,
  "quantum-ipo": QUANTUM_IPO,
  "microsoft-frontier": MICROSOFT_FRONTIER,
  "waste-management-pt1": WASTE_MANAGEMENT_PT1,
  "waste-management-pt2": WASTE_MANAGEMENT_PT2,
  "india-real-estate": INDIA_REAL_ESTATE,
  "helium-export-ban": HELIUM_EXPORT_BAN,
  "india-market-flush": INDIA_MARKET_FLUSH,
  "asian-chip-carnage": ASIAN_CHIP_CARNAGE,
  "rbi-forex-firewall": RBI_FOREX_FIREWALL,
  "india-relief-rally": INDIA_RELIEF_RALLY,
  "ai-valuation-selloff": AI_VALUATION_SELLOFF,
};

export interface TopicLookupResult {
  slides: SlideData[];
  resolvedKey: string;
  matched: boolean;
}

export function getSlidesByTopic(topic: string): TopicLookupResult {
  const normalized = topic.toLowerCase().trim();

  if (SQL_TOPICS[normalized]) {
    return { slides: SQL_TOPICS[normalized], resolvedKey: normalized, matched: true };
  }

  for (const key of Object.keys(SQL_TOPICS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return { slides: SQL_TOPICS[key], resolvedKey: key, matched: true };
    }
  }

  const fallback = "01-hormuz-closure-effect";
  return { slides: SQL_TOPICS[fallback], resolvedKey: fallback, matched: false };
}

export function getAvailableTopics(): string[] {
  return Object.keys(SQL_TOPICS);
}

export function getTopicSlideCount(key: string): number {
  const slides = SQL_TOPICS[key];
  return slides ? slides.length : 0;
}
