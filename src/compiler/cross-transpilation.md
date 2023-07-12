# Cross Transpilation

Cross transpilation allows you to transpile your Jule code for different platforms.
For example, you have ARM64 architecture and macOS, you can target Windows and AMD64 architecture on this system.

To do this, you need to specifically specify the target platform in your compiler's build command.
You do this with the ``--target`` option.
Your target notation should be in a special binary format.
This format is: ``<os>-<arch>``.

Here is a simple usage example: ``--target windows-arm64``

But what if you want to use your OS as your current OS and only change your target architecture?
You can actually do this by typing, but here you have an alternative way.
The `native` value for both arguments is a valid target if you want to get the value of the system you are on.

::: tip
The default target is: ``--target native-native``
:::
