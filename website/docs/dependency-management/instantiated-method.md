---
id: instantiated-method-class
title: Instantiated Method/Class
description: 'Overview'
hide_title: false
sidebar_label: Instantiated methods/classes
---

Imagine that you have navigated through numerous routes, and you need a data that was left behind in your controller, you would need a state manager combined with the Provider or Get_it, correct? Not with Get. You just need to ask Get to "find" for your controller, you don't need any additional dependencies:

```js
final controller = Get.find<Controller>();
// OR
Controller controller = Get.find();

// Yes, it looks like Magic, Get will find your controller, and will deliver it to you.
// You can have 1 million controllers instantiated, Get will always give you the right controller.
```

And then you will be able to recover your controller data that was obtained back there:

```js
Text(controller.textFromApi);
```

Since the returned value is a normal class, you can do anything you want:
```js
int count = Get.find<SharedPreferences>().getInt('counter');
print(count); // out: 12345
```

To remove an instance of Get:

```js
Get.delete<Controller>(); //usually you don't need to do this because GetX already delete unused controllers
```
