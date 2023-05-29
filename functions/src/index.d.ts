type VueRef<T> = import("vue").WritableComputedRef<T> | import("vue").Ref<T>;

type AppStatus = 'NONE' | 'SUCCESS' | 'DANGER' | 'WARNING';

interface Area {
  name: string;
  value: number;
}

interface Gender {
  name: string;
  value: number;
}
