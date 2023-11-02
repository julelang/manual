# Writing Tests

Many modern programming languages ​​have a built-in design that allows writing test algorithms. Jule is one of them. With Jule, you can use your compiler to build for testing, write and debug code specifically for test assemblies.

Jule provides functionality for this in the compiler, language design and standard library. This section describes how to use them competently and effectively.

## Test Functions

Test functions are functions for testing your code. They must be declared a certain way, otherwise you will get a compilation error. You cannot call test functions and return values. The function must take as a parameter a smart pointer to the `T` structure provided by `std::testing`.

Additionally, a test function must be declared unambiguously with the `test` directive. Without a directive, the function is not treated as a test function and is treated as a normal function. Test functions are only included in test compilations and are not included in the intermediate representation of the program in normal compilations.

For example to write test function:
```jule
#test
fn my_test(t: &T) {
    // ...
}
```

### Using T Structure

The `T` structure provided by [`std::testing`](/std/testing) is given as an argument to the function at runtime for each of your tests. You don't need to think anything about this. Using this structure effectively can help you write good, descriptive tests.

The `T` structure allows you to set whether the test fails or is skipped while running your test, and provides error logging if you wish.

For example:
```jule
use std::math::{PI}
use std::testing::{T}

fn get_pi(): f64 {
    ret 3.14
}

#test
fn test_pi(t: &T) {
    if get_pi() != PI {
        t.errorf("PI is not precise enough")
    }
}

fn main() {
    outln(get_pi())
}
```

The test in the code above will produce an error, it does this with a special error message. When there are more different situations, these logs may contain useful information for you.

Successful completion of a test means that it is not failed or skipped. Any function of the `T` structure will not stop the execution of your test. Therefore, you can use `ret` to stop execution when you skip the test or in case of any failure.

If you call the `skip` method, you have skipped the test. If you perform any action indicating an error, such as calling the `errorf` or `fail` methods, set the status of the test to fail.

## Test Files

It is recommended to write test functions in separate files. This makes it easier to maintain your code. In addition, since your test functions will not be included in the compilations other than your test compilations, your compilation costs will be reduced and you will achieve faster code compilation time and resource usage.

You can use the `build` directive to do this. It will be more effective to declare that your test files are a test file by ending them with `_test.jule`. But this does not affect the compiler, it is just a naming approach to make it easier for developers to maintain. Use the `#build test` directive so that your test files are only included in test compilations. In test defines the `test` variable is defined so that you only include your test functions in test compilations.

## Running Tests

Just use your usual build command to run the tests. Just add `test` at the beginning. This indicates that you are compiling your code for testing, and your compiler compiles your code for testing.

In test compilations, your code does not call the entry point. It executes test functions and runs your tests respectively when executed.

Outputs appear in your test codes such as `out` or `outln` calls. Panics and built-in assert statements are not caught. In other words, in case of any panic, your tests will fail and the program will terminate as in every panic call.

For example to test compilation:
```
julec test .
```

The tests are not executed automatically, so the executable must be executed manually. Only tests that are included in your program's main package will be executed, not all tests contained in your program. All necessary `init` functions are called, but your program runs and terminates from an entry point specifically created for the compilation, not from your entry point.

### Modules and Sub-Packages

Modules are important for tests. Their most important contribution in this regard is to make it possible to test subpackages. It is difficult for you to test subpackages without modules. Because when you try to test a subpackage, if there is any import, you will have problems, your program does not know where your main package is. Therefore, having a module in your main package will make testing its sub-packages easier and more possible.

Any sub-package does not have to contain entry points when testing. Test mode eliminates the need for an entry point, the program uses a unique testing entry point. Therefore, you can test subpackages in the same way. But pay attention to the module requirement.
