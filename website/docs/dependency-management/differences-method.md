---
id: differences-method
title: Differences between methods
description: 'Overview'
hide_title: false
sidebar_label: Differences between methods
---

First, let's of the `fenix` of Get.lazyPut and the `permanent` of the other methods.

The fundamental difference between `permanent` and `fenix` is how you want to store your instances.

Reinforcing: by default, GetX deletes instances when they are not in use.
It means that: If screen 1 has controller 1 and screen 2 has controller 2 and you remove the first route from stack, (like if you use `Get.off()` or `Get.offNamed()`) the controller 1 lost its use so it will be erased.

But if you want to opt for using `permanent:true`, then the controller will not be lost in this transition - which is very useful for services that you want to keep alive throughout the entire application.

`fenix` in the other hand is for services that you don't worry in losing between screen changes, but when you need that service, you expect that it is alive. So basically, it will dispose the unused controller/service/class, but when you need it, it will "recreate from the ashes" a new instance.

Proceeding with the differences between methods:

- Get.put and Get.putAsync follows the same creation order, with the difference that the second uses an asynchronous method: those two methods creates and initializes the instance. That one is inserted directly in the memory, using the internal method `insert` with the parameters `permanent: false` and `isSingleton: true` (this isSingleton parameter only purpose is to tell if it is to use the dependency on `dependency` or if it is to use the dependency on `FcBuilderFunc`). After that, `Get.find()` is called that immediately initialize the instances that are on memory.

- Get.create: As the name implies, it will "create" your dependency! Similar to `Get.put()`, it also calls the internal method `insert` to instancing. But `permanent` became true and `isSingleton` became false (since we are "creating" our dependency, there is no way for it to be a singleton instace, that's why is false). And because it has `permanent: true`, we have by default the benefit of not losing it between screens! Also, `Get.find()` is not called immediately, it wait to be used in the screen to be called. It is created this way to make use of the parameter `permanent`, since then, worth noticing, `Get.create()` was made with the goal of create not shared instances, but don't get disposed, like for example a button in a listView, that you want a unique instance for that list - because of that, Get.create must be used together with GetWidget.

- Get.lazyPut: As the name implies, it is a lazy proccess. The instance is create, but it is not called to be used immediately, it remains waiting to be called. Contrary to the other methods, `insert` is not called here. Instead, the instance is inserted in another part of the memory, a part responsible to tell if the instance can be recreated or not, let's call it "factory". If we want to create something to be used later, it will not be mix with things been used right now. And here is where `fenix` magic enters: if you opt to leaving `fenix: false`, and your `smartManagement` are not `keepFactory`, then when using `Get.find` the instance will change the place in the memory from the "factory" to common instance memory area. Right after that, by default it is removed from the "factory". Now, if you opt for `fenix: true`, the instance continues to exist in this dedicated part, even going to the common area, to be called again in the future.
