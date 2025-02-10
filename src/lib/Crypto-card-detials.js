import { ref } from 'vue'
import btc from '@/assets/images/btc.svg'
import eth from '@/assets/images/eth.svg'
import ltc from '@/assets/images/ltc.svg'
import polka from '@/assets/images/polkadot.svg'
import sol from '@/assets/images/solana.svg'
import chainLink from '@/assets/images/chainlink.svg'

export const cards = ref([
    {
        title: 'Highest volume',
        cryptoLogo: btc,
        cryptoName: 'Bitcoin',
        cryptoPrice: '93,575.5',
    },
    {
        title: 'Top gainer',
        cryptoLogo: eth,
        cryptoName: 'Ehtereum',
        cryptoPrice: '3,337.28',
    },
    {
        title: 'New listing',
        cryptoLogo: ltc,
        cryptoName: 'Litecoin',
        cryptoPrice: '1,040.21',
    },
    {
        title: 'Most traded',
        cryptoLogo: polka,
        cryptoName: 'Polkadot',
        cryptoPrice: '6,575.5',
    },
    {
        title: 'Biggest gainers',
        cryptoLogo: sol,
        cryptoName: 'Solana',
        cryptoPrice: '189.53',
    },
    {
        title: 'Trending',
        cryptoLogo: chainLink,
        cryptoName: 'Chainlink',
        cryptoPrice: '19.991',
    },
])