# Thread Pool

Jule uses operating-system threads for concurrent execution. Since creating and managing threads is relatively expensive, the runtime provides a global thread pool for executing background tasks without requiring a new thread for every operation.

Tasks can be submitted to the pool through `runtime::Task`. The runtime manages the underlying worker threads and schedules submitted tasks for execution.
This mechanism is intended for operations that require a dedicated operating-system thread, particularly blocking or synchronous work that should not interfere with other concurrent execution.

For example:
````jule
runtime::Task(fn() {
	// Blocking or synchronous work.
})
````