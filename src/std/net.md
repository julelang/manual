# std/net

## Index

[Variables](#variables)\
[fn JoinHostPort\(host: str, port: str\): str](#joinhostport)\
[fn SplitHostPort\(hostport: str\)\!: \(host: str, port: str\)](#splithostport)\
[fn IPv4\(a: byte, b: byte, c: byte, d: byte\): IP](#ipv4)\
[fn ParseIP\(s: str\): IP](#parseip)\
[fn LookupIP\(mut network: Network, address: str\)\!: \[\]&amp;IPAddr](#lookupip)\
[fn Listen\(network: Network, addr: str\)\!: Listener](#listen)\
[fn ListenUDP\(network: Network, addr: str\)\!: &amp;UDPConn](#listenudp)\
[fn Dial\(network: Network, addr: str\)\!: Conn](#dial)\
[fn DialTimeout\(network: Network, addr: str, timeout: time::Duration\)\!: Conn](#dialtimeout)\
[trait Addr](#addr)\
[trait Conn](#conn)\
[trait Listener](#listener)\
[struct Resolver](#resolver)\
[struct AddrError](#addrerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
[type IP](#ip)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Empty\(\): IP](#empty)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Empty\(\*self\): bool](#empty-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(\*self, x: IP\): bool](#equal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUnspecified\(\*self\): bool](#isunspecified)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsLoopback\(\*self\): bool](#isloopback)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsPrivate\(\*self\): bool](#isprivate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn To4\(mut \*self\): IP](#to4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn To16\(mut \*self\): IP](#to16)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-1)\
[struct IPAddr](#ipaddr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): str](#network)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Resolve\(mut network: Network, address: str\)\!: &amp;IPAddr](#resolve)\
[type HardwareAddr](#hardwareaddr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Parse\(s: str\)\!: HardwareAddr](#parse)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-3)\
[struct DNSError](#dnserror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-4)\
[struct TCPAddr](#tcpaddr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): str](#network-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Resolve\(mut network: Network, address: str\)\!: &amp;TCPAddr](#resolve-1)\
[struct TCPConn](#tcpconn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dial\(addr: str\)\!: &amp;TCPConn](#dial-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DialTimeout\(addr: str, timeout: time::Duration\)\!: &amp;TCPConn](#dialtimeout-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut \*self, mut buf: \[\]byte\)\!: int](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, buf: \[\]byte\)\!: int](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetReadDeadline\(mut \*self, deadline: time::Duration\)\!](#setreaddeadline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetWriteDeadline\(mut \*self, deadline: time::Duration\)\!](#setwritedeadline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetNoDelay\(mut \*self, noDelay: bool\)\!](#setnodelay)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): Network](#network-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RawFD\(\*self\): u64](#rawfd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut \*self\)\!](#close)\
[struct TCPListener](#tcplistener)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bind\(addr: str\)\!: &amp;TCPListener](#bind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Accept\(\*self\)\!: Conn](#accept)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): Network](#network-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut \*self\)\!](#close-1)\
[struct UDPAddr](#udpaddr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): str](#network-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Resolve\(mut network: Network, address: str\)\!: &amp;UDPAddr](#resolve-2)\
[struct UDPConn](#udpconn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bind\(addr: str\)\!: &amp;UDPConn](#bind-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dial\(addr: str\)\!: &amp;UDPConn](#dial-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut \*self, mut buf: \[\]byte\)\!: \(n: int\)](#read-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, buf: \[\]byte\)\!: \(n: int\)](#write-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetReadDeadline\(mut \*self, deadline: time::Duration\)\!](#setreaddeadline-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetWriteDeadline\(mut \*self, deadline: time::Duration\)\!](#setwritedeadline-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Network\(\*self\): Network](#network-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RawFD\(\*self\): u64](#rawfd-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut \*self\)\!](#close-2)\
[enum Network](#network-6)

## Variables

```jule
let mut DefaultResolver = Resolver{ ... }
```
Default DNS resolver of the package\. Mutating this variable is not concurrency\-safe by default\. Most programs only need to configure it once, so performing configuration before introducing concurrency is the most common approach\. Otherwise, atomic access is required for Read/Write operations\.

---

```jule
let mut ErrInvalidTimeout = errors::New("timeout value is not valid, duration is out of range")
let mut ErrTimeout = errors::New("connection timed out")
```
Common errors of net package\. Mutation is undefined behavior\.

---

```jule
const IPv4Len = 1 << 2
```
Length of IPv4 address in bytes\.

---

```jule
let mut Broadcast = IPv4(255, 255, 255, 255)
```
The IPv4 address known as limited broadcast\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv4AllSystems = IPv4(224, 0, 0, 1)
```
The IPv4 address known as all systems\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv4AllRouters = IPv4(224, 0, 0, 2)
```
The IPv4 address known as all routers\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv4Zero = IPv4(0, 0, 0, 0)
```
The IPv4 address known as all zeros\. The IP that returned is statically allocated and mutable\.

---

```jule
const IPv6Len = 1 << 4
```
Length of IPv6 address in bytes\.

---

```jule
let mut IPv6Zero = IP([ ... ])
```
The IPv6 address known as all zeros\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv6Unspecified = IP([ ... ])
```
The IPv6 address known as unspecified\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv6Loopback = IP([ ... ])
```
The IPv6 address known as loopback\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv6InterfaceLocalAllNodes = IP([ ... ])
```
The IPv6 address known as interterface local all nodes\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv6LinkLocalAllNodes = IP([ ... ])
```
The IPv6 address known as link local all nodes\. The IP that returned is statically allocated and mutable\.

---

```jule
let mut IPv6LinkLocalAllRouters = IP([ ... ])
```
The IPv6 address known as link local all routers\. The IP that returned is statically allocated and mutable\.

## JoinHostPort
```jule
fn JoinHostPort(host: str, port: str): str
```
Combines host and port into a network address of the form &#34;host:port&#34;\. If host contains a colon, as found in literal IPv6 addresses, then JoinHostPort returns &#34;\[host\]:port&#34;\.

See the \[Dial\] function for a description of the host and port parameters\.

## SplitHostPort
```jule
fn SplitHostPort(hostport: str)!: (host: str, port: str)
```
Splits a network address of the form &#34;host:port&#34;, &#34;host%zone:port&#34;, &#34;\[host\]:port&#34; or &#34;\[host%zone\]:port&#34; into host or host%zone and port\.

A literal IPv6 address in hostport must be enclosed in square brackets, as in &#34;\[::1\]:80&#34;, &#34;\[::1%lo0\]:80&#34;\.

See the \[Dial\] function for a description of the hostport parameter, and host and port results\.

## IPv4
```jule
#disable boundary
fn IPv4(a: byte, b: byte, c: byte, d: byte): IP
```
Returns the IP address \(in 16\-byte form\) of the IPv4 address a\.b\.c\.d\.

## ParseIP
```jule
fn ParseIP(s: str): IP
```
Parses s as an IP address, returning the result\. The string s can be in IPv4 dotted decimal \(&#34;192\.0\.2\.1&#34;\), IPv6 \(&#34;2001:db8::68&#34;\), or IPv4\-mapped IPv6 \(&#34;::ffff:192\.0\.2\.1&#34;\) form\. If s is not a valid textual representation of an IP address, it returns nil\. The returned address is always 16 bytes, IPv4 addresses are returned in IPv4\-mapped IPv6 form\.

## LookupIP
```jule
async fn LookupIP(mut network: Network, address: str)!: []&IPAddr
```
Looks up host using the local resolver\. It returns a slice of that host&#39;s IPv4 and IPv6 addresses by network\. Network must be IP, IP4 or IP6\. Looks up for IPv4 addresses only, if network is IP4\. Looks up for IPv6 addresses only, if network is IP6\. Looks up for IPv4 and IPv6 addresses, if network is IP\.

## Listen
```jule
async fn Listen(network: Network, addr: str)!: Listener
```
Listens the address on the named network\. It will forward any exceptional from network connectors\.

For UDP network, the \[ListenUDP\] function should be used\. If the network parameter is points UDP network, function will panic\.

See the \[Dial\] function for a description of the network and addr parameters\.

## ListenUDP
```jule
async fn ListenUDP(network: Network, addr: str)!: &UDPConn
```
Listens the address on the named network\. It will forward any exceptional from network connectors\. Just for UDP networks\.

See the \[Dial\] function for a description of the network and addr parameters\.

## Dial
```jule
async fn Dial(network: Network, addr: str)!: Conn
```
Connects to the address on the named network\. Network should be one of the fields of the Network enum\. The addr parameter is should represent valid address according to network\.

For TCP:<br>
```
The address has the form "host:port".
The host must be a literal IP address, or a host name that can be
resolved to IP addresses such as "localhost".
The port must be a literal port number or a service name.
If the host is a literal IPv6 address it must be enclosed in brackets,
as in "[2001:db8::1]:80" or "[fe80::1%zone]:80".
The zone specifies the scope of the literal IPv6 address as defined
in RFC 4007. The functions [JoinHostPort] and [SplitHostPort] manipulate
a pair of host and port in this form.

If network is Tcp4, it will accept only IPv4 addresses and if address is IPv6,
will try to convert IPv4. If network is Tcp6, it will accept only IPv6 address and
address is IPv4, will not try to convert IPv6. If network is Tcp, it will use Tcp4
for empty addresses and try for IPv4 if possible. If address is IPv4 or IPv6 which
is converted to IPv4 successfully, will use Tcp4, otherwise IPv6 and Tcp6 preferred.
```
For UDP:<br>
```
The address has the form "host:port".
The host must be a literal IP address, or a host name that can be
resolved to IP addresses such as "localhost".
The port must be a literal port number or a service name.
If the host is a literal IPv6 address it must be enclosed in brackets,
as in "[2001:db8::1]:80" or "[fe80::1%zone]:80".
The zone specifies the scope of the literal IPv6 address as defined
in RFC 4007. The functions [JoinHostPort] and [SplitHostPort] manipulate
a pair of host and port in this form.

If network is Udp4, it will accept only IPv4 addresses and if address is IPv6,
will try to convert IPv4. If network is Udp6, it will accept only IPv6 address and
address is IPv4, will not try to convert IPv6. If network is Udp, it will use Udp4
for empty addresses and try for IPv4 if possible. If address is IPv4 or IPv6 which
is converted to IPv4 successfully, will use Udp4, otherwise IPv6 and Udp6 preferred.
```
It will forward any exceptional from network connectors\.

## DialTimeout
```jule
async fn DialTimeout(network: Network, addr: str, timeout: time::Duration)!: Conn
```
Same as Dial, but uses timeout\. For UDP networks, timeout will be ignored\. Timeout precision is microseconds\. If the timeout is below one microsecond it will be ignored\.

## Addr
```jule
trait Addr {
	// Returns name of the network.
	fn Network(*self): str

	// String form of address.
	fn Str(*self): str
}
```
Represents a network end point address\.

## Conn
```jule
trait Conn {
	io::Reader
	io::Writer
	io::Closer
	fn SetReadDeadline(mut *self, deadline: time::Duration)!
	fn SetWriteDeadline(mut *self, deadline: time::Duration)!
	fn Network(*self): Network
	fn RawFD(*self): u64
}
```
Common connection behavior\. Inherits the io::Reader, io::Writer, and io::Closer traits\.

## Listener
```jule
trait Listener {
	io::Closer
	async fn Accept(*self)!: Conn
	fn Network(*self): Network
}
```
Common listener behavior\. Inherits the io::Closer trait\.

## Resolver
```jule
struct Resolver {
	// When it is true, it forces to use pure Jule DNS resolver.
	// Otherwise, DNS resolver of the operating system will be used, if it is available.
	// Pure Jule implementation might be slow compared to the operating system implementation.
	// Disabled by default.
	PreferJule: bool

	// Enables forced parallel DNS lookups in Jule's resolver.
	// This overrides the DNS configuration's default sequential behavior.
	// Parallel lookups are only performed when beneficial,
	// such as simultaneous IPv4 and IPv6 queries.
	// For single-protocol lookups (IPv4-only or IPv6-only),
	// the resolver may still use sequential processing.
	ForceParallel: bool
}
```
DNS resolver configuration\.

## AddrError
```jule
struct AddrError {
	Err:  str
	Addr: str
}
```
Common type of address errors\.

### Str
```jule
fn Str(*self): str
```


## IP
```jule
type IP: []byte
```
An IP is a single IP address, wrapper for a slice of bytes\. Functions in this package accept either 4\-byte \(IPv4\) or 16\-byte \(IPv6\) slices as input\.

Note that in this documentation, referring to an IP address as an IPv4 address or an IPv6 address is a semantic property of the address, not just the length of the byte slice: a 16\-byte slice can still be an IPv4 address\.

Some methods might return mutable data\. There is no immutability promises\.

### Empty
```jule
fn Empty(): IP
```
Returns empty IP address\.

### Empty
```jule
fn Empty(*self): bool
```
Reports whether IP is empty\.

### Equal
```jule
fn Equal(*self, x: IP): bool
```
Reports wherher IPs are points to the same address\. An IPv4 address and that same address in IPv6 from are considered to be equal\.

### IsUnspecified
```jule
fn IsUnspecified(*self): bool
```
Reports whether IP is an unspecified address, which is &#34;0\.0\.0\.0&#34; in IPv4 or &#34;::&#34; in IPv6\.

### IsLoopback
```jule
fn IsLoopback(*self): bool
```
Reports whether IP is a loopback address\.

### IsPrivate
```jule
#disable boundary
fn IsPrivate(*self): bool
```
Reports whether IP is a private address according to RFC 1918 \(for IPv4\) and RFC 4193 \(for IPv6\)\.

### To4
```jule
#disable boundary
fn To4(mut *self): IP
```
Converts the IPv4 address to a 4\-byte representation\. Returns empty if IP is not an IPv4 address\. Returned IP may use the common mutable allocation with self\.

### To16
```jule
#disable boundary
fn To16(mut *self): IP
```
Converts the IP address to a 16\-byte representation\. Returns empty if address is not an IP address \(it is the wrong length\)\.

### Str
```jule
fn Str(*self): str
```
Returns string form of the IP address\. It returns one of 4 forms:<br>

- &#34;&lt;nil&gt;&#34;, if ip is empty
- dotted decimal \(&#34;192\.0\.2\.1&#34;\), if ip is an IPv4 or IP4\-mapped IPv6 address
- IPv6 conforming to RFC 5952 \(&#34;2001:db8::1&#34;\), if ip is a valid IPv6 address
- the hexadecimal form of ip, without punctuation, if no other cases apply

## IPAddr
```jule
struct IPAddr {
	IP:   IP
	Zone: str // IPv6 scoped addressing zone
}
```
Represents the address of an IP end point\.

### Implemented Traits

- `Addr`

### Network
```jule
fn Network(*self): str
```
Returns the address&#39;s network name, &#34;ip&#34;\.

### Str
```jule
fn Str(*self): str
```
Returns string form of address\.

### Resolve
```jule
async fn Resolve(mut network: Network, address: str)!: &IPAddr
```
Returns an address of IP end point\. The network must be a IP network name\.

If the host in the address parameter is not a literal IP address or the port is not a literal port number, it resolves the address to an address of IP end point\. Otherwise, it parses the address as a pair of literal IP address and port number\. The address parameter can use a host name, but this is not recommended, because it will return at most one of the host name&#39;s IP addresses\.

See the \[Dial\] function for a description of the network and address parameters\.

## HardwareAddr
```jule
type HardwareAddr: []byte
```
Physical hardware address\.

### Parse
```jule
fn Parse(s: str)!: HardwareAddr
```
Parses s as an IEEE 802 MAC\-48, EUI\-48, EUI\-64, or a 20\-octet IP over InfiniBand link\-layer address using one of the following formats:<br>
```
00:00:5e:00:53:01
02:00:5e:10:00:00:00:01
00:00:00:00:fe:80:00:00:00:00:00:00:02:00:5e:10:00:00:00:01
00-00-5e-00-53-01
02-00-5e-10-00-00-00-01
00-00-00-00-fe-80-00-00-00-00-00-00-02-00-5e-10-00-00-00-01
0000.5e00.5301
0200.5e10.0000.0001
0000.0000.fe80.0000.0000.0000.0200.5e10.0000.0001
```
Exceptional is always will be AddrError\.Unable\.

### Str
```jule
fn Str(*self): str
```
Returns address in string form\.

## DNSError
```jule
struct DNSError {
	Err:    str // description of the error
	Name:   str // name looked for
	Server: str // server used
}
```
Represents a DNS lookup error\.

### Str
```jule
fn Str(*self): str
```


## TCPAddr
```jule
struct TCPAddr {
	IP:   IP
	Port: int
	Zone: str // IPv6 scoped addressing zone.
}
```
Represents the address of a TCP end point\.

### Implemented Traits

- `Addr`

### Network
```jule
fn Network(*self): str
```
Returns the address&#39;s network name\.

### Str
```jule
fn Str(*self): str
```
Returns string form of address\.

### Resolve
```jule
async fn Resolve(mut network: Network, address: str)!: &TCPAddr
```
Returns an address of TCP end point\. The network must be a TCP network name\.

If the host in the address parameter is not a literal IP address or the port is not a literal port number, it resolves the address to an address of TCP end point\. Otherwise, it parses the address as a pair of literal IP address and port number\. The address parameter can use a host name, but this is not recommended, because it will return at most one of the host name&#39;s IP addresses\.

See the \[Dial\] function for a description of the network and address parameters\.

## TCPConn
```jule
struct TCPConn {
	Addr:   &TCPAddr
	// NOTE: contains filtered hidden or unexported fields
}
```
TCP connection\. In most cases, represents TCP client\.

### Implemented Traits

- `Conn`
- `io::Reader`
- `io::Writer`
- `io::ReadWriteCloser`
- `io::WriteCloser`

### Dial
```jule
async fn Dial(addr: str)!: &TCPConn
```
Connects to TCP listener by given address\. Returns relevant created &amp;TCPConn if success\. If addr is not a valid address, it will forward relevant parse exceptionals\. In addition, any bind and listening error will be return as exceptional\.

See the \[Dial\] function for a description of the addr parameter\.

### DialTimeout
```jule
async fn DialTimeout(addr: str, timeout: time::Duration)!: &TCPConn
```
Same as TCPListener\.Dial, but uses timeout\.

### Read
```jule
async fn Read(mut *self, mut buf: []byte)!: int
```
Read bytes to buffer from connection and returns read byte count\. The number of bytes read can never exceed the length of the buffer\. If the buffer is larger than the number of bytes that can be read, the buffer will not cause an overflow\. It will panic if connection is closed\. If connection is closed by server, it returns zero and sets connection state as closed\. So if you try read again, function will panic because of connection state is closed\.

### Write
```jule
async fn Write(mut *self, buf: []byte)!: int
```
Writes bytes to connection and returns written byte count\. The number of bytes written can never exceed the length of the buffer\.

### SetReadDeadline
```jule
fn SetReadDeadline(mut *self, deadline: time::Duration)!
```
Sets or updates a deadline for the future read operations\. If the deadline is given as 0, the deadline is cleared\. The deadline is evaluated against an absolute point in time\. In practice, the given deadline is equivalent to \`time::Now\(\)\.Add\(deadline\)\`\. It does not apply per operation, but remains valid until this absolute time\. Any operation initiated after this deadline has passed will fail\.

### SetWriteDeadline
```jule
fn SetWriteDeadline(mut *self, deadline: time::Duration)!
```
Sets or updates a deadline for the future write operations\. If the deadline is given as 0, the deadline is cleared\. The deadline is evaluated against an absolute point in time\. In practice, the given deadline is equivalent to \`time::Now\(\)\.Add\(deadline\)\`\. It does not apply per operation, but remains valid until this absolute time\. Any operation initiated after this deadline has passed will fail\.

### SetNoDelay
```jule
fn SetNoDelay(mut *self, noDelay: bool)!
```
Controls whether the operating system should delay packet transmission in hopes of sending fewer packets \(Nagle&#39;s algorithm\)\. The default is true \(no delay\), meaning that data is sent as soon as possible after a Write\.

### Network
```jule
fn Network(*self): Network
```
Returns network name which is connected\. If connection closed, returns Network\.TCP as a general network\.

### RawFD
```jule
fn RawFD(*self): u64
```
Returns raw socket/file\-descriptor of the connection\. Intended for low\-level use\. Just borrow, do not close or something else\.

### Close
```jule
async fn Close(mut *self)!
```
Closes connection\.

## TCPListener
```jule
struct TCPListener {
	// NOTE: contains filtered hidden or unexported fields
}
```
TCP listener\. In most cases, represents TCP server\.

### Implemented Traits

- `Listener`

### Bind
```jule
async fn Bind(addr: str)!: &TCPListener
```
Binds new TCP listener and starts listening given address\. Returns relevant created &amp;TCPListener if success\. If addr is not a valid address, it will forward relevant parse exceptionals\. In addition, any bind and listening error will be return as exceptional\.

See the \[Dial\] function for a description of the addr parameter\.

### Accept
```jule
async fn Accept(*self)!: Conn
```
Accepts incoming connection, returns &amp;TCPConn\. Panics if connection is closed\.

### Network
```jule
fn Network(*self): Network
```
Returns network name which is listening\. If connection closed, returns Network\.TCP as a general network\.

### Close
```jule
async fn Close(mut *self)!
```
Closes connection\.

## UDPAddr
```jule
struct UDPAddr {
	IP:   IP
	Port: int
	Zone: str // IPv6 scoped addressing zone.
}
```
Represents the address of a UDP end point\.

### Implemented Traits

- `Addr`

### Network
```jule
fn Network(*self): str
```
Returns the address&#39;s network name\.

### Str
```jule
fn Str(*self): str
```
Returns string form of address\.

### Resolve
```jule
async fn Resolve(mut network: Network, address: str)!: &UDPAddr
```
Returns an address of UDP end point\. The network must be a UDP network name\.

If the host in the address parameter is not a literal IP address or the port is not a literal port number, it resolves the address to an address of UDP end point\. Otherwise, it parses the address as a pair of literal IP address and port number\. The address parameter can use a host name, but this is not recommended, because it will return at most one of the host name&#39;s IP addresses\.

See the \[Dial\] function for a description of the network and address parameters\.

## UDPConn
```jule
struct UDPConn {
	Addr:          &UDPAddr
	// NOTE: contains filtered hidden or unexported fields
}
```
UDP connection\. This structure represents server and client connections\.

### Implemented Traits

- `Conn`
- `io::Reader`
- `io::Writer`
- `io::ReadWriteCloser`
- `io::WriteCloser`

### Bind
```jule
async fn Bind(addr: str)!: &UDPConn
```
Binds new UDP listener and starts listening given address\. Returns relevant created &amp;UDPConn if success\. If addr is not a valid address, it will forward relevant parse exceptionals\. In addition, any bind and listening error will be return as exceptional\.

See the \[Dial\] function for a description of the addr parameter\.

### Dial
```jule
async fn Dial(addr: str)!: &UDPConn
```
Connects to UDP listener by given address\. Returns relevant created &amp;UDPConn if success\. If addr is not a valid address, it will forward relevant parse exceptionals\. In addition, any bind and listening error will be return as exceptional\.

See the \[Dial\] function for a description of the addr parameter\.

### Read
```jule
async fn Read(mut *self, mut buf: []byte)!: (n: int)
```
Read bytes to buffer from connection and returns read byte count\. The number of bytes read can never exceed the length of the buffer\. If the buffer is larger than the number of bytes that can be read, the buffer will not cause an overflow\. It will panic if connection is closed\.

### Write
```jule
async fn Write(mut *self, buf: []byte)!: (n: int)
```
Writes bytes to connection and returns written byte count\. The number of bytes written can never exceed the length of the buffer\.

### SetReadDeadline
```jule
fn SetReadDeadline(mut *self, deadline: time::Duration)!
```
Sets or updates a deadline for the future read operations\. If the deadline is given as 0, the deadline is cleared\. The deadline is evaluated against an absolute point in time\. In practice, the given deadline is equivalent to \`time::Now\(\)\.Add\(deadline\)\`\. It does not apply per operation, but remains valid until this absolute time\. Any operation initiated after this deadline has passed will fail\.

### SetWriteDeadline
```jule
fn SetWriteDeadline(mut *self, deadline: time::Duration)!
```
Sets or updates a deadline for the future write operations\. If the deadline is given as 0, the deadline is cleared\. The deadline is evaluated against an absolute point in time\. In practice, the given deadline is equivalent to \`time::Now\(\)\.Add\(deadline\)\`\. It does not apply per operation, but remains valid until this absolute time\. Any operation initiated after this deadline has passed will fail\.

### Network
```jule
fn Network(*self): Network
```
Returns network name which is connected or listening\. If connection closed, returns Network\.UDP as a general network\.

### RawFD
```jule
fn RawFD(*self): u64
```
Returns raw socket/file\-descriptor of the connection\. Intended for low\-level use\. Just borrow, do not close or something else\.

### Close
```jule
async fn Close(mut *self)!
```
Closes connection\.

## Network
```jule
enum Network: str {
	IP: "ip",
	IP4: "ip4",
	IP6: "ip6",
	TCP: "tcp",
	TCP4: "tcp4",
	TCP6: "tcp6",
	UDP: "udp",
	UDP4: "udp4",
	UDP6: "udp6",
}
```
Network names\.