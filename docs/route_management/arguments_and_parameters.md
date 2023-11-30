---
sidebar_position: 5
title: Arguments and Parameters
hide_title: true
id: arguments-and-parameters
slug: /state/arguments-and-parameters
---
## Arguments and Parameters
Sometimes, you may want to pass some data or `arguments` from one screen to another. With Getx, you can do this easily using the `arguments` parameter of the navigation methods. For example:

```dart
// Navigate to ProfileScreen and pass a user object as an argument
Get.to(ProfileScreen(), arguments: user);

// Navigate to ProfileScreen using route name and pass a user object as an argument
Get.toNamed(Routes.profile, arguments: user);

```
To access the `arguments` in the destination screen, you can use the `Get.arguments` property. For example:

```dart
// ProfileScreen.dart

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Get the user object from the arguments
    final user = Get.arguments;

    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: Center(
        child: Text('Hello ${user.name}'),
      ),
    );
  }
}
```
Alternatively, you can also use named `parameters` to pass data between screens. To do this, you need to add a `parameters` property to your `GetPage` objects. The parameters is a map of strings that contains the key-value pairs of the data. For example:

```dart
final getPages = [
  GetPage(name: '/', page: () => HomeScreen()),
  GetPage(
    name: '/profile/:id/:name',
    page: () => ProfileScreen(),
    parameters: {'id': '123', 'name': 'John'},
  ),
];
```

To access the `parameters` in the destination screen, you can use the `Get.parameters` property. For example:

```dart
// ProfileScreen.dart

class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Get the id and name from the parameters
    final id = Get.parameters['id'];
    final name = Get.parameters['name'];

    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: Center(
        child: Text('Hello $name, your id is $id'),
      ),
    );
  }
}

```