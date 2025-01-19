# std/html

## Index

[fn EscapeStr(s: str): str](#escapestr)\
[fn UnescapeStr(s: str): str](#unescapestr)



## EscapeStr
```jule
fn EscapeStr(s: str): str
```
Escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;. It escapes only five such characters: &lt;, &gt;, &amp;, &#39; and &#34;. UnescapeStr(EscapeStr(s)) == s always holds, but the converse isn&#39;t always true.

## UnescapeStr
```jule
fn UnescapeStr(s: str): str
```
Unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;. It unescapes a larger range of entities than EscapeStr escapes. For example, &#34;&amp;aacute;&#34; unescapes to &#34;á&#34;, as does &#34;&amp;#225;&#34; and &#34;&amp;#xE1;&#34;. UnescapeStr(EscapeStr(s)) == s always holds, but the converse isn&#39;t always true.