# std/net

## Functions

```jule
fn Listen(network: Network, addr: str)!: Listener
```
Listens the address on the named network. It will forward any exceptional from network connectors.

For UDP networks, the `ListenUDP` function should be used. If the network parameter is points udp network, function will panic.

See the `Connect` function for a description of the network and addr parameters.

---

```jule
fn ListenUDP(network: Network, addr: str)!: &UdpConn
```
Listens the address on the named network. It will forward any exceptional from network connectors. Just for UDP networks.

See the `Connect` function for a description of the network and addr parameters.

---

```jule
fn Connect(network: Network, addr: str)!: Conn
```
Connects to the address on the named network. Network should be one of the fields of the Network enum. The addr parameter is should represent valid address according to network.

For TCP:\
The address has the form `host:port`. The host must be a literal IP address, or a host name that can be resolved to IP addresses such as `localhost`. The port must be a literal port number or a service name. If the host is a literal IPv6 address it must be enclosed in brackets, as in `[2001:db8::1]:80` or `[fe80::1%zone]:80`. The zone specifies the scope of the literal IPv6 address as defined in RFC 4007. The functions `JoinHostPort` and `SplitHostPort` manipulate a pair of host and port in this form.

If network is Tcp4, it will accept only IPv4 addresses and if address is IPv6, will try to convert IPv4. If network is Tcp6, it will accept only IPv6 address and address is IPv4, will not try to convert IPv6. If network is Tcp, it will use Tcp4 for empty addresses and try for IPv4 if possible. If address is IPv4 or IPv6 which is converted to IPv4 successfully, will use Tcp4, otherwise IPv6 and Tcp6 preferred.

For UDP:\
The address has the form `host:port`. The host must be a literal IP address, or a host name that can be resolved to IP addresses such as `localhost`. The port must be a literal port number or a service name. If the host is a literal IPv6 address it must be enclosed in brackets, as in `[2001:db8::1]:80` or `[fe80::1%zone]:80`. The zone specifies the scope of the literal IPv6 address as defined in RFC 4007. The functions `JoinHostPort` and `SplitHostPort` manipulate a pair of host and port in this form.

If network is Udp4, it will accept only IPv4 addresses and if address is IPv6, will try to convert IPv4. If network is Udp6, it will accept only IPv6 address and address is IPv4, will not try to convert IPv6. If network is Udp, it will use Udp4 for empty addresses and try for IPv4 if possible. If address is IPv4 or IPv6 which is converted to IPv4 successfully, will use Udp4, otherwise IPv6 and Udp6 preferred.

It will forward any exceptional from network connectors.

---

```jule
fn ConnectTimeout(network: Network, addr: str, timeout: time::DurInt)!: Conn
```
Same as `Connect`, but uses timeout. For UDP networks, timeout will be ignored. Timeout precision is microseconds. If the timeout is below one microsecond it will be ignored.

---

```jule
fn JoinHostPort(host: str, port: str): str
```
Combines host and port into a network address of the form `host:port`. If host contains a colon, as found in literal
IPv6 addresses, then JoinHostPort returns `[host]:port`.

See the `Connect` function for a description of the host and port parameters.

---

```jule
fn SplitHostPort(hostport: str)!: (host: str, port: str)
```
Splits a network address of the form `host:port`, `host%zone:port`, `[host]:port` or `[host%zone]:port` into host or `host%zone` and port.

A literal IPv6 address in hostport must be enclosed in square brackets, as in `[::1]:80`, `[::1%lo0]:80`.

See the `Connect` function for a description of the hostport parameter, and host and port results.

Exceptionals are always will be `AddrError`.

## Structures

```jule
struct Ip {
    Addr: []byte
}
```
An IP is a single IP address, wrapper for a slice of bytes. Functions in this package accept either 4-byte (IPv4) or 16-byte (IPv6) slices as input.

Note that in this documentation, referring to an IP address as an IPv4 address or an IPv6 address is a semantic property of the address, not just the length of the byte slice: a 16-byte slice can still be an IPv4 address.

Some methods might return mutable data. There is no immutability promises.

**Methods:**

`static fn Empty(): Ip`\
Returns empty IP address.

`fn Empty(self): bool`\
Reports whether IP is empty.

`fn Eq(self, other: Ip): bool`\
Reports wherher IPs are points to the same address. An IPv4 address and that same address in IPv6 from are considered to be equal.

`fn IsUnspecified(self): bool`\
Reports whether IP is an unspecified address, which is "0.0.0.0" in IPv4 or "::" in IPv6.

`fn IsLoopback(self): bool`\
Reports whether IP is a loopback address.

`fn IsPrivate(self): bool`\
Reports whether IP is a private address according to RFC 1918 (for IPv4) and RFC 4193 (for IPv6).

`fn To4(mut self): Ip`\
Converts the IPv4 address to a 4-byte representation. Returns empty if UP is not an Ipv4 address.

`fn To16(mut self): Ip`\
Converts the IP address to a 16-byte representation. Returns empty if address is not an IP address (it is the wrong length).

`fn Str(self): str`\
Returns string form of the IP address.\
It returns one of 4 forms:
- `<nil>`, if ip is empty
- dotted decimal ("192.0.2.1"), if ip is an IPv4 or IP4-mapped IPv6 address
- IPv6 conforming to RFC 5952 ("2001:db8::1"), if ip is a valid IPv6 address
- the hexadecimal form of ip, without punctuation, if no other cases apply

---

```jule
struct Ipv4
```
IPv4 functionalities.

**Fields:**

`const Len`\
Length of IPv4 address in bytes.

**Methods:**

`static fn Broadcast(): Ip`\
Returns IPv4 address known as limited broadcast.\
The IP that returned is statically allocated and mutable.

`static fn AllSystems(): Ip`\
Returns IPv4 address known as all systems.\
The IP that returned is statically allocated and mutable.

`static fn AllRouters(): Ip`\
Returns IPv4 address known as all routers.\
The IP that returned is statically allocated and mutable.

`static fn Zero(): Ip`\
Returns IPv4 address known as all zeros.\
The IP that returned is statically allocated and mutable.

`static fn Addr(a: byte, b: byte, c: byte, d: byte): Ip`\
Returns the IP address (in 16-byte form) of the IPv4 address a.b.c.d.

---

```jule
struct Ipv6
```
IPv6 functionalities.

**Fields:**

`const Len`\
Length of IPv6 address in bytes.

**Methods:**

`static fn Zero(): Ip`\
Returns IPv6 address known as all zeros.\
The IP that returned is statically allocated and mutable.

`static fn Unspecified(): Ip`\
Returns IPv6 address known as unspecified.\
The IP that returned is statically allocated and mutable.

`static fn Loopback(): Ip`\
Returns IPv6 address known as loopback.\
The IP that returned is statically allocated and mutable.

`static fn InterfaceLocalAllNodes(): Ip`\
Returns IPv6 address known as interterface local all nodes.\
The IP that returned is statically allocated and mutable.

`static fn LinkLocalAllNodes(): Ip`\
Returns IPv6 address known as link local all nodes.
The IP that returned is statically allocated and mutable.

`static fn LinkLocalAllRouters(): Ip`\
Returns IPv6 address known as link local all routers.
The IP that returned is statically allocated and mutable.

---

```jule
struct TcpAddr {
    Ip:   Ip
    Port: int
    Zone: str // IPv6 scoped addressing zone.
}
```
Represents the address of a TCP end point.

::: info
**Implemented Traits**
- `Addr`
:::

**Methods:**

`static fn Resolve(mut network: Network, addr: str)!: &TcpAddr`\
Returns an address of TCP end point.
The network must be a TCP network name.

See the `Connect` function for a description of the network and addr parameters.

Exceptionals are always will be `AddrError`.

`fn Network(self): str`\
Returns the address's network name.

`fn Str(self): str`\
Returns string form of address.

---

```jule
struct UdpAddr {
    Ip:   Ip
    Port: int
    Zone: str // IPv6 scoped addressing zone.
}
```
Represents the address of a UDP end point.

::: info
**Implemented Traits**
- `Addr`
:::

**Methods:**

`static fn Resolve(mut network: Network, addr: str)!: &TcpAddr`\
Returns an address of UDP end point.
The network must be a UDP network name.

See the `Connect` function for a description of the network and addr parameters.

Exceptionals are always will be `AddrError`.

`fn Network(self): str`\
Returns the address's network name.

`fn Str(self): str`\
Returns string form of address.

---

```jule
struct TcpListener
```
TCP listener. In most cases, represents TCP server.

::: info
**Implemented Traits**
- `Listener`
:::

**Methods:**

`static fn Bind(addr: str)!: &TcpListener`\
Binds new TCP listener and starts listening given address. Returns relevant created `&TcpListener` if success. If addr is not a valid address, it will forward relevant parse exceptionals. In addition, any bind and listening error will be return as exceptional.

See the `Connect` function for a description of the addr parameter.

`static fn Connect(addr: str)!: &TcpConn`\
Connects to TCP listener by given address. Returns relevant created &TcpConn if success. If addr is not a valid address, it will forward relevant parse exceptionals. In addition, any bind and listening error will be return as exceptional.

See the `Connect` function for a description of the addr parameter.

`static fn ConnectTimeout(addr: str, timeout: time::DurInt)!: &TcpConn`\
Same as `TcpListener.Connect`, but uses timeout.

`fn Accept(self)!: Conn`\
Accepts incoming connection, returns `&TcpConn`. All exceptionals are error code of implementation. Panics if connection is closed.

`fn Network(self): Network`\
Returns network name which is listening. If connection closed, returns `Network.Tcp` as a general network.

`fn Close(mut self)!`\
Closes connection. All exceptionals are error code of implementation.

---

```jule
struct TcpConn {
    Addr: &TcpAddr
}
```
TCP connection. In most cases, represents TCP client.

::: info
**Implemented Traits**
- `Conn`
- `io::Reader`
- `io::Writer`
- `io::Stream`
- `io::WriteCloser`
:::

**Methods:**

`fn Read(mut self, mut buf: []byte)!: int`\
Read bytes to buffer from connection and returns readed byte count. The number of bytes readed can never exceed the length of the buffer. If the buffer is larger than the number of bytes that can be read, the buffer will not cause an overflow.

It will panic if connection is closed. If connection is closed by server, it returns zero and sets connection state as closed. So if you try read again, function will panic because of connection state is closed.

All exceptionals are error code of implementation.

`fn Write(mut self, buf: []byte)!: int`\
Writes bytes to connection and returns writed byte count. The number of bytes written can never exceed the length of the buffer. All exceptionals are error code of implementation.

`fn SetReadTimeout(mut self, timeout: time::DurInt)!`\
Sets read timeout for connection. Timeout precision is microseconds. If the timeout is below one microsecond it will be accepted as zero. The zero timeout, clears current timeout if exist. All exceptionals are error code of implementation.

`fn SetWriteTimeout(mut self, timeout: time::DurInt)!`\
Sets write timeout for connection. Timeout precision is microseconds. If the timeout is below one microsecond it will be accepted as zero. The zero timeout, clears current timeout if exist. All exceptionals are error code of implementation.

`fn Network(self): Network`\
Returns network name which is connected. If connection closed, returns Network.Tcp as a general network.

`fn Close(mut self)!`\
Closes connection. All exceptionals are error code of implementation.

---

```jule
struct UdpConn {
    Addr: &UdpAddr
}
```
UDP connection. This structure represents server and client connections.

::: info
**Implemented Traits**
- `Conn`
- `io::Reader`
- `io::Writer`
- `io::Stream`
- `io::WriteCloser`
:::

**Methods:**

`static fn Bind(addr: str)!: &UdpConn`\
Binds new UDP listener and starts listening given address. Returns relevant created `&UdpConn` if success. If addr is not a valid address, it will forward relevant parse exceptionals. In addition, any bind and listening error will be return as exceptional.

See the `Connect` function for a description of the addr parameter.

`static fn Connect(addr: str)!: &UdpConn`\
Connects to UDP listener by given address. Returns relevant created `&UdpConn` if success. If addr is not a valid address, it will forward relevant parse exceptionals. In addition, any bind and listening error will be return as exceptional.

See the `Connect` function for a description of the addr parameter.

`fn Read(mut self, mut buf: []byte)!: int`\
Read bytes to buffer from connection and returns readed byte count. The number of bytes readed can never exceed the length of the buffer. If the buffer is larger than the number of bytes that can be read, the buffer will not cause an overflow. It will panic if connection is closed. All exceptionals are error code of implementation.

`fn Write(mut self, buf: []byte)!: int`\
Writes bytes to connection and returns writed byte count. The number of bytes written can never exceed the length of the buffer. All exceptionals are error code of implementation.

`fn SetReadTimeout(mut self, timeout: time::DurInt)!`\
Sets read timeout for connection. Timeout precision is microseconds. If the timeout is below one microsecond it will be accepted as zero. The zero timeout, clears current timeout if exist. All exceptionals are error code of implementation.

`fn SetWriteTimeout(mut self, timeout: time::DurInt)!`\
Sets write timeout for connection. Timeout precision is microseconds. If the timeout is below one microsecond it will be accepted as zero. The zero timeout, clears current timeout if exist. All exceptionals are error code of implementation.

`fn Network(self): Network`\
Returns network name which is connected or listening. If connection closed, returns Network.Udp as a general network.

`fn Close(mut self)!`\
Closes connection. All exceptionals are error code of implementation.

---

```jule
struct HardwareAddr {
    Addr: []byte
}
```
Physical hardware address.

**Methods:**\
`static fn Parse(addr: str)! HardwareAddr`\
Parses s as an IEEE 802 MAC-48, EUI-48, EUI-64, or a 20-octet IP over InfiniBand link-layer address using one of the following formats:
- 00:00:5e:00:53:01
- 02:00:5e:10:00:00:00:01
- 00:00:00:00:fe:80:00:00:00:00:00:00:02:00:5e:10:00:00:00:01
- 00-00-5e-00-53-01
- 02-00-5e-10-00-00-00-01
- 00-00-00-00-fe-80-00-00-00-00-00-00-02-00-5e-10-00-00-00-01
- 0000.5e00.5301
- 0200.5e10.0000.0001
- 0000.0000.fe80.0000.0000.0000.0200.5e10.0000.0001

Exceptional is always will be `AddrError.Unable`.

`fn Str(self): str`\
Return address in string form.

## Traits

```jule
trait Conn {
    io::Reader
    io::Writer
    io::Closer
    fn SetReadTimeout(mut self, timeout: time::DurInt)!
    fn SetWriteTimeout(mut self, timeout: time::DurInt)!
    fn Network(self): Network
}
```
Common connection behavior.
Inherits the `io::Reader`, `io::Writer`, and `io::Closer` traits.

---

```jule
trait Listener {
    io::Closer
    fn Accept(self)!: Conn
    fn Network(self): Network
}
```
Common listener behavior.
Inherits the `io::Closer` trait.

---

```jule
// Represents a network end point address.
trait Addr {
    // Returns name of the network.
    fn Network(self): str

    // String form of address.
    fn Str(self): str
}
```

## Enums

`enum Network: str`\
Network names.

**Fields:**
- `Tcp`
- `Tcp4`
- `Tcp6`
- `Udp`
- `Udp4`
- `Udp6`

---

`enum AddrError`\
Address errors.

**Fields:**
- `NoSuitable`: No suitable address.
- `Unable`: Unable to parse address.
- `MissingIPv6`: IPv6 address is missing.
- `UnexpectedToken`: Address have unexpected token(s).
- `TooShort`: Address is too short.
- `TooLong`: Address is too long.
- `IPv4FieldValueOverflow`: IPv4 address field has value > 255.
- `EmptyField`: IPv4 address field must have at least one digit.
- `IPv4FieldOctetWithLeadingZero`: IPv4 field has octet with leading zero.
- `EmptyZone`: Zone must be a non-empty string.
- `IPv6FieldValueOverflow`: Each group must have 4 or less digits or field has value >=2^16.
- `IPv6ShortColon`: Colon must be followed by more characters.
- `MissingPort`: Port is missing.
- `InvalidPort`: Port is invalid.
- `TooManyColons`: There is too many colons.
- `MissingRBracket`: There is missing right bracket `]`.
- `UnexpectedLBracket`: Address have unexpected left bracket `[`.
- `UnexpectedRBracket`: Address have unexpected right bracket `]`.
- `UnknownNetwork`: Unknown network name.
