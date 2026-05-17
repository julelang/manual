# std/unicode

## Index

[Variables](#variables)\
[fn IsDigit\(r: rune\): bool](#isdigit)\
[fn IsGraphic\(r: rune\): bool](#isgraphic)\
[fn IsIn\(r: rune, ranges: \.\.\.&amp;RangeTable\): bool](#isin)\
[fn IsLetter\(r: rune\): bool](#isletter)\
[fn IsNumber\(r: rune\): bool](#isnumber)\
[fn IsPunct\(r: rune\): bool](#ispunct)\
[fn IsSpace\(r: rune\): bool](#isspace)\
[fn IsPrint\(r: rune\): bool](#isprint)\
[fn To\(case: int, mut r: rune\): rune](#to)\
[fn ToUpper\(mut r: rune\): rune](#toupper)\
[fn ToLower\(mut r: rune\): rune](#tolower)\
[fn ToTitle\(mut r: rune\): rune](#totitle)\
[fn Is\(rangeTab: &amp;RangeTable, r: rune\): bool](#is)\
[fn In\(r: rune, ranges: \.\.\.&amp;RangeTable\): bool](#in)\
[fn IsUpper\(r: rune\): bool](#isupper)\
[fn IsLower\(r: rune\): bool](#islower)\
[fn IsTitle\(r: rune\): bool](#istitle)\
[fn SimpleFold\(r: rune\): rune](#simplefold)\
[type SpecialCase](#specialcase)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ToUpper\(\*self, r: rune\): rune](#toupper-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ToTitle\(\*self, r: rune\): rune](#totitle-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ToLower\(\*self, r: rune\): rune](#tolower-1)\
[struct CaseRange](#caserange)\
[struct Range16](#range16)\
[struct Range32](#range32)\
[struct RangeTable](#rangetable)

## Variables

```jule
let AzeriCase: SpecialCase = _TurkishCase
```

---

```jule
let GraphicRanges = [ ... ]
```
Defines the set of graphic characters according to Unicode\.

---

```jule
let PrintRanges = [ ... ]
```
Defines the set of printable characters according to Jule\. ASCII space, U\+0020, is handled separately\.

---

```jule
const (
	MaxRune         = '\U0010FFFF' // Maximum valid Unicode code point.
	ReplacementChar = '\uFFFD'     // Represents invalid code points.
	MaxASCII        = '\u007F'     // Maximum ASCII value.
	MaxLatin1       = '\u00FF'     // Maximum Latin-1 value.
)
```


---

```jule
const (
	UpperCase = iota
	LowerCase
	TitleCase
	MaxCase
)
```
Indices into the delta arrays inside CaseRanges for case mapping\.

---

```jule
const (
	UpperLower = MaxRune + 1 // (Cannot be a valid delta.)
)
```
If the Delta field of a \[CaseRange\] is UpperLower, it means this CaseRange represents a sequence of the form \(say\) \[Upper\] \[Lower\] \[Upper\] \[Lower\]\.

---

```jule
const Version = "17.0.0"
```
The Unicode edition from which the tables are derived\.

---

```jule
let Categories: map[string]&RangeTable = { ... }
```
The set of Unicode category tables\.

---

```jule
let CategoryAliases = map[string]string{ ... }
```
Maps category aliases to standard category names\.

---

```jule
let mut Cc = _Cc    // Cc is the set of Unicode characters in category Cc (Other, control).
let mut Cf = _Cf    // Cf is the set of Unicode characters in category Cf (Other, format).
let mut Cn = _Cn    // Cn is the set of Unicode characters in category Cn (Other, not assigned).
let mut Co = _Co    // Co is the set of Unicode characters in category Co (Other, private use).
let mut Cs = _Cs    // Cs is the set of Unicode characters in category Cs (Other, surrogate).
let mut Digit = _Nd // Digit is the set of Unicode characters with the "decimal digit" property.
let mut Nd = _Nd    // Nd is the set of Unicode characters in category Nd (Number, decimal digit).
let mut LC = _LC    // LC is the set of Unicode characters in category LC (Letter, cased: Ll | Lt | Lu).
let mut Letter = _L // Letter/L is the set of Unicode letters, category L.
let mut L = _L
let mut Lm = _Lm    // Lm is the set of Unicode characters in category Lm (Letter, modifier).
let mut Lo = _Lo    // Lo is the set of Unicode characters in category Lo (Letter, other).
let mut Lower = _Ll // Lower is the set of Unicode lower case letters.
let mut Ll = _Ll    // Ll is the set of Unicode characters in category Ll (Letter, lowercase).
let mut Mark = _M   // Mark/M is the set of Unicode mark characters, category M.
let mut M = _M
let mut Mc = _Mc    // Mc is the set of Unicode characters in category Mc (Mark, spacing combining).
let mut Me = _Me    // Me is the set of Unicode characters in category Me (Mark, enclosing).
let mut Mn = _Mn    // Mn is the set of Unicode characters in category Mn (Mark, nonspacing).
let mut Nl = _Nl    // Nl is the set of Unicode characters in category Nl (Number, letter).
let mut No = _No    // No is the set of Unicode characters in category No (Number, other).
let mut Number = _N // Number/N is the set of Unicode number characters, category N.
let mut N = _N
let mut Other = _C // Other/C is the set of Unicode control, special, and unassigned code points, category C.
let mut C = _C
let mut Pc = _Pc   // Pc is the set of Unicode characters in category Pc (Punctuation, connector).
let mut Pd = _Pd   // Pd is the set of Unicode characters in category Pd (Punctuation, dash).
let mut Pe = _Pe   // Pe is the set of Unicode characters in category Pe (Punctuation, close).
let mut Pf = _Pf   // Pf is the set of Unicode characters in category Pf (Punctuation, final quote).
let mut Pi = _Pi   // Pi is the set of Unicode characters in category Pi (Punctuation, initial quote).
let mut Po = _Po   // Po is the set of Unicode characters in category Po (Punctuation, other).
let mut Ps = _Ps   // Ps is the set of Unicode characters in category Ps (Punctuation, open).
let mut Punct = _P // Punct/P is the set of Unicode punctuation characters, category P.
let mut P = _P
let mut Sc = _Sc   // Sc is the set of Unicode characters in category Sc (Symbol, currency).
let mut Sk = _Sk   // Sk is the set of Unicode characters in category Sk (Symbol, modifier).
let mut Sm = _Sm   // Sm is the set of Unicode characters in category Sm (Symbol, math).
let mut So = _So   // So is the set of Unicode characters in category So (Symbol, other).
let mut Space = _Z // Space/Z is the set of Unicode space characters, category Z.
let mut Z = _Z
let mut Symbol = _S // Symbol/S is the set of Unicode symbol characters, category S.
let mut S = _S
let mut Title = _Lt // Title is the set of Unicode title case letters.
let mut Lt = _Lt    // Lt is the set of Unicode characters in category Lt (Letter, titlecase).
let mut Upper = _Lu // Upper is the set of Unicode upper case letters.
let mut Lu = _Lu    // Lu is the set of Unicode characters in category Lu (Letter, uppercase).
let mut Zl = _Zl    // Zl is the set of Unicode characters in category Zl (Separator, line).
let mut Zp = _Zp    // Zp is the set of Unicode characters in category Zp (Separator, paragraph).
let mut Zs = _Zs    // Zs is the set of Unicode characters in category Zs (Separator, space).
```
These variables have type \*RangeTable\.

---

```jule
let mut Scripts = map[string]&RangeTable{ ... }
```
Set of Unicode script tables\.

---

```jule
let mut Adlam = _Adlam                                   // Adlam is the set of Unicode characters in script Adlam.
let mut Ahom = _Ahom                                     // Ahom is the set of Unicode characters in script Ahom.
let mut Anatolian_Hieroglyphs = _Anatolian_Hieroglyphs   // Anatolian_Hieroglyphs is the set of Unicode characters in script Anatolian_Hieroglyphs.
let mut Arabic = _Arabic                                 // Arabic is the set of Unicode characters in script Arabic.
let mut Armenian = _Armenian                             // Armenian is the set of Unicode characters in script Armenian.
let mut Avestan = _Avestan                               // Avestan is the set of Unicode characters in script Avestan.
let mut Balinese = _Balinese                             // Balinese is the set of Unicode characters in script Balinese.
let mut Bamum = _Bamum                                   // Bamum is the set of Unicode characters in script Bamum.
let mut Bassa_Vah = _Bassa_Vah                           // Bassa_Vah is the set of Unicode characters in script Bassa_Vah.
let mut Batak = _Batak                                   // Batak is the set of Unicode characters in script Batak.
let mut Bengali = _Bengali                               // Bengali is the set of Unicode characters in script Bengali.
let mut Beria_Erfe = _Beria_Erfe                         // Beria_Erfe is the set of Unicode characters in script Beria_Erfe.
let mut Bhaiksuki = _Bhaiksuki                           // Bhaiksuki is the set of Unicode characters in script Bhaiksuki.
let mut Bopomofo = _Bopomofo                             // Bopomofo is the set of Unicode characters in script Bopomofo.
let mut Brahmi = _Brahmi                                 // Brahmi is the set of Unicode characters in script Brahmi.
let mut Braille = _Braille                               // Braille is the set of Unicode characters in script Braille.
let mut Buginese = _Buginese                             // Buginese is the set of Unicode characters in script Buginese.
let mut Buhid = _Buhid                                   // Buhid is the set of Unicode characters in script Buhid.
let mut Canadian_Aboriginal = _Canadian_Aboriginal       // Canadian_Aboriginal is the set of Unicode characters in script Canadian_Aboriginal.
let mut Carian = _Carian                                 // Carian is the set of Unicode characters in script Carian.
let mut Caucasian_Albanian = _Caucasian_Albanian         // Caucasian_Albanian is the set of Unicode characters in script Caucasian_Albanian.
let mut Chakma = _Chakma                                 // Chakma is the set of Unicode characters in script Chakma.
let mut Cham = _Cham                                     // Cham is the set of Unicode characters in script Cham.
let mut Cherokee = _Cherokee                             // Cherokee is the set of Unicode characters in script Cherokee.
let mut Chorasmian = _Chorasmian                         // Chorasmian is the set of Unicode characters in script Chorasmian.
let mut Common = _Common                                 // Common is the set of Unicode characters in script Common.
let mut Coptic = _Coptic                                 // Coptic is the set of Unicode characters in script Coptic.
let mut Cuneiform = _Cuneiform                           // Cuneiform is the set of Unicode characters in script Cuneiform.
let mut Cypriot = _Cypriot                               // Cypriot is the set of Unicode characters in script Cypriot.
let mut Cypro_Minoan = _Cypro_Minoan                     // Cypro_Minoan is the set of Unicode characters in script Cypro_Minoan.
let mut Cyrillic = _Cyrillic                             // Cyrillic is the set of Unicode characters in script Cyrillic.
let mut Deseret = _Deseret                               // Deseret is the set of Unicode characters in script Deseret.
let mut Devanagari = _Devanagari                         // Devanagari is the set of Unicode characters in script Devanagari.
let mut Dives_Akuru = _Dives_Akuru                       // Dives_Akuru is the set of Unicode characters in script Dives_Akuru.
let mut Dogra = _Dogra                                   // Dogra is the set of Unicode characters in script Dogra.
let mut Duployan = _Duployan                             // Duployan is the set of Unicode characters in script Duployan.
let mut Egyptian_Hieroglyphs = _Egyptian_Hieroglyphs     // Egyptian_Hieroglyphs is the set of Unicode characters in script Egyptian_Hieroglyphs.
let mut Elbasan = _Elbasan                               // Elbasan is the set of Unicode characters in script Elbasan.
let mut Elymaic = _Elymaic                               // Elymaic is the set of Unicode characters in script Elymaic.
let mut Ethiopic = _Ethiopic                             // Ethiopic is the set of Unicode characters in script Ethiopic.
let mut Garay = _Garay                                   // Garay is the set of Unicode characters in script Garay.
let mut Georgian = _Georgian                             // Georgian is the set of Unicode characters in script Georgian.
let mut Glagolitic = _Glagolitic                         // Glagolitic is the set of Unicode characters in script Glagolitic.
let mut Gothic = _Gothic                                 // Gothic is the set of Unicode characters in script Gothic.
let mut Grantha = _Grantha                               // Grantha is the set of Unicode characters in script Grantha.
let mut Greek = _Greek                                   // Greek is the set of Unicode characters in script Greek.
let mut Gujarati = _Gujarati                             // Gujarati is the set of Unicode characters in script Gujarati.
let mut Gunjala_Gondi = _Gunjala_Gondi                   // Gunjala_Gondi is the set of Unicode characters in script Gunjala_Gondi.
let mut Gurmukhi = _Gurmukhi                             // Gurmukhi is the set of Unicode characters in script Gurmukhi.
let mut Gurung_Khema = _Gurung_Khema                     // Gurung_Khema is the set of Unicode characters in script Gurung_Khema.
let mut Han = _Han                                       // Han is the set of Unicode characters in script Han.
let mut Hangul = _Hangul                                 // Hangul is the set of Unicode characters in script Hangul.
let mut Hanifi_Rohingya = _Hanifi_Rohingya               // Hanifi_Rohingya is the set of Unicode characters in script Hanifi_Rohingya.
let mut Hanunoo = _Hanunoo                               // Hanunoo is the set of Unicode characters in script Hanunoo.
let mut Hatran = _Hatran                                 // Hatran is the set of Unicode characters in script Hatran.
let mut Hebrew = _Hebrew                                 // Hebrew is the set of Unicode characters in script Hebrew.
let mut Hiragana = _Hiragana                             // Hiragana is the set of Unicode characters in script Hiragana.
let mut Imperial_Aramaic = _Imperial_Aramaic             // Imperial_Aramaic is the set of Unicode characters in script Imperial_Aramaic.
let mut Inherited = _Inherited                           // Inherited is the set of Unicode characters in script Inherited.
let mut Inscriptional_Pahlavi = _Inscriptional_Pahlavi   // Inscriptional_Pahlavi is the set of Unicode characters in script Inscriptional_Pahlavi.
let mut Inscriptional_Parthian = _Inscriptional_Parthian // Inscriptional_Parthian is the set of Unicode characters in script Inscriptional_Parthian.
let mut Javanese = _Javanese                             // Javanese is the set of Unicode characters in script Javanese.
let mut Kaithi = _Kaithi                                 // Kaithi is the set of Unicode characters in script Kaithi.
let mut Kannada = _Kannada                               // Kannada is the set of Unicode characters in script Kannada.
let mut Katakana = _Katakana                             // Katakana is the set of Unicode characters in script Katakana.
let mut Kawi = _Kawi                                     // Kawi is the set of Unicode characters in script Kawi.
let mut Kayah_Li = _Kayah_Li                             // Kayah_Li is the set of Unicode characters in script Kayah_Li.
let mut Kharoshthi = _Kharoshthi                         // Kharoshthi is the set of Unicode characters in script Kharoshthi.
let mut Khitan_Small_Script = _Khitan_Small_Script       // Khitan_Small_Script is the set of Unicode characters in script Khitan_Small_Script.
let mut Khmer = _Khmer                                   // Khmer is the set of Unicode characters in script Khmer.
let mut Khojki = _Khojki                                 // Khojki is the set of Unicode characters in script Khojki.
let mut Khudawadi = _Khudawadi                           // Khudawadi is the set of Unicode characters in script Khudawadi.
let mut Kirat_Rai = _Kirat_Rai                           // Kirat_Rai is the set of Unicode characters in script Kirat_Rai.
let mut Lao = _Lao                                       // Lao is the set of Unicode characters in script Lao.
let mut Latin = _Latin                                   // Latin is the set of Unicode characters in script Latin.
let mut Lepcha = _Lepcha                                 // Lepcha is the set of Unicode characters in script Lepcha.
let mut Limbu = _Limbu                                   // Limbu is the set of Unicode characters in script Limbu.
let mut Linear_A = _Linear_A                             // Linear_A is the set of Unicode characters in script Linear_A.
let mut Linear_B = _Linear_B                             // Linear_B is the set of Unicode characters in script Linear_B.
let mut Lisu = _Lisu                                     // Lisu is the set of Unicode characters in script Lisu.
let mut Lycian = _Lycian                                 // Lycian is the set of Unicode characters in script Lycian.
let mut Lydian = _Lydian                                 // Lydian is the set of Unicode characters in script Lydian.
let mut Mahajani = _Mahajani                             // Mahajani is the set of Unicode characters in script Mahajani.
let mut Makasar = _Makasar                               // Makasar is the set of Unicode characters in script Makasar.
let mut Malayalam = _Malayalam                           // Malayalam is the set of Unicode characters in script Malayalam.
let mut Mandaic = _Mandaic                               // Mandaic is the set of Unicode characters in script Mandaic.
let mut Manichaean = _Manichaean                         // Manichaean is the set of Unicode characters in script Manichaean.
let mut Marchen = _Marchen                               // Marchen is the set of Unicode characters in script Marchen.
let mut Masaram_Gondi = _Masaram_Gondi                   // Masaram_Gondi is the set of Unicode characters in script Masaram_Gondi.
let mut Medefaidrin = _Medefaidrin                       // Medefaidrin is the set of Unicode characters in script Medefaidrin.
let mut Meetei_Mayek = _Meetei_Mayek                     // Meetei_Mayek is the set of Unicode characters in script Meetei_Mayek.
let mut Mende_Kikakui = _Mende_Kikakui                   // Mende_Kikakui is the set of Unicode characters in script Mende_Kikakui.
let mut Meroitic_Cursive = _Meroitic_Cursive             // Meroitic_Cursive is the set of Unicode characters in script Meroitic_Cursive.
let mut Meroitic_Hieroglyphs = _Meroitic_Hieroglyphs     // Meroitic_Hieroglyphs is the set of Unicode characters in script Meroitic_Hieroglyphs.
let mut Miao = _Miao                                     // Miao is the set of Unicode characters in script Miao.
let mut Modi = _Modi                                     // Modi is the set of Unicode characters in script Modi.
let mut Mongolian = _Mongolian                           // Mongolian is the set of Unicode characters in script Mongolian.
let mut Mro = _Mro                                       // Mro is the set of Unicode characters in script Mro.
let mut Multani = _Multani                               // Multani is the set of Unicode characters in script Multani.
let mut Myanmar = _Myanmar                               // Myanmar is the set of Unicode characters in script Myanmar.
let mut Nabataean = _Nabataean                           // Nabataean is the set of Unicode characters in script Nabataean.
let mut Nag_Mundari = _Nag_Mundari                       // Nag_Mundari is the set of Unicode characters in script Nag_Mundari.
let mut Nandinagari = _Nandinagari                       // Nandinagari is the set of Unicode characters in script Nandinagari.
let mut New_Tai_Lue = _New_Tai_Lue                       // New_Tai_Lue is the set of Unicode characters in script New_Tai_Lue.
let mut Newa = _Newa                                     // Newa is the set of Unicode characters in script Newa.
let mut Nko = _Nko                                       // Nko is the set of Unicode characters in script Nko.
let mut Nushu = _Nushu                                   // Nushu is the set of Unicode characters in script Nushu.
let mut Nyiakeng_Puachue_Hmong = _Nyiakeng_Puachue_Hmong // Nyiakeng_Puachue_Hmong is the set of Unicode characters in script Nyiakeng_Puachue_Hmong.
let mut Ogham = _Ogham                                   // Ogham is the set of Unicode characters in script Ogham.
let mut Ol_Chiki = _Ol_Chiki                             // Ol_Chiki is the set of Unicode characters in script Ol_Chiki.
let mut Ol_Onal = _Ol_Onal                               // Ol_Onal is the set of Unicode characters in script Ol_Onal.
let mut Old_Hungarian = _Old_Hungarian                   // Old_Hungarian is the set of Unicode characters in script Old_Hungarian.
let mut Old_Italic = _Old_Italic                         // Old_Italic is the set of Unicode characters in script Old_Italic.
let mut Old_North_Arabian = _Old_North_Arabian           // Old_North_Arabian is the set of Unicode characters in script Old_North_Arabian.
let mut Old_Permic = _Old_Permic                         // Old_Permic is the set of Unicode characters in script Old_Permic.
let mut Old_Persian = _Old_Persian                       // Old_Persian is the set of Unicode characters in script Old_Persian.
let mut Old_Sogdian = _Old_Sogdian                       // Old_Sogdian is the set of Unicode characters in script Old_Sogdian.
let mut Old_South_Arabian = _Old_South_Arabian           // Old_South_Arabian is the set of Unicode characters in script Old_South_Arabian.
let mut Old_Turkic = _Old_Turkic                         // Old_Turkic is the set of Unicode characters in script Old_Turkic.
let mut Old_Uyghur = _Old_Uyghur                         // Old_Uyghur is the set of Unicode characters in script Old_Uyghur.
let mut Oriya = _Oriya                                   // Oriya is the set of Unicode characters in script Oriya.
let mut Osage = _Osage                                   // Osage is the set of Unicode characters in script Osage.
let mut Osmanya = _Osmanya                               // Osmanya is the set of Unicode characters in script Osmanya.
let mut Pahawh_Hmong = _Pahawh_Hmong                     // Pahawh_Hmong is the set of Unicode characters in script Pahawh_Hmong.
let mut Palmyrene = _Palmyrene                           // Palmyrene is the set of Unicode characters in script Palmyrene.
let mut Pau_Cin_Hau = _Pau_Cin_Hau                       // Pau_Cin_Hau is the set of Unicode characters in script Pau_Cin_Hau.
let mut Phags_Pa = _Phags_Pa                             // Phags_Pa is the set of Unicode characters in script Phags_Pa.
let mut Phoenician = _Phoenician                         // Phoenician is the set of Unicode characters in script Phoenician.
let mut Psalter_Pahlavi = _Psalter_Pahlavi               // Psalter_Pahlavi is the set of Unicode characters in script Psalter_Pahlavi.
let mut Rejang = _Rejang                                 // Rejang is the set of Unicode characters in script Rejang.
let mut Runic = _Runic                                   // Runic is the set of Unicode characters in script Runic.
let mut Samaritan = _Samaritan                           // Samaritan is the set of Unicode characters in script Samaritan.
let mut Saurashtra = _Saurashtra                         // Saurashtra is the set of Unicode characters in script Saurashtra.
let mut Sharada = _Sharada                               // Sharada is the set of Unicode characters in script Sharada.
let mut Shavian = _Shavian                               // Shavian is the set of Unicode characters in script Shavian.
let mut Siddham = _Siddham                               // Siddham is the set of Unicode characters in script Siddham.
let mut Sidetic = _Sidetic                               // Sidetic is the set of Unicode characters in script Sidetic.
let mut SignWriting = _SignWriting                       // SignWriting is the set of Unicode characters in script SignWriting.
let mut Sinhala = _Sinhala                               // Sinhala is the set of Unicode characters in script Sinhala.
let mut Sogdian = _Sogdian                               // Sogdian is the set of Unicode characters in script Sogdian.
let mut Sora_Sompeng = _Sora_Sompeng                     // Sora_Sompeng is the set of Unicode characters in script Sora_Sompeng.
let mut Soyombo = _Soyombo                               // Soyombo is the set of Unicode characters in script Soyombo.
let mut Sundanese = _Sundanese                           // Sundanese is the set of Unicode characters in script Sundanese.
let mut Sunuwar = _Sunuwar                               // Sunuwar is the set of Unicode characters in script Sunuwar.
let mut Syloti_Nagri = _Syloti_Nagri                     // Syloti_Nagri is the set of Unicode characters in script Syloti_Nagri.
let mut Syriac = _Syriac                                 // Syriac is the set of Unicode characters in script Syriac.
let mut Tagalog = _Tagalog                               // Tagalog is the set of Unicode characters in script Tagalog.
let mut Tagbanwa = _Tagbanwa                             // Tagbanwa is the set of Unicode characters in script Tagbanwa.
let mut Tai_Le = _Tai_Le                                 // Tai_Le is the set of Unicode characters in script Tai_Le.
let mut Tai_Tham = _Tai_Tham                             // Tai_Tham is the set of Unicode characters in script Tai_Tham.
let mut Tai_Viet = _Tai_Viet                             // Tai_Viet is the set of Unicode characters in script Tai_Viet.
let mut Tai_Yo = _Tai_Yo                                 // Tai_Yo is the set of Unicode characters in script Tai_Yo.
let mut Takri = _Takri                                   // Takri is the set of Unicode characters in script Takri.
let mut Tamil = _Tamil                                   // Tamil is the set of Unicode characters in script Tamil.
let mut Tangsa = _Tangsa                                 // Tangsa is the set of Unicode characters in script Tangsa.
let mut Tangut = _Tangut                                 // Tangut is the set of Unicode characters in script Tangut.
let mut Telugu = _Telugu                                 // Telugu is the set of Unicode characters in script Telugu.
let mut Thaana = _Thaana                                 // Thaana is the set of Unicode characters in script Thaana.
let mut Thai = _Thai                                     // Thai is the set of Unicode characters in script Thai.
let mut Tibetan = _Tibetan                               // Tibetan is the set of Unicode characters in script Tibetan.
let mut Tifinagh = _Tifinagh                             // Tifinagh is the set of Unicode characters in script Tifinagh.
let mut Tirhuta = _Tirhuta                               // Tirhuta is the set of Unicode characters in script Tirhuta.
let mut Todhri = _Todhri                                 // Todhri is the set of Unicode characters in script Todhri.
let mut Tolong_Siki = _Tolong_Siki                       // Tolong_Siki is the set of Unicode characters in script Tolong_Siki.
let mut Toto = _Toto                                     // Toto is the set of Unicode characters in script Toto.
let mut Tulu_Tigalari = _Tulu_Tigalari                   // Tulu_Tigalari is the set of Unicode characters in script Tulu_Tigalari.
let mut Ugaritic = _Ugaritic                             // Ugaritic is the set of Unicode characters in script Ugaritic.
let mut Vai = _Vai                                       // Vai is the set of Unicode characters in script Vai.
let mut Vithkuqi = _Vithkuqi                             // Vithkuqi is the set of Unicode characters in script Vithkuqi.
let mut Wancho = _Wancho                                 // Wancho is the set of Unicode characters in script Wancho.
let mut Warang_Citi = _Warang_Citi                       // Warang_Citi is the set of Unicode characters in script Warang_Citi.
let mut Yezidi = _Yezidi                                 // Yezidi is the set of Unicode characters in script Yezidi.
let mut Yi = _Yi                                         // Yi is the set of Unicode characters in script Yi.
let mut Zanabazar_Square = _Zanabazar_Square             // Zanabazar_Square is the set of Unicode characters in script Zanabazar_Square.
```
These variables have type &amp;RangeTable\.

---

```jule
let mut Properties = map[string]&RangeTable{ ... }
```
Set of Unicode property tables\.

---

```jule
let mut ASCII_Hex_Digit = _ASCII_Hex_Digit                                       // ASCII_Hex_Digit is the set of Unicode characters with property ASCII_Hex_Digit.
let mut Bidi_Control = _Bidi_Control                                             // Bidi_Control is the set of Unicode characters with property Bidi_Control.
let mut Dash = _Dash                                                             // Dash is the set of Unicode characters with property Dash.
let mut Deprecated = _Deprecated                                                 // Deprecated is the set of Unicode characters with property Deprecated.
let mut Diacritic = _Diacritic                                                   // Diacritic is the set of Unicode characters with property Diacritic.
let mut Extender = _Extender                                                     // Extender is the set of Unicode characters with property Extender.
let mut Hex_Digit = _Hex_Digit                                                   // Hex_Digit is the set of Unicode characters with property Hex_Digit.
let mut Hyphen = _Hyphen                                                         // Hyphen is the set of Unicode characters with property Hyphen.
let mut IDS_Binary_Operator = _IDS_Binary_Operator                               // IDS_Binary_Operator is the set of Unicode characters with property IDS_Binary_Operator.
let mut IDS_Trinary_Operator = _IDS_Trinary_Operator                             // IDS_Trinary_Operator is the set of Unicode characters with property IDS_Trinary_Operator.
let mut IDS_Unary_Operator = _IDS_Unary_Operator                                 // IDS_Unary_Operator is the set of Unicode characters with property IDS_Unary_Operator.
let mut ID_Compat_Math_Continue = _ID_Compat_Math_Continue                       // ID_Compat_Math_Continue is the set of Unicode characters with property ID_Compat_Math_Continue.
let mut ID_Compat_Math_Start = _ID_Compat_Math_Start                             // ID_Compat_Math_Start is the set of Unicode characters with property ID_Compat_Math_Start.
let mut Ideographic = _Ideographic                                               // Ideographic is the set of Unicode characters with property Ideographic.
let mut Join_Control = _Join_Control                                             // Join_Control is the set of Unicode characters with property Join_Control.
let mut Logical_Order_Exception = _Logical_Order_Exception                       // Logical_Order_Exception is the set of Unicode characters with property Logical_Order_Exception.
let mut Modifier_Combining_Mark = _Modifier_Combining_Mark                       // Modifier_Combining_Mark is the set of Unicode characters with property Modifier_Combining_Mark.
let mut Noncharacter_Code_Point = _Noncharacter_Code_Point                       // Noncharacter_Code_Point is the set of Unicode characters with property Noncharacter_Code_Point.
let mut Other_Alphabetic = _Other_Alphabetic                                     // Other_Alphabetic is the set of Unicode characters with property Other_Alphabetic.
let mut Other_Default_Ignorable_Code_Point = _Other_Default_Ignorable_Code_Point // Other_Default_Ignorable_Code_Point is the set of Unicode characters with property Other_Default_Ignorable_Code_Point.
let mut Other_Grapheme_Extend = _Other_Grapheme_Extend                           // Other_Grapheme_Extend is the set of Unicode characters with property Other_Grapheme_Extend.
let mut Other_ID_Continue = _Other_ID_Continue                                   // Other_ID_Continue is the set of Unicode characters with property Other_ID_Continue.
let mut Other_ID_Start = _Other_ID_Start                                         // Other_ID_Start is the set of Unicode characters with property Other_ID_Start.
let mut Other_Lowercase = _Other_Lowercase                                       // Other_Lowercase is the set of Unicode characters with property Other_Lowercase.
let mut Other_Math = _Other_Math                                                 // Other_Math is the set of Unicode characters with property Other_Math.
let mut Other_Uppercase = _Other_Uppercase                                       // Other_Uppercase is the set of Unicode characters with property Other_Uppercase.
let mut Pattern_Syntax = _Pattern_Syntax                                         // Pattern_Syntax is the set of Unicode characters with property Pattern_Syntax.
let mut Pattern_White_Space = _Pattern_White_Space                               // Pattern_White_Space is the set of Unicode characters with property Pattern_White_Space.
let mut Prepended_Concatenation_Mark = _Prepended_Concatenation_Mark             // Prepended_Concatenation_Mark is the set of Unicode characters with property Prepended_Concatenation_Mark.
let mut Quotation_Mark = _Quotation_Mark                                         // Quotation_Mark is the set of Unicode characters with property Quotation_Mark.
let mut Radical = _Radical                                                       // Radical is the set of Unicode characters with property Radical.
let mut Regional_Indicator = _Regional_Indicator                                 // Regional_Indicator is the set of Unicode characters with property Regional_Indicator.
let mut STerm = _Sentence_Terminal                                               // STerm is an alias for Sentence_Terminal.
let mut Sentence_Terminal = _Sentence_Terminal                                   // Sentence_Terminal is the set of Unicode characters with property Sentence_Terminal.
let mut Soft_Dotted = _Soft_Dotted                                               // Soft_Dotted is the set of Unicode characters with property Soft_Dotted.
let mut Terminal_Punctuation = _Terminal_Punctuation                             // Terminal_Punctuation is the set of Unicode characters with property Terminal_Punctuation.
let mut Unified_Ideograph = _Unified_Ideograph                                   // Unified_Ideograph is the set of Unicode characters with property Unified_Ideograph.
let mut Variation_Selector = _Variation_Selector                                 // Variation_Selector is the set of Unicode characters with property Variation_Selector.
let mut White_Space = _White_Space                                               // White_Space is the set of Unicode characters with property White_Space.
```
These variables have type &amp;RangeTable\.

---

```jule
let FoldCategory = map[string]&RangeTable{ ... }
```
Maps a category name to a table of code points outside the category that are equivalent under simple case folding to code points inside the category\. If there is no entry for a category name, there are no such points\.

---

```jule
let FoldScript = map[string]&RangeTable{ ... }
```
Maps a script name to a table of code points outside the script that are equivalent under simple case folding to code points inside the script\. If there is no entry for a script name, there are no such points\.

## IsDigit
```jule
fn IsDigit(r: rune): bool
```
Reports whether the rune is a decimal digit\.

## IsGraphic
```jule
fn IsGraphic(r: rune): bool
```
Such characters include letters, marks, numbers, punctuation, symbols, and spaces, from categories L, M, N, P, S, Zs\.

## IsIn
```jule
fn IsIn(r: rune, ranges: ...&RangeTable): bool
```
Reports whether the rune is a member of one of the ranges\.

## IsLetter
```jule
fn IsLetter(r: rune): bool
```
Reports whether the rune is a letter \(category L\)\.

## IsNumber
```jule
fn IsNumber(r: rune): bool
```
Reports whether the rune is a number \(category N\)\.

## IsPunct
```jule
fn IsPunct(r: rune): bool
```
Reports whether the rune is a Unicode punctuation character \(category P\)\.

## IsSpace
```jule
fn IsSpace(r: rune): bool
```
Reports whether the rune is a space character as defined by Unicode&#39;s White Space property; in the Latin\-1 space this is

```
'\t', '\n', '\v', '\f', '\r', ' ', U+0085 (NEL), U+00A0 (NBSP).
```
Other definitions of spacing characters are set by category Z and property Pattern\_White\_Space\.

## IsPrint
```jule
fn IsPrint(r: rune): bool
```
Reports whether the rune is defined as printable by Jule\. Such characters include letters, marks, numbers, punctuation, symbols, and the ASCII space character, from categories \[L\], \[M\], \[N\], \[P\], \[S\] and the ASCII space character\. This categorization is the same as \[IsGraphic\] except that the only spacing character is ASCII space, U\+0020\.

## To
```jule
fn To(case: int, mut r: rune): rune
```
Maps the rune to the specified case: UpperCase, LowerCase, or TitleCase\.

## ToUpper
```jule
fn ToUpper(mut r: rune): rune
```
Maps the rune to upper case\.

## ToLower
```jule
fn ToLower(mut r: rune): rune
```
Maps the rune to lower case\.

## ToTitle
```jule
fn ToTitle(mut r: rune): rune
```
Maps the rune to title case\.

## Is
```jule
fn Is(rangeTab: &RangeTable, r: rune): bool
```
Reports whether the rune is in the specified table of ranges\.

## In
```jule
fn In(r: rune, ranges: ...&RangeTable): bool
```
Reports whether the rune is a member of one of the ranges\.

## IsUpper
```jule
fn IsUpper(r: rune): bool
```
Reports whether the rune is an upper case letter\.

## IsLower
```jule
fn IsLower(r: rune): bool
```
Reports whether the rune is a lower case letter\.

## IsTitle
```jule
fn IsTitle(r: rune): bool
```
Reports whether the rune is a title case letter\.

## SimpleFold
```jule
fn SimpleFold(r: rune): rune
```
Iterates over Unicode code points equivalent under the Unicode\-defined simple case folding\. Among the code points equivalent to rune \(including rune itself\), SimpleFold returns the smallest rune &gt; r if one exists, or else the smallest rune &gt;= 0\. If r is not a valid Unicode code point, SimpleFold\(r\) returns r\.

For example:

```
SimpleFold('A') = 'a'
SimpleFold('a') = 'A'

SimpleFold('K') = 'k'
SimpleFold('k') = '\u212A' (Kelvin symbol, K)
SimpleFold('\u212A') = 'K'

SimpleFold('1') = '1'

SimpleFold(-2) = -2
```


## SpecialCase
```jule
type SpecialCase: []CaseRange
```
Represents language\-specific case mappings such as Turkish\. Methods of SpecialCase customize \(by overriding\) the standard mappings\.

### ToUpper
```jule
fn ToUpper(*self, r: rune): rune
```
Maps the rune to upper case giving priority to the special mapping\.

### ToTitle
```jule
fn ToTitle(*self, r: rune): rune
```
Maps the rune to title case giving priority to the special mapping\.

### ToLower
```jule
fn ToLower(*self, r: rune): rune
```
Maps the rune to lower case giving priority to the special mapping\.

## CaseRange
```jule
struct CaseRange {
	Lo:    u32
	Hi:    u32
	Delta: d
}
```
Represents a range of Unicode code points for simple \(one code point to one code point\) case conversion\. The range runs from lo to hi inclusive, with a fixed stride of 1\. Deltas are the number to add to the code point to reach the code point for a different case for that character\. They may be negative\. If zero, it means the character is in the corresponding case\. There is a special case representing sequences of alternating corresponding Upper and Lower pairs\. It appears with a fixed delta of

```
{UpperLower, UpperLower, UpperLower}
```
The constant UpperLower has an otherwise impossible delta value\.

## Range16
```jule
struct Range16 {
	Lo:     u16
	Hi:     u16
	Stride: u16
}
```
Represents of a range of 16\-bit Unicode code points\. The range runs from lo to hi inclusive and has the specified stride\.

## Range32
```jule
struct Range32 {
	Lo:     u32
	Hi:     u32
	Stride: u32
}
```
Represents of a range of Unicode code points and is used when one or more of the values will not fit in 16 bits\. The range runs from lo to hi inclusive and has the specified stride\. lo and hi must always be &gt;= 1&lt;&lt;16\.

## RangeTable
```jule
struct RangeTable {
	R16:         []Range16
	R32:         []Range32
	LatinOffset: int // number of entries in R16 with Hi <= MaxLatin1
}
```
Defines a set of Unicode code points by listing the ranges of code points within the set\. The ranges are listed in two slices to save space: a slice of 16\-bit ranges and a slice of 32\-bit ranges\. The two slices must be in sorted order and non\-overlapping\. Also, R32 should contain only values &gt;= 0x10000 \(1&lt;&lt;16\)\.