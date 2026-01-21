# Channels
<div class="warning-badge">experimental</div>

In Jule, channels work similarly to Go's channels.

From A Tour of Go:
> Channels are a typed conduit through which you can send and receive values with the channel operator <-.
> ```jule
> ch <- v   // Send v to channel ch.
> v := <-ch // Receive from ch, and
>           // assign value to v.
> ```
> (The data flows in the direction of the arrow.)

This is exactly the same for Jule. Channels are advantageous and one of the key features of Jule for concurrency. Thanks to channels, synchronization between coroutines can be achieved without the need for mechanisms like locks or condition variables.

Channels can be `nil` and are comparable types. Any comparison operation compares the memory addresses of the channels. That is, when two channels have the same memory address (i.e., the same channel instance) or are both `nil`, the result is true.

Channels are `nil` by default and must be initialized before use. The built-in `make` function should be used to initialize channels.

A channel type is defined with the `chan` keyword, followed by the type of the channel's value. For example: `chan int`, `chan bool`, or `chan &Foo`.

## Unbuffered Channels

Unbuffered channels have no buffer. When data is attempted to be received from an unbuffered channel, if no data has been sent to the channel, execution is blocked until data is sent. When attempted to sent data to the channel, it waits for the completion of other send operation if any, and when the coroutine gains control of channel, it sends the data to the channel and blocks execution until the data is received.

To initialize an unbuffered channel, the `make` function can be used by providing the desired channel type.
For example:
```jule
c := make(chan int)
```
In the example code above, the `c` is the unbuffered channel for the `int` type.

### Example Program

```jule
use "std/fmt"

async fn main() {
	c := make(chan int)
	co async fn() {
		fmt::Println("Received value: ", <-c)
	}()
	c <- 42
}
```
In the example code above, the `c` channel is an unbuffered channel.
An anonymous function is used to create a coroutine, and this coroutine attempts to read a value from the `c` channel.
The value read is then printed.
The main coroutine sends the value 42 to `c`, and the execution waits until the other coroutine receives the value.
Once the data is read, it is printed to stdout.

::: warning
After the data is received, the send operation in the main coroutine ends the blocking of program's execution.
Therefore, the program's execution might end before the data is printed to stdout.
:::

## Buffered Channels

Buffered channels, unlike unbuffered channels, have a pre-defined capacity and can perform reading and writing according to this capacity without blocking the program's execution.

Creating a buffered channel is very similar to creating an unbuffered channel, with the only difference being that a buffer capacity must be provided.

For example:
```jule
c := make(chan int, 20)
```
::: info
The given capacity must always be >= 0.
Otherwise, it will result in a panic.
If the capacity is equal to 0, the channel will be created as unbuffered.
:::
In the example code above, the `c` is the buffered channel for the `int` type with `20` buffer capacity.

A buffered channel can store data up to its capacity in advance.
If the capacity is not full, send operations do not block the program's execution, and the sent data is stored in the buffer.
If the buffer is full, the execution is blocked until space becomes available.
For receive operations, if there is data waiting to be read in the buffer, the program's execution does not block, and it reads the data and continues immediately.
If there is no data, the execution is blocked until data is sent.

Buffered channels create a queue for the sent and waiting-to-be-read data.
This queue operates as a FIFO (First In, First Out) queue, where received data is taken from the queue in FIFO order.
Similarly, sent data is added to the end of the queue.

### Example Program

```jule
use "std/time"

async fn main() {
	c := make(chan int, 4)
	mut n := 0
	for n < 4; n++ {
		co async fn() {
			c <- time::Now().Nanosecond()
		}()
	}
	mut t := 0
	for n > 0; n-- {
		t += <-c
	}
	println(t)
}
```
In the above code example, `c` is a buffered channel with a buffer capacity of `4`.
The program creates 4 coroutines, and each of these coroutines sends data to the channel.
The main coroutine reads as many values from the channel as the number of coroutines created.
The advantage of using a buffer here is that the coroutines can write data and terminate directly without blocking each other.

The main coroutine waits until all the data is received and then terminates by printing the result to stdout.
In this program, synchronization is achieved without the need for a `WaitGroup` or any similar structure.

## Closing Channels

The built-in `close` function is used to close channels.

For example:
```jule
close(c)
```
The example code above closes the `c` channel but does not set it to `nil`. This is because the channel is still usable according to its type, but once a channel is closed, it has restricted usage and should be handled carefully.

Once a channel is closed, no data should be sent to it. Attempting to send data to a closed channel results in a panic.

If you attempt to receive data from a channel, unbuffered channels will return the default value for the corresponding data type. For example, for basic arithmetic types, it will return `0`.

In buffered channels, if there are pending items in the queue, you will continue receiving data from the queue. However, once all the data in the queue has been received, it will return the default value, just like unbuffered channels.

Calling `close` on a channel that is already closed does not result in a panic. However, attempting to close a `nil` channel will result in a panic.

As explained in the [Concurrency Model](/concurrency/concurrency-model) section, when all sender coroutines that send data to a channel finish their work, they must close the channel. This ensures that the receiver coroutines operate correctly. Closing the channel sends a signal to the receivers and wakes up those that are sleeping. Otherwise, they may remain asleep forever.

### Receiving Data with Status

Channels will return the default value for the type as said when there is no data to receive.
To determine whether a data retrieval was successful, you can use an additional return value.

For example:
```jule
data, ok := <-c
if !ok {
	// receiving failed
}
```
In the above code example, an attempt is made to receive data from the `c` channel. The returned value is assigned to the `data` variable. The `ok` variable holds whether the data reception was successful. This allows you to check the status of the channel while receiving data.

The channel will return true for status only when data is successfully received from the channel. If the channel is unbuffered, it will return true if the channel is open and data has been received. If the channel is buffered, it will return true even if the channel is closed, as long as there is data waiting in the queue. After all the data in the queue has been received, it will return false.

## One-Way Channels

One-way channels are restricted channels designed for safer channel usage. By removing certain permissions, potential misuse can be prevented at compile time. This is particularly useful in scenarios where package developers need to share channels within their package with users.

In the type declaration of one-way channels, just like in data sending and receiving, the channel operator (arrow) indicates the direction of the data.

Channels can be implicitly converted to one another, but they must have the required permissions. For example, a regular both-way channel can be implicitly converted to receive-only or send-only channel. However, a receive-only channel cannot be converted back to regular both-way or send-only channel because it lacks send permissions.

### Receive-Only Channels

Type declaration: `<-chan T`
::: tip
If you want to pass receive-only channel to a regular both-way channel, like `chan <-chan int`, the parser will consider this as `chan<- chan int` actually. You can use parentheses like this `chan (<-chan int)` to achieve this.
:::

Receive-only channels can only receive data from the channel. They cannot send data or close the channel.

### Send-Only Channels

Type declaration: `chan<- T`

Send-only channels can only send data to the channel. They also have the permission to close the channel but cannot receive data from it.

## Mutability

For detailed information on channels and mutability, please refer to the main section titled [Mutability](/memory/mutability#channels).

## Send/Recv on nil Channels

Any send or receive operation on a `nil` channel will block execution of the coroutine indefinitely.

## Select Statement

Select statements are similar to match statements but are specialized for channels and are ideal for managing conditional situations. They are particularly preferred when multiple channels are involved.

A select statement's case can only take a single expression, and this expression must always involve either receiving data from a channel or sending data to a channel. The select statement evaluates each given expression and uses the first case that is eligible. If multiple cases are eligible, one of the eligible cases is chosen randomly.

When a receive expression (e.g., `<-c`) is used as a case in a select statement, the select checks if data can be received from the channel. If data is available to be receive, the select statement evaluates this case as eligible. Similarly, if a send expression (e.g., `c <-`) is used, the select checks if data can be sent to the channel. If the channel can receive data, the select statement evaluates this case as eligible.

Select statements are categorized into two types: non-blocking select and blocking select. If a select statement includes a default case, it is a non-blocking select. If it does not have a default case, it is a blocking select.

Non-blocking select statements check all cases only once, and if none are ready, they fall back to the default case. A blocking select, on the other hand, checks all cases and blocks the program's execution until at least one case becomes eligible.

Expressions of each case will be evaluated once before the select statement and will be used again when an attempt is made to select a case. Nil channels do not cause errors such as runtime panics, select statements simply ignore them. If all channels are nil or closed, blocking select statements will block indefinitely.

Using a select statement is similar to using a match statement and is written almost the same way. However, unlike match statements, select statements can use `break` statements but do not support `fall` statements.

For example:
```jule
use "std/time"

async fn main() {
	ch1 := make(chan str)
	ch2 := make(chan str)

	co async fn() {
		time::Sleep(1 * time::Second).await
		ch1 <- "Message from channel 1"
	}()

	co async fn() {
		time::Sleep(1 * time::Second).await
		ch2 <- "Message from channel 2"
	}()

	select {
	| <-ch1:
		println("channel 1 selected")
	| <-ch2:
		println("channel 2 selected")
	}
}
```
In the above code example, a blocking select statement attempts to receive data from two channels. The result could be either of the two channels. After one case is executed, the program will terminate, meaning the expected behavior is that data will be received from at least one channel and one case will be executed.

In the code above, the values received in `receive` operations are inaccessible. If you want to process the received data, you can define a local variable or assign it to existing memory.

For example:
```jule
async fn main() {
	x := make(chan int)
	co async fn() {
		x <- 56
	}()

	let mut z: int
	select {
	| w := <-x:
		println(w)
	| z = <-x:
		println(z / 2)
	}
	println(z)
}
```
In the code above, an attempt is made to receive data from the same channel. Any case may execute. If the first case runs, nothing is written to the `z` variable, and the output is `56` and `0`. If the second case runs, `56` is written to the `z` variable, and the output is `28` and `56`.

### Empty Select Statement

An empty select statement results in a CPU yield, meaning it parks the current coroutine and switches to executing a different coroutine. Coroutine will not continue to execute following statements after an empty statement.

For example:
```jule
select{}
```

## Range Iterations over Channels

Channels can be used in range iterations. For this, a channel must have the receive permission. The iteration will continue as long as data can be receive from the channel. This means it will repeat until the channel is closed and the buffer, if any, is consumed.

For example:
```jule
async fn main() {
	c := make(chan int, 4)
	c <- 10
	c <- 20
	c <- 30
	c <- 40
	close(c)
	for x in c {
		println(x)
	}
}
```
In the above code example, the iteration receives all the values from the buffer in sequence and then terminates because the channel is closed, meaning no more data can be received.

## Built-in Cap Function

The built-in cap function returns capacity of the channel. If the channel is unbuffered or nil, returns 0.

Example:
```jule
mut ch := make(chan int, 90)
println(cap(ch)) // 90
ch = make(chan int)
println(cap(ch)) // 0
ch = nil
println(cap(ch)) // 0
```
In the example above, the `cap` function returns `90` for the channel `ch`, because it is buffered channel with size `90`. Following calls returns zero because channel is unbuffered or nil.