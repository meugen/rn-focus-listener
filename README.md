# rn-focus-listener

Project example where React Native docs is wrong

According to the docs https://reactnative.dev/docs/appstate#addeventlistener method `addEventListener` returns `EventSubscription` with method `remove()` which should be used to remove listener. But actually it returns `undefined` and listener cannot be removed with it. To remove listener method `removeEventListener` https://reactnative.dev/docs/appstate#removeeventlistener should be used which is deprecated, but it works correctly.
