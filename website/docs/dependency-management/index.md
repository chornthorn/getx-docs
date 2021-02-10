---
id: index
title: Overview
description: 'Overview'
hide_title: true
---

# Dependency Management

Get has a simple and powerful dependency manager that allows you to retrieve the same class as your Bloc or Controller with just 1 lines of code, no Provider context, no inheritedWidget:

```js
Controller controller = Get.put(Controller()); // Rather Controller controller = Controller();
```

Instead of instantiating your class within the class you are using, you are instantiating it within the Get instance, which will make it available throughout your App.
So you can use your controller (or Bloc class) normally

- Note: If you are using Get's State Manager, pay more attention to the [Bindings](#bindings) api, which will make easier to connect your view to your controller.
- Note²: Get dependency management is decloupled from other parts of the package, so if for example your app is already using a state manager (any one, it doesn't matter), you don't need to change that, you can use this dependency injection manager with no problems at all



