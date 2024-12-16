# MacOS Installation

## Pre-compiled Binaries

1. Download the latest precompiled package from [GitHub Releases](https://github.com/julelang/jule/releases/latest)<br>
The file will be named `jule-darwin-amd64.zip` for x86_64 systems and `jule-darwin-arm64.zip` for ARM64 systems.

2. Extract the ZIP archive with `unzip`:
```bash
unzip jule-darwin-arm64.zip
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
