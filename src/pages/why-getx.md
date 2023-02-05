---
title: Why GetX?
description: Why GetX?
hide_table_of_contents: false
---

# Why Getx?

1- Many times after a Flutter update, many of your packages will break. Sometimes compilation errors happen, errors
often appear that there are still no answers about, and the developer needs to know where the error came from, track the
error, only then try to open an issue in the corresponding repository, and see its problem solved. Get centralizes the
main resources for development (State, dependency and route management), allowing you to add a single package to your
pubspec, and start working. After a Flutter update, the only thing you need to do is update the Get dependency, and get
to work. Get also resolves compatibility issues. How many times a version of a package is not compatible with the
version of another, because one uses a dependency in one version, and the other in another version? This is also not a
concern using Get, as everything is in the same package and is fully compatible.

2- Flutter is easy, Flutter is incredible, but Flutter still has some boilerplate that may be unwanted for most
developers, such as `Navigator.of(context).push (context, builder [...]`. Get simplifies development. Instead of writing
8 lines of code to just call a route, you can just do it: `Get.to(Home())` and you're done, you'll go to the next page.
Dynamic web urls are a really painful thing to do with Flutter currently, and that with GetX is stupidly simple.
Managing states in Flutter, and managing dependencies is also something that generates a lot of discussion, as there are
hundreds of patterns in the pub. But there is nothing as easy as adding a ".obs" at the end of your variable, and place
your widget inside an Obx, and that's it, all updates to that variable will be automatically updated on the screen.

3- Ease without worrying about performance. Flutter's performance is already amazing, but imagine that you use a state
manager, and a locator to distribute your blocs/stores/controllers/ etc. classes. You will have to manually call the
exclusion of that dependency when you don't need it. But have you ever thought of simply using your controller, and when
it was no longer being used by anyone, it would simply be deleted from memory? That's what GetX does. With
SmartManagement, everything that is not being used is deleted from memory, and you shouldn't have to worry about
anything but programming. You will be assured that you are consuming the minimum necessary resources, without even
having created a logic for this.

4- Actual decoupling. You may have heard the concept "separate the view from the business logic". This is not a
peculiarity of BLoC, MVC, MVVM, and any other standard on the market has this concept. However, this concept can often
be mitigated in Flutter due to the use of context.
If you need context to find an InheritedWidget, you need it in the view, or pass the context by parameter. I
particularly find this solution very ugly, and to work in teams we will always have a dependence on View's business
logic. Getx is unorthodox with the standard approach, and while it does not completely ban the use of StatefulWidgets,
InitState, etc., it always has a similar approach that can be cleaner. Controllers have life cycles, and when you need
to make an APIREST request for example, you don't depend on anything in the view. You can use onInit to initiate the
http call, and when the data arrives, the variables will be populated. As GetX is fully reactive (really, and works
under streams), once the items are filled, all widgets that use that variable will be automatically updated in the view.
This allows people with UI expertise to work only with widgets, and not have to send anything to business logic other
than user events (like clicking a button), while people working with business logic will be free to create and test the
business logic separately.
