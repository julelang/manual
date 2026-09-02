# std/intrinsic

Package for the compiler intrinsics.

::: v-pre

## Index

[fn Concurrent\(\)](#concurrent)\
[fn Unreachable\(\)](#unreachable)\
[fn Likely\(x: bool\): bool](#likely)\
[fn Unlikely\(x: bool\): bool](#unlikely)



## Concurrent
```jule
fn Concurrent()
```
Indicates that the function performs or may perform concurrent/parallel operations\.

If the compiler detects no concurrency/parallelism within your normal Jule program, it may drop atomic overhead to speed up mechanisms such as reference counting\. In this case, various memory management errors may occur\.

To prevent this, you must provide the compiler the hint\. This allows the compiler to recognize that unknown concurrency exists here and adjust its optimizations accordingly\.

## Unreachable
```jule
unsafe fn Unreachable()
```
Indicates to the compiler that this code block or function is unreachable\.

Used to provide a hint to the compiler in cases where execution is guaranteed never to reach this point\. Using this hint, the compiler may treat the corresponding block as dead code, optimize branches, or produce backend\-specific unreachability attributes\.

This function is unsafe because if code marked with this hint is reached at runtime, undefined behavior may occur\.

## Likely
```jule
fn Likely(x: bool): bool
```
Serves as a performance optimization hint for branch prediction\. You can place it in any context, but the compiler selectively utilizes it where branch optimization is meaningful, such as in \[if\] conditions, while treating it as a transparent pass\-through elsewhere that simply evaluates its boolean argument\. Functionally, it signals to the compiler that the enclosed condition is highly expected to evaluate to \[true\], allowing it to reorder assembly instructions and generate optimal code paths for the expected execution flow\.

## Unlikely
```jule
fn Unlikely(x: bool): bool
```
Serves as a performance optimization hint for branch prediction\. You can place it in any context, but the compiler selectively utilizes it where branch optimization is meaningful, such as in \[if\] conditions, while treating it as a transparent pass\-through elsewhere that simply evaluates its boolean argument\. Functionally, it signals to the compiler that the enclosed condition is highly expected to evaluate to \[false\], allowing it to reorder assembly instructions and prioritize the alternative execution path for optimal performance\.

:::