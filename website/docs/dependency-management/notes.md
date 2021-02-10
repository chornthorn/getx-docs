---
id: notes
title: Notes
description: 'Overview'
hide_title: false
sidebar_label: Notes
---

- DO NOT USE SmartManagement.keepFactory if you are using multiple Bindings. It was designed to be used without Bindings, or with a single Binding linked in the GetMaterialApp's initialBinding.

- Using Bindings is completely optional, if you want you can use `Get.put()` and `Get.find()` on classes that use a given controller without any problem.
  However, if you work with Services or any other abstraction, I recommend using Bindings for a better organization.
