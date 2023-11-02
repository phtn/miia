import { Button } from "@/components/ui/button"
import { TrophyIcon } from "../icons/custom-icons"
import { ActionContainer, BodyContainer, HeroContainer, HeroContent, HeroLabelContainer, HeroPrimary, HeroSecondary, Ornament, PrimaryLabel, SecondaryLabel } from "./styled"
import { ArrowDownCircleIcon } from "lucide-react"


type LandingProps = {
  scrollToFeature: () => void
}

type ActionProps = {
  onClick: () => void
}

const Landing = ({ scrollToFeature }: LandingProps) => {
  return (
    <BodyContainer>
      <Hero />
      <Action onClick={scrollToFeature} />
    </BodyContainer>
  )
}

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroPrimary>
          <HeroLabelContainer>
            <PrimaryLabel>Enter the Realm of</PrimaryLabel>
          </HeroLabelContainer>
        </HeroPrimary>
        <HeroSecondary>
          <Ornament>
            <TrophyIcon size={14} />
          </Ornament>
          <HeroLabelContainer>
            <SecondaryLabel>The Finest Privilege</SecondaryLabel>
          </HeroLabelContainer>

          <Ornament>
            <TrophyIcon size={14} />
          </Ornament>

        </HeroSecondary>
      </HeroContent>
    </HeroContainer>
  )
}

const Action = ({ onClick }: ActionProps) => {
  return (
    <ActionContainer>
      <Button variant='primary' size='fat' onClick={onClick}>
        <span className="text-accet pr-20"> Explore</span>
        <ArrowDownCircleIcon className="h-7 w-7 text-card" />
      </Button>
    </ActionContainer>
  )
}
export default Landing