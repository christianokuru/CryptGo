import { ref } from 'vue'
import btc from '@/assets/images/btc.svg'
import eth from '@/assets/images/eth.svg'
import ltc from '@/assets/images/ltc.svg'
import polka from '@/assets/images/polkadot.svg'
import arrow from '@/assets/images/arrow-up.svg'

export const portfolio = ref([
    {
        cryptoIcon: btc,
        cryptoName: 'Bitcoin',
        cryptoPair: 'BTC/USD',
        cryptoPercentValue: '1.05',
        upOrDownIcon: arrow,
    },
    {
        
        cryptoIcon: eth,
        cryptoName: 'Ethereum',
        cryptoPair: 'ETH/USD',
        cryptoPercentValue: '1.05',
        upOrDownIcon: arrow,
    },
    {
        
        cryptoIcon: ltc,
        cryptoName: 'Litecoin',
        cryptoPair: 'LTC/USD',
        cryptoPercentValue: '1.05',
        upOrDownIcon: arrow,
    },
    {
        
        cryptoIcon: polka,
        cryptoName: 'Polkadot',
        cryptoPair: 'DOT/USD',
        cryptoPercentValue: '1.05',
        upOrDownIcon: arrow,
    }
])