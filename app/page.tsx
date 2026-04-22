import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { HomeClient } from "@/components/corporate/home-client"
import { getPayloadClient } from "@/lib/payload"

export default async function Home() {
  const payload = await getPayloadClient()

  let homepage = await payload.findGlobal({ slug: 'homepage' })

  if (!homepage) {
    homepage = await payload.updateGlobal({
      slug: 'homepage',
      data: {
        hero: {
          category: 'Smart Agriculture',
          title: 'Future of Farming',
          description:
            'VerdaAgro combines precision engineering with biological insights. Maximize yields with autonomous drone fleets and IoT sensor networks.',
          buttonText: 'Explore Solutions',
          buttonLink: '/solutions/agro',
          typeColor: '#71A58D',
        },
        about: {
          title: 'Building a Global UAV Ecosystem',
          description:
            'Swiss precision built on years of UAV expertise. Full-cycle drone manufacturing for agriculture, defense, and emergency response.',
          buttonText: 'Read About Us',
        },
      },
    })
  }

  return (
    <>
      <Header />
      <HomeClient payloadHero={homepage?.hero} payloadAbout={homepage?.about} />
      <Footer />
    </>
  )
}
