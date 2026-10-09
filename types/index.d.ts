export type Theme = { fg?: string; accent?: string; muted?: string; urgent?: string }

declare module 'claude-code' {
  interface PluginState {
    'cache-tax': {
      theme: Theme | null
    }
  }
}
