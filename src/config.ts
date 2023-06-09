export default interface Config {
  chat: {
    enable: boolean
    useAt: boolean
    useCommand: boolean
    system?: string
    proxy?: string
    apiKey: string
    basePath?: string
  }
  news: {
    enable: boolean
    vendor: string
  }
}
