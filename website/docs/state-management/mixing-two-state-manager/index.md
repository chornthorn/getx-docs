---
id: index
title: Mixing the two state manager
description: 'Introduction > Installation: Installation instructions for Redux and related packages'
hide_title: false
sidebar_label: Mixing Two State Manager
---

Some people opened a feature request, as they wanted to use only one type of reactive variable, and the other mechanics, and needed to insert an Obx into a GetBuilder for this. Thinking about it MixinBuilder was created. It allows both reactive changes by changing ".obs" variables, and mechanical updates via update(). However, of the 4 widgets he is the one that consumes the most resources, since in addition to having a Subscription to receive change events from his children, he subscribes to the update method of his controller.

Extending GetxController is important, as they have life cycles, and can "start" and "end" events in their onInit() and onClose() methods. You can use any class for this, but I strongly recommend you use the GetxController class to place your variables, whether they are observable or not.
