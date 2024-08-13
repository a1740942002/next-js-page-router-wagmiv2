import '@xyfinance/widget/dist/index.css'
import { config } from '@/config/rainbowkit'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import dynamic from 'next/dynamic'

const queryClient = new QueryClient()

const Widget = dynamic(
  () => import('@xyfinance/widget').then((module) => module.Widget),
  {
    ssr: false
  }
)

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Widget />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
