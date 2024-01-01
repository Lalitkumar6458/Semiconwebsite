import Image from 'next/image'
import HeroSec from './Components/HomeCom/HeroSec'
import ServicesSec from './Components/HomeCom/ServicesSec'
import AboutCom from './Components/HomeCom/AboutCom'
import CounterSec from './Components/HomeCom/CounterSec'
import WhyChooseSec from './Components/HomeCom/WhyChooseSec'
import ContactSec from './Components/HomeCom/ContactSec'
import PortfolioSec from './Components/HomeCom/PortfolioSec'
import TestimonialSec from './Components/HomeCom/testimonialSec'
import BrandSec from './Components/HomeCom/BrandSec'
export default function Home() {
  return (
    <main >
<div className=''>
<HeroSec/>
<ServicesSec/>
<AboutCom/>
<CounterSec/>
<WhyChooseSec/>
<PortfolioSec/>
<ContactSec/>
<TestimonialSec/>
<BrandSec/>
</div>
    </main>
  )
}
