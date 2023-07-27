---
sidebar_position: 7
title: Nesting Routes
hide_title: true
id: nesting-routes
slug: /state/nesting-routes
---

## Nesting Routes
In some cases, you may want to nest routes within other routes. For example, you might want to create a settings screen that has multiple sub-screens for different settings categories.

To nest routes in Getx, you can define a route as a `child` of another route using the `children` parameter of the `GetPage` class. Here's an example:

```dart 
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'home_screen.dart';
import 'settings_screen.dart';
import 'profile_screen.dart';
import 'notifications_screen.dart';

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
          name: '/settings',
          page: () => SettingsScreen(),
          children: [ // define nested routes
            GetPage(
              name: '/settings/profile',
              page: () => ProfileScreen(),
            ),
            GetPage(
              name: '/settings/notifications',
              page: () => NotificationsScreen(),
            ),
          ],
        ),
      ],
    );
  }
}
```

In this example, we're defining a `nested` route for the settings screen. The `SettingsScreen` widget has two `child` routes: ProfileScreen and `NotificationsScreen`.

To navigate to one of the `child` routes, you can use the `Get.toNamed()` method with the full URL path. For example, if you want to navigate to the `ProfileScreen`, you can use the following code:

```dart
Get.toNamed('/settings/profile');
```