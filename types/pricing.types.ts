export interface IPricingConfig {
  name: string
  key: string
  price: string
  priceSuffix?: string
  tagline: string
  features: string[]
  subscribeUrl: string
  button?: React.ReactNode
}
