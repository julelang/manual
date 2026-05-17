# std/html

## Index

[fn EscapeString\(s: string\): string](#escapestring)\
[fn UnescapeString\(s: string\): string](#unescapestring)



## EscapeString
```jule
fn EscapeString(s: string): string
```
Escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;\. It escapes only five such characters: &lt;, &gt;, &amp;, &#39; and &#34;\. UnescapeString\(EscapeString\(s\)\) == s always holds, but the converse isn&#39;t always true\.

## UnescapeString
```jule
fn UnescapeString(s: string): string
```
Unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;\. It unescapes a larger range of entities than EscapeString escapes\. For example, &#34;&amp;aacute;&#34; unescapes to &#34;á&#34;, as does &#34;&amp;\#225;&#34; and &#34;&amp;\#xE1;&#34;\. UnescapeString\(EscapeString\(s\)\) == s always holds, but the converse isn&#39;t always true\.