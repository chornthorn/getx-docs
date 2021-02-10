---
id: binding
title: Bindings
description: 'Overview'
hide_title: false
sidebar_label: Bindings
---

One of the great differentials of this package, perhaps, is the possibility of full integration of the routes, state manager and dependency manager.
When a route is removed from the Stack, all controllers, variables, and instances of objects related to it are removed from memory. If you are using streams or timers, they will be closed automatically, and you don't have to worry about any of that.
In version 2.10 Get completely implemented the Bindings API.
Now you no longer need to use the init method. You don't even have to type your controllers if you don't want to. You can start your controllers and services in the appropriate place for that.
The Binding class is a class that will decouple dependency injection, while "binding" routes to the state manager and dependency manager.
This allows Get to know which screen is being displayed when a particular controller is used and to know where and how to dispose of it.
In addition, the Binding class will allow you to have SmartManager configuration control. You can configure the dependencies to be arranged when removing a route from the stack, or when the widget that used it is laid out, or neither. You will have intelligent dependency management working for you, but even so, you can configure it as you wish.

### Bindings class

- Create a class and implements Binding

```js
class HomeBinding implements Bindings {}
```

Your IDE will automatically ask you to override the "dependencies" method, and you just need to click on the lamp, override the method, and insert all the classes you are going to use on that route:

```js
class HomeBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(() => HomeController());
    Get.put<Service>(()=> Api());
  }
}

class DetailsBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<DetailsController>(() => DetailsController());
  }
}
```

Now you just need to inform your route, that you will use that binding to make the connection between route manager, dependencies and states.

- Using named routes:

```js
getPages: [
  GetPage(
    name: '/',
    page: () => HomeView(),
    binding: HomeBinding(),
  ),
  GetPage(
    name: '/details',
    page: () => DetailsView(),
    binding: DetailsBinding(),
  ),
];
```

- Using normal routes:

```js
Get.to(Home(), binding: HomeBinding());
Get.to(DetailsView(), binding: DetailsBinding())
```

There, you don't have to worry about memory management of your application anymore, Get will do it for you.

The Binding class is called when a route is called, you can create an "initialBinding in your GetMaterialApp to insert all the dependencies that will be created.

```js
GetMaterialApp(
  initialBinding: SampleBind(),
  home: Home(),
);
```

### BindingsBuilder

The default way of creating a binding is by creating a class that implements Bindings.
But alternatively, you can use `BindingsBuilder` callback so that you can simply use a function to instantiate whatever you desire.

Example:

```js
getPages: [
  GetPage(
    name: '/',
    page: () => HomeView(),
    binding: BindingsBuilder(() {
      Get.lazyPut<ControllerX>(() => ControllerX());
      Get.put<Service>(()=> Api());
    }),
  ),
  GetPage(
    name: '/details',
    page: () => DetailsView(),
    binding: BindingsBuilder(() {
      Get.lazyPut<DetailsController>(() => DetailsController());
    }),
  ),
];
```

That way you can avoid to create one Binding class for each route making this even simpler.

Both ways of doing work perfectly fine and we want you to use what most suit your tastes.

### SmartManagement

GetX by default disposes unused controllers from memory, even if a failure occurs and a widget that uses it is not properly disposed.
This is what is called the `full` mode of dependency management.
But if you want to change the way GetX controls the disposal of classes, you have `SmartManagement` class that you can set different behaviors.

#### How to change

If you want to change this config (which you usually don't need) this is the way:

```js
void main () {
  runApp(
    GetMaterialApp(
      smartManagement: SmartManagement.onlyBuilders //here
      home: Home(),
    )
  )
}
```

#### SmartManagement.full

It is the default one. Dispose classes that are not being used and were not set to be permanent. In the majority of the cases you will want to keep this config untouched. If you new to GetX then don't change this.

#### SmartManagement.onlyBuilders
With this option, only controllers started in `init:` or loaded into a Binding with `Get.lazyPut()` will be disposed.

If you use `Get.put()` or `Get.putAsync()` or any other approach, SmartManagement will not have permissions to exclude this dependency.

With the default behavior, even widgets instantiated with "Get.put" will be removed, unlike SmartManagement.onlyBuilders.

#### SmartManagement.keepFactory

Just like SmartManagement.full, it will remove it's dependencies when it's not being used anymore. However, it will keep their factory, which means it will recreate the dependency if you need that instance again.

### How bindings work under the hood
Bindings creates transitory factories, which are created the moment you click to go to another screen, and will be destroyed as soon as the screen-changing animation happens.
This happens so fast that the analyzer will not even be able to register it.
When you navigate to this screen again, a new temporary factory will be called, so this is preferable to using SmartManagement.keepFactory, but if you don't want to create Bindings, or want to keep all your dependencies on the same Binding, it will certainly help you.
Factories take up little memory, they don't hold instances, but a function with the "shape" of that class you want.
This has a very low cost in memory, but since the purpose of this lib is to get the maximum performance possible using the minimum resources, Get removes even the factories by default.
Use whichever is most convenient for you.
