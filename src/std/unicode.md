# std::unicode
## Globals
```jule
const MaxRune
```
Maximum valid Unicode code point.

---

```jule
const ReplacementChar
```
Represents invalid code points.

---

```jule
const MaxAscii
```
Maximum Ascii value.

---

```jule
const MaxLatin1
```
Maximum Latin-1 value. 

---

```jule
const UpperCase
```

---

```jule
const LowerCase
```

---

```jule
const TitleCase
```

---

```jule
const MaxCase
```

---

```jule
static Categories: map[str]&RangeTable
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
static Digit: &RangeTable
```
The set of Unicode characters with the "decimal Digit" property.

---

```jule
static ND: &RangeTable
```
The set of Unicode characters in category ND (Number, decimal Digit).

---

```jule
static Letter: &RangeTable
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
The set of Unicode characters in category LM (Letter, modifier).

---

```jule
static LO: &RangeTable
```
The set of Unicode characters in category LO (Letter, other).

---

```jule
static Lower: &RangeTable
```
The set of Unicode Lower case letters.

---

```jule
static LL: &RangeTable
```
The set of Unicode characters in category LL (Letter, lowercase).

---

```jule
static Mark: &RangeTable
```
The set of Unicode Mark characters, category M.

---

```jule
static M: &RangeTable
```
The set of Unicode Mark characters, category M.

---

```jule
static MC: &RangeTable
```
The set of Unicode characters in category MC (Mark, spacing combining).

---

```jule
static ME: &RangeTable
```
The set of Unicode characters in category ME (Mark, enclosing).

---

```jule
static MN: &RangeTable
```
The set of Unicode characters in category MN (Mark, nonspacing).

---

```jule
static NL: &RangeTable
```
The set of Unicode characters in category NL (Number, Letter).

---

```jule
static NO: &RangeTable
```
The set of Unicode characters in category NO (Number, other).

---

```jule
static Number: &RangeTable
```
The set of Unicode Number characters, category N.

---

```jule
static N: &RangeTable
```
The set of Unicode Number characters, category N.

---

```jule
static Other: &RangeTable
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
The set of Unicode characters in category PD (Punctuation, Dash).

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
The set of Unicode characters in category PO (Punctuation, other).

---

```jule
static PS: &RangeTable
```
The set of Unicode characters in category PS (Punctuation, open).

---

```jule
static Punct: &RangeTable
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
static Space: &RangeTable
```
The set of Unicode Space characters, category Z.

---

```jule
static Z: &RangeTable
```
The set of Unicode Space characters, category Z.

---

```jule
static Symbol: &RangeTable
```
The set of Unicode symbol characters, category S.

---

```jule
static S: &RangeTable
```
The set of Unicode symbol characters, category S.

---

```jule
static Title: &RangeTable
```
The set of Unicode Title case letters.

---

```jule
static LT: &RangeTable
```
The set of Unicode characters in category LT (Letter, TitleCase).

---

```jule
static Upper: &RangeTable
```
The set of Unicode Upper case letters.

---

```jule
static LU: &RangeTable
```
The set of Unicode characters in category LU (Letter, uppercase).

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
The set of Unicode characters in category ZS (Separator, Space).

---

```jule
static Scripts: map[str]&RangeTable
```
The set of Unicode script tables.

---

```jule
static Adlam: &RangeTable
```
The set of Unicode characters in script Adlam.

---

```jule
static Ahom: &RangeTable
```
The set of Unicode characters in script Ahom.

---

```jule
static AnatolianHieroglyphs: &RangeTable
```
The set of Unicode characters in script AnatolianHieroglyphs.

---

```jule
static Arabic: &RangeTable
```
The set of Unicode characters in script Arabic.

---

```jule
static Armenian: &RangeTable
```
The set of Unicode characters in script Armenian.

---

```jule
static Avestan: &RangeTable
```
The set of Unicode characters in script Avestan.

---

```jule
static Balinese: &RangeTable
```
The set of Unicode characters in script Balinese.

---

```jule
static Bamum: &RangeTable
```
The set of Unicode characters in script Bamum.

---

```jule
static BassaVah: &RangeTable
```
The set of Unicode characters in script BassaVah.

---

```jule
static Batak: &RangeTable
```
The set of Unicode characters in script Batak.

---

```jule
static Bengali: &RangeTable
```
The set of Unicode characters in script Bengali.

---

```jule
static Bhaiksuki: &RangeTable
```
The set of Unicode characters in script Bhaiksuki.

---

```jule
static Bopomofo: &RangeTable
```
The set of Unicode characters in script Bopomofo.

---

```jule
static Brahmi: &RangeTable
```
The set of Unicode characters in script Brahmi.

---

```jule
static Braille: &RangeTable
```
The set of Unicode characters in script Braille.

---

```jule
static Buginese: &RangeTable
```
The set of Unicode characters in script Buginese.

---

```jule
static Buhid: &RangeTable
```
The set of Unicode characters in script Buhid.

---

```jule
static CanadianAboriginal: &RangeTable
```
The set of Unicode characters in script CanadianAboriginal.

---

```jule
static Carian: &RangeTable
```
The set of Unicode characters in script Carian.

---

```jule
static CaucasianAlbanian: &RangeTable
```
The set of Unicode characters in script CaucasianAlbanian.

---

```jule
static Chakma: &RangeTable
```
The set of Unicode characters in script Chakma.

---

```jule
static Cham: &RangeTable
```
The set of Unicode characters in script Cham.

---

```jule
static Cherokee: &RangeTable
```
The set of Unicode characters in script Cherokee.

---

```jule
static Chorasmian: &RangeTable
```
The set of Unicode characters in script Chorasmian.

---

```jule
static Common: &RangeTable
```
The set of Unicode characters in script Common.

---

```jule
static Coptic: &RangeTable
```
The set of Unicode characters in script Coptic.

---

```jule
static Cuneiform: &RangeTable
```
The set of Unicode characters in script Cuneiform.

---

```jule
static Cypriot: &RangeTable
```
The set of Unicode characters in script Cypriot.

---

```jule
static CyproMinoan: &RangeTable
```
The set of Unicode characters in script CyproMinoan.

---

```jule
static Cyrillic: &RangeTable
```
The set of Unicode characters in script Cyrillic.

---

```jule
static Deseret: &RangeTable
```
The set of Unicode characters in script Deseret.

---

```jule
static Devanagari: &RangeTable
```
The set of Unicode characters in script Devanagari.

---

```jule
static DivesAkuru: &RangeTable
```
The set of Unicode characters in script DivesAkuru.

---

```jule
static Dogra: &RangeTable
```
The set of Unicode characters in script Dogra.

---

```jule
static Duployan: &RangeTable
```
The set of Unicode characters in script Duployan.

---

```jule
static EgyptianHieroglyphs: &RangeTable
```
The set of Unicode characters in script EgyptianHieroglyphs.

---

```jule
static Elbasan: &RangeTable
```
The set of Unicode characters in script Elbasan.

---

```jule
static Elymaic: &RangeTable
```
The set of Unicode characters in script Elymaic.

---

```jule
static Ethiopic: &RangeTable
```
The set of Unicode characters in script Ethiopic.

---

```jule
static Georgian: &RangeTable
```
The set of Unicode characters in script Georgian.

---

```jule
static Glagolitic: &RangeTable
```
The set of Unicode characters in script Glagolitic.

---

```jule
static Gothic: &RangeTable
```
The set of Unicode characters in script Gothic.

---

```jule
static Grantha: &RangeTable
```
The set of Unicode characters in script Grantha.

---

```jule
static Greek: &RangeTable
```
The set of Unicode characters in script Greek.

---

```jule
static Gujarati: &RangeTable
```
The set of Unicode characters in script Gujarati.

---

```jule
static GunjalaGondi: &RangeTable
```
The set of Unicode characters in script GunjalaGondi.

---

```jule
static Gurmukhi: &RangeTable
```
The set of Unicode characters in script Gurmukhi.

---

```jule
static Han: &RangeTable
```
The set of Unicode characters in script Han.

---

```jule
static Hangul: &RangeTable
```
The set of Unicode characters in script Hangul.

---

```jule
static HanifiRohingya: &RangeTable
```
The set of Unicode characters in script HanifiRohingya.

---

```jule
static Hanunoo: &RangeTable
```
The set of Unicode characters in script Hanunoo.

---

```jule
static Hatran: &RangeTable
```
The set of Unicode characters in script Hatran.

---

```jule
static Hebrew: &RangeTable
```
The set of Unicode characters in script Hebrew.

---

```jule
static Hiragana: &RangeTable
```
The set of Unicode characters in script Hiragana.

---

```jule
static ImperialAramaic: &RangeTable
```
The set of Unicode characters in script ImperialAramaic.

---

```jule
static Inherited: &RangeTable
```
The set of Unicode characters in script Inherited.

---

```jule
static InscriptionalPahlavi: &RangeTable
```
The set of Unicode characters in script InscriptionalPahlavi.

---

```jule
static InscriptionalParthian: &RangeTable
```
The set of Unicode characters in script InscriptionalParthian.

---

```jule
static Javanese: &RangeTable
```
The set of Unicode characters in script Javanese.

---

```jule
static Kaithi: &RangeTable
```
The set of Unicode characters in script Kaithi.

---

```jule
static Kannada: &RangeTable
```
The set of Unicode characters in script Kannada.

---

```jule
static Katakana: &RangeTable
```
The set of Unicode characters in script Katakana.

---

```jule
static Kawi: &RangeTable
```
The set of Unicode characters in script Kawi.

---

```jule
static KayahLi: &RangeTable
```
The set of Unicode characters in script KayahLi.

---

```jule
static Kharoshthi: &RangeTable
```
The set of Unicode characters in script Kharoshthi.

---

```jule
static KhitanSmallScript: &RangeTable
```
The set of Unicode characters in script KhitanSmallScript.

---

```jule
static Khmer: &RangeTable
```
The set of Unicode characters in script Khmer.

---

```jule
static Khojki: &RangeTable
```
The set of Unicode characters in script Khojki.

---

```jule
static Khudawadi: &RangeTable
```
The set of Unicode characters in script Khudawadi.

---

```jule
static Lao: &RangeTable
```
The set of Unicode characters in script Lao.

---

```jule
static Latin: &RangeTable
```
The set of Unicode characters in script Latin.

---

```jule
static Lepcha: &RangeTable
```
The set of Unicode characters in script Lepcha.

---

```jule
static Limbu: &RangeTable
```
The set of Unicode characters in script Limbu.

---

```jule
static LinearA: &RangeTable
```
The set of Unicode characters in script LinearA.

---

```jule
static LinearB: &RangeTable
```
The set of Unicode characters in script LinearB.

---

```jule
static Lisu: &RangeTable
```
The set of Unicode characters in script Lisu.

---

```jule
static Lycian: &RangeTable
```
The set of Unicode characters in script Lycian.

---

```jule
static Lydian: &RangeTable
```
The set of Unicode characters in script Lydian.

---

```jule
static Mahajani: &RangeTable
```
The set of Unicode characters in script Mahajani.

---

```jule
static Makasar: &RangeTable
```
The set of Unicode characters in script Makasar.

---

```jule
static Malayalam: &RangeTable
```
The set of Unicode characters in script Malayalam.

---

```jule
static Mandaic: &RangeTable
```
The set of Unicode characters in script Mandaic.

---

```jule
static Manichaean: &RangeTable
```
The set of Unicode characters in script Manichaean.

---

```jule
static Marchen: &RangeTable
```
The set of Unicode characters in script Marchen.

---

```jule
static MasaramGondi: &RangeTable
```
The set of Unicode characters in script MasaramGondi.

---

```jule
static Medefaidrin: &RangeTable
```
The set of Unicode characters in script Medefaidrin.

---

```jule
static MeeteiMayek: &RangeTable
```
The set of Unicode characters in script MeeteiMayek.

---

```jule
static MendeKikakui: &RangeTable
```
The set of Unicode characters in script MendeKikakui.

---

```jule
static MeroiticCursive: &RangeTable
```
The set of Unicode characters in script MeroiticCursive.

---

```jule
static MeroiticHieroglyphs: &RangeTable
```
The set of Unicode characters in script MeroiticHieroglyphs.

---

```jule
static Miao: &RangeTable
```
The set of Unicode characters in script Miao.

---

```jule
static Modi: &RangeTable
```
The set of Unicode characters in script Modi.

---

```jule
static Mongolian: &RangeTable
```
The set of Unicode characters in script Mongolian.

---

```jule
static Mro: &RangeTable
```
The set of Unicode characters in script Mro.

---

```jule
static Multani: &RangeTable
```
The set of Unicode characters in script Multani.

---

```jule
static Myanmar: &RangeTable
```
The set of Unicode characters in script Myanmar.

---

```jule
static Nabataean: &RangeTable
```
The set of Unicode characters in script Nabataean.

---

```jule
static NagMundari: &RangeTable
```
The set of Unicode characters in script NagMundari.

---

```jule
static Nandinagari: &RangeTable
```
The set of Unicode characters in script Nandinagari.

---

```jule
static NewTaiLue: &RangeTable
```
The set of Unicode characters in script NewTaiLue.

---

```jule
static Newa: &RangeTable
```
The set of Unicode characters in script Newa.

---

```jule
static Nko: &RangeTable
```
The set of Unicode characters in script Nko.

---

```jule
static Nushu: &RangeTable
```
The set of Unicode characters in script Nushu.

---

```jule
static NyiakengPuachueHmong: &RangeTable
```
The set of Unicode characters in script NyiakengPuachueHmong.

---

```jule
static Ogham: &RangeTable
```
The set of Unicode characters in script Ogham.

---

```jule
static OlChiki: &RangeTable
```
The set of Unicode characters in script OlChiki.

---

```jule
static OldHungarian: &RangeTable
```
The set of Unicode characters in script OldHungarian.

---

```jule
static OldItalic: &RangeTable
```
The set of Unicode characters in script OldItalic.

---

```jule
static OldNorthArabian: &RangeTable
```
The set of Unicode characters in script OldNorthArabian.

---

```jule
static OldPermic: &RangeTable
```
The set of Unicode characters in script OldPermic.

---

```jule
static OldPersian: &RangeTable
```
The set of Unicode characters in script OldPersian.

---

```jule
static OldSogdian: &RangeTable
```
The set of Unicode characters in script OldSogdian.

---

```jule
static OldSouthArabian: &RangeTable
```
The set of Unicode characters in script OldSouthArabian.

---

```jule
static OldTurkic: &RangeTable
```
The set of Unicode characters in script OldTurkic.

---

```jule
static OldUyghur: &RangeTable
```
The set of Unicode characters in script OldUyghur.

---

```jule
static Oriya: &RangeTable
```
The set of Unicode characters in script Oriya.

---

```jule
static Osage: &RangeTable
```
The set of Unicode characters in script Osage.

---

```jule
static Osmanya: &RangeTable
```
The set of Unicode characters in script Osmanya.

---

```jule
static PahawhHmong: &RangeTable
```
The set of Unicode characters in script PahawhHmong.

---

```jule
static Palmyrene: &RangeTable
```
The set of Unicode characters in script Palmyrene.

---

```jule
static PauCinHau: &RangeTable
```
The set of Unicode characters in script PauCinHau.

---

```jule
static PhagsPa: &RangeTable
```
The set of Unicode characters in script PhagsPa.

---

```jule
static Phoenician: &RangeTable
```
The set of Unicode characters in script Phoenician.

---

```jule
static PsalterPahlavi: &RangeTable
```
The set of Unicode characters in script PsalterPahlavi.

---

```jule
static Rejang: &RangeTable
```
The set of Unicode characters in script Rejang.

---

```jule
static Runic: &RangeTable
```
The set of Unicode characters in script Runic.

---

```jule
static Samaritan: &RangeTable
```
The set of Unicode characters in script Samaritan.

---

```jule
static Saurashtra: &RangeTable
```
The set of Unicode characters in script Saurashtra.

---

```jule
static Sharada: &RangeTable
```
The set of Unicode characters in script Sharada.

---

```jule
static Shavian: &RangeTable
```
The set of Unicode characters in script Shavian.

---

```jule
static Siddham: &RangeTable
```
The set of Unicode characters in script Siddham.

---

```jule
static SignWriting: &RangeTable
```
The set of Unicode characters in script SignWriting.

---

```jule
static Sinhala: &RangeTable
```
The set of Unicode characters in script Sinhala.

---

```jule
static Sogdian: &RangeTable
```
The set of Unicode characters in script Sogdian.

---

```jule
static SoraSompeng: &RangeTable
```
The set of Unicode characters in script SoraSompeng.

---

```jule
static Soyombo: &RangeTable
```
The set of Unicode characters in script Soyombo.

---

```jule
static Sundanese: &RangeTable
```
The set of Unicode characters in script Sundanese.

---

```jule
static SylotiNagri: &RangeTable
```
The set of Unicode characters in script SylotiNagri.

---

```jule
static Syriac: &RangeTable
```
The set of Unicode characters in script Syriac.

---

```jule
static Tagalog: &RangeTable
```
The set of Unicode characters in script Tagalog.

---

```jule
static Tagbanwa: &RangeTable
```
The set of Unicode characters in script Tagbanwa.

---

```jule
static TaiLe: &RangeTable
```
The set of Unicode characters in script TaiLe.

---

```jule
static TaiTham: &RangeTable
```
The set of Unicode characters in script TaiTham.

---

```jule
static TaiViet: &RangeTable
```
The set of Unicode characters in script TaiViet.

---

```jule
static Takri: &RangeTable
```
The set of Unicode characters in script Takri.

---

```jule
static Tamil: &RangeTable
```
The set of Unicode characters in script Tamil.

---

```jule
static Tangsa: &RangeTable
```
The set of Unicode characters in script Tangsa.

---

```jule
static Tangut: &RangeTable
```
The set of Unicode characters in script Tangut.

---

```jule
static Telugu: &RangeTable
```
The set of Unicode characters in script Telugu.

---

```jule
static Thaana: &RangeTable
```
The set of Unicode characters in script Thaana.

---

```jule
static Thai: &RangeTable
```
The set of Unicode characters in script Thai.

---

```jule
static Tibetan: &RangeTable
```
The set of Unicode characters in script Tibetan.

---

```jule
static Tifinagh: &RangeTable
```
The set of Unicode characters in script Tifinagh.

---

```jule
static Tirhuta: &RangeTable
```
The set of Unicode characters in script Tirhuta.

---

```jule
static Toto: &RangeTable
```
The set of Unicode characters in script Toto.

---

```jule
static Ugaritic: &RangeTable
```
The set of Unicode characters in script Ugaritic.

---

```jule
static Vai: &RangeTable
```
The set of Unicode characters in script Vai.

---

```jule
static Vithkuqi: &RangeTable
```
The set of Unicode characters in script Vithkuqi.

---

```jule
static Wancho: &RangeTable
```
The set of Unicode characters in script Wancho.

---

```jule
static WarangCiti: &RangeTable
```
The set of Unicode characters in script WarangCiti.

---

```jule
static Yezidi: &RangeTable
```
The set of Unicode characters in script Yezidi.

---

```jule
static Yi: &RangeTable
```
The set of Unicode characters in script Yi.

---

```jule
static ZanabazarSquare: &RangeTable
```
The set of Unicode characters in script ZanabazarSquare.

---

```jule
static Properties: map[str]&RangeTable
```
The set of Unicode property tables.

---

```jule
static AsciiHexDigit: &RangeTable
```

---

```jule
static BidiControl: &RangeTable
```

---

```jule
static Dash: &RangeTable
```

---

```jule
static Deprecated: &RangeTable
```

---

```jule
static Diacritic: &RangeTable
```

---

```jule
static Extender: &RangeTable
```

---

```jule
static HexDigit: &RangeTable
```

---

```jule
static Hyphen: &RangeTable
```

---

```jule
static IdsBinaryOperator: &RangeTable
```

---

```jule
static IdsTrinaryOperator: &RangeTable
```

---

```jule
static Ideographic: &RangeTable
```

---

```jule
static JoinControl: &RangeTable
```

---

```jule
static LogicalOrderException: &RangeTable
```

---

```jule
static NoncharacterCodePoint: &RangeTable
```

---

```jule
static OtherAlphabetic: &RangeTable
```

---

```jule
static OtherDefaultIgnorableCodePoint: &RangeTable
```

---

```jule
static OtherGraphemeExtend: &RangeTable
```

---

```jule
static OtherIdContinue: &RangeTable
```

---

```jule
static OtherIdStart: &RangeTable
```

---

```jule
static OtherLowercase: &RangeTable
```

---

```jule
static OtherMath: &RangeTable
```

---

```jule
static OtherUppercase: &RangeTable
```

---

```jule
static PatternSyntax: &RangeTable
```

---

```jule
static PatternWhiteSpace: &RangeTable
```

---

```jule
static PrependedConcatenationMark: &RangeTable
```

---

```jule
static QuotationMark: &RangeTable
```

---

```jule
static Radical: &RangeTable
```

---

```jule
static RegionalIndicator: &RangeTable
```

---

```jule
static SentenceTerminal: &RangeTable
```

---

```jule
static SoftDotted: &RangeTable
```

---

```jule
static TerminalPunctuation: &RangeTable
```

---

```jule
static UnifiedIdeograph: &RangeTable
```

---

```jule
static VariationSelector: &RangeTable
```

---

```jule
static WhiteSpace: &RangeTable
```

---

```jule
static CaseRanges: []CaseRange
```
The table describing case mappings for all letters with non-self mappings.

---

```jule
static FoldCategory: map[str]&RangeTable
```
Maps a category name to a table of code points outside the category that are equivalent under simple case folding to code points inside the category. If there is NO entry for a category name, there are NO such points.

---

```jule
static FoldScript: map[str]&RangeTable
```
Maps a script name to a table of code points outside the script that are equivalent under simple case folding to code points inside the script. If there is NO entry for a script name, there are NO such points.

---

```jule
static GraphicRanges: []&RangeTable
```
Defines the set of graphic characters according to Unicode.

## Functions

```jule
fn To(case: int, mut r: rune): rune
```
Maps the rune to the specified case: UpperCase, LowerCase, or TitleCase.

---

```jule
fn ToUpper(mut r: rune): rune
```
Maps the rune to upper case.

---

```jule
fn ToLower(mut r: rune): rune
```
Maps the rune to lower case.

---

```jule
fn Is(range_tab: &RangeTable, r: rune): bool
```
Reports whether the rune is in the specified table of ranges.

---

```jule
fn IsUpper(r: rune): bool
```
Reports whether the rune is an upper case letter.

---

```jule
fn IsLower(r: rune): bool
```
Reports whether the rune is a lower case letter.

---

```jule
fn IsDigit(r: rune): bool
```
Reports whether the rune is a decimal digit.

---

```jule
fn IsLetter(r: rune): bool
```
Reports whether the rune is a letter (category L).

---

```jule
fn IsNumber(r: rune): bool
```
Reports whether the rune is a number (category N).

---

```jule
fn IsPunct(r: rune): bool
```
Reports whether the rune is a Unicode punctuation character (category P).

---

```jule
fn IsSpace(r: rune): bool
```
Reports whether the rune is a space character as defined by Unicode's White Space property; in the Latin-1 space this is

`'\t'`, `'\n'`, `'\v'`, `'\f'`, `'\r'`, `' '`, `U+0085` (NEL), `U+00A0` (NBSP).

Other definitions of spacing characters are set by category Z and property PatternWhiteSpace.

---

```jule
fn IsGraphic(r: rune): bool
```
Such characters include letters, marks, numbers punctuation, symbols, and spaces, from categories L, M, N, P, S, ZS.

---

```jule
fn IsIn(r: rune, ranges: ...&RangeTable): bool
```
Reports whether the rune is a member of one of the ranges.

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
    LatinOffset: int
}
```
Defines a set of Unicode code points by listing the ranges of code points within the set. The ranges are listed in two slices to save space: a slice of 16-bit ranges and a slice of 32-bit ranges. The two slices must be in sorted order and non-overlapping. Also, r32 should contain only values >= 0x10000 (1<<16).