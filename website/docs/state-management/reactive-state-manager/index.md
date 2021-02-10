---
id: index
title: Reactive State Manager
description: 'Introduction > Installation: Installation instructions for Redux and related packages'
hide_title: false
---

Reactive programming can alienate many people because it is said to be complicated. GetX turns reactive programming into something quite simple:

* You won't need to create StreamControllers.
* You won't need to create a StreamBuilder for each variable
* You will not need to create a class for each state.
* You will not need to create a get for an initial value.

Reactive programming with Get is as easy as using setState.

Let's imagine that you have a name variable and want that every time you change it, all widgets that use it are automatically changed.

This is your count variable:

``` js
var name = 'Jonatas Borges';
```

To make it observable, you just need to add ".obs" to the end of it:

``` js
var name = 'Jonatas Borges'.obs;
```

That's all. It's *that* simple.

From now on, we might refer to this reactive-".obs"(ervables) variables as _Rx_.

What did we do under the hood? We created a `Stream` of `String` s, assigned the initial value `"Jonatas Borges"` , we notified all widgets that use `"Jonatas Borges"` that they now "belong" to this variable, and when the _Rx_ value changes, they will have to change as well.

This is the **magic of GetX**, thanks to Dart's capabilities.

But, as we know, a `Widget` can only be changed if it is inside a function, because static classes do not have the power to "auto-change".

You will need to create a `StreamBuilder` , subscribe to this variable to listen for changes, and create a "cascade" of nested `StreamBuilder` if you want to change several variables in the same scope, right?

No, you don't need a `StreamBuilder` , but you are right about static classes.

Well, in the view, we usually have a lot of boilerplate when we want to change a specific Widget, that's the Flutter way.
With **GetX** you can also forget about this boilerplate code.

`StreamBuilder( … )` ? `initialValue: …` ? `builder: …` ? Nope, you just need to place this variable inside an `Obx()` Widget.

``` js
Obx (() => Text (controller.name));
```

_What do you need to memorize?_  Only `Obx(() =>` .

You are just passing that Widget through an arrow-function into an `Obx()` (the "Observer" of the _Rx_).

`Obx` is pretty smart, and will only change if the value of `controller.name` changes.

If `name` is `"John"` , and you change it to `"John"` ( `name.value = "John"` ), as it's the same `value` as before, nothing will change on the screen, and `Obx` , to save resources, will simply ignore the new value and not rebuild the Widget. **Isn't that amazing?**

> So, what if I have 5 _Rx_ (observable) variables within an `Obx` ?

It will just update when **any** of them changes.

> And if I have 30 variables in a class, when I update one, will it update **all** the variables that are in that class?

Nope, just the **specific Widget** that uses that _Rx_ variable.

So, **GetX** only updates the screen, when the _Rx_ variable changes it's value.

``` 

final isOpen = false.obs;

// NOTHING will happen... same value.
void onButtonTap() => isOpen.value=false;
```

### Advantages

**GetX()** helps you when you need **granular** control over what's being updated.

If you do not need `unique IDs` , because all your variables will be modified when you perform an action, then use `GetBuilder` ,
because it's a Simple State Updater (in blocks, like `setState()` ), made in just a few lines of code.
It was made simple, to have the least CPU impact, and just to fulfill a single purpose (a _State_ rebuild) and spend the minimum resources possible.

If you need a **powerful** State Manager, you can't go wrong with **GetX**.

It doesn't work with variables, but __flows__, everything in it are `Streams` under the hood.

You can use _rxDart_ in conjunction with it, because everything are `Streams`,
you can listen to the `event` of each "_Rx_ variable",
because everything in it are `Streams`.

It is literally a _BLoC_ approach, easier than _MobX_, and without code generators or decorations.
You can turn **anything** into an _"Observable"_ with just a `.obs` .

### Maximum performance:

In addition to having a smart algorithm for minimal rebuilds, **GetX** uses comparators
to make sure the State has changed.

If you experience any errors in your app, and send a duplicate change of State,
**GetX** will ensure it will not crash.

With **GetX** the State only changes if the `value` change.
That's the main difference between **GetX**, and using _ `computed` from MobX_.
When joining two __observables__, and one changes; the listener of that _observable_ will change as well.

With **GetX**, if you join two variables, `GetX()` (similar to `Observer()` ) will only rebuild if it implies a real change of State.

### Declaring a reactive variable

You have 3 ways to turn a variable into an "observable".

1 - The first is using **`Rx{Type}`**.

``` js
// initial value is recommended, but not mandatory
final name = RxString('');
final isLogged = RxBool(false);
final count = RxInt(0);
final balance = RxDouble(0.0);
final items = RxList<String>([]);
final myMap = RxMap<String, int>({});
```

2 - The second is to use **`Rx`** and use Darts Generics, `Rx<Type>`

``` js
final name = Rx<String>('');
final isLogged = Rx<Bool>(false);
final count = Rx<Int>(0);
final balance = Rx<Double>(0.0);
final number = Rx<Num>(0)
final items = Rx<List<String>>([]);
final myMap = Rx<Map<String, int>>({});

// Custom classes - it can be any class, literally
final user = Rx<User>();
```

3 - The third, more practical, easier and preferred approach, just add **`.obs`** as a property of your `value` :

``` js
final name = ''.obs;
final isLogged = false.obs;
final count = 0.obs;
final balance = 0.0.obs;
final number = 0.obs;
final items = <String>[].obs;
final myMap = <String, int>{}.obs;

// Custom classes - it can be any class, literally
final user = User().obs;
```

##### Having a reactive state, is easy.

As we know, _Dart_ is now heading towards _null safety_.
To be prepared, from now on, you should always start your _Rx_ variables with an **initial value**.

> Transforming a variable into an _observable_ + _initial value_ with **GetX** is the simplest, and most practical approach.

You will literally add a " `.obs` " to the end of your variable, and **that’s it**, you’ve made it observable,
and its `.value` , well, will be the _initial value_).

### Using the values in the view

``` js
// controller file
final count1 = 0.obs;
final count2 = 0.obs;
int get sum => count1.value + count2.value;
```

``` js
// view file
GetX<Controller>(
  builder: (controller) {
    print("count 1 rebuild");
    return Text('${controller.count1.value}');
  },
),
GetX<Controller>(
  builder: (controller) {
    print("count 2 rebuild");
    return Text('${controller.count2.value}');
  },
),
GetX<Controller>(
  builder: (controller) {
    print("count 3 rebuild");
    return Text('${controller.sum}');
  },
),
```

If we increment `count1.value++` , it will print:

* `count 1 rebuild`

* `count 3 rebuild`

because `count1` has a value of `1` , and `1 + 0 = 1` , changing the `sum` getter value.

If we change `count2.value++` , it will print:

* `count 2 rebuild`

* `count 3 rebuild`

because `count2.value` changed, and the result of the `sum` is now `2` .

* NOTE: By default, the very first event will rebuild the widget, even if it is the same `value`.

This behavior exists due to Boolean variables.

Imagine you did this:

``` js
var isLogged = false.obs;
```

And then, you checked if a user is "logged in" to trigger an event in `ever` .

``` js
@override
onInit(){
  ever(isLogged, fireRoute);
  isLogged.value = await Preferences.hasToken();
}

fireRoute(logged) {
  if (logged) {
   Get.off(Home());
  } else {
   Get.off(Login());
  }
}
```

if `hasToken` was `false` , there would be no change to `isLogged` , so `ever()` would never be called.
To avoid this type of behavior, the first change to an _observable_ will always trigger an event,
even if it contains the same `.value` .

You can remove this behavior if you want, using:
`isLogged.firstRebuild = false;`

### Conditions to rebuild

In addition, Get provides refined state control. You can condition an event (such as adding an object to a list), on a certain condition.

``` js
// First parameter: condition, must return true or false.
// Second parameter: the new value to apply if the condition is true.
list.addIf(item < limit, item);
```

Without decorations, without a code generator, without complications :smile:

Do you know Flutter's counter app? Your Controller class might look like this:

``` js
class CountController extends GetxController {
  final count = 0.obs;
}
```

With a simple:

``` js
controller.count.value++
```

You could update the counter variable in your UI, regardless of where it is stored.

### Where .obs can be used

You can transform anything on obs. Here are two ways of doing it:

* You can convert your class values to obs

``` js
class RxUser {
  final name = "Camila".obs;
  final age = 18.obs;
}
```

* or you can convert the entire class to be an observable

``` js
class User {
  User({String name, int age});
  var name;
  var age;
}

// when instantianting:
final user = User(name: "Camila", age: 18).obs;
```

### Note about Lists

Lists are completely observable as are the objects within it. That way, if you add a value to a list, it will automatically rebuild the widgets that use it.

You also don't need to use ".value" with lists, the amazing dart api allowed us to remove that.
Unfortunaly primitive types like String and int cannot be extended, making the use of .value mandatory, but that won't be a problem if you work with gets and setters for these.

``` js
// On the controller
final String title = 'User Info:'.obs
final list = List<User>().obs;

// on the view
Text(controller.title.value), // String need to have .value in front of it
ListView.builder (
  itemCount: controller.list.length // lists don't need it
)
```

When you are making your own classes observable, there is a different way to update them:

``` js
// on the model file
// we are going to make the entire class observable instead of each attribute
class User() {
  User({this.name = '', this.age = 0});
  String name;
  int age;
}

// on the controller file
final user = User().obs;
// when you need to update the user variable:
user.update( (user) { // this parameter is the class itself that you want to update
user.name = 'Jonny';
user.age = 18;
});
// an alternative way of update the user variable:
user(User(name: 'João', age: 35));

// on view:
Obx(()=> Text("Name ${user.value.name}: Age: ${user.value.age}"))
// you can also access the model values without the .value:
user().name; // notice that is the user variable, not the class (variable has lowercase u)
```

You don't have to work with sets if you don't want to. you can use the "assign 'and" assignAll "api.
The "assign" api will clear your list, and add a single object that you want to start there.
The "assignAll" api will clear the existing list and add any iterable objects that you inject into it.

### Why i have to use .value

We could remove the obligation to use 'value' to `String` and `int` with a simple decoration and code generator, but the purpose of this library is precisely avoid external dependencies. We want to offer an environment ready for programming, involving the essentials (management of routes, dependencies and states), in a simple, lightweight and performant way, without a need of an external package.

You can literally add 3 letters to your pubspec (get) and a colon and start programming. All solutions included by default, from route management to state management, aim at ease, productivity and performance.

The total weight of this library is less than that of a single state manager, even though it is a complete solution, and that is what you must understand.

If you are bothered by `.value` , and like a code generator, MobX is a great alternative, and you can use it in conjunction with Get. For those who want to add a single dependency in pubspec and start programming without worrying about the version of a package being incompatible with another, or if the error of a state update is coming from the state manager or dependency, or still, do not want to worrying about the availability of controllers, whether literally "just programming", get is just perfect.

If you have no problem with the MobX code generator, or have no problem with the BLoC boilerplate, you can simply use Get for routes, and forget that it has state manager. Get SEM and RSM were born out of necessity, my company had a project with more than 90 controllers, and the code generator simply took more than 30 minutes to complete its tasks after a Flutter Clean on a reasonably good machine, if your project it has 5, 10, 15 controllers, any state manager will supply you well. If you have an absurdly large project, and code generator is a problem for you, you have been awarded this solution.

Obviously, if someone wants to contribute to the project and create a code generator, or something similar, I will link in this readme as an alternative, my need is not the need for all devs, but for now I say, there are good solutions that already do that, like MobX.

### Obx()

Typing in Get using Bindings is unnecessary. you can use the Obx widget instead of GetX which only receives the anonymous function that creates a widget.
Obviously, if you don't use a type, you will need to have an instance of your controller to use the variables, or use `Get.find<Controller>()` .value or Controller.to.value to retrieve the value.

### Workers

Workers will assist you, triggering specific callbacks when an event occurs.

``` js
/// Called every time `count1` changes.
ever(count1, (_) => print("$_ has been changed"));

/// Called only first time the variable $_ is changed
once(count1, (_) => print("$_ was changed once"));

/// Anti DDos - Called every time the user stops typing for 1 second, for example.
debounce(count1, (_) => print("debouce$_"), time: Duration(seconds: 1));

/// Ignore all changes within 1 second.
interval(count1, (_) => print("interval $_"), time: Duration(seconds: 1));
```

All workers (except `debounce` ) have a `condition` named parameter, which can be a `bool` or a callback that returns a `bool` .
This `condition` defines when the `callback` function executes.

All workers returns a `Worker` instance, that you can use to cancel ( via `dispose()` ) the worker.


* **`ever`**

is called every time the _Rx_ variable emits a new value.

* **`everAll`**

Much like `ever` , but it takes a `List` of _Rx_ values Called every time its variable is changed. That's it.

* **`once`**

'once' is called only the first time the variable has been changed.

* **`debounce`**

'debounce' is very useful in search functions, where you only want the API to be called when the user finishes typing. If the user types "Jonny", you will have 5 searches in the APIs, by the letter J, o, n, n, and y. With Get this does not happen, because you will have a "debounce" Worker that will only be triggered at the end of typing.

* **`interval`**

'interval' is different from the debouce. debouce if the user makes 1000 changes to a variable within 1 second, he will send only the last one after the stipulated timer (the default is 800 milliseconds). Interval will instead ignore all user actions for the stipulated period. If you send events for 1 minute, 1000 per second, debounce will only send you the last one, when the user stops strafing events. interval will deliver events every second, and if set to 3 seconds, it will deliver 20 events that minute. This is recommended to avoid abuse, in functions where the user can quickly click on something and get some advantage (imagine that the user can earn coins by clicking on something, if he clicked 300 times in the same minute, he would have 300 coins, using interval, you you can set a time frame for 3 seconds, and even then clicking 300 or a thousand times, the maximum he would get in 1 minute would be 20 coins, clicking 300 or 1 million times). The debounce is suitable for anti-DDos, for functions like search where each change to onChange would cause a query to your api. Debounce will wait for the user to stop typing the name, to make the request. If it were used in the coin scenario mentioned above, the user would only win 1 coin, because it is only executed, when the user "pauses" for the established time.

* NOTE: Workers should always be used when starting a Controller or Class, so it should always be on onInit (recommended), Class constructor, or the initState of a StatefulWidget (this practice is not recommended in most cases, but it shouldn't have any side effects).
