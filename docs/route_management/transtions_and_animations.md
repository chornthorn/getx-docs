---
sidebar_position: 4
title: Transitions and Animations
hide_title: true
id: transitions-and-animations
slug: /state/transitions-and-animations
---

## Transitions and Animations

One of the cool features of Getx is that it allows you to use transitions and animations when navigating between screens. You can choose from a variety of predefined transitions, such as fade, zoom, rotate, size, etc. You can also customize the duration and curve of the animation.

- To use transitions and animations with Getx, you need to add a `transition` property to your `GetPage` objects. You can also add a `duration` and a curve property to adjust the animation. For example:

```dart
final getPages = [
  GetPage(name: '/', page: () => HomeScreen()),
  GetPage(
    name: '/profile', // you can declare your route names in a separate file
    page: () => ProfileScreen(),
    transition: Transition.fade,
    duration: Duration(milliseconds: 500),
    curve: Curves.easeInOut,
  ),
  GetPage(
    name: '/settings',
    page: () => SettingsScreen(),
    transition: Transition.zoom,
    duration: Duration(milliseconds: 300),
    curve: Curves.bounceInOut,
  ),
];
```

Now, when you navigate to ProfileScreen or SettingsScreen, you will see the corresponding transition and animation.

- You can also add a default transition for all routes in your app by setting the `defaultTransition` parameter in the `GetMaterialApp` widget. Here's an example:

```dart 
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'home_screen.dart';
import 'detail_screen.dart';

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
      defaultTransition: Transition.rightToLeft, // set default transition
      getPages: [
        GetPage(
          name: '/',
          page: () => HomeScreen(),
        ),
        GetPage(
          name: '/detail',
          page: () => DetailScreen(),
        ),
      ],
    );
  }
}
```
In this example, we're setting the default transition to rightToLeft. This means that all route changes in the app will use this transition unless a different transition is explicitly specified for an individual route.