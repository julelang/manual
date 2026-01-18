# Documentation Comments

Documentation comments (aka doc comments) are the standardized comment lines used when documenting Jule source code. With this standard, Jule code can be documented and read using a universal style.

::: tip
By using doc comments, you can create separate documentation content for your code, such as Markdown documents, with [juledoc](/tools/juledoc).

If you're documenting with juledoc (and it is recommended to document according to juledoc standards), pay attention to how juledoc interprets doc comments and generates output.
:::

## Context Types of Doc Comments

Doc comments have different types of contexts for effective and organized documentation. These contexts make the documentation more structured and easier to read.

### Main Documentation Scope

The main context contains the primary content of the documentation. It includes any subcontexts and outlines of the documentation.

### Lists

Lists can only be used in the main context and cannot have sub-lists. Any type of list always appears in the main context. A list item is defined by the `-` character (ASCII code 45) and accepts a single line of content. Any new line signifies the end of a list item.

If you do not want to move to a new line and end the list item, end the previous line with a comma ",". In this case, following line is considered part of the previous list item. But a new list mark (it is `-`) appears, it starts a new list item context. Indentation will not break the list item handling, so you can any space to align comment.

::: info
With indentation, you might make it appear as if it's part of a sub-scope or sub-list. However, juledoc does not evaluate it this way. If the list is within the main scope, it is treated as a list. If it is inside a sub-scope, it is treated as part of the text within that sub-scope.
:::

### Grouped Documentation and Subscopes

Documentation in groups and subscopes is treated as a separate main scope for the documentation within the main scope, having its own subscopes.

::: info
juledoc does not process all scopes individually. It evaluates the first sub-scope separately and treats all content within it as text belonging to that scope.
:::

### Separator Line

It is an empty comment line. It is used to create content that helps with documentation, like a paragraph.

## Writing Doc Comments

Doc comments are written only as single-line comments. Range comments are not considered as documentation comments in any way.

When writing documentation comments within the main scope, at most one ASCII whitespace can be used. If there is any whitespace, it is ignored. All space characters (except whitespaces) (such as tabs) are considered as indentation.

The suggested documentation approach is to write the main scopes starting with a single whitespace, and indent each sub-scope with a tab.

Here is an example documentation that uses all context types as described:
```jule
//This is a main scope documentation line.
// This is a main scope documentation line too.
//
//		- Tab indented, but this is not a subscope. This is a list item.
//
//	This is a subscope because it uses tab for indentation.
//		This is a subscope for a previous subscope because it uses 2 tab.
//		- Looks like-list item but juledoc handles as a text in this subscope.
//		- Looks like list-item but juledoc handles as a text in this subscope.
//
//- This is a list item.
// - This is a list item.
// - This is a list item,
//   And this line is a part of the previous list item,
//   and this is too. Because lines ends with comma.
```

Documentation must always come before the definition it belongs to, and any spaces or invalid comments (such as range comments) will break the documentation sequence. Therefore, using a separator for spaces is recommended.

For example:
```jule
// This is a documentation comment.
// But it will not appear in the juledoc output.
// Because whitespace will break the documentation group.

// This line and following lines will be appear in the juledoc output.
// Foo is a type for a magical use case.
// Just used to make an example.
type Foo: int
```

### Internal Doc Comments

If you are using juledoc and want to write comments that won't appear in the documentation output, you can use range comments before all the doc comments.

Although they are ignored, it is recommended to write range comments according to the doc comment rules as well.

For example:
```jule
/*
This is an internal comment.
Because written using range comments.
This part will be ignored from juledoc output.
*/
// Foo is a type for a magical use case.
// Just used to make an example.
type Foo: int
```

### Variable Groups

In some cases, you may need to create a shared documentation for multiple variables. To do this, simply group the variables together. To group them, all you need to do is write them one below the other.

For example:
```jule
// This variables are for a magical use case.
// Just used to make an example.
const Foo = "foo"
const Bar = "bar" // Optional special inline comment for Bar.
const Baz = "baz" // Optional special inline comment for Baz.
```