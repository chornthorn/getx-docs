---
sidebar_position: 2
title: Routes Declaration
hide_title: true
id: routes-declaration
slug: /state/routes-declaration
---

## Routes Declaration

To declare your routes using Getx, you need to create a list of `GetPage` objects and assign it to the `getPages` parameter of `GetMaterialApp`. Each `GetPage` object has a name and a page property. The name is a `string` that identifies the route, and the `page` is a function that returns the widget of the screen.

For example, if you have three screens in your app:
1. HomeScreen
2. ProfileScreen
3. SettingsScreen
- you can declare your routes like this:

```dart
final getPages = [
  GetPage(name: '/', page: () => HomeScreen()),
  GetPage(name: '/profile', page: () => ProfileScreen()),
  GetPage(name: '/settings', page: () => SettingsScreen()),
];
```
You can also create a separate file for your route names and use constants instead of strings. For example:

```dart
// routes.dart

class Routes {
  static const home = '/';
  static const profile = '/profile';
  static const settings = '/settings';
}
```

```dart
// main.dart
import 'package:get/get.dart';
import 'package:my_app/routes.dart';

final getPages = [
  GetPage(name: Routes.home, page: () => HomeScreen()),
  GetPage(name: Routes.profile, page: () => ProfileScreen()),
  GetPage(name: Routes.settings, page: () => SettingsScreen()),
];
```
This way, you can avoid typos and make your code more readable.

