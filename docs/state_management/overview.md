---
sidebar_position: 1
title: Overview 📚
hide_title: true
id: overview
slug: /state/overview
sidebar_label: Overview 📚
---

## State Management

GetX does not use Streams or ChangeNotifier like other state managers. Why? In addition to building applications for android, iOS, web, windows, macos and linux, with GetX you can build server applications with the same syntax as Flutter/GetX. In order to improve response time and reduce RAM consumption, we created GetValue and GetStream, which are low latency solutions that deliver a lot of performance, at a low operating cost. We use this base to build all of our resources, including state management.

- _Complexity_: Some state managers are complex and have a lot of boilerplate. With GetX you don't have to define a class for each event, the code is highly clean and clear, and you do a lot more by writing less. Many people have given up on Flutter because of this topic, and they now finally have a stupidly simple solution for managing states.
- _No code generators_: You spend half your development time writing your application logic. Some state managers rely on code generators to have minimally readable code. Changing a variable and having to run build_runner can be unproductive, and often the waiting time after a flutter clean will be long, and you will have to drink a lot of coffee.

With GetX everything is reactive, and nothing depends on code generators, increasing your productivity in all aspects of your development.

- _It does not depend on context_: You probably already needed to send the context of your view to a controller, making the View's coupling with your business logic high. You have probably had to use a dependency for a place that has no context, and had to pass the context through various classes and functions. This just doesn't exist with GetX. You have access to your controllers from within your controllers without any context. You don't need to send the context by parameter for literally nothing.
- _Granular control_: most state managers are based on ChangeNotifier. ChangeNotifier will notify all widgets that depend on it when notifyListeners is called. If you have 40 widgets on one screen, which have a variable of your ChangeNotifier class, when you update one, all of them will be rebuilt.

With GetX, even nested widgets are respected. If you have Obx watching your ListView, and another watching a checkbox inside the ListView, when changing the CheckBox value, only it will be updated, when changing the List value, only the ListView will be updated.

- _It only reconstructs if its variable REALLY changes_: GetX has flow control, that means if you display a Text with 'Paola', if you change the observable variable to 'Paola' again, the widget will not be reconstructed. That's because GetX knows that 'Paola' is already being displayed in Text, and will not do unnecessary reconstructions.

Most (if not all) current state managers will rebuild on the screen.
