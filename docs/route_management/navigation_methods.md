---
sidebar_position: 3
title: Navigation Methods
hide_title: true
id: navigation-methods
slug: /state/navigation-methods
---

## Navigation Methods
To navigate between screens using Getx, you can use the following methods:
- `Get.to()` : This method pushes a new screen to the navigation stack and displays it. You can pass the widget of the screen or the name of the route as an argument. For example:

```dart
// Navigate to ProfileScreen using widget
Get.to(ProfileScreen());

// Navigate to ProfileScreen using route name
Get.toNamed(Routes.profile); // the route name is a string
```

- `Get.off()` : This method pushes a new screen to the navigation stack and removes the previous one. This is useful when you don’t want the user to go back to the previous screen. For example:

```dart
// Navigate to HomeScreen from LoginScreen and remove LoginScreen from stack
Get.off(HomeScreen());

// Navigate to HomeScreen from LoginScreen using route name and remove LoginScreen from stack
Get.offNamed(Routes.home);
```
- `Get.offAll()` : This method pushes a new screen to the navigation stack and removes all the previous ones. This is useful when you want to clear the entire navigation history and start a new flow. For example:

```dart
// Navigate to HomeScreen from any screen and remove all previous screens from stack
Get.offAll(HomeScreen());

// Navigate to HomeScreen from any screen using route name and remove all previous screens from stack
Get.offAllNamed(Routes.home);

```

- `Get.back()` : This method pops the current screen from the navigation stack and returns to the previous one. You can also pass a result as an argument, which will be returned to the previous screen. For example:
  
```dart
  // Go back to the previous screen
Get.back();

// Go back to the previous screen and pass a result
Get.back(result: 'Hello');

```
- Here are all the GetX routes compared with flutter routes.

| GetX                  | Flutter                               |
| :-------------------- | :------------------------------------ |
| `Get.to()`            | `Navigator.push()`                    |
| `Get.toNamed()`       | `Navigator.pushNamed()`               |
| `Get.back()`          | `Navigator.pop(context)`              |
| `Get.off()`           | `Navigator.pushReplacement()`         |
| `Get.offNamed()`      | `Navigator.pushReplacementNamed()`    |
| `Get.offUntil()`      | `Navigator.pushAndRemoveUntil()`      |
| `Get.offNamedUntil()` | `Navigator.pushNamedAndRemoveUntil()` |
| `Get.offAndToNamed()` | `Navigator.popAndPushNamed()`         |
| `Get.removeRoute()`   | `Navigator.removeRoutes()`            |
| `Get.offAllNamed()`   | `Navigator.pushNamedAndRemoveUntil()` |
| `Get.close()`         | `Navigator.popUntil()`                |


