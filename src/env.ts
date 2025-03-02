type Envirorment = {
  PORT: string
}

export function getEnv<Key extends keyof Envirorment>(key: Key, fallback?: Envirorment[Key]) {
  const value = process.env[key] as Envirorment[Key] | undefined
  if (value === undefined) {
    if (fallback) {
      return fallback
    }
    throw new Error('missing envirorment varaible ' + key)
  }
  return value
}