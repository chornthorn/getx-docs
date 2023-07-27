---
sidebar_position: 6
title: Dynamic Routes
hide_title: true
id: dynamic-routes
slug: /state/dynamic-routes
---

## Dynamic Routes
In some cases, you may want to create routes dynamically based on user input or data from a server. In Getx, you can create dynamic routes by defining a route that includes a wildcard parameter.

`Wildcard parameters` are defined using the '*' character. When a route with a `wildcard parameter` is navigated to, the value of the `wildcard parameter` is passed to the route as a `string`.

an example:

```dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'home_screen.dart';
import 'dynamic_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Getx Route Management Example',
      initialRoute: '/',
      getPages: [
        GetPage(
          name: '/',
          page: () => HomeScreen(),
        ),
        GetPage(
          name: '/dynamic/:itemId', // define a dynamic route with a wildcard parameter
          page: () => DynamicScreen(),
        ),
      ],
    );
  }
}
```

In this example, we're defining a dynamic route for the `DynamicScreen` widget. The route includes a wildcard `parameter` itemId that can be used to identify the item to be displayed on the screen.

To navigate to a dynamic route, you can use the `Get.toNamed()` method and include the `wildcard parameter` value as part of the URL. For example:

```dart
Get.toNamed('/dynamic/123');
```

This code will navigate to the `dynamic screen` with an `itemId` parameter of '123'.

To access the wildcard parameter value in the `DynamicScreen` widget, you can use the `Get.parameters` property. For example:

```dart
class DynamicScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final String itemId = Get.parameters['itemId']!;

    return Scaffold(
      appBar: AppBar(
        title: Text('Dynamic Screen'),
      ),
      body: Center(
        child: Text('Item ID: $itemId'),
      ),
    );
  }
}
```

In this code, we're using the `Get.parameters` property to access the `itemId` parameter that was passed in the route URL.