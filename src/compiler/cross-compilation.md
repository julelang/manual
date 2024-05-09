# Cross Compilation

Cross compilation allows you to compile your Jule code for different platforms. For example, you have ARM64 architecture and macOS, you can target Windows and AMD64 architecture on this system.

To do this, you need to specifically specify the target platform in your compiler's build command. You can do this with passing the ``--target`` option to compile. Your target notation should be in a special binary format.
This format is: ``<os>-<arch>``.

But what if you want to use your OS as your current OS and only change your target architecture?
You can actually do this by typing, but here you have an alternative way. The `native` value for both arguments is a valid target if you want to get the value of the system you are on.

Here is a simple examples:
- ``--target windows-arm64``: Windows OS and ARM64 arch
- ``--target windows-native``: Windows OS and native arch
- ``--target native-amd64``: native OS and AMD64 arch

::: tip
The default target is: ``--target native-native``
:::

## Imitation

Compiler will imitate your architecture as far as possible. In this imitation phase, it is expected to handle content such as platform-dependent data types such as `int` or `uint` and platform-specific source files in accordance with the target platform.