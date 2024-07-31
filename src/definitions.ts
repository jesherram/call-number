export interface CallNumberPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
