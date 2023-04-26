export function throttle(fn: Function, delay: number) {
  delay || (delay = 100);
  var throttleTimeout: false | number = false;
  return function (this: any) {
    if (throttleTimeout) {
      return;
    }
    throttleTimeout = window.setTimeout(function (this: any) {
      fn.apply(this, arguments);
      throttleTimeout = false;
    }, delay);

    fn.apply(this, arguments);
  };
}
