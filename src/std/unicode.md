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
static GraphicRanges = [ ... ]
```
Defines the set of graphic characters according to Unicode\.

---

```jule
static PrintRanges = [ ... ]
```
Defines the set of printable characters according to Jule\. ASCII space, U\+0020, is handled separately\.

---

```jule
static Categories: map[str]&RangeTable = { ... }
```
The set of Unicode category tables\.

---

```jule
static CC: &RangeTable = _CC    // The set of Unicode characters in category CC (Other, control).
static CF: &RangeTable = _CF    // The set of Unicode characters in category CF (Other, format).
static CO: &RangeTable = _CO    // The set of Unicode characters in category CO (Other, private use).
static CS: &RangeTable = _CS    // The set of Unicode characters in category CS (Other, surrogate).
static Digit: &RangeTable = _ND // The set of Unicode characters with the "decimal Digit" property.
static ND: &RangeTable = _ND    // The set of Unicode characters in category ND (Number, decimal Digit).
static Letter: &RangeTable = _L // The set of Unicode letters, category L.
static L: &RangeTable = _L      // The set of Unicode letters, category L.
static LM: &RangeTable = _LM    // The set of Unicode characters in category LM (Letter, modifier).
static LO: &RangeTable = _LO    // The set of Unicode characters in category LO (Letter, other).
static Lower: &RangeTable = _LL // The set of Unicode Lower case letters.
static LL: &RangeTable = _LL    // The set of Unicode characters in category LL (Letter, lowercase).
static Mark: &RangeTable = _M   // The set of Unicode Mark characters, category M.
static M: &RangeTable = _M      // The set of Unicode Mark characters, category M.
static MC: &RangeTable = _MC    // The set of Unicode characters in category MC (Mark, spacing combining).
static ME: &RangeTable = _ME    // The set of Unicode characters in category ME (Mark, enclosing).
static MN: &RangeTable = _MN    // The set of Unicode characters in category MN (Mark, nonspacing).
static NL: &RangeTable = _NL    // The set of Unicode characters in category NL (Number, Letter).
static NO: &RangeTable = _NO    // The set of Unicode characters in category NO (Number, other).
static Number: &RangeTable = _N // The set of Unicode Number characters, category N.
static N: &RangeTable = _N      // The set of Unicode Number characters, category N.
static Other: &RangeTable = _C  // The set of Unicode control and special characters, category C.
static C: &RangeTable = _C      // The set of Unicode control and special characters, category C.
static PC: &RangeTable = _PC    // The set of Unicode characters in category PC (Punctuation, connector).
static PD: &RangeTable = _PD    // The set of Unicode characters in category PD (Punctuation, Dash).
static PE: &RangeTable = _PE    // The set of Unicode characters in category PE (Punctuation, close).
static PF: &RangeTable = _PF    // The set of Unicode characters in category PF (Punctuation, final quote).
static PI: &RangeTable = _PI    // The set of Unicode characters in category PI (Punctuation, initial quote).
static PO: &RangeTable = _PO    // The set of Unicode characters in category PO (Punctuation, otger).
static PS: &RangeTable = _PS    // The set of Unicode characters in category PS (Punctuation, open).
static Punct: &RangeTable = _P  // The set of Unicode punctuation characters, category P.
static P: &RangeTable = _P      // The set of Unicode punctuation characters, category P.
static SC: &RangeTable = _SC    // The set of Unicode characters in category SC (Symbol, currency).
static SK: &RangeTable = _SK    // The set of Unicode characters in category SK (Symbol, modifier).
static SM: &RangeTable = _SM    // The set of Unicode characters in category SM (Symbol, math).
static SO: &RangeTable = _SO    // The set of Unicode characters in category SO (Symbol, other).
static Space: &RangeTable = _Z  // The set of Unicode SPACE characters, category Z.
static Z: &RangeTable = _Z      // The set of Unicode SPACE characters, category Z.
static Symbol: &RangeTable = _S // The set of Unicode symbol characters, category S.
static S: &RangeTable = _S      // The set of Unicode symbol characters, category S.
static Title: &RangeTable = _LT // The set of Unicode Title case letters.
static LT: &RangeTable = _LT    // The set of Unicode characters in category LT (Letter, titlecase).
static Upper: &RangeTable = _LU // The set of Unicode Upper case letters.
static LU: &RangeTable = _LU    // The set of Unicode characters in category LU (Letter, uppercase).
static ZL: &RangeTable = _ZL    // The set of Unicode characters in category ZL (Separator, line).
static ZP: &RangeTable = _ZP    // The set of Unicode characters in category ZP (Separator, paragraph).
static ZS: &RangeTable = _ZS    // The set of Unicode characters in category ZS (Separator, Space).
```


---

```jule
static Scripts: map[str]&RangeTable = { ... }
```
The set of Unicode script tables\.

---

```jule
static Adlam: &RangeTable = _ADLAM                                  // The set of Unicode characters in script Adlam.
static Ahom: &RangeTable = _AHOM                                    // The set of Unicode characters in script Ahom.
static AnatolianHieroglyphs: &RangeTable = _ANATOLIAN_HIEROGLYPHS   // The set of Unicode characters in script AnatolianHieroglyphs.
static Arabic: &RangeTable = _ARABIC                                // The set of Unicode characters in script Arabic.
static Armenian: &RangeTable = _ARMENIAN                            // The set of Unicode characters in script Armenian.
static Avestan: &RangeTable = _AVESTAN                              // The set of Unicode characters in script Avestan.
static Balinese: &RangeTable = _BALINESE                            // The set of Unicode characters in script Balinese.
static Bamum: &RangeTable = _BAMUM                                  // The set of Unicode characters in script Bamum.
static BassaVah: &RangeTable = _BASSA_VAH                           // The set of Unicode characters in script BassaVah.
static Batak: &RangeTable = _BATAK                                  // The set of Unicode characters in script Batak.
static Bengali: &RangeTable = _BENGALI                              // The set of Unicode characters in script Bengali.
static Bhaiksuki: &RangeTable = _BHAIKSUKI                          // The set of Unicode characters in script Bhaiksuki.
static Bopomofo: &RangeTable = _BOPOMOFO                            // The set of Unicode characters in script Bopomofo.
static Brahmi: &RangeTable = _BRAHMI                                // The set of Unicode characters in script Brahmi.
static Braille: &RangeTable = _BRAILLE                              // The set of Unicode characters in script Braille.
static Buginese: &RangeTable = _BUGINESE                            // The set of Unicode characters in script Buginese.
static Buhid: &RangeTable = _BUHID                                  // The set of Unicode characters in script Buhid.
static CanadianAboriginal: &RangeTable = _CANADIAN_ABORIGINAL       // The set of Unicode characters in script CanadianAboriginal.
static Carian: &RangeTable = _CARIAN                                // The set of Unicode characters in script Carian.
static CaucasianAlbanian: &RangeTable = _CAUCASIAN_ALBANIAN         // The set of Unicode characters in script CaucasianAlbanian.
static Chakma: &RangeTable = _CHAKMA                                // The set of Unicode characters in script Chakma.
static Cham: &RangeTable = _CHAM                                    // The set of Unicode characters in script Cham.
static Cherokee: &RangeTable = _CHEROKEE                            // The set of Unicode characters in script Cherokee.
static Chorasmian: &RangeTable = _CHORASMIAN                        // The set of Unicode characters in script Chorasmian.
static Common: &RangeTable = _COMMON                                // The set of Unicode characters in script Common.
static Coptic: &RangeTable = _COPTIC                                // The set of Unicode characters in script Coptic.
static Cuneiform: &RangeTable = _CUNEIFORM                          // The set of Unicode characters in script Cuneiform.
static Cypriot: &RangeTable = _CYPRIOT                              // The set of Unicode characters in script Cypriot.
static CyproMinoan: &RangeTable = _CYPRO_MINOAN                     // The set of Unicode characters in script CyproMinoan.
static Cyrillic: &RangeTable = _CYRILLIC                            // The set of Unicode characters in script Cyrillic.
static Deseret: &RangeTable = _DESERET                              // The set of Unicode characters in script Deseret.
static Devanagari: &RangeTable = _DEVANAGARI                        // The set of Unicode characters in script Devanagari.
static DivesAkuru: &RangeTable = _DIVES_AKURU                       // The set of Unicode characters in script DivesAkuru.
static Dogra: &RangeTable = _DOGRA                                  // The set of Unicode characters in script Dogra.
static Duployan: &RangeTable = _DUPLOYAN                            // The set of Unicode characters in script Duployan.
static EgyptianHieroglyphs: &RangeTable = _EGYPTIAN_HIEROGLYPHS     // The set of Unicode characters in script EgyptianHieroglyphs.
static Elbasan: &RangeTable = _ELBASAN                              // The set of Unicode characters in script Elbasan.
static Elymaic: &RangeTable = _ELYMAIC                              // The set of Unicode characters in script Elymaic.
static Ethiopic: &RangeTable = _ETHIOPIC                            // The set of Unicode characters in script Ethiopic.
static Georgian: &RangeTable = _GEORGIAN                            // The set of Unicode characters in script Georgian.
static Glagolitic: &RangeTable = _GLAGOLITIC                        // The set of Unicode characters in script Glagolitic.
static Gothic: &RangeTable = _GOTHIC                                // The set of Unicode characters in script Gothic.
static Grantha: &RangeTable = _GRANTHA                              // The set of Unicode characters in script Grantha.
static Greek: &RangeTable = _GREEK                                  // The set of Unicode characters in script Greek.
static Gujarati: &RangeTable = _GUJARATI                            // The set of Unicode characters in script Gujarati.
static GunjalaGondi: &RangeTable = _GUNJALA_GONDI                   // The set of Unicode characters in script GunjalaGondi.
static Gurmukhi: &RangeTable = _GURMUKHI                            // The set of Unicode characters in script Gurmukhi.
static Han: &RangeTable = _HAN                                      // The set of Unicode characters in script Han.
static Hangul: &RangeTable = _HANGUL                                // The set of Unicode characters in script Hangul.
static HanifiRohingya: &RangeTable = _HANIFI_ROHINGYA               // The set of Unicode characters in script HanifiRohingya.
static Hanunoo: &RangeTable = _HANUNOO                              // The set of Unicode characters in script Hanunoo.
static Hatran: &RangeTable = _HATRAN                                // The set of Unicode characters in script Hatran.
static Hebrew: &RangeTable = _HEBREW                                // The set of Unicode characters in script Hebrew.
static Hiragana: &RangeTable = _HIRAGANA                            // The set of Unicode characters in script Hiragana.
static ImperialAramaic: &RangeTable = _IMPERIAL_ARAMAIC             // The set of Unicode characters in script ImperialAramaic.
static Inherited: &RangeTable = _INHERITED                          // The set of Unicode characters in script Inherited.
static InscriptionalPahlavi: &RangeTable = _INSCRIPTIONAL_PAHLAVI   // The set of Unicode characters in script InscriptionalPahlavi.
static InscriptionalParthian: &RangeTable = _INSCRIPTIONAL_PARTHIAN // The set of Unicode characters in script InscriptionalParthian.
static Javanese: &RangeTable = _JAVANESE                            // The set of Unicode characters in script Javanese.
static Kaithi: &RangeTable = _KAITHI                                // The set of Unicode characters in script Kaithi.
static Kannada: &RangeTable = _KANNADA                              // The set of Unicode characters in script Kannada.
static Katakana: &RangeTable = _KATAKANA                            // The set of Unicode characters in script Katakana.
static Kawi: &RangeTable = _KAWI                                    // The set of Unicode characters in script Kawi.
static KayahLi: &RangeTable = _KAYAH_LI                             // The set of Unicode characters in script Kayah_Li.
static Kharoshthi = _KHAROSHTHI                                     // The set of Unicode characters in script Kharoshthi.
static KhitanSmallScript: &RangeTable = _KHITAN_SMALL_SCRIPT        // The set of Unicode characters in script KhitanSmallScript.
static Khmer: &RangeTable = _KHMER                                  // The set of Unicode characters in script Khmer.
static Khojki: &RangeTable = _KHOJKI                                // The set of Unicode characters in script Khojki.
static Khudawadi: &RangeTable = _KHUDAWADI                          // The set of Unicode characters in script Khudawadi.
static Lao: &RangeTable = _LAO                                      // The set of Unicode characters in script Lao.
static Latin: &RangeTable = _LATIN                                  // The set of Unicode characters in script Latin.
static Lepcha: &RangeTable = _LEPCHA                                // The set of Unicode characters in script Lepcha.
static Limbu: &RangeTable = _LIMBU                                  // The set of Unicode characters in script Limbu.
static LinearA: &RangeTable = _LINEAR_A                             // The set of Unicode characters in script Linear_A.
static LinearB: &RangeTable = _LINEAR_B                             // The set of Unicode characters in script Linear_B.
static Lisu: &RangeTable = _LISU                                    // The set of Unicode characters in script Lisu.
static Lycian: &RangeTable = _LYCIAN                                // The set of Unicode characters in script Lycian.
static Lydian: &RangeTable = _LYDIAN                                // The set of Unicode characters in script Lydian.
static Mahajani: &RangeTable = _MAHAJANI                            // The set of Unicode characters in script Mahajani.
static Makasar: &RangeTable = _MAKASAR                              // The set of Unicode characters in script Makasar.
static Malayalam: &RangeTable = _MALAYALAM                          // The set of Unicode characters in script Malayalam.
static Mandaic: &RangeTable = _MANDAIC                              // The set of Unicode characters in script Mandaic.
static Manichaean: &RangeTable = _MANICHAEAN                        // The set of Unicode characters in script Manichaean.
static Marchen: &RangeTable = _MARCHEN                              // The set of Unicode characters in script Marchen.
static MasaramGondi: &RangeTable = _MASARAM_GONDI                   // The set of Unicode characters in script Masaram_Gondi.
static Medefaidrin: &RangeTable = _MEDEFAIDRIN                      // The set of Unicode characters in script Medefaidrin.
static MeeteiMayek: &RangeTable = _MEETEI_MAYEK                     // The set of Unicode characters in script MeeteiMayek.
static MendeKikakui: &RangeTable = _MENDE_KIKAKUI                   // The set of Unicode characters in script MendeKikakui.
static MeroiticCursive: &RangeTable = _MEROITIC_CURSIVE             // The set of Unicode characters in script MeroiticCursive.
static MeroiticHieroglyphs: &RangeTable = _MEROITIC_HIEROGLYPHS     // The set of Unicode characters in script MeroiticHieroglyphs.
static Miao: &RangeTable = _MIAO                                    // The set of Unicode characters in script Miao.
static Modi: &RangeTable = _MODI                                    // The set of Unicode characters in script Modi.
static Mongolian: &RangeTable = _MONGOLIAN                          // The set of Unicode characters in script Mongolian.
static Mro: &RangeTable = _MRO                                      // The set of Unicode characters in script Mro.
static Multani: &RangeTable = _MULTANI                              // The set of Unicode characters in script Multani.
static Myanmar: &RangeTable = _MYANMAR                              // The set of Unicode characters in script Myanmar.
static Nabataean: &RangeTable = _NABATAEAN                          // The set of Unicode characters in script Nabataean.
static NagMundari: &RangeTable = _NAG_MUNDARI                       // The set of Unicode characters in script Nag_Mundari.
static Nandinagari: &RangeTable = _NANDINAGARI                      // The set of Unicode characters in script Nandinagari.
static NewTaiLue: &RangeTable = _NEW_TAI_LUE                        // The set of Unicode characters in script New_Tai_Lue.
static Newa: &RangeTable = _NEWA                                    // The set of Unicode characters in script Newa.
static Nko: &RangeTable = _NKO                                      // The set of Unicode characters in script Nko.
static Nushu: &RangeTable = _NUSHU                                  // The set of Unicode characters in script Nushu.
static NyiakengPuachueHmong: &RangeTable = _NYIAKENG_PUACHUE_HMONG  // The set of Unicode characters in script NyiakengPuachueHmong.
static Ogham: &RangeTable = _OGHAM                                  // The set of Unicode characters in script Ogham.
static OlChiki: &RangeTable = _OL_CHIKI                             // The set of Unicode characters in script OlChiki.
static OldHungarian: &RangeTable = _OLD_HUNGARIAN                   // The set of Unicode characters in script OldHungarian.
static OldItalic: &RangeTable = _OLD_ITALIC                         // The set of Unicode characters in script OldItalic.
static OldNorthArabian: &RangeTable = _OLD_NORTH_ARABIAN            // The set of Unicode characters in script OldNorthArabian.
static OldPermic: &RangeTable = _OLD_PERMIC                         // The set of Unicode characters in script OldPermic.
static OldPersian: &RangeTable = _OLD_PERSIAN                       // The set of Unicode characters in script OldPersian.
static OldSogdian: &RangeTable = _OLD_SOGDIAN                       // The set of Unicode characters in script OldSogdian.
static OldSouthArabian: &RangeTable = _OLD_SOUTH_ARABIAN            // The set of Unicode characters in script OldSouthArabian.
static OldTurkic: &RangeTable = _OLD_TURKIC                         // The set of Unicode characters in script OldTurkic.
static OldUyghur: &RangeTable = _OLD_UYGHUR                         // The set of Unicode characters in script OldUyghur.
static Oriya: &RangeTable = _ORIYA                                  // The set of Unicode characters in script Oriya.
static Osage: &RangeTable = _OSAGE                                  // The set of Unicode characters in script Osage.
static Osmanya: &RangeTable = _OSMANYA                              // The set of Unicode characters in script Osmanya.
static PahawhHmong: &RangeTable = _PAHAWH_HMONG                     // The set of Unicode characters in script PahawhHmong.
static Palmyrene: &RangeTable = _PALMYRENE                          // The set of Unicode characters in script Palmyrene.
static PauCinHau: &RangeTable = _PAU_CIN_HAU                        // The set of Unicode characters in script PauCinHau.
static PhagsPa: &RangeTable = _PHAGS_PA                             // The set of Unicode characters in script PhagsPa.
static Phoenician: &RangeTable = _PHOENICIAN                        // The set of Unicode characters in script Phoenician.
static PsalterPahlavi: &RangeTable = _PSALTER_PAHLAVI               // The set of Unicode characters in script PsalterPahlavi.
static Rejang: &RangeTable = _REJANG                                // The set of Unicode characters in script Rejang.
static Runic: &RangeTable = _RUNIC                                  // The set of Unicode characters in script Runic.
static Samaritan: &RangeTable = _SAMARITAN                          // The set of Unicode characters in script Samaritan.
static Saurashtra: &RangeTable = _SAURASHTRA                        // The set of Unicode characters in script Saurashtra.
static Sharada: &RangeTable = _SHARADA                              // The set of Unicode characters in script Sharada.
static Shavian: &RangeTable = _SHAVIAN                              // The set of Unicode characters in script Shavian.
static Siddham: &RangeTable = _SIDDHAM                              // The set of Unicode characters in script Siddham.
static SignWriting: &RangeTable = _SIGN_WRITING                     // The set of Unicode characters in script SignWriting.
static Sinhala: &RangeTable = _SINHALA                              // The set of Unicode characters in script Sinhala.
static Sogdian: &RangeTable = _SOGDIAN                              // The set of Unicode characters in script Sogdian.
static SoraSompeng: &RangeTable = _SORA_SOMPENG                     // The set of Unicode characters in script SoraSompeng.
static Soyombo: &RangeTable = _SOYOMBO                              // The set of Unicode characters in script Soyombo.
static Sundanese: &RangeTable = _SUNDANESE                          // The set of Unicode characters in script Sundanese.
static SylotiNagri: &RangeTable = _SYLOTI_NAGRI                     // The set of Unicode characters in script SylotiNagri.
static Syriac: &RangeTable = _SYRIAC                                // The set of Unicode characters in script Syriac.
static Tagalog: &RangeTable = _TAGALOG                              // The set of Unicode characters in script Tagalog.
static Tagbanwa: &RangeTable = _TAGBANWA                            // The set of Unicode characters in script Tagbanwa.
static TaiLe: &RangeTable = _TAI_LE                                 // The set of Unicode characters in script TaiLe.
static TaiTham: &RangeTable = _TAI_THAM                             // The set of Unicode characters in script TaiTham.
static TaiViet: &RangeTable = _TAI_VIET                             // The set of Unicode characters in script TaiViet.
static Takri: &RangeTable = _TAKRI                                  // The set of Unicode characters in script Takri.
static Tamil: &RangeTable = _TAMIL                                  // The set of Unicode characters in script Tamil.
static Tangsa: &RangeTable = _TANGSA                                // The set of Unicode characters in script Tangsa.
static Tangut: &RangeTable = _TANGUT                                // The set of Unicode characters in script Tangut.
static Telugu: &RangeTable = _TELUGU                                // The set of Unicode characters in script Telugu.
static Thaana: &RangeTable = _THAANA                                // The set of Unicode characters in script Thaana.
static Thai: &RangeTable = _THAI                                    // The set of Unicode characters in script Thai.
static Tibetan: &RangeTable = _TIBETAN                              // The set of Unicode characters in script Tibetan.
static Tifinagh: &RangeTable = _TIFINAGH                            // The set of Unicode characters in script Tifinagh.
static Tirhuta: &RangeTable = _TIRHUTA                              // The set of Unicode characters in script Tirhuta.
static Toto: &RangeTable = _TOTO                                    // The set of Unicode characters in script Toto.
static Ugaritic: &RangeTable = _UGARITIC                            // The set of Unicode characters in script Ugaritic.
static Vai: &RangeTable = _VAI                                      // The set of Unicode characters in script Vai.
static Vithkuqi: &RangeTable = _VITHKUQI                            // The set of Unicode characters in script Vithkuqi.
static Wancho: &RangeTable = _WANCHO                                // The set of Unicode characters in script Wancho.
static WarangCiti: &RangeTable = _WARANG_CITI                       // The set of Unicode characters in script WarangCiti.
static Yezidi: &RangeTable = _YEZIDI                                // The set of Unicode characters in script Yezidi.
static Yi: &RangeTable = _YI                                        // The set of Unicode characters in script Yi.
static ZanabazarSquare: &RangeTable = _ZANABAZAR_SQUARE             // The set of Unicode characters in script ZanabazarSquare.
```


---

```jule
static Properties: map[str]&RangeTable = { ... }
```
The set of Unicode property tables\.

---

```jule
static AsciiHexDigit: &RangeTable = _ASCII_HEX_DIGIT                                     // The set of Unicode characters with property AsciiHexDigit.
static BidiControl: &RangeTable = _BIDI_CONTROL                                          // The set of Unicode characters with property BidiControl.
static Dash: &RangeTable = _DASH                                                         // The set of Unicode characters with property Dash.
static Deprecated: &RangeTable = _DEPRECATED                                             // The set of Unicode characters with property Deprecated.
static Diacritic: &RangeTable = _DIACRITIC                                               // The set of Unicode characters with property Diacritic.
static Extender: &RangeTable = _EXTENDER                                                 // The set of Unicode characters with property Extender.
static HexDigit: &RangeTable = _HEX_DIGIT                                                // The set of Unicode characters with property HexDigit.
static Hyphen: &RangeTable = _HYPHEN                                                     // The set of Unicode characters with property Hyphen.
static IdsBinaryOperator: &RangeTable = _IDS_BINARY_OPERATOR                             // The set of Unicode characters with property IdsBinaryOperator.
static IdsTrinaryOperator: &RangeTable = _IDS_TRINARY_OPERATOR                           // The set of Unicode characters with property IdsTrinaryOperator.
static Ideographic: &RangeTable = _IDEOGRAPHIC                                           // The set of Unicode characters with property Ideographic.
static JoinControl: &RangeTable = _JOIN_CONTROL                                          // The set of Unicode characters with property JoinControl.
static LogicalOrderException: &RangeTable = _LOGICAL_ORDER_EXCEPTION                     // The set of Unicode characters with property LogicalOrderException.
static NoncharacterCodePoint: &RangeTable = _NONCHARACTER_CODE_POINT                     // The set of Unicode characters with property NoncharacterCodePoint.
static OtherAlphabetic: &RangeTable = _OTHER_ALPHABETIC                                  // The set of Unicode characters with property OtherAlphabetic.
static OtherDefaultIgnorableCodePoint: &RangeTable = _OTHER_DEFAULT_IGNORABLE_CODE_POINT // The set of Unicode characters with property OtherDefaultIgnorableCodePoint.
static OtherGraphemeExtend: &RangeTable = _OTHER_GRAPHEME_EXTEND                         // The set of Unicode characters with property OtherGraphemeExtend.
static OtherIdContinue: &RangeTable = _OTHER_ID_CONTINUE                                 // The set of Unicode characters with property OtherIdContinue.
static OtherIdStart: &RangeTable = _OTHER_ID_START                                       // The set of Unicode characters with property OtherIdStart.
static OtherLowercase: &RangeTable = _OTHER_LOWERCASE                                    // The set of Unicode characters with property OtherLowercase.
static OtherMath: &RangeTable = _OTHER_MATH                                              // The set of Unicode characters with property OtherMath.
static OtherUppercase: &RangeTable = _OTHER_UPPERCASE                                    // The set of Unicode characters with property OtherUppercase.
static PatternSyntax: &RangeTable = _PATTERN_SYNTAX                                      // The set of Unicode characters with property PatternSyntax.
static PatternWhiteSpace: &RangeTable = _PATTERN_WHITE_SPACE                             // The set of Unicode characters with property PatternWhiteSpace.
static PrependedConcatenationMark: &RangeTable = _PREPENDED_CONCATENATION_MARK           // The set of Unicode characters with property PrependedConcatenationMark.
static QuotationMark: &RangeTable = _QUOTATION_MARK                                      // The set of Unicode characters with property QuotationMark.
static Radical: &RangeTable = _RADICAL                                                   // The set of Unicode characters with property Radical.
static RegionalIndicator: &RangeTable = _REGIONAL_INDICATOR                              // The set of Unicode characters with property RegionalIndicator.
static SentenceTerminal: &RangeTable = _SENTENCE_TERMINAL                                // The set of Unicode characters with property SentenceTerminal.
static SoftDotted: &RangeTable = _SOFT_DOTTED                                            // The set of Unicode characters with property SoftDotted.
static TerminalPunctuation: &RangeTable = _TERMINAL_PUNCTUATION                          // The set of Unicode characters with property TerminalPunctuation.
static UnifiedIdeograph: &RangeTable = _UNIFIED_IDEOGRAPH                                // The set of Unicode characters with property UnifiedIdeograph.
static VariationSelector: &RangeTable = _VARIATION_SELECTOR                              // The set of Unicode characters with property VariationSelector.
static WhiteSpace: &RangeTable = _WHITE_SPACE                                            // The set of Unicode characters with property WhiteSpace.
```


---

```jule
static FoldCategory: map[str]&RangeTable = { ... }
```
Maps a category name to a table of code points outside the category that are equivalent under simple case folding to code points inside the category\. If there is NO entry for a category name, there are NO such points\.

---

```jule
static FoldScript: map[str]&RangeTable = { ... }
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
const UpperCase = 0
const LowerCase = 1
const TitleCase = 2
const MaxCase = 3
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