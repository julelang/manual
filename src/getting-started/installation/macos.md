# MacOS Installation

## Pre-compiled Binaries

1. Download the latest precompiled package from [GitHub Releases](https://github.com/julelang/jule/releases/latest)<br>
The file will be named `jule-macos-amd64.zip` for AMD64 (aka x86-64) systems and `jule-macos-arm64.zip` for ARM64 (aka AArch64) systems.

2. Extract the ZIP archive with `unzip`:
```bash
unzip jule-macos-arm64.zip
```

3. The `julec` binary will be located in the `jule/bin` directory<br>
You can run it using `./jule/bin/julec`.

::: info
You can add the `jule/bin` directory to your system's `$PATH` variable to run `julec` from anywhere.

For example, add the following line to your shell's configuration file (e.g. `~/.bashrc`):
```bash
export PATH="$PATH:/path/to/jule/bin"
```
:::
