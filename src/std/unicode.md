# std/unicode

## Index

[Variables](#variables)\
[fn IsGraphic\(r: rune\): bool](#isgraphic)\
[fn IsIn\(r: rune, ranges: \.\.\.&amp;RangeTable\): bool](#isin)\
[fn IsLetter\(r: rune\): bool](#isletter)\
[fn IsNumber\(r: rune\): bool](#isnumber)\
[fn IsPunct\(r: rune\): bool](#ispunct)\
[fn IsSpace\(r: rune\): bool](#isspace)\
[fn IsPrint\(r: rune\): bool](#isprint)\
[fn IsDigit\(r: rune\): bool](#isdigit)\
[fn To\(case: int, mut r: rune\): rune](#to)\
[fn ToUpper\(mut r: rune\): rune](#toupper)\
[fn ToLower\(mut r: rune\): rune](#tolower)\
[fn Is\(rangeTab: &amp;RangeTable, r: rune\): bool](#is)\
[fn In\(r: rune, ranges: \.\.\.&amp;RangeTable\): bool](#in)\
[fn IsUpper\(r: rune\): bool](#isupper)\
[fn IsLower\(r: rune\): bool](#islower)\
[fn SimpleFold\(r: rune\): rune](#simplefold)\
[struct CaseRange](#caserange)\
[struct Range16](#range16)\
[struct Range32](#range32)\
[struct RangeTable](#rangetable)

## Variables

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
let Categories: map[str]&RangeTable = { ... }
```
The set of Unicode category tables\.

---

```jule
let CC: &RangeTable = _CC    // The set of Unicode characters in category CC (Other, control).
let CF: &RangeTable = _CF    // The set of Unicode characters in category CF (Other, format).
let CO: &RangeTable = _CO    // The set of Unicode characters in category CO (Other, private use).
let CS: &RangeTable = _CS    // The set of Unicode characters in category CS (Other, surrogate).
let Digit: &RangeTable = _ND // The set of Unicode characters with the "decimal Digit" property.
let ND: &RangeTable = _ND    // The set of Unicode characters in category ND (Number, decimal Digit).
let Letter: &RangeTable = _L // The set of Unicode letters, category L.
let L: &RangeTable = _L      // The set of Unicode letters, category L.
let LM: &RangeTable = _LM    // The set of Unicode characters in category LM (Letter, modifier).
let LO: &RangeTable = _LO    // The set of Unicode characters in category LO (Letter, other).
let Lower: &RangeTable = _LL // The set of Unicode Lower case letters.
let LL: &RangeTable = _LL    // The set of Unicode characters in category LL (Letter, lowercase).
let Mark: &RangeTable = _M   // The set of Unicode Mark characters, category M.
let M: &RangeTable = _M      // The set of Unicode Mark characters, category M.
let MC: &RangeTable = _MC    // The set of Unicode characters in category MC (Mark, spacing combining).
let ME: &RangeTable = _ME    // The set of Unicode characters in category ME (Mark, enclosing).
let MN: &RangeTable = _MN    // The set of Unicode characters in category MN (Mark, nonspacing).
let NL: &RangeTable = _NL    // The set of Unicode characters in category NL (Number, Letter).
let NO: &RangeTable = _NO    // The set of Unicode characters in category NO (Number, other).
let Number: &RangeTable = _N // The set of Unicode Number characters, category N.
let N: &RangeTable = _N      // The set of Unicode Number characters, category N.
let Other: &RangeTable = _C  // The set of Unicode control and special characters, category C.
let C: &RangeTable = _C      // The set of Unicode control and special characters, category C.
let PC: &RangeTable = _PC    // The set of Unicode characters in category PC (Punctuation, connector).
let PD: &RangeTable = _PD    // The set of Unicode characters in category PD (Punctuation, Dash).
let PE: &RangeTable = _PE    // The set of Unicode characters in category PE (Punctuation, close).
let PF: &RangeTable = _PF    // The set of Unicode characters in category PF (Punctuation, final quote).
let PI: &RangeTable = _PI    // The set of Unicode characters in category PI (Punctuation, initial quote).
let PO: &RangeTable = _PO    // The set of Unicode characters in category PO (Punctuation, otger).
let PS: &RangeTable = _PS    // The set of Unicode characters in category PS (Punctuation, open).
let Punct: &RangeTable = _P  // The set of Unicode punctuation characters, category P.
let P: &RangeTable = _P      // The set of Unicode punctuation characters, category P.
let SC: &RangeTable = _SC    // The set of Unicode characters in category SC (Symbol, currency).
let SK: &RangeTable = _SK    // The set of Unicode characters in category SK (Symbol, modifier).
let SM: &RangeTable = _SM    // The set of Unicode characters in category SM (Symbol, math).
let SO: &RangeTable = _SO    // The set of Unicode characters in category SO (Symbol, other).
let Space: &RangeTable = _Z  // The set of Unicode SPACE characters, category Z.
let Z: &RangeTable = _Z      // The set of Unicode SPACE characters, category Z.
let Symbol: &RangeTable = _S // The set of Unicode symbol characters, category S.
let S: &RangeTable = _S      // The set of Unicode symbol characters, category S.
let Title: &RangeTable = _LT // The set of Unicode Title case letters.
let LT: &RangeTable = _LT    // The set of Unicode characters in category LT (Letter, titlecase).
let Upper: &RangeTable = _LU // The set of Unicode Upper case letters.
let LU: &RangeTable = _LU    // The set of Unicode characters in category LU (Letter, uppercase).
let ZL: &RangeTable = _ZL    // The set of Unicode characters in category ZL (Separator, line).
let ZP: &RangeTable = _ZP    // The set of Unicode characters in category ZP (Separator, paragraph).
let ZS: &RangeTable = _ZS    // The set of Unicode characters in category ZS (Separator, Space).
```


---

```jule
let Scripts: map[str]&RangeTable = { ... }
```
The set of Unicode script tables\.

---

```jule
let Adlam: &RangeTable = _ADLAM                                  // The set of Unicode characters in script Adlam.
let Ahom: &RangeTable = _AHOM                                    // The set of Unicode characters in script Ahom.
let AnatolianHieroglyphs: &RangeTable = _ANATOLIAN_HIEROGLYPHS   // The set of Unicode characters in script AnatolianHieroglyphs.
let Arabic: &RangeTable = _ARABIC                                // The set of Unicode characters in script Arabic.
let Armenian: &RangeTable = _ARMENIAN                            // The set of Unicode characters in script Armenian.
let Avestan: &RangeTable = _AVESTAN                              // The set of Unicode characters in script Avestan.
let Balinese: &RangeTable = _BALINESE                            // The set of Unicode characters in script Balinese.
let Bamum: &RangeTable = _BAMUM                                  // The set of Unicode characters in script Bamum.
let BassaVah: &RangeTable = _BASSA_VAH                           // The set of Unicode characters in script BassaVah.
let Batak: &RangeTable = _BATAK                                  // The set of Unicode characters in script Batak.
let Bengali: &RangeTable = _BENGALI                              // The set of Unicode characters in script Bengali.
let Bhaiksuki: &RangeTable = _BHAIKSUKI                          // The set of Unicode characters in script Bhaiksuki.
let Bopomofo: &RangeTable = _BOPOMOFO                            // The set of Unicode characters in script Bopomofo.
let Brahmi: &RangeTable = _BRAHMI                                // The set of Unicode characters in script Brahmi.
let Braille: &RangeTable = _BRAILLE                              // The set of Unicode characters in script Braille.
let Buginese: &RangeTable = _BUGINESE                            // The set of Unicode characters in script Buginese.
let Buhid: &RangeTable = _BUHID                                  // The set of Unicode characters in script Buhid.
let CanadianAboriginal: &RangeTable = _CANADIAN_ABORIGINAL       // The set of Unicode characters in script CanadianAboriginal.
let Carian: &RangeTable = _CARIAN                                // The set of Unicode characters in script Carian.
let CaucasianAlbanian: &RangeTable = _CAUCASIAN_ALBANIAN         // The set of Unicode characters in script CaucasianAlbanian.
let Chakma: &RangeTable = _CHAKMA                                // The set of Unicode characters in script Chakma.
let Cham: &RangeTable = _CHAM                                    // The set of Unicode characters in script Cham.
let Cherokee: &RangeTable = _CHEROKEE                            // The set of Unicode characters in script Cherokee.
let Chorasmian: &RangeTable = _CHORASMIAN                        // The set of Unicode characters in script Chorasmian.
let Common: &RangeTable = _COMMON                                // The set of Unicode characters in script Common.
let Coptic: &RangeTable = _COPTIC                                // The set of Unicode characters in script Coptic.
let Cuneiform: &RangeTable = _CUNEIFORM                          // The set of Unicode characters in script Cuneiform.
let Cypriot: &RangeTable = _CYPRIOT                              // The set of Unicode characters in script Cypriot.
let CyproMinoan: &RangeTable = _CYPRO_MINOAN                     // The set of Unicode characters in script CyproMinoan.
let Cyrillic: &RangeTable = _CYRILLIC                            // The set of Unicode characters in script Cyrillic.
let Deseret: &RangeTable = _DESERET                              // The set of Unicode characters in script Deseret.
let Devanagari: &RangeTable = _DEVANAGARI                        // The set of Unicode characters in script Devanagari.
let DivesAkuru: &RangeTable = _DIVES_AKURU                       // The set of Unicode characters in script DivesAkuru.
let Dogra: &RangeTable = _DOGRA                                  // The set of Unicode characters in script Dogra.
let Duployan: &RangeTable = _DUPLOYAN                            // The set of Unicode characters in script Duployan.
let EgyptianHieroglyphs: &RangeTable = _EGYPTIAN_HIEROGLYPHS     // The set of Unicode characters in script EgyptianHieroglyphs.
let Elbasan: &RangeTable = _ELBASAN                              // The set of Unicode characters in script Elbasan.
let Elymaic: &RangeTable = _ELYMAIC                              // The set of Unicode characters in script Elymaic.
let Ethiopic: &RangeTable = _ETHIOPIC                            // The set of Unicode characters in script Ethiopic.
let Georgian: &RangeTable = _GEORGIAN                            // The set of Unicode characters in script Georgian.
let Glagolitic: &RangeTable = _GLAGOLITIC                        // The set of Unicode characters in script Glagolitic.
let Gothic: &RangeTable = _GOTHIC                                // The set of Unicode characters in script Gothic.
let Grantha: &RangeTable = _GRANTHA                              // The set of Unicode characters in script Grantha.
let Greek: &RangeTable = _GREEK                                  // The set of Unicode characters in script Greek.
let Gujarati: &RangeTable = _GUJARATI                            // The set of Unicode characters in script Gujarati.
let GunjalaGondi: &RangeTable = _GUNJALA_GONDI                   // The set of Unicode characters in script GunjalaGondi.
let Gurmukhi: &RangeTable = _GURMUKHI                            // The set of Unicode characters in script Gurmukhi.
let Han: &RangeTable = _HAN                                      // The set of Unicode characters in script Han.
let Hangul: &RangeTable = _HANGUL                                // The set of Unicode characters in script Hangul.
let HanifiRohingya: &RangeTable = _HANIFI_ROHINGYA               // The set of Unicode characters in script HanifiRohingya.
let Hanunoo: &RangeTable = _HANUNOO                              // The set of Unicode characters in script Hanunoo.
let Hatran: &RangeTable = _HATRAN                                // The set of Unicode characters in script Hatran.
let Hebrew: &RangeTable = _HEBREW                                // The set of Unicode characters in script Hebrew.
let Hiragana: &RangeTable = _HIRAGANA                            // The set of Unicode characters in script Hiragana.
let ImperialAramaic: &RangeTable = _IMPERIAL_ARAMAIC             // The set of Unicode characters in script ImperialAramaic.
let Inherited: &RangeTable = _INHERITED                          // The set of Unicode characters in script Inherited.
let InscriptionalPahlavi: &RangeTable = _INSCRIPTIONAL_PAHLAVI   // The set of Unicode characters in script InscriptionalPahlavi.
let InscriptionalParthian: &RangeTable = _INSCRIPTIONAL_PARTHIAN // The set of Unicode characters in script InscriptionalParthian.
let Javanese: &RangeTable = _JAVANESE                            // The set of Unicode characters in script Javanese.
let Kaithi: &RangeTable = _KAITHI                                // The set of Unicode characters in script Kaithi.
let Kannada: &RangeTable = _KANNADA                              // The set of Unicode characters in script Kannada.
let Katakana: &RangeTable = _KATAKANA                            // The set of Unicode characters in script Katakana.
let Kawi: &RangeTable = _KAWI                                    // The set of Unicode characters in script Kawi.
let KayahLi: &RangeTable = _KAYAH_LI                             // The set of Unicode characters in script Kayah_Li.
let Kharoshthi = _KHAROSHTHI                                     // The set of Unicode characters in script Kharoshthi.
let KhitanSmallScript: &RangeTable = _KHITAN_SMALL_SCRIPT        // The set of Unicode characters in script KhitanSmallScript.
let Khmer: &RangeTable = _KHMER                                  // The set of Unicode characters in script Khmer.
let Khojki: &RangeTable = _KHOJKI                                // The set of Unicode characters in script Khojki.
let Khudawadi: &RangeTable = _KHUDAWADI                          // The set of Unicode characters in script Khudawadi.
let Lao: &RangeTable = _LAO                                      // The set of Unicode characters in script Lao.
let Latin: &RangeTable = _LATIN                                  // The set of Unicode characters in script Latin.
let Lepcha: &RangeTable = _LEPCHA                                // The set of Unicode characters in script Lepcha.
let Limbu: &RangeTable = _LIMBU                                  // The set of Unicode characters in script Limbu.
let LinearA: &RangeTable = _LINEAR_A                             // The set of Unicode characters in script Linear_A.
let LinearB: &RangeTable = _LINEAR_B                             // The set of Unicode characters in script Linear_B.
let Lisu: &RangeTable = _LISU                                    // The set of Unicode characters in script Lisu.
let Lycian: &RangeTable = _LYCIAN                                // The set of Unicode characters in script Lycian.
let Lydian: &RangeTable = _LYDIAN                                // The set of Unicode characters in script Lydian.
let Mahajani: &RangeTable = _MAHAJANI                            // The set of Unicode characters in script Mahajani.
let Makasar: &RangeTable = _MAKASAR                              // The set of Unicode characters in script Makasar.
let Malayalam: &RangeTable = _MALAYALAM                          // The set of Unicode characters in script Malayalam.
let Mandaic: &RangeTable = _MANDAIC                              // The set of Unicode characters in script Mandaic.
let Manichaean: &RangeTable = _MANICHAEAN                        // The set of Unicode characters in script Manichaean.
let Marchen: &RangeTable = _MARCHEN                              // The set of Unicode characters in script Marchen.
let MasaramGondi: &RangeTable = _MASARAM_GONDI                   // The set of Unicode characters in script Masaram_Gondi.
let Medefaidrin: &RangeTable = _MEDEFAIDRIN                      // The set of Unicode characters in script Medefaidrin.
let MeeteiMayek: &RangeTable = _MEETEI_MAYEK                     // The set of Unicode characters in script MeeteiMayek.
let MendeKikakui: &RangeTable = _MENDE_KIKAKUI                   // The set of Unicode characters in script MendeKikakui.
let MeroiticCursive: &RangeTable = _MEROITIC_CURSIVE             // The set of Unicode characters in script MeroiticCursive.
let MeroiticHieroglyphs: &RangeTable = _MEROITIC_HIEROGLYPHS     // The set of Unicode characters in script MeroiticHieroglyphs.
let Miao: &RangeTable = _MIAO                                    // The set of Unicode characters in script Miao.
let Modi: &RangeTable = _MODI                                    // The set of Unicode characters in script Modi.
let Mongolian: &RangeTable = _MONGOLIAN                          // The set of Unicode characters in script Mongolian.
let Mro: &RangeTable = _MRO                                      // The set of Unicode characters in script Mro.
let Multani: &RangeTable = _MULTANI                              // The set of Unicode characters in script Multani.
let Myanmar: &RangeTable = _MYANMAR                              // The set of Unicode characters in script Myanmar.
let Nabataean: &RangeTable = _NABATAEAN                          // The set of Unicode characters in script Nabataean.
let NagMundari: &RangeTable = _NAG_MUNDARI                       // The set of Unicode characters in script Nag_Mundari.
let Nandinagari: &RangeTable = _NANDINAGARI                      // The set of Unicode characters in script Nandinagari.
let NewTaiLue: &RangeTable = _NEW_TAI_LUE                        // The set of Unicode characters in script New_Tai_Lue.
let Newa: &RangeTable = _NEWA                                    // The set of Unicode characters in script Newa.
let Nko: &RangeTable = _NKO                                      // The set of Unicode characters in script Nko.
let Nushu: &RangeTable = _NUSHU                                  // The set of Unicode characters in script Nushu.
let NyiakengPuachueHmong: &RangeTable = _NYIAKENG_PUACHUE_HMONG  // The set of Unicode characters in script NyiakengPuachueHmong.
let Ogham: &RangeTable = _OGHAM                                  // The set of Unicode characters in script Ogham.
let OlChiki: &RangeTable = _OL_CHIKI                             // The set of Unicode characters in script OlChiki.
let OldHungarian: &RangeTable = _OLD_HUNGARIAN                   // The set of Unicode characters in script OldHungarian.
let OldItalic: &RangeTable = _OLD_ITALIC                         // The set of Unicode characters in script OldItalic.
let OldNorthArabian: &RangeTable = _OLD_NORTH_ARABIAN            // The set of Unicode characters in script OldNorthArabian.
let OldPermic: &RangeTable = _OLD_PERMIC                         // The set of Unicode characters in script OldPermic.
let OldPersian: &RangeTable = _OLD_PERSIAN                       // The set of Unicode characters in script OldPersian.
let OldSogdian: &RangeTable = _OLD_SOGDIAN                       // The set of Unicode characters in script OldSogdian.
let OldSouthArabian: &RangeTable = _OLD_SOUTH_ARABIAN            // The set of Unicode characters in script OldSouthArabian.
let OldTurkic: &RangeTable = _OLD_TURKIC                         // The set of Unicode characters in script OldTurkic.
let OldUyghur: &RangeTable = _OLD_UYGHUR                         // The set of Unicode characters in script OldUyghur.
let Oriya: &RangeTable = _ORIYA                                  // The set of Unicode characters in script Oriya.
let Osage: &RangeTable = _OSAGE                                  // The set of Unicode characters in script Osage.
let Osmanya: &RangeTable = _OSMANYA                              // The set of Unicode characters in script Osmanya.
let PahawhHmong: &RangeTable = _PAHAWH_HMONG                     // The set of Unicode characters in script PahawhHmong.
let Palmyrene: &RangeTable = _PALMYRENE                          // The set of Unicode characters in script Palmyrene.
let PauCinHau: &RangeTable = _PAU_CIN_HAU                        // The set of Unicode characters in script PauCinHau.
let PhagsPa: &RangeTable = _PHAGS_PA                             // The set of Unicode characters in script PhagsPa.
let Phoenician: &RangeTable = _PHOENICIAN                        // The set of Unicode characters in script Phoenician.
let PsalterPahlavi: &RangeTable = _PSALTER_PAHLAVI               // The set of Unicode characters in script PsalterPahlavi.
let Rejang: &RangeTable = _REJANG                                // The set of Unicode characters in script Rejang.
let Runic: &RangeTable = _RUNIC                                  // The set of Unicode characters in script Runic.
let Samaritan: &RangeTable = _SAMARITAN                          // The set of Unicode characters in script Samaritan.
let Saurashtra: &RangeTable = _SAURASHTRA                        // The set of Unicode characters in script Saurashtra.
let Sharada: &RangeTable = _SHARADA                              // The set of Unicode characters in script Sharada.
let Shavian: &RangeTable = _SHAVIAN                              // The set of Unicode characters in script Shavian.
let Siddham: &RangeTable = _SIDDHAM                              // The set of Unicode characters in script Siddham.
let SignWriting: &RangeTable = _SIGN_WRITING                     // The set of Unicode characters in script SignWriting.
let Sinhala: &RangeTable = _SINHALA                              // The set of Unicode characters in script Sinhala.
let Sogdian: &RangeTable = _SOGDIAN                              // The set of Unicode characters in script Sogdian.
let SoraSompeng: &RangeTable = _SORA_SOMPENG                     // The set of Unicode characters in script SoraSompeng.
let Soyombo: &RangeTable = _SOYOMBO                              // The set of Unicode characters in script Soyombo.
let Sundanese: &RangeTable = _SUNDANESE                          // The set of Unicode characters in script Sundanese.
let SylotiNagri: &RangeTable = _SYLOTI_NAGRI                     // The set of Unicode characters in script SylotiNagri.
let Syriac: &RangeTable = _SYRIAC                                // The set of Unicode characters in script Syriac.
let Tagalog: &RangeTable = _TAGALOG                              // The set of Unicode characters in script Tagalog.
let Tagbanwa: &RangeTable = _TAGBANWA                            // The set of Unicode characters in script Tagbanwa.
let TaiLe: &RangeTable = _TAI_LE                                 // The set of Unicode characters in script TaiLe.
let TaiTham: &RangeTable = _TAI_THAM                             // The set of Unicode characters in script TaiTham.
let TaiViet: &RangeTable = _TAI_VIET                             // The set of Unicode characters in script TaiViet.
let Takri: &RangeTable = _TAKRI                                  // The set of Unicode characters in script Takri.
let Tamil: &RangeTable = _TAMIL                                  // The set of Unicode characters in script Tamil.
let Tangsa: &RangeTable = _TANGSA                                // The set of Unicode characters in script Tangsa.
let Tangut: &RangeTable = _TANGUT                                // The set of Unicode characters in script Tangut.
let Telugu: &RangeTable = _TELUGU                                // The set of Unicode characters in script Telugu.
let Thaana: &RangeTable = _THAANA                                // The set of Unicode characters in script Thaana.
let Thai: &RangeTable = _THAI                                    // The set of Unicode characters in script Thai.
let Tibetan: &RangeTable = _TIBETAN                              // The set of Unicode characters in script Tibetan.
let Tifinagh: &RangeTable = _TIFINAGH                            // The set of Unicode characters in script Tifinagh.
let Tirhuta: &RangeTable = _TIRHUTA                              // The set of Unicode characters in script Tirhuta.
let Toto: &RangeTable = _TOTO                                    // The set of Unicode characters in script Toto.
let Ugaritic: &RangeTable = _UGARITIC                            // The set of Unicode characters in script Ugaritic.
let Vai: &RangeTable = _VAI                                      // The set of Unicode characters in script Vai.
let Vithkuqi: &RangeTable = _VITHKUQI                            // The set of Unicode characters in script Vithkuqi.
let Wancho: &RangeTable = _WANCHO                                // The set of Unicode characters in script Wancho.
let WarangCiti: &RangeTable = _WARANG_CITI                       // The set of Unicode characters in script WarangCiti.
let Yezidi: &RangeTable = _YEZIDI                                // The set of Unicode characters in script Yezidi.
let Yi: &RangeTable = _YI                                        // The set of Unicode characters in script Yi.
let ZanabazarSquare: &RangeTable = _ZANABAZAR_SQUARE             // The set of Unicode characters in script ZanabazarSquare.
```


---

```jule
let Properties: map[str]&RangeTable = { ... }
```
The set of Unicode property tables\.

---

```jule
let AsciiHexDigit: &RangeTable = _ASCII_HEX_DIGIT                                     // The set of Unicode characters with property AsciiHexDigit.
let BidiControl: &RangeTable = _BIDI_CONTROL                                          // The set of Unicode characters with property BidiControl.
let Dash: &RangeTable = _DASH                                                         // The set of Unicode characters with property Dash.
let Deprecated: &RangeTable = _DEPRECATED                                             // The set of Unicode characters with property Deprecated.
let Diacritic: &RangeTable = _DIACRITIC                                               // The set of Unicode characters with property Diacritic.
let Extender: &RangeTable = _EXTENDER                                                 // The set of Unicode characters with property Extender.
let HexDigit: &RangeTable = _HEX_DIGIT                                                // The set of Unicode characters with property HexDigit.
let Hyphen: &RangeTable = _HYPHEN                                                     // The set of Unicode characters with property Hyphen.
let IdsBinaryOperator: &RangeTable = _IDS_BINARY_OPERATOR                             // The set of Unicode characters with property IdsBinaryOperator.
let IdsTrinaryOperator: &RangeTable = _IDS_TRINARY_OPERATOR                           // The set of Unicode characters with property IdsTrinaryOperator.
let Ideographic: &RangeTable = _IDEOGRAPHIC                                           // The set of Unicode characters with property Ideographic.
let JoinControl: &RangeTable = _JOIN_CONTROL                                          // The set of Unicode characters with property JoinControl.
let LogicalOrderException: &RangeTable = _LOGICAL_ORDER_EXCEPTION                     // The set of Unicode characters with property LogicalOrderException.
let NoncharacterCodePoint: &RangeTable = _NONCHARACTER_CODE_POINT                     // The set of Unicode characters with property NoncharacterCodePoint.
let OtherAlphabetic: &RangeTable = _OTHER_ALPHABETIC                                  // The set of Unicode characters with property OtherAlphabetic.
let OtherDefaultIgnorableCodePoint: &RangeTable = _OTHER_DEFAULT_IGNORABLE_CODE_POINT // The set of Unicode characters with property OtherDefaultIgnorableCodePoint.
let OtherGraphemeExtend: &RangeTable = _OTHER_GRAPHEME_EXTEND                         // The set of Unicode characters with property OtherGraphemeExtend.
let OtherIdContinue: &RangeTable = _OTHER_ID_CONTINUE                                 // The set of Unicode characters with property OtherIdContinue.
let OtherIdStart: &RangeTable = _OTHER_ID_START                                       // The set of Unicode characters with property OtherIdStart.
let OtherLowercase: &RangeTable = _OTHER_LOWERCASE                                    // The set of Unicode characters with property OtherLowercase.
let OtherMath: &RangeTable = _OTHER_MATH                                              // The set of Unicode characters with property OtherMath.
let OtherUppercase: &RangeTable = _OTHER_UPPERCASE                                    // The set of Unicode characters with property OtherUppercase.
let PatternSyntax: &RangeTable = _PATTERN_SYNTAX                                      // The set of Unicode characters with property PatternSyntax.
let PatternWhiteSpace: &RangeTable = _PATTERN_WHITE_SPACE                             // The set of Unicode characters with property PatternWhiteSpace.
let PrependedConcatenationMark: &RangeTable = _PREPENDED_CONCATENATION_MARK           // The set of Unicode characters with property PrependedConcatenationMark.
let QuotationMark: &RangeTable = _QUOTATION_MARK                                      // The set of Unicode characters with property QuotationMark.
let Radical: &RangeTable = _RADICAL                                                   // The set of Unicode characters with property Radical.
let RegionalIndicator: &RangeTable = _REGIONAL_INDICATOR                              // The set of Unicode characters with property RegionalIndicator.
let SentenceTerminal: &RangeTable = _SENTENCE_TERMINAL                                // The set of Unicode characters with property SentenceTerminal.
let SoftDotted: &RangeTable = _SOFT_DOTTED                                            // The set of Unicode characters with property SoftDotted.
let TerminalPunctuation: &RangeTable = _TERMINAL_PUNCTUATION                          // The set of Unicode characters with property TerminalPunctuation.
let UnifiedIdeograph: &RangeTable = _UNIFIED_IDEOGRAPH                                // The set of Unicode characters with property UnifiedIdeograph.
let VariationSelector: &RangeTable = _VARIATION_SELECTOR                              // The set of Unicode characters with property VariationSelector.
let WhiteSpace: &RangeTable = _WHITE_SPACE                                            // The set of Unicode characters with property WhiteSpace.
```


---

```jule
let FoldCategory: map[str]&RangeTable = { ... }
```
Maps a category name to a table of code points outside the category that are equivalent under simple case folding to code points inside the category\. If there is NO entry for a category name, there are NO such points\.

---

```jule
let FoldScript: map[str]&RangeTable = { ... }
```
Maps a script name to a table of code points outside the script that are equivalent under simple case folding to code points inside the script\. If there is NO entry for a script name, there are NO such points\.

---

```jule
const MaxRune = '\U0010FFFF'
```
Maximum valid Unicode code point\.

---

```jule
const ReplacementChar = '\uFFFD'
```
Represents invalid code points\.

---

```jule
const MaxASCII = '\u007F'
```
Maximum ASCII value\.

---

```jule
const MaxLatin1 = '\u00FF'
```
Maximum Latin\-1 value\.

---

```jule
const (
	UpperCase = 0
	LowerCase = 1
	TitleCase = 2
	MaxCase   = 3
)
```
Indices into the delta arrays inside CaseRanges for case mapping\.

## IsGraphic
```jule
fn IsGraphic(r: rune): bool
```
Such characters include letters, marks, numbers, punctuation, symbols, and spaces, from categories L, M, N, P, S, ZS\.

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

## IsDigit
```jule
fn IsDigit(r: rune): bool
```
Reports whether the rune is a decimal digit\.

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