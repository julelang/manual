# Signals

The Jule API supports specific signals on specific platforms and includes definitions for handling them. There are type alias to declare a signal data type: `Signal`. This type alias is an integer data type that can be used to store a signal value.

### Darwin Signals

All definitions are in `signal.hpp` header.

```cpp
constexpr jule::Signal SIG_ABRT;
```
```cpp
constexpr jule::Signal SIG_ALRM;
```
```cpp
constexpr jule::Signal SIG_BUS;
```
```cpp
constexpr jule::Signal SIG_CHLD;
```
```cpp
constexpr jule::Signal SIG_CONT;
```
```cpp
constexpr jule::Signal SIG_EMT;
```
```cpp
constexpr jule::Signal SIG_FPE;
```
```cpp
constexpr jule::Signal SIG_HUP;
```
```cpp
constexpr jule::Signal SIG_ILL;
```
```cpp
constexpr jule::Signal SIG_INFO;
```
```cpp
constexpr jule::Signal SIG_INT;
```
```cpp
constexpr jule::Signal SIG_IO;
```
```cpp
constexpr jule::Signal SIG_IOT;
```
```cpp
constexpr jule::Signal SIG_KILL;
```
```cpp
constexpr jule::Signal SIG_PIPE;
```
```cpp
constexpr jule::Signal SIG_PROF;
```
```cpp
constexpr jule::Signal SIG_QUIT;
```
```cpp
constexpr jule::Signal SIG_SEGV;
```
```cpp
constexpr jule::Signal SIG_STOP;
```
```cpp
constexpr jule::Signal SIG_SYS;
```
```cpp
constexpr jule::Signal SIG_TERM
```
```cpp
constexpr jule::Signal SIG_TRAP
```
```cpp
constexpr jule::Signal SIG_TSTP;
```
```cpp
constexpr jule::Signal SIG_TTIN;
```
```cpp
constexpr jule::Signal SIG_TTOU;
```
```cpp
constexpr jule::Signal SIG_URG;
```
```cpp
constexpr jule::Signal SIG_USR1;
```
```cpp
constexpr jule::Signal SIG_USR2;
```
```cpp
constexpr jule::Signal SIG_VTALRM;
```
```cpp
constexpr jule::Signal SIG_WINCH;
```
```cpp
constexpr jule::Signal SIG_XCPU;
```
```cpp
constexpr jule::Signal SIG_XFSZ;
```

### Windows Signals

All definitions are in `signal.hpp` header.

```cpp
constexpr jule::Signal SIG_HUP;
```
```cpp
constexpr jule::Signal SIG_INT;
```
```cpp
constexpr jule::Signal SIG_QUIT;
```
```cpp
constexpr jule::Signal SIG_ILL;
```
```cpp
constexpr jule::Signal SIG_TRAP;
```
```cpp
constexpr jule::Signal SIG_ABRT;
```
```cpp
constexpr jule::Signal SIG_BUS;
```
```cpp
constexpr jule::Signal SIG_FPE;
```
```cpp
constexpr jule::Signal SIG_KILL;
```
```cpp
constexpr jule::Signal SIG_SEGV;
```
```cpp
constexpr jule::Signal SIG_PIPE;
```
```cpp
constexpr jule::Signal SIG_ALRM;
```
```cpp
constexpr jule::Signal SIG_TER;
```

### Linux Signals

All definitions are in `signal.hpp` header.

```cpp
constexpr jule::Signal SIG_ABRT;
```
```cpp
constexpr jule::Signal SIG_ALRM;
```
```cpp
constexpr jule::Signal SIG_BUS;
```
```cpp
constexpr jule::Signal SIG_CHLD;
```
```cpp
constexpr jule::Signal SIG_CLD;
```
```cpp
constexpr jule::Signal SIG_CONT;
```
```cpp
constexpr jule::Signal SIG_FPE;
```
```cpp
constexpr jule::Signal SIG_HUP;
```
```cpp
constexpr jule::Signal SIG_ILL;
```
```cpp
constexpr jule::Signal SIG_INT;
```
```cpp
constexpr jule::Signal SIG_IO;
```
```cpp
constexpr jule::Signal SIG_IOT;
```
```cpp
constexpr jule::Signal SIG_KILL;
```
```cpp
constexpr jule::Signal SIG_PIPE;
```
```cpp
constexpr jule::Signal SIG_POLL;
```
```cpp
constexpr jule::Signal SIG_PROF;
```
```cpp
constexpr jule::Signal SIG_PWR;
```
```cpp
constexpr jule::Signal SIG_QUIT;
```
```cpp
constexpr jule::Signal SIG_SEGV;
```
```cpp
constexpr jule::Signal SIG_STKFLT;
```
```cpp
constexpr jule::Signal SIG_STOP;
```
```cpp
constexpr jule::Signal SIG_SYS;
```
```cpp
constexpr jule::Signal SIG_TERM;
```
```cpp
constexpr jule::Signal SIG_TRAP;
```
```cpp
constexpr jule::Signal SIG_TSTP;
```
```cpp
constexpr jule::Signal SIG_TTIN;
```
```cpp
constexpr jule::Signal SIG_TTOU;
```
```cpp
constexpr jule::Signal SIG_UNUSED;
```
```cpp
constexpr jule::Signal SIG_URG;
```
```cpp
constexpr jule::Signal SIG_USR1;
```
```cpp
constexpr jule::Signal SIG_USR2;
```
```cpp
constexpr jule::Signal SIG_VTALRM;
```
```cpp
constexpr jule::Signal SIG_WINCH;
```
```cpp
constexpr jule::Signal SIG_XCPU;
```
```cpp
constexpr jule::Signal SIG_XFSZ;
```

## Signal Handler

The API also provides a signal handler for any signal handling. This signal handler is the default signal handler of Jule programs.

Relevant function (in `signal.hpp`):
```cpp
void signal_handler(jule::Signal sig);
```

## Setup Signal Handler

The API also provides a function to set a single handler for all supported signals. This function sets all supported signal states of the respective platform to the target signal handler.

Relevant function (in `signal.hpp`):
```cpp
void set_sig_handler(void(*handler)(jule::Signal sig));
```
