---
sidebar_position: 8
title: Routes Middleware
hide_title: true
id: routes-middleware
slug: /state/routes-middleware
---
## Getx Routes Middleware 

`GetX package ` is provides a lot of utilities to make Flutter development faster and easier. One of its key features is the `middleware` system that allows developers to manage their app's routing and state management with ease. In this documentation, we'll be focusing on how to use the <u>GetX middleware for route management</u>.

- In the context of GetX, a middleware is a function that is executed before or after a route change. `Middleware` functions can be chained together, and each function has access to the current route and can modify it in some way.

- `Middleware` functions are defined using the `GetMiddleware` class. Here's an example of a simple middleware function that logs the current route:

```dart
class LoggingMiddleware extends GetMiddleware {
  @override
  Future<GetMiddleware?> redirectDelegate(GetMiddleware? middleware) async {
    print('Navigating to ${Get.currentRoute}');
    return middleware;
  }
}
```
In this example, the `redirectDelegate` function is overridden to log the current route before forwarding the request to the next `middleware` in the chain (or to the route handler if there are no more `middleware` functions).

### Adding Middleware
To add middleware to our app, we need to register it with the `GetMaterialApp` widget. Here's an example:

```dart 
void main() {
  runApp(GetMaterialApp(
    initialRoute: '/',
    defaultTransition: Transition.fade,
    getPages: [
      GetPage(name: '/', page: () => HomePage()),
      GetPage(name: '/details', page: () => DetailsPage()),
    ],
    routingCallback: (routing) {
      // Add middleware here
      routing.middlewares.addAll([LoggingMiddleware()]);
    },
  ));
}
```
In this example, we're adding the LoggingMiddleware to the list of `middlewares` in the `routingCallback` function. This function is called whenever a new route is pushed, and we can modify the routing object to `add` or `remove` middleware functions.

### Middleware Execution Order
By default, `middleware` functions are executed in the order they are added to the `middleware` list. However, we can also specify the order explicitly by setting the `priority` property of each `middleware` function. Here's an example:

```dart
class LoggingMiddleware extends GetMiddleware {
  LoggingMiddleware({required this.priority});

  final int priority;

  @override
  Future<GetMiddleware?> redirectDelegate(GetMiddleware? middleware) async {
    print('Navigating to ${Get.currentRoute}');
    return middleware;
  }
}

void main() {
  runApp(GetMaterialApp(
    initialRoute: '/',
    defaultTransition: Transition.fade,
    getPages: [
      GetPage(name: '/', page: () => HomePage()),
      GetPage(name: '/details', page: () => DetailsPage()),
    ],
    routingCallback: (routing) {
      // Add middleware here
      routing.middlewares.addAll([
        LoggingMiddleware(priority: 2),
        LoggingMiddleware(priority: 1),
      ]);
    },
  ));
}
```

In this example, we're adding two `middleware` functions with different priorities. The `middleware` with `priority 1` will be executed before the middleware with `priority 2`.

### Middleware Chaining
One of the key benefits of the GetX `middleware` system is its ability to chain `middleware` functions together. This means that each middleware function can modify the route or perform some other custom logic before passing the request on to the next `middleware` function in the chain.

Here's an example of a simple `middleware` function that validates user input:

```dart
class InputValidationMiddleware extends GetMiddleware {
  @override
  Future<GetMiddleware?> redirectDelegate(GetMiddleware? middleware) async {
    final args = Get.parameters;
    if (args['name'] == null) {
      // Redirect to an error page
      Get.offNamed('/error');
      return null;
    }
    return middleware;
  }
}
```

In this example, the `InputValidationMiddleware` checks for a required `parameter` in the route (name) and redirects to an error page if it's not present.

We can chain together multiple middleware functions by adding them to the middlewares list in the order we want them to be executed. Here's an example:

```dart
void main() {
  runApp(GetMaterialApp(
    initialRoute: '/',
    defaultTransition: Transition.fade,
    getPages: [
      GetPage(name: '/', page: () => HomePage()),
      GetPage(name: '/details/:id', page: () => DetailsPage()),
    ],
    routingCallback: (routing) {
      // Add middleware here
      routing.middlewares.addAll([
        InputValidationMiddleware(),
        LoggingMiddleware(),
      ]);
    },
  ));
}
```
In this example, the `InputValidationMiddleware` will be executed first, followed by the `LoggingMiddleware`. If the `InputValidationMiddleware` redirects to an error page, the `LoggingMiddleware` won't be executed.

### Middleware with Arguments
Sometimes we need to pass arguments to middleware functions to customize their behavior. For example, we might want to pass a callback function that's executed when the middleware function is finished.

Here's an example of a middleware function that takes an argument:

```dart 
class CallbackMiddleware extends GetMiddleware {
  CallbackMiddleware({required this.onComplete});

  final Function() onComplete;

  @override
  Future<GetMiddleware?> redirectDelegate(GetMiddleware? middleware) async {
    // Do some work here
    onComplete();
    return middleware;
  }
}
```

In this example, the `CallbackMiddleware` takes a `onComplete` argument, which is a callback function that's executed when the middleware function is finished.

We can pass arguments to middleware functions by creating an instance of the middleware class with the arguments we want to pass. Here's an example:

```dart
void main() {
  runApp(GetMaterialApp(
    initialRoute: '/',
    defaultTransition: Transition.fade,
    getPages: [
      GetPage(name: '/', page: () => HomePage()),
      GetPage(name: '/details/:id', page: () => DetailsPage()),
    ],
    routingCallback: (routing) {
      // Add middleware here
      routing.middlewares.addAll([
        CallbackMiddleware(onComplete: () {
          print('Middleware chain complete!');
        }),
      ]);
    },
  ));
}
```

In this example, we're creating an instance of the `CallbackMiddleware` class with a callback function that prints a message to the console.

