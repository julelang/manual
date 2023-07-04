# std::debug

## Globals
### `mut let ENABLE: bool`
If this is enabled, debug and all subpackages assume that the program has been compiled for debugging. In this case the debugging tools work. However, if it is not enabled, the debugging tools will not work because it assumes that the program was not compiled for debugging. 