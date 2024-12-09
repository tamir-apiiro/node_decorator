export function CustomDecorator(params: { some_flag: boolean }) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        console.log(`Decorator invoked with:`, params);
        return originalMethod.apply(this, args);
      };
    };
  }
  