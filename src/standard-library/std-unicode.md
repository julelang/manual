# std::unicode
## Globals
```jule
const MAX_RUNE
```
Maximum valid Unicode code point.

---

```jule
const REPLACEMENT_CHAR
```
Represents invalid code points.

---

```jule
const MAX_ASCII
```
Maximum ASCII value.

---

```jule
const MAX_LATIN1
```
Maximum Latin-1 value. 

---

```jule
const UPPER_CASE
```

---

```jule
const LOWER_CASE
```

---

```jule
const TITLE_CASE
```

---

```jule
const MAX_CASE
```

---

```jule
static CATEGORIES: [str:&RangeTable]
```
The set of Unicode category tables.

---

```jule
static CC: &RangeTable
```
The set of Unicode characters in category CC (Other, control).

---

```jule
static CF: &RangeTable
```
The set of Unicode characters in category CF (Other, format).

---

```jule
static CO: &RangeTable
```
The set of Unicode characters in category CO (Other, private use).

---

```jule
static CS: &RangeTable
```
The set of Unicode characters in category CS (Other, surrogate).

---

```jule
static DIGIT: &RangeTable
```
The set of Unicode characters with the "decimal DIGIT" property.

---

```jule
static ND: &RangeTable
```
The set of Unicode characters in category ND (NUMBER, decimal DIGIT).

---

```jule
static LETTER: &RangeTable
```
The set of Unicode letters, category L.

---

```jule
static L: &RangeTable
```
The set of Unicode letters, category L.

---

```jule
static LM: &RangeTable
```
The set of Unicode characters in category LM (LETTER, modifier).

---

```jule
static LO: &RangeTable
```
The set of Unicode characters in category LO (LETTER, other).

---

```jule
static LOWER: &RangeTable
```
The set of Unicode LOWER case letters.

---

```jule
static LL: &RangeTable
```
The set of Unicode characters in category LL (LETTER, lowercase).

---

```jule
static MARK: &RangeTable
```
The set of Unicode MARK characters, category M.

---

```jule
static M: &RangeTable
```
The set of Unicode MARK characters, category M.

---

```jule
static MC: &RangeTable
```
The set of Unicode characters in category MC (MARK, spacing combining).

---

```jule
static ME: &RangeTable
```
The set of Unicode characters in category ME (MARK, enclosing).

---

```jule
static MN: &RangeTable
```
The set of Unicode characters in category MN (MARK, nonspacing).

---

```jule
static NL: &RangeTable
```
The set of Unicode characters in category NL (NUMBER, LETTER).

---

```jule
static NO: &RangeTable
```
The set of Unicode characters in category NO (NUMBER, other).

---

```jule
static NUMBER: &RangeTable
```
The set of Unicode NUMBER characters, category N.

---

```jule
static N: &RangeTable
```
The set of Unicode NUMBER characters, category N.

---

```jule
static OTHER: &RangeTable
```
The set of Unicode control and special characters, category C.

---

```jule
static C: &RangeTable
```
The set of Unicode control and special characters, category C.

---

```jule
static PC: &RangeTable
```
The set of Unicode characters in category PC (Punctuation, connector).

---

```jule
static PD: &RangeTable
```
The set of Unicode characters in category PD (Punctuation, DASH).

---

```jule
static PE: &RangeTable
```
The set of Unicode characters in category PE (Punctuation, close).

---

```jule
static PF: &RangeTable
```
The set of Unicode characters in category PF (Punctuation, final quote).

---

```jule
static PI: &RangeTable
```
The set of Unicode characters in category PI (Punctuation, initial quote).

---

```jule
static PO: &RangeTable
```
The set of Unicode characters in category PO (Punctuation, otger).

---

```jule
static PS: &RangeTable
```
The set of Unicode characters in category PS (Punctuation, open).

---

```jule
static PUNCT: &RangeTable
```
The set of Unicode punctuation characters, category P.

---

```jule
static P: &RangeTable
```
The set of Unicode punctuation characters, category P.

---

```jule
static SC: &RangeTable
```
The set of Unicode characters in category SC (Symbol, currency).

---

```jule
static SK: &RangeTable
```
The set of Unicode characters in category SK (Symbol, modifier).

---

```jule
static SM: &RangeTable
```
The set of Unicode characters in category SM (Symbol, math).

---

```jule
static SO: &RangeTable
```
The set of Unicode characters in category SO (Symbol, other).

---

```jule
static SPACE: &RangeTable
```
The set of Unicode SPACE characters, category Z.

---

```jule
static Z: &RangeTable
```
The set of Unicode SPACE characters, category Z.

---

```jule
static SYMBOL: &RangeTable
```
The set of Unicode symbol characters, category S.

---

```jule
static S: &RangeTable
```
The set of Unicode symbol characters, category S.

---

```jule
static TITLE: &RangeTable
```
The set of Unicode TITLE case letters.

---

```jule
static LT: &RangeTable
```
The set of Unicode characters in category LT (LETTER, titlecase).

---

```jule
static UPPER: &RangeTable
```
The set of Unicode UPPER case letters.

---

```jule
static LU: &RangeTable
```
The set of Unicode characters in category LU (LETTER, uppercase).

---

```jule
static ZL: &RangeTable
```
The set of Unicode characters in category ZL (Separator, line).

---

```jule
static ZP: &RangeTable
```
The set of Unicode characters in category ZP (Separator, paragraph).

---

```jule
static ZS: &RangeTable
```
The set of Unicode characters in category ZS (Separator, SPACE).

---

```jule
static SCRIPTS: [str:&RangeTable]
```
The set of Unicode script tables.

---

```jule
static ADLAM: &RangeTable
```
The set of Unicode characters in script Adlam.

---

```jule
static AHOM: &RangeTable
```
The set of Unicode characters in script Ahom.

---

```jule
static ANATOLIAN_HIEROGLYPHS: &RangeTable
```
The set of Unicode characters in script Anatolian_Hieroglyphs.

---

```jule
static ARABIC: &RangeTable
```
The set of Unicode characters in script Arabic.

---

```jule
static ARMENIAN: &RangeTable
```
The set of Unicode characters in script Armenian.

---

```jule
static AVESTAN: &RangeTable
```
The set of Unicode characters in script Avestan.

---

```jule
static BALINESE: &RangeTable
```
The set of Unicode characters in script Balinese.

---

```jule
static BAMUM: &RangeTable
```
The set of Unicode characters in script Bamum.

---

```jule
static BASSA_VAH: &RangeTable
```
The set of Unicode characters in script Bassa_Vah.

---

```jule
static BATAK: &RangeTable
```
The set of Unicode characters in script Batak.

---

```jule
static BENGALI: &RangeTable
```
The set of Unicode characters in script Bengali.

---

```jule
static BHAIKSUKI: &RangeTable
```
The set of Unicode characters in script Bhaiksuki.

---

```jule
static BOPOMOFO: &RangeTable
```
The set of Unicode characters in script Bopomofo.

---

```jule
static BRAHMI: &RangeTable
```
The set of Unicode characters in script Brahmi.

---

```jule
static BRAILLE: &RangeTable
```
The set of Unicode characters in script Braille.

---

```jule
static BUGINESE: &RangeTable
```
The set of Unicode characters in script Buginese.

---

```jule
static BUHID: &RangeTable
```
The set of Unicode characters in script Buhid.

---

```jule
static CANADIAN_ABORIGINAL: &RangeTable
```
The set of Unicode characters in script Canadian_Aboriginal.

---

```jule
static CARIAN: &RangeTable
```
The set of Unicode characters in script Carian.

---

```jule
static CAUCASIAN_ALBANIAN: &RangeTable
```
The set of Unicode characters in script Caucasian_Albanian.

---

```jule
static CHAKMA: &RangeTable
```
The set of Unicode characters in script Chakma.

---

```jule
static CHAM: &RangeTable
```
The set of Unicode characters in script Cham.

---

```jule
static CHEROKEE: &RangeTable
```
The set of Unicode characters in script Cherokee.

---

```jule
static CHORASMIAN: &RangeTable
```
The set of Unicode characters in script Chorasmian.

---

```jule
static COMMON: &RangeTable
```
The set of Unicode characters in script Common.

---

```jule
static COPTIC: &RangeTable
```
The set of Unicode characters in script Coptic.

---

```jule
static CUNEIFORM: &RangeTable
```
The set of Unicode characters in script Cuneiform.

---

```jule
static CYPRIOT: &RangeTable
```
The set of Unicode characters in script Cypriot.

---

```jule
static CYPRO_MINOAN: &RangeTable
```
The set of Unicode characters in script Cypro_Minoan.

---

```jule
static CYRILLIC: &RangeTable
```
The set of Unicode characters in script Cyrillic.

---

```jule
static DESERET: &RangeTable
```
The set of Unicode characters in script Deseret.

---

```jule
static DEVANAGARI: &RangeTable
```
The set of Unicode characters in script Devanagari.

---

```jule
static DIVES_AKURU: &RangeTable
```
The set of Unicode characters in script Dives_Akuru.

---

```jule
static DOGRA: &RangeTable
```
The set of Unicode characters in script Dogra.

---

```jule
static DUPLOYAN: &RangeTable
```
The set of Unicode characters in script Duployan.

---

```jule
static EGYPTIAN_HIEROGLYPHS: &RangeTable
```
The set of Unicode characters in script Egyptian_Hieroglyphs.

---

```jule
static ELBASAN: &RangeTable
```
The set of Unicode characters in script Elbasan.

---

```jule
static ELYMAIC: &RangeTable
```
The set of Unicode characters in script Elymaic.

---

```jule
static ETHIOPIC: &RangeTable
```
The set of Unicode characters in script Ethiopic.

---

```jule
static GEORGIAN: &RangeTable
```
The set of Unicode characters in script Georgian.

---

```jule
static GLAGOLITIC: &RangeTable
```
The set of Unicode characters in script Glagolitic.

---

```jule
static GOTHIC: &RangeTable
```
The set of Unicode characters in script Gothic.

---

```jule
static GRANTHA: &RangeTable
```
The set of Unicode characters in script Grantha.

---

```jule
static GREEK: &RangeTable
```
The set of Unicode characters in script Greek.

---

```jule
static GUJARATI: &RangeTable
```
The set of Unicode characters in script Gujarati.

---

```jule
static GUNJALA_GONDI: &RangeTable
```
The set of Unicode characters in script Gunjala_Gondi.

---

```jule
static GURMUKHI: &RangeTable
```
The set of Unicode characters in script Gurmukhi.

---

```jule
static HAN: &RangeTable
```
The set of Unicode characters in script Han.

---

```jule
static HANGUL: &RangeTable
```
The set of Unicode characters in script Hangul.

---

```jule
static HANIFI_ROHINGYA: &RangeTable
```
The set of Unicode characters in script Hanifi_Rohingya.

---

```jule
static HANUNOO: &RangeTable
```
The set of Unicode characters in script Hanunoo.

---

```jule
static HATRAN: &RangeTable
```
The set of Unicode characters in script Hatran.

---

```jule
static HEBREW: &RangeTable
```
The set of Unicode characters in script Hebrew.

---

```jule
static HIRAGANA: &RangeTable
```
The set of Unicode characters in script Hiragana.

---

```jule
static IMPERIAL_ARAMAIC: &RangeTable
```
The set of Unicode characters in script Imperial_Aramaic.

---

```jule
static INHERITED: &RangeTable
```
The set of Unicode characters in script Inherited.

---

```jule
static INSCRIPTIONAL_PAHLAVI: &RangeTable
```
The set of Unicode characters in script Inscriptional_Pahlavi.

---

```jule
static INSCRIPTIONAL_PARTHIAN: &RangeTable
```
The set of Unicode characters in script Inscriptional_Parthian.

---

```jule
static JAVANESE: &RangeTable
```
The set of Unicode characters in script Javanese.

---

```jule
static KAITHI: &RangeTable
```
The set of Unicode characters in script Kaithi.

---

```jule
static KANNADA: &RangeTable
```
The set of Unicode characters in script Kannada.

---

```jule
static KATAKANA: &RangeTable
```
The set of Unicode characters in script Katakana.

---

```jule
static KAWI: &RangeTable
```
The set of Unicode characters in script Kawi.

---

```jule
static KAYAH_LI: &RangeTable
```
The set of Unicode characters in script Kayah_Li.

---

```jule
static KHAROSHTHI: &RangeTable
```
The set of Unicode characters in script Kharoshthi.

---

```jule
static KHITAN_SMALL_SCRIPT: &RangeTable
```
The set of Unicode characters in script Khitan_Small_Script.

---

```jule
static KHMER: &RangeTable
```
The set of Unicode characters in script Khmer.

---

```jule
static KHOJKI: &RangeTable
```
The set of Unicode characters in script Khojki.

---

```jule
static KHUDAWADI: &RangeTable
```
The set of Unicode characters in script Khudawadi.

---

```jule
static LAO: &RangeTable
```
The set of Unicode characters in script Lao.

---

```jule
static LATIN: &RangeTable
```
The set of Unicode characters in script Latin.

---

```jule
static LEPCHA: &RangeTable
```
The set of Unicode characters in script Lepcha.

---

```jule
static LIMBU: &RangeTable
```
The set of Unicode characters in script Limbu.

---

```jule
static LINEAR_A: &RangeTable
```
The set of Unicode characters in script Linear_A.

---

```jule
static LINEAR_B: &RangeTable
```
The set of Unicode characters in script Linear_B.

---

```jule
static LISU: &RangeTable
```
The set of Unicode characters in script Lisu.

---

```jule
static LYCIAN: &RangeTable
```
The set of Unicode characters in script Lycian.

---

```jule
static LYDIAN: &RangeTable
```
The set of Unicode characters in script Lydian.

---

```jule
static MAHAJANI: &RangeTable
```
The set of Unicode characters in script Mahajani.

---

```jule
static MAKASAR: &RangeTable
```
The set of Unicode characters in script Makasar.

---

```jule
static MALAYALAM: &RangeTable
```
The set of Unicode characters in script Malayalam.

---

```jule
static MANDAIC: &RangeTable
```
The set of Unicode characters in script Mandaic.

---

```jule
static MANICHAEAN: &RangeTable
```
The set of Unicode characters in script Manichaean.

---

```jule
static MARCHEN: &RangeTable
```
The set of Unicode characters in script Marchen.

---

```jule
static MASARAM_GONDI: &RangeTable
```
The set of Unicode characters in script Masaram_Gondi.

---

```jule
static MEDEFAIDRIN: &RangeTable
```
The set of Unicode characters in script Medefaidrin.

---

```jule
static MEETEI_MAYEK: &RangeTable
```
The set of Unicode characters in script Meetei_Mayek.

---

```jule
static MENDE_KIKAKUI: &RangeTable
```
The set of Unicode characters in script Mende_Kikakui.

---

```jule
static MEROITIC_CURSIVE: &RangeTable
```
The set of Unicode characters in script Meroitic_Cursive.

---

```jule
static MEROITIC_HIEROGLYPHS: &RangeTable
```
The set of Unicode characters in script Meroitic_Hieroglyphs.

---

```jule
static MIAO: &RangeTable
```
The set of Unicode characters in script Miao.

---

```jule
static MODI: &RangeTable
```
The set of Unicode characters in script Modi.

---

```jule
static MONGOLIAN: &RangeTable
```
The set of Unicode characters in script Mongolian.

---

```jule
static MRO: &RangeTable
```
The set of Unicode characters in script Mro.

---

```jule
static MULTANI: &RangeTable
```
The set of Unicode characters in script Multani.

---

```jule
static MYANMAR: &RangeTable
```
The set of Unicode characters in script Myanmar.

---

```jule
static NABATAEAN: &RangeTable
```
The set of Unicode characters in script Nabataean.

---

```jule
static NAG_MUNDARI: &RangeTable
```
The set of Unicode characters in script Nag_Mundari.

---

```jule
static NANDINAGARI: &RangeTable
```
The set of Unicode characters in script Nandinagari.

---

```jule
static NEW_TAI_LUE: &RangeTable
```
The set of Unicode characters in script New_Tai_Lue.

---

```jule
static NEWA: &RangeTable
```
The set of Unicode characters in script Newa.

---

```jule
static NKO: &RangeTable
```
The set of Unicode characters in script Nko.

---

```jule
static NUSHU: &RangeTable
```
The set of Unicode characters in script Nushu.

---

```jule
static NYIAKENG_PUACHUE_HMONG: &RangeTable
```
The set of Unicode characters in script Nyiakeng_Puachue_Hmong.

---

```jule
static OGHAM: &RangeTable
```
The set of Unicode characters in script Ogham.

---

```jule
static OL_CHIKI: &RangeTable
```
The set of Unicode characters in script Ol_Chiki.

---

```jule
static OLD_HUNGARIAN: &RangeTable
```
The set of Unicode characters in script Old_Hungarian.

---

```jule
static OLD_ITALIC: &RangeTable
```
The set of Unicode characters in script Old_Italic.

---

```jule
static OLD_NORTH_ARABIAN: &RangeTable
```
The set of Unicode characters in script Old_North_Arabian.

---

```jule
static OLD_PERMIC: &RangeTable
```
The set of Unicode characters in script Old_Permic.

---

```jule
static OLD_PERSIAN: &RangeTable
```
The set of Unicode characters in script Old_Persian.

---

```jule
static OLD_SOGDIAN: &RangeTable
```
The set of Unicode characters in script Old_Sogdian.

---

```jule
static OLD_SOUTH_ARABIAN: &RangeTable
```
The set of Unicode characters in script Old_South_Arabian.

---

```jule
static OLD_TURKIC: &RangeTable
```
The set of Unicode characters in script Old_Turkic.

---

```jule
static OLD_UYGHUR: &RangeTable
```
The set of Unicode characters in script Old_Uyghur.

---

```jule
static ORIYA: &RangeTable
```
The set of Unicode characters in script Oriya.

---

```jule
static OSAGE: &RangeTable
```
The set of Unicode characters in script Osage.

---

```jule
static OSMANYA: &RangeTable
```
The set of Unicode characters in script Osmanya.

---

```jule
static PAHAWH_HMONG: &RangeTable
```
The set of Unicode characters in script Pahawh_Hmong.

---

```jule
static PALMYRENE: &RangeTable
```
The set of Unicode characters in script Palmyrene.

---

```jule
static PAU_CIN_HAU: &RangeTable
```
The set of Unicode characters in script Pau_Cin_Hau.

---

```jule
static PHAGS_PA: &RangeTable
```
The set of Unicode characters in script Phags_Pa.

---

```jule
static PHOENICIAN: &RangeTable
```
The set of Unicode characters in script Phoenician.

---

```jule
static PSALTER_PAHLAVI: &RangeTable
```
The set of Unicode characters in script Psalter_Pahlavi.

---

```jule
static REJANG: &RangeTable
```
The set of Unicode characters in script Rejang.

---

```jule
static RUNIC: &RangeTable
```
The set of Unicode characters in script Runic.

---

```jule
static SAMARITAN: &RangeTable
```
The set of Unicode characters in script Samaritan.

---

```jule
static SAURASHTRA: &RangeTable
```
The set of Unicode characters in script Saurashtra.

---

```jule
static SHARADA: &RangeTable
```
The set of Unicode characters in script Sharada.

---

```jule
static SHAVIAN: &RangeTable
```
The set of Unicode characters in script Shavian.

---

```jule
static SIDDHAM: &RangeTable
```
The set of Unicode characters in script Siddham.

---

```jule
static SIGN_WRITING: &RangeTable
```
The set of Unicode characters in script SignWriting.

---

```jule
static SINHALA: &RangeTable
```
The set of Unicode characters in script Sinhala.

---

```jule
static SOGDIAN: &RangeTable
```
The set of Unicode characters in script Sogdian.

---

```jule
static SORA_SOMPENG: &RangeTable
```
The set of Unicode characters in script Sora_Sompeng.

---

```jule
static SOYOMBO: &RangeTable
```
The set of Unicode characters in script Soyombo.

---

```jule
static SUNDANESE: &RangeTable
```
The set of Unicode characters in script Sundanese.

---

```jule
static SYLOTI_NAGRI: &RangeTable
```
The set of Unicode characters in script Syloti_Nagri.

---

```jule
static SYRIAC: &RangeTable
```
The set of Unicode characters in script Syriac.

---

```jule
static TAGALOG: &RangeTable
```
The set of Unicode characters in script Tagalog.

---

```jule
static TAGBANWA: &RangeTable
```
The set of Unicode characters in script Tagbanwa.

---

```jule
static TAI_LE: &RangeTable
```
The set of Unicode characters in script Tai_Le.

---

```jule
static TAI_THAM: &RangeTable
```
The set of Unicode characters in script Tai_Tham.

---

```jule
static TAI_VIET: &RangeTable
```
The set of Unicode characters in script Tai_Viet.

---

```jule
static TAKRI: &RangeTable
```
The set of Unicode characters in script Takri.

---

```jule
static TAMIL: &RangeTable
```
The set of Unicode characters in script Tamil.

---

```jule
static TANGSA: &RangeTable
```
The set of Unicode characters in script Tangsa.

---

```jule
static TANGUT: &RangeTable
```
The set of Unicode characters in script Tangut.

---

```jule
static TELUGU: &RangeTable
```
The set of Unicode characters in script Telugu.

---

```jule
static THAANA: &RangeTable
```
The set of Unicode characters in script Thaana.

---

```jule
static THAI: &RangeTable
```
The set of Unicode characters in script Thai.

---

```jule
static TIBETAN: &RangeTable
```
The set of Unicode characters in script Tibetan.

---

```jule
static TIFINAGH: &RangeTable
```
The set of Unicode characters in script Tifinagh.

---

```jule
static TIRHUTA: &RangeTable
```
The set of Unicode characters in script Tirhuta.

---

```jule
static TOTO: &RangeTable
```
The set of Unicode characters in script Toto.

---

```jule
static UGARITIC: &RangeTable
```
The set of Unicode characters in script Ugaritic.

---

```jule
static VAI: &RangeTable
```
The set of Unicode characters in script Vai.

---

```jule
static VITHKUQI: &RangeTable
```
The set of Unicode characters in script Vithkuqi.

---

```jule
static WANCHO: &RangeTable
```
The set of Unicode characters in script Wancho.

---

```jule
static WARANG_CITI: &RangeTable
```
The set of Unicode characters in script Warang_Citi.

---

```jule
static YEZIDI: &RangeTable
```
The set of Unicode characters in script Yezidi.

---

```jule
static YI: &RangeTable
```
The set of Unicode characters in script Yi.

---

```jule
static ZANABAZAR_SQUARE: &RangeTable
```
The set of Unicode characters in script Zanabazar_Square.

---

```jule
static PROPERTIES: [str:&RangeTable]
```
The set of Unicode property tables.

---

```jule
static ASCII_HEX_DIGIT: &RangeTable
```

---

```jule
static BIDI_CONTROL: &RangeTable
```

---

```jule
static DASH: &RangeTable
```

---

```jule
static DEPRECATED: &RangeTable
```

---

```jule
static DIACRITIC: &RangeTable
```

---

```jule
static EXTENDER: &RangeTable
```

---

```jule
static HEX_DIGIT: &RangeTable
```

---

```jule
static HYPHEN: &RangeTable
```

---

```jule
static IDS_BINARY_OPERATOR: &RangeTable
```

---

```jule
static IDS_TRINARY_OPERATOR: &RangeTable
```

---

```jule
static IDEOGRAPHIC: &RangeTable
```

---

```jule
static JOIN_CONTROL: &RangeTable
```

---

```jule
static LOGICAL_ORDER_EXCEPTION: &RangeTable
```

---

```jule
static NONCHARACTER_CODE_POINT: &RangeTable
```

---

```jule
static OTHER_ALPHABETIC: &RangeTable
```

---

```jule
static OTHER_DEFAULT_IGNORABLE_CODE_POINT: &RangeTable
```

---

```jule
static OTHER_GRAPHEME_EXTEND: &RangeTable
```

---

```jule
static OTHER_ID_CONTINUE: &RangeTable
```

---

```jule
static OTHER_ID_START: &RangeTable
```

---

```jule
static OTHER_LOWERCASE: &RangeTable
```

---

```jule
static OTHER_MATH: &RangeTable
```

---

```jule
static OTHER_UPPERCASE: &RangeTable
```

---

```jule
static PATTERN_SYNTAX: &RangeTable
```

---

```jule
static PATTERN_WHITE_SPACE: &RangeTable
```

---

```jule
static PREPENDED_CONCATENATION_MARK: &RangeTable
```

---

```jule
static QUOTATION_MARK: &RangeTable
```

---

```jule
static RADICAL: &RangeTable
```

---

```jule
static REGIONAL_INDICATOR: &RangeTable
```

---

```jule
static SENTENCE_TERMINAL: &RangeTable
```

---

```jule
static SOFT_DOTTED: &RangeTable
```

---

```jule
static TERMINAL_PUNCTUATION: &RangeTable
```

---

```jule
static UNIFIED_IDEOGRAPH: &RangeTable
```

---

```jule
static VARIATION_SELECTOR: &RangeTable
```

---

```jule
static WHITE_SPACE: &RangeTable
```

---

```jule
static CASE_RANGES: []CaseRange
```
The table describing case mappings for all letters with non-self mappings.

---

```jule
static FOLD_CATEGORY: [str:&RangeTable]
```
Maps a category name to a table of code points outside the category that are equivalent under simple case folding to code points inside the category. If there is NO entry for a category name, there are NO such points.

---

```jule
static FOLD_SCRIPT: [str:&RangeTable]
```
Maps a script name to a table of code points outside the script that are equivalent under simple case folding to code points inside the script. If there is NO entry for a script name, there are NO such points.

## Structs

```jule
struct Range16 {
    lo:     u16
    hi:     u16
    stride: u16
}
```
Represents of a range of 16-bit Unicode code points. The range runs from lo to hi inclusive and has the specified stride.

---

```jule
struct Range32 {
    lo:     u16
    hi:     u16
    stride: u16
}
```
Represents of a range of Unicode code points and is used when one or more of the values will not fit in 16 bits. The range runs from lo to hi inclusive and has the specified stride. lo and hi must always be >= 1<<16.

---

```jule
struct RangeTable {
    r16:          []Range16
    r32:          []Range32
    latin_offset: int
}
```
Defines a set of Unicode code points by listing the ranges of code points within the set. The ranges are listed in two slices to save space: a slice of 16-bit ranges and a slice of 32-bit ranges. The two slices must be in sorted order and non-overlapping. Also, r32 should contain only values >= 0x10000 (1<<16).
