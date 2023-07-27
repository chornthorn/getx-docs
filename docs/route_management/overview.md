---
sidebar_position: 1
title: Overview 📚
hide_title: true
id: overview
slug: /route/overview
sidebar_label: Overview 📚
---

## Overview

* Route management is the process of navigating between different screens or pages in a Flutter application. It involves defining the routes, passing arguments, handling transitions and animations, and managing the back stack of the screens. Route management is essential for creating a user-friendly and intuitive interface for your app.

* GetX simplifies route management by providing a set of methods and classes that allow you to navigate between screens without using context or MaterialApp. It also provides a variety of features such as transitions, animations, and arguments passing.
  
* GetX also supports middleware, which are functions that can intercept the navigation and perform some actions before or after the screen is shown.

## Setup 

* you need to change your `MaterialApp` widget to `GetMaterialApp` widget in your main.dart file. This will enable you to use Getx features throughout your app.

```dart
import 'package:get/get.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      getPages: getPages,
    );
  }
}
```

**Notice** that `GetMaterialApp` has two required parameters: `initialRoute` and `getPages`. The `initialRoute` is the `name` of the first screen that will be displayed when the app launches. The `getPages` is a list of `GetPage` objects that define the routes of your app.
