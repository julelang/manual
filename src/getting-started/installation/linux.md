# Linux Installation

julec is available on Linux through various package managers.<br>
If you don't see your distribution listed below, check the [pre-compiled binaries](#pre-compiled-binaries) section.

See manual page about [packages](/getting-started/installation/packages).

## Arch Linux

There are two different official [AUR packages](https://aur.archlinux.org/packages/?O=0&SeB=nd&K=julec&outdated=&SB=n&SO=a&PP=50&do_Search=Go) available:

- [julec](https://aur.archlinux.org/packages/julec) - Latest release (**recommended**)
- [julec-git](https://aur.archlinux.org/packages/julec-git) - Latest commit to [master](https://github.com/julelang/jule/tree/master)

You can install them using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers) (e.g. `paru`):

```bash
paru -S julec
```

## Nix

There is an official [flake](https://github.com/julelang/jule/blob/master/flake.nix) and a [Nixpkgs package](https://search.nixos.org/packages?show=julec) available.<br>
You can install Jule using one of these methods:

### Flakes

```bash
nix profile install github:julelang/jule
```

### Nixpkgs

Refer to the [NixOS Search entry](https://search.nixos.org/packages?show=julec) for example installation methods.

## Pre-compiled Binaries

1. Download the latest precompiled package from [GitHub Releases](https://github.com/julelang/jule/releases/latest)<br>
The file will be named `jule-linux-amd64.zip` for x86_64 systems and `jule-linux-arm64.zip` for ARM64 systems.

2. Extract the ZIP archive with `unzip`:
```bash
unzip jule-linux-amd64.zip
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
